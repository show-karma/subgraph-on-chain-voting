import { BigInt } from "@graphprotocol/graph-ts";
import {
  ProposalCanceled,
  ProposalCreated,
  ProposalExecuted,
  ProposalQueued,
  VoteEmitted,
} from "../generated/DyDxGovernor/DyDxGovernor";
import { User, Vote, Proposal, Organization } from "../generated/schema";
import { getProposalId } from "./proposals";
const daoName = "dydx.eth";

const BLOCK_TIME = BigInt.fromI32(15);

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
  proposal.description = event.params.calldatas.toString();
  proposal.proposer = event.params.creator.toHexString();
  proposal.endDate = event.params.endBlock.times(BLOCK_TIME);
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
  user.save();

  const voteWeight = event.params.votingPower;
  if (voteWeight && voteWeight.gt(new BigInt(0))) {
    if (proposal != null) {
      vote.proposal = proposal.id;
    }
    vote.user = user.id;
    vote.support = event.params.support;
    vote.weight = event.params.votingPower;
    vote.reason = event.params.support.toString();
    vote.timestamp = event.block.timestamp;
    vote.organization = org.id;
    vote.save();
  }
}
