import { BigInt } from "@graphprotocol/graph-ts";
import {
  ProposalCanceled,
  ProposalCreated,
  ProposalExecuted,
  ProposalQueued,
  VoteCast,
} from "../generated/UniswapGovernorAlpha/UniswapGovernorAlpha";
import { VoteCast as VoteCastBravo } from "../generated/UniswapGovernorBravo/UniswapGovernorBravo";
import { User, Vote, Proposal, Organization } from "../generated/schema";
import { getProposalId } from "./proposals";
const daoName = "uniswap";

function checkAndUpdateProposalStatus(proposal: Proposal): void {
  let forVotes = proposal.forVotes;
  let againstVotes = proposal.againstVotes;

  if (!forVotes) forVotes = BigInt.fromI32(0);
  if (!againstVotes) againstVotes = BigInt.fromI32(0);

  if (againstVotes.gt(forVotes)) {
    proposal.status = "Defeated";
    proposal.save();
  }
}

export function handleProposalCanceled(event: ProposalCanceled): void {
  let proposal = Proposal.load(getProposalId(daoName, event.params.id));
  if (proposal != null) {
    proposal.status = "Canceled";
    proposal.endDate = event.block.timestamp;
    proposal.save();
  }
}

export function handleProposalCreated(event: ProposalCreated): void {
  let proposal = new Proposal(getProposalId(daoName, event.params.id));
  proposal.status = "Active";
  proposal.timestamp = event.block.timestamp;
  proposal.startDate = event.block.timestamp;
  proposal.description = event.params.description;
  proposal.proposer = event.params.proposer.toHexString();
  proposal.forVotes = BigInt.fromI32(0);
  proposal.againstVotes = BigInt.fromI32(0);
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

function voteCast(
  voter: string,
  proposalId: BigInt,
  votes: BigInt,
  timestamp: BigInt
): Vote {
  let vote = new Vote(voter + proposalId.toHexString());
  let proposal = Proposal.load(getProposalId(daoName, proposalId));
  let user = User.load(voter);
  if (user == null) {
    user = new User(voter);
  }
  let org = new Organization(daoName);
  user.organization = org.id;
  user.save();
  if (proposal != null) {
    vote.proposal = proposal.id;
  }
  vote.user = user.id;
  vote.weight = votes;
  vote.timestamp = timestamp;
  vote.organization = org.id;
  return vote;
}

export function handleVoteCast(event: VoteCast): void {
  const params = event.params;
  const vote = voteCast(
    params.voter.toHexString(),
    params.proposalId,
    params.votes,
    event.block.timestamp
  );
  const voteWeight = vote.weight;
  if (voteWeight && voteWeight.gt(BigInt.fromI32(0))) {
    vote.support = params.support ? 1 : 0;
    vote.save();

    // Update proposal vote counts
    let proposal = Proposal.load(getProposalId(daoName, params.proposalId));
    if (proposal) {
      let currentForVotes = proposal.forVotes;
      let currentAgainstVotes = proposal.againstVotes;

      if (!currentForVotes) currentForVotes = BigInt.fromI32(0);
      if (!currentAgainstVotes) currentAgainstVotes = BigInt.fromI32(0);

      if (params.support) {
        proposal.forVotes = currentForVotes.plus(voteWeight);
      } else {
        proposal.againstVotes = currentAgainstVotes.plus(voteWeight);
      }

      // Check if proposal should be marked as defeated
      checkAndUpdateProposalStatus(proposal);

      proposal.save();
    }
  }
}

export function handleVoteCastBravo(event: VoteCastBravo): void {
  const params = event.params;
  let vote = voteCast(
    params.voter.toHexString(),
    params.proposalId,
    params.votes,
    event.block.timestamp
  );
  const voteWeight = vote.weight;
  if (voteWeight && voteWeight.gt(BigInt.fromI32(0))) {
    vote.support = params.support;
    vote.reason = params.reason;
    vote.save();
  }
}
