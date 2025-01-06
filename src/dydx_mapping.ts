import { BigInt } from "@graphprotocol/graph-ts";
import {
  DyDxGovernor,
  ProposalCanceled,
  ProposalCreated,
  ProposalExecuted,
  ProposalQueued,
  VoteEmitted,
} from "../generated/DyDxGovernor/DyDxGovernor";
import { User, Vote, Proposal, Organization } from "../generated/schema";
import { getProposalId } from "./proposals";
const daoName = "dydx.eth";

function checkAndUpdateProposalStatus(
  proposal: Proposal,
  event: VoteEmitted
): void {
  const endDate = proposal.endDate;
  if (!endDate) return;

  if (proposal.status == "Active" && event.block.timestamp.gt(endDate)) {
    const forVotes = (proposal.forVotes || BigInt.fromI32(0)) as BigInt;
    const againstVotes = (proposal.againstVotes || BigInt.fromI32(0)) as BigInt;

    if (againstVotes.gt(forVotes)) {
      proposal.status = "Defeated";
      proposal.timestamp = event.block.timestamp;
      proposal.save();
    }
  }
}

export function handleProposalCanceled(event: ProposalCanceled): void {
  let proposal = Proposal.load(getProposalId(daoName, event.params.id));
  if (proposal != null) {
    proposal.status = "Canceled";
    proposal.timestamp = event.block.timestamp;
    proposal.endDate = event.block.timestamp;
    proposal.save();
  }
}

export function handleProposalCreated(event: ProposalCreated): void {
  let proposal = new Proposal(getProposalId(daoName, event.params.id));
  proposal.status = "Active";
  proposal.timestamp = event.block.timestamp;
  proposal.startDate = event.block.timestamp;
  proposal.description = event.params.id.toString();
  proposal.proposer = "0x";
  proposal.forVotes = BigInt.fromI32(0);
  proposal.againstVotes = BigInt.fromI32(0);
  proposal.endDate = event.params.endBlock;
  let org = new Organization(daoName);
  org.save();
  proposal.organization = org.id;
  proposal.save();
}

export function handleProposalExecuted(event: ProposalExecuted): void {
  let proposal = Proposal.load(getProposalId(daoName, event.params.id));
  if (proposal != null) {
    proposal.status = "Executed";
    proposal.timestamp = event.block.timestamp;
    proposal.save();
  }
}

export function handleProposalQueued(event: ProposalQueued): void {
  let proposal = Proposal.load(getProposalId(daoName, event.params.id));
  if (proposal != null) {
    proposal.status = "Queued";
    proposal.timestamp = event.block.timestamp;
    proposal.endDate = event.block.timestamp;
    proposal.save();
  }
}

export function handleVoteCast(event: VoteEmitted): void {
  let vote = new Vote(
    event.params.voter.toHexString() + event.params.id.toHexString()
  );
  let proposal = Proposal.load(getProposalId(daoName, event.params.id));
  let user = User.load(event.params.voter.toHexString());
  if (user == null) {
    user = new User(event.params.voter.toHexString());
  }
  let org = new Organization(daoName);
  user.organization = org.id;
  user.save();

  const voteWeight = event.params.votingPower;
  if (voteWeight && voteWeight.gt(BigInt.fromI32(0)) && proposal != null) {
    vote.proposal = proposal.id;
    vote.user = user.id;
    vote.support = event.params.support;
    vote.weight = voteWeight;
    vote.timestamp = event.block.timestamp;
    vote.organization = org.id;

    // Update vote counts
    let currentForVotes = proposal.forVotes;
    let currentAgainstVotes = proposal.againstVotes;

    if (!currentForVotes) currentForVotes = BigInt.fromI32(0);
    if (!currentAgainstVotes) currentAgainstVotes = BigInt.fromI32(0);

    if (event.params.support) {
      proposal.forVotes = currentForVotes.plus(voteWeight);
    } else {
      proposal.againstVotes = currentAgainstVotes.plus(voteWeight);
    }

    checkAndUpdateProposalStatus(proposal, event);
    proposal.save();
    vote.save();
  }
}
