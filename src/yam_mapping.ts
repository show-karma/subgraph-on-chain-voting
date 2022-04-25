import {
  YamFinanceGovernor,
  ProposalCanceled,
  ProposalCreated,
  ProposalExecuted,
  ProposalQueued,
  VoteCast,
} from "../generated/YamFinanceGovernor/YamFinanceGovernor";
import { User, Vote, Proposal, Organization } from "../generated/schema";
import { getProposalId } from "./proposals";
const daoName = "yam.eth";

export function handleProposalCanceled(event: ProposalCanceled): void {
  let proposal = Proposal.load(getProposalId(daoName, event.params.id));
  if (proposal != null) {
    proposal.status = "Canceled";
    proposal.timestamp = event.block.timestamp;
    proposal.save();
  }
}

export function handleProposalCreated(event: ProposalCreated): void {
  let proposal = new Proposal(getProposalId(daoName, event.params.id));
  proposal.status = "Active";
  proposal.timestamp = event.block.timestamp;
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
    proposal.save();
  }
}

export function handleVoteCast(event: VoteCast): void {
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
  if (proposal != null) {
    vote.proposal = proposal.id;
  }
  vote.user = user.id;
  vote.support = event.params.support ? 1 : 0;
  vote.weight = event.params.votes;
  vote.reason = event.params.support.toString();
  vote.timestamp = event.block.timestamp;
  vote.organization = org.id;
  vote.save();
}
