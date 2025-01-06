import { BigInt } from "@graphprotocol/graph-ts";
import {
  ElementFinanceGovernor,
  ProposalCreated,
  ProposalExecuted,
  Voted,
} from "../generated/ElementFinanceGovernor/ElementFinanceGovernor";
import { User, Vote, Proposal, Organization } from "../generated/schema";
import { getProposalId } from "./proposals";
const daoName = "elementfinance.eth";

function checkAndUpdateProposalStatus(proposal: Proposal, event: Voted): void {
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

export function handleProposalCreated(event: ProposalCreated): void {
  let proposal = new Proposal(getProposalId(daoName, event.params.proposalId));
  proposal.status = "Active";
  proposal.timestamp = event.block.timestamp;
  proposal.startDate = event.block.timestamp;
  proposal.description = event.params.proposalId.toString();
  proposal.proposer = "0x";
  proposal.forVotes = BigInt.fromI32(0);
  proposal.againstVotes = BigInt.fromI32(0);
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
  let proposal = Proposal.load(getProposalId(daoName, event.params.proposalId));
  let user = User.load(event.params.voter.toHexString());
  if (user == null) {
    user = new User(event.params.voter.toHexString());
  }
  let org = new Organization(daoName);
  user.organization = org.id;
  user.save();

  const voteWeight = event.params.vote.votingPower;
  if (voteWeight && voteWeight.gt(BigInt.fromI32(0)) && proposal != null) {
    vote.proposal = proposal.id;
    vote.user = user.id;
    vote.support = event.params.vote.castBallot;
    vote.weight = voteWeight;
    vote.timestamp = event.block.timestamp;
    vote.organization = org.id;

    // Update vote counts
    let currentForVotes = proposal.forVotes;
    let currentAgainstVotes = proposal.againstVotes;

    if (!currentForVotes) currentForVotes = BigInt.fromI32(0);
    if (!currentAgainstVotes) currentAgainstVotes = BigInt.fromI32(0);

    if (event.params.vote.castBallot) {
      proposal.forVotes = currentForVotes.plus(voteWeight);
    } else {
      proposal.againstVotes = currentAgainstVotes.plus(voteWeight);
    }

    checkAndUpdateProposalStatus(proposal, event);
    proposal.save();
    vote.save();
  }
}
