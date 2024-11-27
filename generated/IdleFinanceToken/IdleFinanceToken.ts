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

export class NewAdmin extends ethereum.Event {
  get params(): NewAdmin__Params {
    return new NewAdmin__Params(this);
  }
}

export class NewAdmin__Params {
  _event: NewAdmin;

  constructor(event: NewAdmin) {
    this._event = event;
  }

  get oldAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewImplementation extends ethereum.Event {
  get params(): NewImplementation__Params {
    return new NewImplementation__Params(this);
  }
}

export class NewImplementation__Params {
  _event: NewImplementation;

  constructor(event: NewImplementation) {
    this._event = event;
  }

  get oldImplementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newImplementation(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewPendingAdmin extends ethereum.Event {
  get params(): NewPendingAdmin__Params {
    return new NewPendingAdmin__Params(this);
  }
}

export class NewPendingAdmin__Params {
  _event: NewPendingAdmin;

  constructor(event: NewPendingAdmin) {
    this._event = event;
  }

  get oldPendingAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newPendingAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

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

export class ProposalThresholdSet extends ethereum.Event {
  get params(): ProposalThresholdSet__Params {
    return new ProposalThresholdSet__Params(this);
  }
}

export class ProposalThresholdSet__Params {
  _event: ProposalThresholdSet;

  constructor(event: ProposalThresholdSet) {
    this._event = event;
  }

  get oldProposalThreshold(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newProposalThreshold(): BigInt {
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

  get support(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get votes(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get reason(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class VotingDelaySet extends ethereum.Event {
  get params(): VotingDelaySet__Params {
    return new VotingDelaySet__Params(this);
  }
}

export class VotingDelaySet__Params {
  _event: VotingDelaySet;

  constructor(event: VotingDelaySet) {
    this._event = event;
  }

  get oldVotingDelay(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newVotingDelay(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class VotingPeriodSet extends ethereum.Event {
  get params(): VotingPeriodSet__Params {
    return new VotingPeriodSet__Params(this);
  }
}

export class VotingPeriodSet__Params {
  _event: VotingPeriodSet;

  constructor(event: VotingPeriodSet) {
    this._event = event;
  }

  get oldVotingPeriod(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newVotingPeriod(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class WhitelistAccountExpirationSet extends ethereum.Event {
  get params(): WhitelistAccountExpirationSet__Params {
    return new WhitelistAccountExpirationSet__Params(this);
  }
}

export class WhitelistAccountExpirationSet__Params {
  _event: WhitelistAccountExpirationSet;

  constructor(event: WhitelistAccountExpirationSet) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get expiration(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class WhitelistGuardianSet extends ethereum.Event {
  get params(): WhitelistGuardianSet__Params {
    return new WhitelistGuardianSet__Params(this);
  }
}

export class WhitelistGuardianSet__Params {
  _event: WhitelistGuardianSet;

  constructor(event: WhitelistGuardianSet) {
    this._event = event;
  }

  get oldGuardian(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newGuardian(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class IdleFinanceToken extends ethereum.SmartContract {
  static bind(address: Address): IdleFinanceToken {
    return new IdleFinanceToken("IdleFinanceToken", address);
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  implementation(): Address {
    let result = super.call("implementation", "implementation():(address)", []);

    return result[0].toAddress();
  }

  try_implementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingAdmin(): Address {
    let result = super.call("pendingAdmin", "pendingAdmin():(address)", []);

    return result[0].toAddress();
  }

  try_pendingAdmin(): ethereum.CallResult<Address> {
    let result = super.tryCall("pendingAdmin", "pendingAdmin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  get idle_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get admin_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get implementation_(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get votingPeriod_(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get votingDelay_(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get proposalThreshold_(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
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

export class _setImplementationCall extends ethereum.Call {
  get inputs(): _setImplementationCall__Inputs {
    return new _setImplementationCall__Inputs(this);
  }

  get outputs(): _setImplementationCall__Outputs {
    return new _setImplementationCall__Outputs(this);
  }
}

export class _setImplementationCall__Inputs {
  _call: _setImplementationCall;

  constructor(call: _setImplementationCall) {
    this._call = call;
  }

  get implementation_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class _setImplementationCall__Outputs {
  _call: _setImplementationCall;

  constructor(call: _setImplementationCall) {
    this._call = call;
  }
}
