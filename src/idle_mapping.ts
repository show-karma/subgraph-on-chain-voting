import { BigInt } from "@graphprotocol/graph-ts";
import {
  ProposalCanceled,
  ProposalCreated,
  ProposalExecuted,
  ProposalQueued,
  VoteCast,
} from "../generated/IdleFinanceToken/IdleFinanceToken";
import { VoteCast as VoteCastAlpha } from "../generated/IdleFinanceTokenAlpha/IdleFinanceTokenAlpha";
import { User, Vote, Proposal, Organization } from "../generated/schema";
import { getProposalId } from "./proposals";
const daoName = "idlefinance.eth";

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
  proposal.description = event.params.description;
  proposal.proposer = event.params.proposer.toHexString();
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
  let vote = voteCast(
    params.voter.toHexString(),
    params.proposalId,
    params.votes,
    event.block.timestamp
  );
  const voteWeight = vote.weight;
  if (voteWeight && voteWeight.gt(new BigInt(0))) {
    vote.support = params.support;
    vote.reason = params.reason;
    vote.save();
  }
}

export function handleVoteCastAlpha(event: VoteCastAlpha): void {
  const params = event.params;
  let vote = voteCast(
    params.voter.toHexString(),
    params.proposalId,
    params.votes,
    event.block.timestamp
  );
  const voteWeight = vote.weight;
  if (voteWeight && voteWeight.gt(new BigInt(0))) {
    vote.support = event.params.support ? 1 : 0;
    vote.save();
  }
}
