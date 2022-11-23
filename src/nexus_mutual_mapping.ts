import { BigInt } from "@graphprotocol/graph-ts";
import {
  Proposal,
  VoteCast,
  Vote,
} from "../generated/NexusMutualGovernance/NexusMutualGovernance";
import {
  User,
  Vote as KarmaVote,
  Proposal as KarmaProposal,
  Organization,
} from "../generated/schema";
import { getProposalId } from "./proposals";
const daoName = "community.nexusmutual.eth";

export function handleProposalCreated(event: Proposal): void {
  const proposal = new KarmaProposal(
    getProposalId(daoName, event.params.proposalId)
  );
  proposal.status = "Active";
  proposal.timestamp = event.block.timestamp;
  proposal.startDate = event.block.timestamp;
  proposal.proposer = event.params.proposalOwner.toHexString();
  proposal.description = event.params.proposalTitle;
  const org = new Organization(daoName);
  org.save();
  proposal.organization = org.id;
  proposal.save();
}

export function handleVoteCast(event: Vote): void {
  const vote = new KarmaVote(
    event.params.from.toHexString() + event.params.proposalId.toHexString()
  );
  const proposal = KarmaProposal.load(
    getProposalId(daoName, event.params.proposalId)
  );
  let user = User.load(event.params.from.toHexString());
  if (user == null) {
    user = new User(event.params.from.toHexString());
  }
  let org = new Organization(daoName);
  user.save();

  if (proposal != null) {
    vote.proposal = proposal.id;
  }
  vote.user = user.id;
  vote.solution = event.params.solutionChosen;
  vote.timestamp = event.block.timestamp;
  vote.support = -1;
  vote.organization = org.id;
  vote.save();
}
