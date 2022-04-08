import {
    BigInt
} from "@graphprotocol/graph-ts";

export function getProposalId(daoName: string, id: BigInt): string {
  return `${daoName}-${id.toHexString()}`;
}