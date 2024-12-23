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

export class AbstainWins extends ethereum.Event {
  get params(): AbstainWins__Params {
    return new AbstainWins__Params(this);
  }
}

export class AbstainWins__Params {
  _event: AbstainWins;

  constructor(event: AbstainWins) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get abstainVotingPower(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get yesVotingPower(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get noVotingPower(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class NoWins extends ethereum.Event {
  get params(): NoWins__Params {
    return new NoWins__Params(this);
  }
}

export class NoWins__Params {
  _event: NoWins;

  constructor(event: NoWins) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get abstainVotingPower(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get yesVotingPower(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get noVotingPower(): BigInt {
    return this._event.parameters[3].value.toBigInt();
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

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get proposalType(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get propositionPowerOfCreator(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get threshold(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get maxMovesToVotingAllowed(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get votingBlocksDuration(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get validatingBlocksDuration(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get proposalExecutor(): Address {
    return this._event.parameters[8].value.toAddress();
  }
}

export class StatusChangeToExecuted extends ethereum.Event {
  get params(): StatusChangeToExecuted__Params {
    return new StatusChangeToExecuted__Params(this);
  }
}

export class StatusChangeToExecuted__Params {
  _event: StatusChangeToExecuted;

  constructor(event: StatusChangeToExecuted) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class StatusChangeToValidating extends ethereum.Event {
  get params(): StatusChangeToValidating__Params {
    return new StatusChangeToValidating__Params(this);
  }
}

export class StatusChangeToValidating__Params {
  _event: StatusChangeToValidating;

  constructor(event: StatusChangeToValidating) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class StatusChangeToVoting extends ethereum.Event {
  get params(): StatusChangeToVoting__Params {
    return new StatusChangeToVoting__Params(this);
  }
}

export class StatusChangeToVoting__Params {
  _event: StatusChangeToVoting;

  constructor(event: StatusChangeToVoting) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get movesToVoting(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class VoteCancelled extends ethereum.Event {
  get params(): VoteCancelled__Params {
    return new VoteCancelled__Params(this);
  }
}

export class VoteCancelled__Params {
  _event: VoteCancelled;

  constructor(event: VoteCancelled) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get voter(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get vote(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get asset(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get weight(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get balance(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get proposalStatusBefore(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class VoteEmitted extends ethereum.Event {
  get params(): VoteEmitted__Params {
    return new VoteEmitted__Params(this);
  }
}

export class VoteEmitted__Params {
  _event: VoteEmitted;

  constructor(event: VoteEmitted) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get voter(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get vote(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get asset(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get weight(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get balance(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class YesWins extends ethereum.Event {
  get params(): YesWins__Params {
    return new YesWins__Params(this);
  }
}

export class YesWins__Params {
  _event: YesWins;

  constructor(event: YesWins) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get abstainVotingPower(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get yesVotingPower(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get noVotingPower(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class AaveGovernor__getProposalBasicDataResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;
  value9: Address;
  value10: Bytes;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt,
    value9: Address,
    value10: Bytes,
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
    this.value9 = value9;
    this.value10 = value10;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set("value9", ethereum.Value.fromAddress(this.value9));
    map.set("value10", ethereum.Value.fromFixedBytes(this.value10));
    return map;
  }

  get_totalVotes(): BigInt {
    return this.value0;
  }

  get_threshold(): BigInt {
    return this.value1;
  }

  get_maxMovesToVotingAllowed(): BigInt {
    return this.value2;
  }

  get_movesToVoting(): BigInt {
    return this.value3;
  }

  get_votingBlocksDuration(): BigInt {
    return this.value4;
  }

  get_validatingBlocksDuration(): BigInt {
    return this.value5;
  }

  get_currentStatusInitBlock(): BigInt {
    return this.value6;
  }

  get_initProposalBlock(): BigInt {
    return this.value7;
  }

  get_proposalStatus(): BigInt {
    return this.value8;
  }

  get_proposalExecutor(): Address {
    return this.value9;
  }

  get_proposalType(): Bytes {
    return this.value10;
  }
}

export class AaveGovernor__getVoterDataResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: Address;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: Address,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    return map;
  }

  get_vote(): BigInt {
    return this.value0;
  }

  get_weight(): BigInt {
    return this.value1;
  }

  get_balance(): BigInt {
    return this.value2;
  }

  get_nonce(): BigInt {
    return this.value3;
  }

  get_asset(): Address {
    return this.value4;
  }
}

export class AaveGovernor extends ethereum.SmartContract {
  static bind(address: Address): AaveGovernor {
    return new AaveGovernor("AaveGovernor", address);
  }

  COUNT_CHOICES(): BigInt {
    let result = super.call("COUNT_CHOICES", "COUNT_CHOICES():(uint256)", []);

    return result[0].toBigInt();
  }

  try_COUNT_CHOICES(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "COUNT_CHOICES",
      "COUNT_CHOICES():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_MAXMOVESTOVOTINGALLOWED(): BigInt {
    let result = super.call(
      "MAX_MAXMOVESTOVOTINGALLOWED",
      "MAX_MAXMOVESTOVOTINGALLOWED():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_MAX_MAXMOVESTOVOTINGALLOWED(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_MAXMOVESTOVOTINGALLOWED",
      "MAX_MAXMOVESTOVOTINGALLOWED():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MIN_MAXMOVESTOVOTINGALLOWED(): BigInt {
    let result = super.call(
      "MIN_MAXMOVESTOVOTINGALLOWED",
      "MIN_MAXMOVESTOVOTINGALLOWED():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_MIN_MAXMOVESTOVOTINGALLOWED(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MIN_MAXMOVESTOVOTINGALLOWED",
      "MIN_MAXMOVESTOVOTINGALLOWED():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MIN_STATUS_DURATION(): BigInt {
    let result = super.call(
      "MIN_STATUS_DURATION",
      "MIN_STATUS_DURATION():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_MIN_STATUS_DURATION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MIN_STATUS_DURATION",
      "MIN_STATUS_DURATION():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MIN_THRESHOLD(): BigInt {
    let result = super.call("MIN_THRESHOLD", "MIN_THRESHOLD():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MIN_THRESHOLD(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MIN_THRESHOLD",
      "MIN_THRESHOLD():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getGovParamsProvider(): Address {
    let result = super.call(
      "getGovParamsProvider",
      "getGovParamsProvider():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_getGovParamsProvider(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getGovParamsProvider",
      "getGovParamsProvider():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLeadingChoice(_proposalId: BigInt): BigInt {
    let result = super.call(
      "getLeadingChoice",
      "getLeadingChoice(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)],
    );

    return result[0].toBigInt();
  }

  try_getLeadingChoice(_proposalId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLeadingChoice",
      "getLeadingChoice(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLimitBlockOfProposal(_proposalId: BigInt): BigInt {
    let result = super.call(
      "getLimitBlockOfProposal",
      "getLimitBlockOfProposal(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)],
    );

    return result[0].toBigInt();
  }

  try_getLimitBlockOfProposal(
    _proposalId: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLimitBlockOfProposal",
      "getLimitBlockOfProposal(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getProposalBasicData(
    _proposalId: BigInt,
  ): AaveGovernor__getProposalBasicDataResult {
    let result = super.call(
      "getProposalBasicData",
      "getProposalBasicData(uint256):(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,bytes32)",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)],
    );

    return new AaveGovernor__getProposalBasicDataResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toAddress(),
      result[10].toBytes(),
    );
  }

  try_getProposalBasicData(
    _proposalId: BigInt,
  ): ethereum.CallResult<AaveGovernor__getProposalBasicDataResult> {
    let result = super.tryCall(
      "getProposalBasicData",
      "getProposalBasicData(uint256):(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,bytes32)",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AaveGovernor__getProposalBasicDataResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toAddress(),
        value[10].toBytes(),
      ),
    );
  }

  getVoterData(
    _proposalId: BigInt,
    _voterAddress: Address,
  ): AaveGovernor__getVoterDataResult {
    let result = super.call(
      "getVoterData",
      "getVoterData(uint256,address):(uint256,uint256,uint256,uint256,address)",
      [
        ethereum.Value.fromUnsignedBigInt(_proposalId),
        ethereum.Value.fromAddress(_voterAddress),
      ],
    );

    return new AaveGovernor__getVoterDataResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toAddress(),
    );
  }

  try_getVoterData(
    _proposalId: BigInt,
    _voterAddress: Address,
  ): ethereum.CallResult<AaveGovernor__getVoterDataResult> {
    let result = super.tryCall(
      "getVoterData",
      "getVoterData(uint256,address):(uint256,uint256,uint256,uint256,address)",
      [
        ethereum.Value.fromUnsignedBigInt(_proposalId),
        ethereum.Value.fromAddress(_voterAddress),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AaveGovernor__getVoterDataResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toAddress(),
      ),
    );
  }

  getVotesData(_proposalId: BigInt): Array<BigInt> {
    let result = super.call(
      "getVotesData",
      "getVotesData(uint256):(uint256[3])",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)],
    );

    return result[0].toBigIntArray();
  }

  try_getVotesData(_proposalId: BigInt): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getVotesData",
      "getVotesData(uint256):(uint256[3])",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
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

  get _govParamsProvider(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class CancelVoteByRelayerCall extends ethereum.Call {
  get inputs(): CancelVoteByRelayerCall__Inputs {
    return new CancelVoteByRelayerCall__Inputs(this);
  }

  get outputs(): CancelVoteByRelayerCall__Outputs {
    return new CancelVoteByRelayerCall__Outputs(this);
  }
}

export class CancelVoteByRelayerCall__Inputs {
  _call: CancelVoteByRelayerCall;

  constructor(call: CancelVoteByRelayerCall) {
    this._call = call;
  }

  get _proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _voter(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _nonce(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _signature(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get _paramsHashByVoter(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class CancelVoteByRelayerCall__Outputs {
  _call: CancelVoteByRelayerCall;

  constructor(call: CancelVoteByRelayerCall) {
    this._call = call;
  }
}

export class CancelVoteByVoterCall extends ethereum.Call {
  get inputs(): CancelVoteByVoterCall__Inputs {
    return new CancelVoteByVoterCall__Inputs(this);
  }

  get outputs(): CancelVoteByVoterCall__Outputs {
    return new CancelVoteByVoterCall__Outputs(this);
  }
}

export class CancelVoteByVoterCall__Inputs {
  _call: CancelVoteByVoterCall;

  constructor(call: CancelVoteByVoterCall) {
    this._call = call;
  }

  get _proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelVoteByVoterCall__Outputs {
  _call: CancelVoteByVoterCall;

  constructor(call: CancelVoteByVoterCall) {
    this._call = call;
  }
}

export class ChallengeVotersCall extends ethereum.Call {
  get inputs(): ChallengeVotersCall__Inputs {
    return new ChallengeVotersCall__Inputs(this);
  }

  get outputs(): ChallengeVotersCall__Outputs {
    return new ChallengeVotersCall__Outputs(this);
  }
}

export class ChallengeVotersCall__Inputs {
  _call: ChallengeVotersCall;

  constructor(call: ChallengeVotersCall) {
    this._call = call;
  }

  get _proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _voters(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class ChallengeVotersCall__Outputs {
  _call: ChallengeVotersCall;

  constructor(call: ChallengeVotersCall) {
    this._call = call;
  }
}

export class NewProposalCall extends ethereum.Call {
  get inputs(): NewProposalCall__Inputs {
    return new NewProposalCall__Inputs(this);
  }

  get outputs(): NewProposalCall__Outputs {
    return new NewProposalCall__Outputs(this);
  }
}

export class NewProposalCall__Inputs {
  _call: NewProposalCall;

  constructor(call: NewProposalCall) {
    this._call = call;
  }

  get _proposalType(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _threshold(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _proposalExecutor(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _votingBlocksDuration(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _validatingBlocksDuration(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _maxMovesToVotingAllowed(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class NewProposalCall__Outputs {
  _call: NewProposalCall;

  constructor(call: NewProposalCall) {
    this._call = call;
  }
}

export class ResolveProposalCall extends ethereum.Call {
  get inputs(): ResolveProposalCall__Inputs {
    return new ResolveProposalCall__Inputs(this);
  }

  get outputs(): ResolveProposalCall__Outputs {
    return new ResolveProposalCall__Outputs(this);
  }
}

export class ResolveProposalCall__Inputs {
  _call: ResolveProposalCall;

  constructor(call: ResolveProposalCall) {
    this._call = call;
  }

  get _proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ResolveProposalCall__Outputs {
  _call: ResolveProposalCall;

  constructor(call: ResolveProposalCall) {
    this._call = call;
  }
}

export class SubmitVoteByRelayerCall extends ethereum.Call {
  get inputs(): SubmitVoteByRelayerCall__Inputs {
    return new SubmitVoteByRelayerCall__Inputs(this);
  }

  get outputs(): SubmitVoteByRelayerCall__Outputs {
    return new SubmitVoteByRelayerCall__Outputs(this);
  }
}

export class SubmitVoteByRelayerCall__Inputs {
  _call: SubmitVoteByRelayerCall;

  constructor(call: SubmitVoteByRelayerCall) {
    this._call = call;
  }

  get _proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _vote(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _voter(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _asset(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _nonce(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _signature(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get _paramsHashByVoter(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class SubmitVoteByRelayerCall__Outputs {
  _call: SubmitVoteByRelayerCall;

  constructor(call: SubmitVoteByRelayerCall) {
    this._call = call;
  }
}

export class SubmitVoteByVoterCall extends ethereum.Call {
  get inputs(): SubmitVoteByVoterCall__Inputs {
    return new SubmitVoteByVoterCall__Inputs(this);
  }

  get outputs(): SubmitVoteByVoterCall__Outputs {
    return new SubmitVoteByVoterCall__Outputs(this);
  }
}

export class SubmitVoteByVoterCall__Inputs {
  _call: SubmitVoteByVoterCall;

  constructor(call: SubmitVoteByVoterCall) {
    this._call = call;
  }

  get _proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _vote(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _asset(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class SubmitVoteByVoterCall__Outputs {
  _call: SubmitVoteByVoterCall;

  constructor(call: SubmitVoteByVoterCall) {
    this._call = call;
  }
}

export class TryToMoveToValidatingCall extends ethereum.Call {
  get inputs(): TryToMoveToValidatingCall__Inputs {
    return new TryToMoveToValidatingCall__Inputs(this);
  }

  get outputs(): TryToMoveToValidatingCall__Outputs {
    return new TryToMoveToValidatingCall__Outputs(this);
  }
}

export class TryToMoveToValidatingCall__Inputs {
  _call: TryToMoveToValidatingCall;

  constructor(call: TryToMoveToValidatingCall) {
    this._call = call;
  }

  get _proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class TryToMoveToValidatingCall__Outputs {
  _call: TryToMoveToValidatingCall;

  constructor(call: TryToMoveToValidatingCall) {
    this._call = call;
  }
}
