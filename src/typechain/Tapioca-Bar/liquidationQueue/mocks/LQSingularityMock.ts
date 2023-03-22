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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace ILiquidationQueue {
  export type LiquidationQueueMetaStruct = {
    activationTime: PromiseOrValue<BigNumberish>;
    minBidAmount: PromiseOrValue<BigNumberish>;
    feeCollector: PromiseOrValue<string>;
    bidExecutionSwapper: PromiseOrValue<string>;
    usdoSwapper: PromiseOrValue<string>;
  };

  export type LiquidationQueueMetaStructOutput = [
    BigNumber,
    BigNumber,
    string,
    string,
    string
  ] & {
    activationTime: BigNumber;
    minBidAmount: BigNumber;
    feeCollector: string;
    bidExecutionSwapper: string;
    usdoSwapper: string;
  };
}

export interface LQSingularityMockInterface extends utils.Interface {
  functions: {
    "initLq(address,(uint256,uint256,address,address,address))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "initLq"
      | "initLq(address,(uint256,uint256,address,address,address))"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "initLq",
    values: [
      PromiseOrValue<string>,
      ILiquidationQueue.LiquidationQueueMetaStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initLq(address,(uint256,uint256,address,address,address))",
    values: [
      PromiseOrValue<string>,
      ILiquidationQueue.LiquidationQueueMetaStruct
    ]
  ): string;

  decodeFunctionResult(functionFragment: "initLq", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initLq(address,(uint256,uint256,address,address,address))",
    data: BytesLike
  ): Result;

  events: {};
}

export interface LQSingularityMock extends BaseContract {
  contractName: "LQSingularityMock";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LQSingularityMockInterface;

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
    initLq(
      liquidationQueue: PromiseOrValue<string>,
      lqMeta: ILiquidationQueue.LiquidationQueueMetaStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "initLq(address,(uint256,uint256,address,address,address))"(
      liquidationQueue: PromiseOrValue<string>,
      lqMeta: ILiquidationQueue.LiquidationQueueMetaStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  initLq(
    liquidationQueue: PromiseOrValue<string>,
    lqMeta: ILiquidationQueue.LiquidationQueueMetaStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "initLq(address,(uint256,uint256,address,address,address))"(
    liquidationQueue: PromiseOrValue<string>,
    lqMeta: ILiquidationQueue.LiquidationQueueMetaStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    initLq(
      liquidationQueue: PromiseOrValue<string>,
      lqMeta: ILiquidationQueue.LiquidationQueueMetaStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    "initLq(address,(uint256,uint256,address,address,address))"(
      liquidationQueue: PromiseOrValue<string>,
      lqMeta: ILiquidationQueue.LiquidationQueueMetaStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    initLq(
      liquidationQueue: PromiseOrValue<string>,
      lqMeta: ILiquidationQueue.LiquidationQueueMetaStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "initLq(address,(uint256,uint256,address,address,address))"(
      liquidationQueue: PromiseOrValue<string>,
      lqMeta: ILiquidationQueue.LiquidationQueueMetaStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initLq(
      liquidationQueue: PromiseOrValue<string>,
      lqMeta: ILiquidationQueue.LiquidationQueueMetaStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "initLq(address,(uint256,uint256,address,address,address))"(
      liquidationQueue: PromiseOrValue<string>,
      lqMeta: ILiquidationQueue.LiquidationQueueMetaStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
