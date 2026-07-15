import { BigInt, ethereum } from "@graphprotocol/graph-ts";
import {
  ENSGovernor,
  ProposalCanceled,
  ProposalCreated,
  ProposalExecuted,
  ProposalQueued,
  VoteCast,
} from "../generated/ENSGovernor/ENSGovernor";
import {
  User,
  Vote,
  Proposal,
  Organization,
  OpenProposals,
} from "../generated/schema";
import { getProposalId } from "./proposals";
const daoName = "ens.eth";

// Governor.state() return values (OpenZeppelin ProposalState enum)
const STATES = [
  "Pending",
  "Active",
  "Canceled",
  "Defeated",
  "Succeeded",
  "Queued",
  "Expired",
  "Executed",
];

function isTerminalState(state: i32): boolean {
  // Canceled, Defeated, Expired, Executed
  return state == 2 || state == 3 || state == 6 || state == 7;
}

function loadOpenProposals(): OpenProposals {
  let open = OpenProposals.load(daoName);
  if (open == null) {
    open = new OpenProposals(daoName);
    open.proposalIds = [];
  }
  return open;
}

function trackProposal(proposalId: BigInt): void {
  let open = loadOpenProposals();
  let ids = open.proposalIds;
  ids.push(proposalId);
  open.proposalIds = ids;
  open.save();
}

function untrackProposal(proposalId: BigInt): void {
  let open = OpenProposals.load(daoName);
  if (open == null) return;
  let ids = open.proposalIds;
  let remaining: BigInt[] = [];
  for (let i = 0; i < ids.length; i++) {
    if (ids[i].notEqual(proposalId)) remaining.push(ids[i]);
  }
  open.proposalIds = remaining;
  open.save();
}

// Defeated/Expired are computed states in the Governor: no event or tx ever
// marks them, so proposals past their voting deadline are resolved here by
// asking the contract, piggybacking on whatever event arrives next.
function resolveEndedProposals(event: ethereum.Event): void {
  let open = OpenProposals.load(daoName);
  if (open == null) return;
  let ids = open.proposalIds;
  if (ids.length == 0) return;

  let governor = ENSGovernor.bind(event.address);
  let stillOpen: BigInt[] = [];

  for (let i = 0; i < ids.length; i++) {
    let proposal = Proposal.load(getProposalId(daoName, ids[i]));
    if (proposal == null) continue;

    let endBlock = proposal.endBlock;
    if (!endBlock) {
      stillOpen.push(ids[i]);
      continue;
    }
    if (event.block.number.le(endBlock!)) {
      stillOpen.push(ids[i]);
      continue;
    }

    let stateResult = governor.try_state(ids[i]);
    if (stateResult.reverted) {
      stillOpen.push(ids[i]);
      continue;
    }

    let state = stateResult.value;
    let status = STATES[state];
    if (proposal.status != status) {
      proposal.status = status;
      proposal.timestamp = event.block.timestamp;
      proposal.endDate = event.block.timestamp;
      proposal.save();
    }
    if (!isTerminalState(state)) stillOpen.push(ids[i]);
  }

  open.proposalIds = stillOpen;
  open.save();
}

export function handleProposalCanceled(event: ProposalCanceled): void {
  resolveEndedProposals(event);
  let proposal = Proposal.load(getProposalId(daoName, event.params.proposalId));
  if (proposal != null) {
    proposal.status = "Canceled";
    proposal.timestamp = event.block.timestamp;
    proposal.endDate = event.block.timestamp;
    proposal.save();
  }
  untrackProposal(event.params.proposalId);
}

export function handleProposalCreated(event: ProposalCreated): void {
  resolveEndedProposals(event);
  let proposal = new Proposal(getProposalId(daoName, event.params.proposalId));
  proposal.status = "Active";
  proposal.timestamp = event.block.timestamp;
  proposal.startDate = event.block.timestamp;
  proposal.description = event.params.description;
  proposal.proposer = event.params.proposer.toHexString();
  proposal.endBlock = event.params.endBlock;
  let org = new Organization(daoName);
  org.save();
  proposal.organization = org.id;
  proposal.save();
  trackProposal(event.params.proposalId);
}

export function handleProposalExecuted(event: ProposalExecuted): void {
  resolveEndedProposals(event);
  let proposal = Proposal.load(getProposalId(daoName, event.params.proposalId));
  if (proposal != null) {
    proposal.status = "Executed";
    proposal.timestamp = event.block.timestamp;
    proposal.save();
  }
  untrackProposal(event.params.proposalId);
}

export function handleProposalQueued(event: ProposalQueued): void {
  resolveEndedProposals(event);
  let proposal = Proposal.load(getProposalId(daoName, event.params.proposalId));
  if (proposal != null) {
    proposal.status = "Queued";
    proposal.timestamp = event.block.timestamp;
    proposal.endDate = event.block.timestamp;
    proposal.save();
  }
}

export function handleVoteCast(event: VoteCast): void {
  resolveEndedProposals(event);
  let vote = new Vote(
    event.params.voter.toHexString() + event.params.proposalId.toHexString()
  );
  let proposal = Proposal.load(getProposalId(daoName, event.params.proposalId));
  let user = User.load(event.params.voter.toHexString());
  if (user == null) {
    user = new User(event.params.voter.toHexString());
  }
  let org = new Organization(daoName);
  user.save();

  const voteWeight = event.params.weight;
  if (voteWeight && voteWeight.gt(new BigInt(0))) {
    if (proposal != null) {
      vote.proposal = proposal.id;
    }
    vote.user = user.id;
    vote.support = event.params.support;
    vote.weight = event.params.weight;
    vote.reason = event.params.reason;
    vote.timestamp = event.block.timestamp;
    vote.organization = org.id;
    vote.save();
  }
}
