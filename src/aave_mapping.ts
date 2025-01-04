import { BigInt } from "@graphprotocol/graph-ts";
import {
  AaveGovernor,
  ProposalCreated,
  StatusChangeToExecuted,
  StatusChangeToVoting,
  VoteEmitted,
} from "../generated/AaveGovernor/AaveGovernor";
import { User, Vote, Proposal, Organization } from "../generated/schema";
import { getProposalId } from "./proposals";
const daoName = "aave.eth";

function checkAndUpdateProposalStatus(
  proposal: Proposal,
  event: VoteEmitted
): void {
  if (
    proposal.status == "Active" &&
    event.block.timestamp.gt(proposal.endDate!)
  ) {
    let forVotes = proposal.forVotes;
    let againstVotes = proposal.againstVotes;

    if (!forVotes) forVotes = BigInt.fromI32(0);
    if (!againstVotes) againstVotes = BigInt.fromI32(0);

    if (againstVotes.gt(forVotes)) {
      proposal.status = "Defeated";
      proposal.timestamp = event.block.timestamp;
      proposal.save();
    }
  }
}

export function handleProposalCreated(event: ProposalCreated): void {
  let proposal = new Proposal(getProposalId(daoName, event.params.proposalId));
  proposal.status = "Active";
  proposal.timestamp = event.block.timestamp;
  proposal.startDate = event.block.timestamp;
  proposal.description = event.params.proposalType.toHexString();
  proposal.proposer = event.params.proposalExecutor.toHexString();
  proposal.forVotes = BigInt.fromI32(0);
  proposal.againstVotes = BigInt.fromI32(0);
  proposal.endDate = event.block.timestamp;
  let org = new Organization(daoName);
  org.save();
  proposal.organization = org.id;
  proposal.save();
}

export function handleProposalExecuted(event: StatusChangeToExecuted): void {
  let proposal = Proposal.load(getProposalId(daoName, event.params.proposalId));
  if (proposal != null) {
    proposal.status = "Executed";
    proposal.timestamp = event.block.timestamp;
    proposal.save();
  }
}

export function handleProposalQueued(event: StatusChangeToVoting): void {
  let proposal = Proposal.load(getProposalId(daoName, event.params.proposalId));
  if (proposal != null) {
    proposal.status = "Queued";
    proposal.timestamp = event.block.timestamp;
    proposal.endDate = event.block.timestamp;
    proposal.save();
  }
}

export function handleVoteCast(event: VoteEmitted): void {
  let vote = new Vote(
    event.params.voter.toHexString() + event.params.proposalId.toHexString()
  );
  let proposal = Proposal.load(getProposalId(daoName, event.params.proposalId));
  let user = User.load(event.params.voter.toHexString());
  if (user == null) {
    user = new User(event.params.voter.toHexString());
  }
  let org = new Organization(daoName);
  user.organization = org.id;
  user.save();

  const voteWeight = event.params.vote;
  if (voteWeight && voteWeight.gt(BigInt.fromI32(0)) && proposal != null) {
    vote.proposal = proposal.id;
    vote.user = user.id;
    vote.support = event.params.vote == BigInt.fromI32(1) ? 1 : 0;
    vote.weight = voteWeight;
    vote.timestamp = event.block.timestamp;
    vote.organization = org.id;

    // Update vote counts
    let currentForVotes = proposal.forVotes;
    let currentAgainstVotes = proposal.againstVotes;

    if (!currentForVotes) currentForVotes = BigInt.fromI32(0);
    if (!currentAgainstVotes) currentAgainstVotes = BigInt.fromI32(0);

    if (vote.support == 1) {
      proposal.forVotes = currentForVotes.plus(voteWeight);
    } else {
      proposal.againstVotes = currentAgainstVotes.plus(voteWeight);
    }

    checkAndUpdateProposalStatus(proposal, event);
    proposal.save();
    vote.save();
  }
}
