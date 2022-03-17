import { BigInt } from "@graphprotocol/graph-ts"
import {
  GTCGovernorAlpha,
  ProposalCanceled,
  ProposalCreated,
  ProposalExecuted,
  ProposalQueued,
  VoteCast
} from "../generated/GTCGovernorAlpha/GTCGovernorAlpha"
import { User, Vote, Proposal, Organization } from "../generated/schema"
const daoName="gitcoindao.eth"

export function handleProposalCanceled(event: ProposalCanceled): void {
  let proposal = Proposal.load(event.params.id.toHexString())
  if (proposal != null) {
    proposal.status = "Canceled"
    proposal.save()
  }
}

export function handleProposalCreated(event: ProposalCreated): void {
  let proposal = new Proposal(event.params.id.toHexString())
  proposal.status = "Active"
  proposal.description = event.params.description
  proposal.proposer = event.params.proposer.toHexString()
  let org = new Organization(daoName)
  org.save()
  proposal.organization = org.id
  proposal.save()
}

export function handleProposalExecuted(event: ProposalExecuted): void {
  let proposal = Proposal.load(event.params.id.toHexString())
  if (proposal != null) {
    proposal.status = "Executed"
    proposal.save()
  }
}

export function handleProposalQueued(event: ProposalQueued): void {
  let proposal = Proposal.load(event.params.id.toHexString())
  if (proposal != null) {
    proposal.status = "Queued"
    proposal.save()
  }
}

export function handleVoteCast(event: VoteCast): void {
  let vote = new Vote(event.params.voter.toHexString() + event.params.proposalId.toHexString())
  let proposal = Proposal.load(event.params.proposalId.toHexString())
  let user = User.load(event.params.voter.toHexString())
  if (user == null) {
    user = new User(event.params.voter.toHexString())
  }
  let org = new Organization(daoName)
  user.organization = org.id
  user.save()
  if (proposal != null) {
    vote.proposal = proposal.id
  }
  vote.user = user.id
  vote.support = event.params.support
  vote.weight = event.params.votes
  vote.timestamp = event.block.timestamp
  vote.organization = org.id
  vote.save()
}
