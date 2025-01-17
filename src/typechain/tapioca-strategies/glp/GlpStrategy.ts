/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface GlpStrategyInterface extends utils.Interface {
  functions: {
    "cheapWithdrawable()": FunctionFragment;
    "claimOwnership()": FunctionFragment;
    "contractAddress()": FunctionFragment;
    "currentBalance()": FunctionFragment;
    "deposited(uint256)": FunctionFragment;
    "description()": FunctionFragment;
    "feeRecipient()": FunctionFragment;
    "feesPending()": FunctionFragment;
    "harvest()": FunctionFragment;
    "harvestGmx(uint256,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "setFeeRecipient(address)": FunctionFragment;
    "tokenId()": FunctionFragment;
    "tokenType()": FunctionFragment;
    "transferOwnership(address,bool,bool)": FunctionFragment;
    "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
    "withdrawFees()": FunctionFragment;
    "withdrawable()": FunctionFragment;
    "yieldBox()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cheapWithdrawable"
      | "cheapWithdrawable()"
      | "claimOwnership"
      | "claimOwnership()"
      | "contractAddress"
      | "contractAddress()"
      | "currentBalance"
      | "currentBalance()"
      | "deposited"
      | "deposited(uint256)"
      | "description"
      | "description()"
      | "feeRecipient"
      | "feeRecipient()"
      | "feesPending"
      | "feesPending()"
      | "harvest"
      | "harvest()"
      | "harvestGmx"
      | "harvestGmx(uint256,uint256)"
      | "name"
      | "name()"
      | "owner"
      | "owner()"
      | "pendingOwner"
      | "pendingOwner()"
      | "setFeeRecipient"
      | "setFeeRecipient(address)"
      | "tokenId"
      | "tokenId()"
      | "tokenType"
      | "tokenType()"
      | "transferOwnership"
      | "transferOwnership(address,bool,bool)"
      | "uniswapV3SwapCallback"
      | "uniswapV3SwapCallback(int256,int256,bytes)"
      | "withdraw"
      | "withdraw(address,uint256)"
      | "withdrawFees"
      | "withdrawFees()"
      | "withdrawable"
      | "withdrawable()"
      | "yieldBox"
      | "yieldBox()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cheapWithdrawable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cheapWithdrawable()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimOwnership()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractAddress()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentBalance()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposited",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "deposited(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "description()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeRecipient()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feesPending",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feesPending()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "harvest", values?: undefined): string;
  encodeFunctionData(functionFragment: "harvest()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "harvestGmx",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "harvestGmx(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "name()", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingOwner()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeRecipient",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeRecipient(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "tokenId", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokenId()", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokenType", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenType()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership(address,bool,bool)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3SwapCallback",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3SwapCallback(int256,int256,bytes)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFees()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawable()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "yieldBox", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "yieldBox()",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "cheapWithdrawable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cheapWithdrawable()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractAddress()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentBalance()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposited", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deposited(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "description()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeRecipient()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feesPending",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feesPending()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "harvest()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "harvestGmx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "harvestGmx(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeRecipient(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenId()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenType", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenType()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership(address,bool,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3SwapCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3SwapCallback(int256,int256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdraw(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFees()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawable()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "yieldBox", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "yieldBox()", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface GlpStrategy extends BaseContract {
  contractName: "GlpStrategy";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GlpStrategyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cheapWithdrawable(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    "cheapWithdrawable()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    claimOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    contractAddress(overrides?: CallOverrides): Promise<[string]>;

    "contractAddress()"(overrides?: CallOverrides): Promise<[string]>;

    currentBalance(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    "currentBalance()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    deposited(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "deposited(uint256)"(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    description(overrides?: CallOverrides): Promise<[string]>;

    "description()"(overrides?: CallOverrides): Promise<[string]>;

    feeRecipient(overrides?: CallOverrides): Promise<[string]>;

    "feeRecipient()"(overrides?: CallOverrides): Promise<[string]>;

    feesPending(overrides?: CallOverrides): Promise<[BigNumber]>;

    "feesPending()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    harvest(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "harvest()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    harvestGmx(
      priceNum: PromiseOrValue<BigNumberish>,
      priceDenom: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "harvestGmx(uint256,uint256)"(
      priceNum: PromiseOrValue<BigNumberish>,
      priceDenom: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    "name()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<[string]>;

    setFeeRecipient(
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setFeeRecipient(address)"(
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "tokenId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenType(overrides?: CallOverrides): Promise<[number]>;

    "tokenType()"(overrides?: CallOverrides): Promise<[number]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address,bool,bool)"(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uniswapV3SwapCallback(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "uniswapV3SwapCallback(int256,int256,bytes)"(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "withdraw(address,uint256)"(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawFees(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "withdrawFees()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawable(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    "withdrawable()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    yieldBox(overrides?: CallOverrides): Promise<[string]>;

    "yieldBox()"(overrides?: CallOverrides): Promise<[string]>;
  };

  cheapWithdrawable(overrides?: CallOverrides): Promise<BigNumber>;

  "cheapWithdrawable()"(overrides?: CallOverrides): Promise<BigNumber>;

  claimOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "claimOwnership()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  contractAddress(overrides?: CallOverrides): Promise<string>;

  "contractAddress()"(overrides?: CallOverrides): Promise<string>;

  currentBalance(overrides?: CallOverrides): Promise<BigNumber>;

  "currentBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

  deposited(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "deposited(uint256)"(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  description(overrides?: CallOverrides): Promise<string>;

  "description()"(overrides?: CallOverrides): Promise<string>;

  feeRecipient(overrides?: CallOverrides): Promise<string>;

  "feeRecipient()"(overrides?: CallOverrides): Promise<string>;

  feesPending(overrides?: CallOverrides): Promise<BigNumber>;

  "feesPending()"(overrides?: CallOverrides): Promise<BigNumber>;

  harvest(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "harvest()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  harvestGmx(
    priceNum: PromiseOrValue<BigNumberish>,
    priceDenom: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "harvestGmx(uint256,uint256)"(
    priceNum: PromiseOrValue<BigNumberish>,
    priceDenom: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

  setFeeRecipient(
    recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setFeeRecipient(address)"(
    recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenId(overrides?: CallOverrides): Promise<BigNumber>;

  "tokenId()"(overrides?: CallOverrides): Promise<BigNumber>;

  tokenType(overrides?: CallOverrides): Promise<number>;

  "tokenType()"(overrides?: CallOverrides): Promise<number>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    direct: PromiseOrValue<boolean>,
    renounce: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address,bool,bool)"(
    newOwner: PromiseOrValue<string>,
    direct: PromiseOrValue<boolean>,
    renounce: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uniswapV3SwapCallback(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "uniswapV3SwapCallback(int256,int256,bytes)"(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "withdraw(address,uint256)"(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawFees(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "withdrawFees()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawable(overrides?: CallOverrides): Promise<BigNumber>;

  "withdrawable()"(overrides?: CallOverrides): Promise<BigNumber>;

  yieldBox(overrides?: CallOverrides): Promise<string>;

  "yieldBox()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cheapWithdrawable(overrides?: CallOverrides): Promise<BigNumber>;

    "cheapWithdrawable()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    "claimOwnership()"(overrides?: CallOverrides): Promise<void>;

    contractAddress(overrides?: CallOverrides): Promise<string>;

    "contractAddress()"(overrides?: CallOverrides): Promise<string>;

    currentBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "currentBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    deposited(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "deposited(uint256)"(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    description(overrides?: CallOverrides): Promise<string>;

    "description()"(overrides?: CallOverrides): Promise<string>;

    feeRecipient(overrides?: CallOverrides): Promise<string>;

    "feeRecipient()"(overrides?: CallOverrides): Promise<string>;

    feesPending(overrides?: CallOverrides): Promise<BigNumber>;

    "feesPending()"(overrides?: CallOverrides): Promise<BigNumber>;

    harvest(overrides?: CallOverrides): Promise<void>;

    "harvest()"(overrides?: CallOverrides): Promise<void>;

    harvestGmx(
      priceNum: PromiseOrValue<BigNumberish>,
      priceDenom: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "harvestGmx(uint256,uint256)"(
      priceNum: PromiseOrValue<BigNumberish>,
      priceDenom: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

    setFeeRecipient(
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFeeRecipient(address)"(
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenId(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenId()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenType(overrides?: CallOverrides): Promise<number>;

    "tokenType()"(overrides?: CallOverrides): Promise<number>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address,bool,bool)"(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    uniswapV3SwapCallback(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "uniswapV3SwapCallback(int256,int256,bytes)"(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(address,uint256)"(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawFees(overrides?: CallOverrides): Promise<void>;

    "withdrawFees()"(overrides?: CallOverrides): Promise<void>;

    withdrawable(overrides?: CallOverrides): Promise<BigNumber>;

    "withdrawable()"(overrides?: CallOverrides): Promise<BigNumber>;

    yieldBox(overrides?: CallOverrides): Promise<string>;

    "yieldBox()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    cheapWithdrawable(overrides?: CallOverrides): Promise<BigNumber>;

    "cheapWithdrawable()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    contractAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "contractAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    currentBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "currentBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    deposited(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "deposited(uint256)"(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<BigNumber>;

    "description()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    "feeRecipient()"(overrides?: CallOverrides): Promise<BigNumber>;

    feesPending(overrides?: CallOverrides): Promise<BigNumber>;

    "feesPending()"(overrides?: CallOverrides): Promise<BigNumber>;

    harvest(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "harvest()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    harvestGmx(
      priceNum: PromiseOrValue<BigNumberish>,
      priceDenom: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "harvestGmx(uint256,uint256)"(
      priceNum: PromiseOrValue<BigNumberish>,
      priceDenom: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    setFeeRecipient(
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setFeeRecipient(address)"(
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenId(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenId()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenType(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenType()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address,bool,bool)"(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uniswapV3SwapCallback(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "uniswapV3SwapCallback(int256,int256,bytes)"(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "withdraw(address,uint256)"(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawFees(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "withdrawFees()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawable(overrides?: CallOverrides): Promise<BigNumber>;

    "withdrawable()"(overrides?: CallOverrides): Promise<BigNumber>;

    yieldBox(overrides?: CallOverrides): Promise<BigNumber>;

    "yieldBox()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cheapWithdrawable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "cheapWithdrawable()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    contractAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "contractAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentBalance()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposited(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "deposited(uint256)"(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "description()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feeRecipient()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feesPending(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feesPending()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    harvest(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "harvest()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    harvestGmx(
      priceNum: PromiseOrValue<BigNumberish>,
      priceDenom: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "harvestGmx(uint256,uint256)"(
      priceNum: PromiseOrValue<BigNumberish>,
      priceDenom: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFeeRecipient(
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setFeeRecipient(address)"(
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tokenId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tokenType()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address,bool,bool)"(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uniswapV3SwapCallback(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "uniswapV3SwapCallback(int256,int256,bytes)"(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(address,uint256)"(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFees(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawFees()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "withdrawable()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    yieldBox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "yieldBox()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
