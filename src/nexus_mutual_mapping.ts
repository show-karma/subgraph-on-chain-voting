import { BigInt } from "@graphprotocol/graph-ts";
import {
  NexusMutualGovernance,
  Proposal as ProposalEvent,
  Vote as VoteEvent,
} from "../generated/NexusMutualGovernance/NexusMutualGovernance";
import { User, Vote, Proposal, Organization } from "../generated/schema";
import { getProposalId } from "./proposals";
const daoName = "nexus-mutual.eth";

function checkAndUpdateProposalStatus(
  proposal: Proposal,
  event: VoteEvent
): void {
  const endDate = proposal.endDate;
  if (!endDate) return;

  if (proposal.status == "Active" && event.block.timestamp.gt(endDate)) {
    const forVotes = (proposal.forVotes || BigInt.fromI32(0)) as BigInt;
    const againstVotes = (proposal.againstVotes || BigInt.fromI32(0)) as BigInt;

    if (againstVotes.gt(forVotes)) {
      proposal.status = "Defeated";
      proposal.timestamp = event.block.timestamp;
      proposal.endDate = event.block.timestamp;
      proposal.save();
    }
  }
}

export function handleProposalCreated(event: ProposalEvent): void {
  let proposal = new Proposal(getProposalId(daoName, event.params.proposalId));
  proposal.status = "Active";
  proposal.timestamp = event.block.timestamp;
  proposal.startDate = event.block.timestamp;
  proposal.description = event.params.proposalTitle;
  proposal.proposer = event.params.proposalOwner.toHexString();
  proposal.forVotes = BigInt.fromI32(0);
  proposal.againstVotes = BigInt.fromI32(0);
  proposal.startBlock = event.block.number;
  proposal.endDate = event.params.dateAdd;
  let org = new Organization(daoName);
  org.save();
  proposal.organization = org.id;
  proposal.save();
}

export function handleVoteCast(event: VoteEvent): void {
  let vote = new Vote(
    event.params.from.toHexString() + event.params.proposalId.toHexString()
  );
  let proposal = Proposal.load(getProposalId(daoName, event.params.proposalId));
  let user = User.load(event.params.from.toHexString());
  if (user == null) {
    user = new User(event.params.from.toHexString());
  }
  let org = new Organization(daoName);
  user.organization = org.id;
  user.save();

  const voteWeight = event.params.dateAdd;
  if (voteWeight && voteWeight.gt(BigInt.fromI32(0)) && proposal != null) {
    vote.proposal = proposal.id;
    vote.user = user.id;
    vote.support = event.params.solutionChosen.toI32();
    vote.weight = voteWeight;
    vote.timestamp = event.block.timestamp;
    vote.organization = org.id;

    // Update vote counts
    let currentForVotes = proposal.forVotes;
    let currentAgainstVotes = proposal.againstVotes;

    if (!currentForVotes) currentForVotes = BigInt.fromI32(0);
    if (!currentAgainstVotes) currentAgainstVotes = BigInt.fromI32(0);

    if (event.params.solutionChosen.toI32() == 1) {
      proposal.forVotes = currentForVotes.plus(voteWeight);
    } else {
      proposal.againstVotes = currentAgainstVotes.plus(voteWeight);
    }

    checkAndUpdateProposalStatus(proposal, event);
    proposal.save();
    vote.save();
  }
}
