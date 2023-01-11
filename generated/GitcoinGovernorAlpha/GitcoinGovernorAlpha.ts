// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ProposalCanceled extends ethereum.Event {
  get params(): ProposalCanceled__Params {
    return new ProposalCanceled__Params(this);
  }
}

export class ProposalCanceled__Params {
  _event: ProposalCanceled;

  constructor(event: ProposalCanceled) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

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

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get proposer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get targets(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get signatures(): Array<string> {
    return this._event.parameters[4].value.toStringArray();
  }

  get calldatas(): Array<Bytes> {
    return this._event.parameters[5].value.toBytesArray();
  }

  get startBlock(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get endBlock(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get description(): string {
    return this._event.parameters[8].value.toString();
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

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ProposalQueued extends ethereum.Event {
  get params(): ProposalQueued__Params {
    return new ProposalQueued__Params(this);
  }
}

export class ProposalQueued__Params {
  _event: ProposalQueued;

  constructor(event: ProposalQueued) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get eta(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class VoteCast extends ethereum.Event {
  get params(): VoteCast__Params {
    return new VoteCast__Params(this);
  }
}

export class VoteCast__Params {
  _event: VoteCast;

  constructor(event: VoteCast) {
    this._event = event;
  }

  get voter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proposalId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get support(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }

  get votes(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class GitcoinGovernorAlpha__getActionsResult {
  value0: Array<Address>;
  value1: Array<BigInt>;
  value2: Array<string>;
  value3: Array<Bytes>;

  constructor(
    value0: Array<Address>,
    value1: Array<BigInt>,
    value2: Array<string>,
    value3: Array<Bytes>
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddressArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    map.set("value2", ethereum.Value.fromStringArray(this.value2));
    map.set("value3", ethereum.Value.fromBytesArray(this.value3));
    return map;
  }

  getTargets(): Array<Address> {
    return this.value0;
  }

  getValues(): Array<BigInt> {
    return this.value1;
  }

  getSignatures(): Array<string> {
    return this.value2;
  }

  getCalldatas(): Array<Bytes> {
    return this.value3;
  }
}

export class GitcoinGovernorAlpha__getReceiptResultValue0Struct extends ethereum.Tuple {
  get hasVoted(): boolean {
    return this[0].toBoolean();
  }

  get support(): boolean {
    return this[1].toBoolean();
  }

  get votes(): BigInt {
    return this[2].toBigInt();
  }
}

export class GitcoinGovernorAlpha__proposalsResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: boolean;
  value8: boolean;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: boolean,
    value8: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromBoolean(this.value7));
    map.set("value8", ethereum.Value.fromBoolean(this.value8));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getProposer(): Address {
    return this.value1;
  }

  getEta(): BigInt {
    return this.value2;
  }

  getStartBlock(): BigInt {
    return this.value3;
  }

  getEndBlock(): BigInt {
    return this.value4;
  }

  getForVotes(): BigInt {
    return this.value5;
  }

  getAgainstVotes(): BigInt {
    return this.value6;
  }

  getCanceled(): boolean {
    return this.value7;
  }

  getExecuted(): boolean {
    return this.value8;
  }
}

export class GitcoinGovernorAlpha extends ethereum.SmartContract {
  static bind(address: Address): GitcoinGovernorAlpha {
    return new GitcoinGovernorAlpha("GitcoinGovernorAlpha", address);
  }

  BALLOT_TYPEHASH(): Bytes {
    let result = super.call(
      "BALLOT_TYPEHASH",
      "BALLOT_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_BALLOT_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "BALLOT_TYPEHASH",
      "BALLOT_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DOMAIN_TYPEHASH(): Bytes {
    let result = super.call(
      "DOMAIN_TYPEHASH",
      "DOMAIN_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DOMAIN_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DOMAIN_TYPEHASH",
      "DOMAIN_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getActions(proposalId: BigInt): GitcoinGovernorAlpha__getActionsResult {
    let result = super.call(
      "getActions",
      "getActions(uint256):(address[],uint256[],string[],bytes[])",
      [ethereum.Value.fromUnsignedBigInt(proposalId)]
    );

    return new GitcoinGovernorAlpha__getActionsResult(
      result[0].toAddressArray(),
      result[1].toBigIntArray(),
      result[2].toStringArray(),
      result[3].toBytesArray()
    );
  }

  try_getActions(
    proposalId: BigInt
  ): ethereum.CallResult<GitcoinGovernorAlpha__getActionsResult> {
    let result = super.tryCall(
      "getActions",
      "getActions(uint256):(address[],uint256[],string[],bytes[])",
      [ethereum.Value.fromUnsignedBigInt(proposalId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GitcoinGovernorAlpha__getActionsResult(
        value[0].toAddressArray(),
        value[1].toBigIntArray(),
        value[2].toStringArray(),
        value[3].toBytesArray()
      )
    );
  }

  getReceipt(
    proposalId: BigInt,
    voter: Address
  ): GitcoinGovernorAlpha__getReceiptResultValue0Struct {
    let result = super.call(
      "getReceipt",
      "getReceipt(uint256,address):((bool,bool,uint96))",
      [
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromAddress(voter)
      ]
    );

    return changetype<GitcoinGovernorAlpha__getReceiptResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getReceipt(
    proposalId: BigInt,
    voter: Address
  ): ethereum.CallResult<GitcoinGovernorAlpha__getReceiptResultValue0Struct> {
    let result = super.tryCall(
      "getReceipt",
      "getReceipt(uint256,address):((bool,bool,uint96))",
      [
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromAddress(voter)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<GitcoinGovernorAlpha__getReceiptResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  gtc(): Address {
    let result = super.call("gtc", "gtc():(address)", []);

    return result[0].toAddress();
  }

  try_gtc(): ethereum.CallResult<Address> {
    let result = super.tryCall("gtc", "gtc():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  latestProposalIds(param0: Address): BigInt {
    let result = super.call(
      "latestProposalIds",
      "latestProposalIds(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_latestProposalIds(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "latestProposalIds",
      "latestProposalIds(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  proposalCount(): BigInt {
    let result = super.call("proposalCount", "proposalCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_proposalCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "proposalCount",
      "proposalCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  proposalMaxOperations(): BigInt {
    let result = super.call(
      "proposalMaxOperations",
      "proposalMaxOperations():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_proposalMaxOperations(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "proposalMaxOperations",
      "proposalMaxOperations():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  proposalThreshold(): BigInt {
    let result = super.call(
      "proposalThreshold",
      "proposalThreshold():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_proposalThreshold(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "proposalThreshold",
      "proposalThreshold():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  proposals(param0: BigInt): GitcoinGovernorAlpha__proposalsResult {
    let result = super.call(
      "proposals",
      "proposals(uint256):(uint256,address,uint256,uint256,uint256,uint256,uint256,bool,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new GitcoinGovernorAlpha__proposalsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBoolean(),
      result[8].toBoolean()
    );
  }

  try_proposals(
    param0: BigInt
  ): ethereum.CallResult<GitcoinGovernorAlpha__proposalsResult> {
    let result = super.tryCall(
      "proposals",
      "proposals(uint256):(uint256,address,uint256,uint256,uint256,uint256,uint256,bool,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GitcoinGovernorAlpha__proposalsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBoolean(),
        value[8].toBoolean()
      )
    );
  }

  propose(
    targets: Array<Address>,
    values: Array<BigInt>,
    signatures: Array<string>,
    calldatas: Array<Bytes>,
    description: string
  ): BigInt {
    let result = super.call(
      "propose",
      "propose(address[],uint256[],string[],bytes[],string):(uint256)",
      [
        ethereum.Value.fromAddressArray(targets),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromStringArray(signatures),
        ethereum.Value.fromBytesArray(calldatas),
        ethereum.Value.fromString(description)
      ]
    );

    return result[0].toBigInt();
  }

  try_propose(
    targets: Array<Address>,
    values: Array<BigInt>,
    signatures: Array<string>,
    calldatas: Array<Bytes>,
    description: string
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "propose",
      "propose(address[],uint256[],string[],bytes[],string):(uint256)",
      [
        ethereum.Value.fromAddressArray(targets),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromStringArray(signatures),
        ethereum.Value.fromBytesArray(calldatas),
        ethereum.Value.fromString(description)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  quorumVotes(): BigInt {
    let result = super.call("quorumVotes", "quorumVotes():(uint256)", []);

    return result[0].toBigInt();
  }

  try_quorumVotes(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("quorumVotes", "quorumVotes():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  state(proposalId: BigInt): i32 {
    let result = super.call("state", "state(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(proposalId)
    ]);

    return result[0].toI32();
  }

  try_state(proposalId: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall("state", "state(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(proposalId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  timelock(): Address {
    let result = super.call("timelock", "timelock():(address)", []);

    return result[0].toAddress();
  }

  try_timelock(): ethereum.CallResult<Address> {
    let result = super.tryCall("timelock", "timelock():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  votingDelay(): BigInt {
    let result = super.call("votingDelay", "votingDelay():(uint256)", []);

    return result[0].toBigInt();
  }

  try_votingDelay(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("votingDelay", "votingDelay():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  votingPeriod(): BigInt {
    let result = super.call("votingPeriod", "votingPeriod():(uint256)", []);

    return result[0].toBigInt();
  }

  try_votingPeriod(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("votingPeriod", "votingPeriod():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  get timelock_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get gtc_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class CastVoteCall extends ethereum.Call {
  get inputs(): CastVoteCall__Inputs {
    return new CastVoteCall__Inputs(this);
  }

  get outputs(): CastVoteCall__Outputs {
    return new CastVoteCall__Outputs(this);
  }
}

export class CastVoteCall__Inputs {
  _call: CastVoteCall;

  constructor(call: CastVoteCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get support(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class CastVoteCall__Outputs {
  _call: CastVoteCall;

  constructor(call: CastVoteCall) {
    this._call = call;
  }
}

export class CastVoteBySigCall extends ethereum.Call {
  get inputs(): CastVoteBySigCall__Inputs {
    return new CastVoteBySigCall__Inputs(this);
  }

  get outputs(): CastVoteBySigCall__Outputs {
    return new CastVoteBySigCall__Outputs(this);
  }
}

export class CastVoteBySigCall__Inputs {
  _call: CastVoteBySigCall;

  constructor(call: CastVoteBySigCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get support(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get v(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class CastVoteBySigCall__Outputs {
  _call: CastVoteBySigCall;

  constructor(call: CastVoteBySigCall) {
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
}

export class ExecuteCall__Outputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }
}

export class ProposeCall extends ethereum.Call {
  get inputs(): ProposeCall__Inputs {
    return new ProposeCall__Inputs(this);
  }

  get outputs(): ProposeCall__Outputs {
    return new ProposeCall__Outputs(this);
  }
}

export class ProposeCall__Inputs {
  _call: ProposeCall;

  constructor(call: ProposeCall) {
    this._call = call;
  }

  get targets(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get signatures(): Array<string> {
    return this._call.inputValues[2].value.toStringArray();
  }

  get calldatas(): Array<Bytes> {
    return this._call.inputValues[3].value.toBytesArray();
  }

  get description(): string {
    return this._call.inputValues[4].value.toString();
  }
}

export class ProposeCall__Outputs {
  _call: ProposeCall;

  constructor(call: ProposeCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class QueueCall extends ethereum.Call {
  get inputs(): QueueCall__Inputs {
    return new QueueCall__Inputs(this);
  }

  get outputs(): QueueCall__Outputs {
    return new QueueCall__Outputs(this);
  }
}

export class QueueCall__Inputs {
  _call: QueueCall;

  constructor(call: QueueCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class QueueCall__Outputs {
  _call: QueueCall;

  constructor(call: QueueCall) {
    this._call = call;
  }
}
