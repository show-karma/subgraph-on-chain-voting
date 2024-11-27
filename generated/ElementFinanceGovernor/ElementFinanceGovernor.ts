// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class ProposalCreated extends ethereum.Event {
  get params(): ProposalCreated__Params {
    return new ProposalCreated__Params(this);
  }
}

export class ProposalCreated__Params {
  _event: ProposalCreated;

  constructor(event: ProposalCreated) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get created(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get execution(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get expiration(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ProposalExecuted extends ethereum.Event {
  get params(): ProposalExecuted__Params {
    return new ProposalExecuted__Params(this);
  }
}

export class ProposalExecuted__Params {
  _event: ProposalExecuted;

  constructor(event: ProposalExecuted) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Voted extends ethereum.Event {
  get params(): Voted__Params {
    return new Voted__Params(this);
  }
}

export class Voted__Params {
  _event: Voted;

  constructor(event: Voted) {
    this._event = event;
  }

  get voter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proposalId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get vote(): VotedVoteStruct {
    return changetype<VotedVoteStruct>(
      this._event.parameters[2].value.toTuple(),
    );
  }
}

export class VotedVoteStruct extends ethereum.Tuple {
  get votingPower(): BigInt {
    return this[0].toBigInt();
  }

  get castBallot(): i32 {
    return this[1].toI32();
  }
}

export class ElementFinanceGovernor__proposalsResult {
  value0: Bytes;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: Bytes,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }

  getProposalHash(): Bytes {
    return this.value0;
  }

  getCreated(): BigInt {
    return this.value1;
  }

  getUnlock(): BigInt {
    return this.value2;
  }

  getExpiration(): BigInt {
    return this.value3;
  }

  getQuorum(): BigInt {
    return this.value4;
  }

  getLastCall(): BigInt {
    return this.value5;
  }
}

export class ElementFinanceGovernor__votesResult {
  value0: BigInt;
  value1: i32;

  constructor(value0: BigInt, value1: i32) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1)),
    );
    return map;
  }

  getVotingPower(): BigInt {
    return this.value0;
  }

  getCastBallot(): i32 {
    return this.value1;
  }
}

export class ElementFinanceGovernor extends ethereum.SmartContract {
  static bind(address: Address): ElementFinanceGovernor {
    return new ElementFinanceGovernor("ElementFinanceGovernor", address);
  }

  DAY_IN_BLOCKS(): BigInt {
    let result = super.call("DAY_IN_BLOCKS", "DAY_IN_BLOCKS():(uint256)", []);

    return result[0].toBigInt();
  }

  try_DAY_IN_BLOCKS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "DAY_IN_BLOCKS",
      "DAY_IN_BLOCKS():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approvedVaults(param0: Address): boolean {
    let result = super.call(
      "approvedVaults",
      "approvedVaults(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toBoolean();
  }

  try_approvedVaults(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "approvedVaults",
      "approvedVaults(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  authorized(param0: Address): boolean {
    let result = super.call("authorized", "authorized(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toBoolean();
  }

  try_authorized(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("authorized", "authorized(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  baseQuorum(): BigInt {
    let result = super.call("baseQuorum", "baseQuorum():(uint256)", []);

    return result[0].toBigInt();
  }

  try_baseQuorum(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("baseQuorum", "baseQuorum():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  extraVoteTime(): BigInt {
    let result = super.call("extraVoteTime", "extraVoteTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_extraVoteTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "extraVoteTime",
      "extraVoteTime():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getProposalVotingPower(proposalId: BigInt): Array<BigInt> {
    let result = super.call(
      "getProposalVotingPower",
      "getProposalVotingPower(uint256):(uint128[3])",
      [ethereum.Value.fromUnsignedBigInt(proposalId)],
    );

    return result[0].toBigIntArray();
  }

  try_getProposalVotingPower(
    proposalId: BigInt,
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getProposalVotingPower",
      "getProposalVotingPower(uint256):(uint128[3])",
      [ethereum.Value.fromUnsignedBigInt(proposalId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  isAuthorized(who: Address): boolean {
    let result = super.call("isAuthorized", "isAuthorized(address):(bool)", [
      ethereum.Value.fromAddress(who),
    ]);

    return result[0].toBoolean();
  }

  try_isAuthorized(who: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isAuthorized", "isAuthorized(address):(bool)", [
      ethereum.Value.fromAddress(who),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lockDuration(): BigInt {
    let result = super.call("lockDuration", "lockDuration():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lockDuration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("lockDuration", "lockDuration():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minProposalPower(): BigInt {
    let result = super.call(
      "minProposalPower",
      "minProposalPower():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_minProposalPower(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minProposalPower",
      "minProposalPower():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proposalCount(): BigInt {
    let result = super.call("proposalCount", "proposalCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_proposalCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "proposalCount",
      "proposalCount():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  proposals(param0: BigInt): ElementFinanceGovernor__proposalsResult {
    let result = super.call(
      "proposals",
      "proposals(uint256):(bytes32,uint128,uint128,uint128,uint128,uint128)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new ElementFinanceGovernor__proposalsResult(
      result[0].toBytes(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
    );
  }

  try_proposals(
    param0: BigInt,
  ): ethereum.CallResult<ElementFinanceGovernor__proposalsResult> {
    let result = super.tryCall(
      "proposals",
      "proposals(uint256):(bytes32,uint128,uint128,uint128,uint128,uint128)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ElementFinanceGovernor__proposalsResult(
        value[0].toBytes(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
      ),
    );
  }

  quorums(target: Address, functionSelector: Bytes): BigInt {
    let result = super.call("quorums", "quorums(address,bytes4):(uint256)", [
      ethereum.Value.fromAddress(target),
      ethereum.Value.fromFixedBytes(functionSelector),
    ]);

    return result[0].toBigInt();
  }

  try_quorums(
    target: Address,
    functionSelector: Bytes,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall("quorums", "quorums(address,bytes4):(uint256)", [
      ethereum.Value.fromAddress(target),
      ethereum.Value.fromFixedBytes(functionSelector),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  vote(
    votingVaults: Array<Address>,
    extraVaultData: Array<Bytes>,
    proposalId: BigInt,
    ballot: i32,
  ): BigInt {
    let result = super.call(
      "vote",
      "vote(address[],bytes[],uint256,uint8):(uint256)",
      [
        ethereum.Value.fromAddressArray(votingVaults),
        ethereum.Value.fromBytesArray(extraVaultData),
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(ballot)),
      ],
    );

    return result[0].toBigInt();
  }

  try_vote(
    votingVaults: Array<Address>,
    extraVaultData: Array<Bytes>,
    proposalId: BigInt,
    ballot: i32,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "vote",
      "vote(address[],bytes[],uint256,uint8):(uint256)",
      [
        ethereum.Value.fromAddressArray(votingVaults),
        ethereum.Value.fromBytesArray(extraVaultData),
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(ballot)),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  votes(param0: Address, param1: BigInt): ElementFinanceGovernor__votesResult {
    let result = super.call("votes", "votes(address,uint256):(uint128,uint8)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromUnsignedBigInt(param1),
    ]);

    return new ElementFinanceGovernor__votesResult(
      result[0].toBigInt(),
      result[1].toI32(),
    );
  }

  try_votes(
    param0: Address,
    param1: BigInt,
  ): ethereum.CallResult<ElementFinanceGovernor__votesResult> {
    let result = super.tryCall(
      "votes",
      "votes(address,uint256):(uint128,uint8)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ElementFinanceGovernor__votesResult(
        value[0].toBigInt(),
        value[1].toI32(),
      ),
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _timelock(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _baseQuorum(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _minProposalPower(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _gsc(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get votingVaults(): Array<Address> {
    return this._call.inputValues[4].value.toAddressArray();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AuthorizeCall extends ethereum.Call {
  get inputs(): AuthorizeCall__Inputs {
    return new AuthorizeCall__Inputs(this);
  }

  get outputs(): AuthorizeCall__Outputs {
    return new AuthorizeCall__Outputs(this);
  }
}

export class AuthorizeCall__Inputs {
  _call: AuthorizeCall;

  constructor(call: AuthorizeCall) {
    this._call = call;
  }

  get who(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AuthorizeCall__Outputs {
  _call: AuthorizeCall;

  constructor(call: AuthorizeCall) {
    this._call = call;
  }
}

export class ChangeExtraVotingTimeCall extends ethereum.Call {
  get inputs(): ChangeExtraVotingTimeCall__Inputs {
    return new ChangeExtraVotingTimeCall__Inputs(this);
  }

  get outputs(): ChangeExtraVotingTimeCall__Outputs {
    return new ChangeExtraVotingTimeCall__Outputs(this);
  }
}

export class ChangeExtraVotingTimeCall__Inputs {
  _call: ChangeExtraVotingTimeCall;

  constructor(call: ChangeExtraVotingTimeCall) {
    this._call = call;
  }

  get _extraVoteTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeExtraVotingTimeCall__Outputs {
  _call: ChangeExtraVotingTimeCall;

  constructor(call: ChangeExtraVotingTimeCall) {
    this._call = call;
  }
}

export class ChangeVaultStatusCall extends ethereum.Call {
  get inputs(): ChangeVaultStatusCall__Inputs {
    return new ChangeVaultStatusCall__Inputs(this);
  }

  get outputs(): ChangeVaultStatusCall__Outputs {
    return new ChangeVaultStatusCall__Outputs(this);
  }
}

export class ChangeVaultStatusCall__Inputs {
  _call: ChangeVaultStatusCall;

  constructor(call: ChangeVaultStatusCall) {
    this._call = call;
  }

  get vault(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get isValid(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class ChangeVaultStatusCall__Outputs {
  _call: ChangeVaultStatusCall;

  constructor(call: ChangeVaultStatusCall) {
    this._call = call;
  }
}

export class DeauthorizeCall extends ethereum.Call {
  get inputs(): DeauthorizeCall__Inputs {
    return new DeauthorizeCall__Inputs(this);
  }

  get outputs(): DeauthorizeCall__Outputs {
    return new DeauthorizeCall__Outputs(this);
  }
}

export class DeauthorizeCall__Inputs {
  _call: DeauthorizeCall;

  constructor(call: DeauthorizeCall) {
    this._call = call;
  }

  get who(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DeauthorizeCall__Outputs {
  _call: DeauthorizeCall;

  constructor(call: DeauthorizeCall) {
    this._call = call;
  }
}

export class ExecuteCall extends ethereum.Call {
  get inputs(): ExecuteCall__Inputs {
    return new ExecuteCall__Inputs(this);
  }

  get outputs(): ExecuteCall__Outputs {
    return new ExecuteCall__Outputs(this);
  }
}

export class ExecuteCall__Inputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get targets(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get calldatas(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }
}

export class ExecuteCall__Outputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }
}

export class ProposalCall extends ethereum.Call {
  get inputs(): ProposalCall__Inputs {
    return new ProposalCall__Inputs(this);
  }

  get outputs(): ProposalCall__Outputs {
    return new ProposalCall__Outputs(this);
  }
}

export class ProposalCall__Inputs {
  _call: ProposalCall;

  constructor(call: ProposalCall) {
    this._call = call;
  }

  get votingVaults(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get extraVaultData(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }

  get targets(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get calldatas(): Array<Bytes> {
    return this._call.inputValues[3].value.toBytesArray();
  }

  get lastCall(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get ballot(): i32 {
    return this._call.inputValues[5].value.toI32();
  }
}

export class ProposalCall__Outputs {
  _call: ProposalCall;

  constructor(call: ProposalCall) {
    this._call = call;
  }
}

export class SetCustomQuorumCall extends ethereum.Call {
  get inputs(): SetCustomQuorumCall__Inputs {
    return new SetCustomQuorumCall__Inputs(this);
  }

  get outputs(): SetCustomQuorumCall__Outputs {
    return new SetCustomQuorumCall__Outputs(this);
  }
}

export class SetCustomQuorumCall__Inputs {
  _call: SetCustomQuorumCall;

  constructor(call: SetCustomQuorumCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get selector(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get quorum(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetCustomQuorumCall__Outputs {
  _call: SetCustomQuorumCall;

  constructor(call: SetCustomQuorumCall) {
    this._call = call;
  }
}

export class SetDefaultQuorumCall extends ethereum.Call {
  get inputs(): SetDefaultQuorumCall__Inputs {
    return new SetDefaultQuorumCall__Inputs(this);
  }

  get outputs(): SetDefaultQuorumCall__Outputs {
    return new SetDefaultQuorumCall__Outputs(this);
  }
}

export class SetDefaultQuorumCall__Inputs {
  _call: SetDefaultQuorumCall;

  constructor(call: SetDefaultQuorumCall) {
    this._call = call;
  }

  get quorum(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDefaultQuorumCall__Outputs {
  _call: SetDefaultQuorumCall;

  constructor(call: SetDefaultQuorumCall) {
    this._call = call;
  }
}

export class SetLockDurationCall extends ethereum.Call {
  get inputs(): SetLockDurationCall__Inputs {
    return new SetLockDurationCall__Inputs(this);
  }

  get outputs(): SetLockDurationCall__Outputs {
    return new SetLockDurationCall__Outputs(this);
  }
}

export class SetLockDurationCall__Inputs {
  _call: SetLockDurationCall;

  constructor(call: SetLockDurationCall) {
    this._call = call;
  }

  get _lockDuration(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetLockDurationCall__Outputs {
  _call: SetLockDurationCall;

  constructor(call: SetLockDurationCall) {
    this._call = call;
  }
}

export class SetMinProposalPowerCall extends ethereum.Call {
  get inputs(): SetMinProposalPowerCall__Inputs {
    return new SetMinProposalPowerCall__Inputs(this);
  }

  get outputs(): SetMinProposalPowerCall__Outputs {
    return new SetMinProposalPowerCall__Outputs(this);
  }
}

export class SetMinProposalPowerCall__Inputs {
  _call: SetMinProposalPowerCall;

  constructor(call: SetMinProposalPowerCall) {
    this._call = call;
  }

  get _minProposalPower(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMinProposalPowerCall__Outputs {
  _call: SetMinProposalPowerCall;

  constructor(call: SetMinProposalPowerCall) {
    this._call = call;
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get who(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}

export class VoteCall extends ethereum.Call {
  get inputs(): VoteCall__Inputs {
    return new VoteCall__Inputs(this);
  }

  get outputs(): VoteCall__Outputs {
    return new VoteCall__Outputs(this);
  }
}

export class VoteCall__Inputs {
  _call: VoteCall;

  constructor(call: VoteCall) {
    this._call = call;
  }

  get votingVaults(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get extraVaultData(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }

  get proposalId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get ballot(): i32 {
    return this._call.inputValues[3].value.toI32();
  }
}

export class VoteCall__Outputs {
  _call: VoteCall;

  constructor(call: VoteCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
