import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  ProposalCreated,
  ProposalExecuted,
  Voted,
} from "../generated/ElementFinanceGovernor/ElementFinanceGovernor";
import { User, Vote, Proposal, Organization } from "../generated/schema";
import { getProposalId } from "./proposals";
const daoName = "elementfinance.eth";

export function handleProposalCreated(event: ProposalCreated): void {
  let proposal = new Proposal(getProposalId(daoName, event.params.proposalId));
  proposal.status = "Active";
  proposal.timestamp = event.block.timestamp;
  proposal.startDate = event.block.timestamp;
  proposal.description = event.params.proposalId.toString();
  proposal.proposer = "0x";
  proposal.endDate = event.params.expiration;
  let org = new Organization(daoName);
  org.save();
  proposal.organization = org.id;
  proposal.save();
}

export function handleProposalExecuted(event: ProposalExecuted): void {
  let proposal = Proposal.load(getProposalId(daoName, event.params.proposalId));
  if (proposal != null) {
    proposal.status = "Executed";
    proposal.timestamp = event.block.timestamp;
    proposal.save();
  }
}

export function handleVoteCast(event: Voted): void {
  let vote = new Vote(
    event.params.voter.toHexString() + event.params.proposalId.toHexString()
  );

  let proposal =
    Proposal.load(getProposalId(daoName, event.params.proposalId)) ||
    new Proposal(getProposalId(daoName, event.params.proposalId));
  let user = User.load(event.params.voter.toHexString());
  if (user == null) {
    user = new User(event.params.voter.toHexString());
  }
  let org = new Organization(daoName);
  user.save();

  const voteWeight = event.params.vote.votingPower;
  if (voteWeight && voteWeight.gt(new BigInt(0))) {
    if (proposal != null) {
      vote.proposal = proposal.id;
    }
    vote.user = user.id;
    vote.support = event.params.vote.castBallot;
    vote.weight = voteWeight;
    vote.reason = null;
    vote.timestamp = event.block.timestamp;
    vote.organization = org.id;
    vote.save();
  }
}
