/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../../../common";

export interface ARBTriCryptoOracleInterface extends utils.Interface {
  functions: {
    "A0()": FunctionFragment;
    "BTC_FEED()": FunctionFragment;
    "DISCOUNT0()": FunctionFragment;
    "ETH_FEED()": FunctionFragment;
    "GAMMA0()": FunctionFragment;
    "TRI_CRYPTO()": FunctionFragment;
    "USDT_FEED()": FunctionFragment;
    "WBTC_FEED()": FunctionFragment;
    "_name()": FunctionFragment;
    "_symbol()": FunctionFragment;
    "decimals()": FunctionFragment;
    "get(bytes)": FunctionFragment;
    "name(bytes)": FunctionFragment;
    "peek(bytes)": FunctionFragment;
    "peekSpot(bytes)": FunctionFragment;
    "symbol(bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "A0"
      | "A0()"
      | "BTC_FEED"
      | "BTC_FEED()"
      | "DISCOUNT0"
      | "DISCOUNT0()"
      | "ETH_FEED"
      | "ETH_FEED()"
      | "GAMMA0"
      | "GAMMA0()"
      | "TRI_CRYPTO"
      | "TRI_CRYPTO()"
      | "USDT_FEED"
      | "USDT_FEED()"
      | "WBTC_FEED"
      | "WBTC_FEED()"
      | "_name"
      | "_name()"
      | "_symbol"
      | "_symbol()"
      | "decimals"
      | "decimals()"
      | "get"
      | "get(bytes)"
      | "name"
      | "name(bytes)"
      | "peek"
      | "peek(bytes)"
      | "peekSpot"
      | "peekSpot(bytes)"
      | "symbol"
      | "symbol(bytes)"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "A0", values?: undefined): string;
  encodeFunctionData(functionFragment: "A0()", values?: undefined): string;
  encodeFunctionData(functionFragment: "BTC_FEED", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "BTC_FEED()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "DISCOUNT0", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DISCOUNT0()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ETH_FEED", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ETH_FEED()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "GAMMA0", values?: undefined): string;
  encodeFunctionData(functionFragment: "GAMMA0()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "TRI_CRYPTO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TRI_CRYPTO()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "USDT_FEED", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "USDT_FEED()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "WBTC_FEED", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "WBTC_FEED()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_name", values?: undefined): string;
  encodeFunctionData(functionFragment: "_name()", values?: undefined): string;
  encodeFunctionData(functionFragment: "_symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "_symbol()", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decimals()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "get(bytes)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "name",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "name(bytes)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "peek",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "peek(bytes)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "peekSpot",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "peekSpot(bytes)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "symbol",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "symbol(bytes)",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "A0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "A0()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "BTC_FEED", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "BTC_FEED()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DISCOUNT0", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DISCOUNT0()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ETH_FEED", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ETH_FEED()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "GAMMA0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "GAMMA0()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TRI_CRYPTO", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "TRI_CRYPTO()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "USDT_FEED", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "USDT_FEED()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "WBTC_FEED", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "WBTC_FEED()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_name()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_symbol()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get(bytes)", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "name(bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "peek", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "peek(bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "peekSpot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "peekSpot(bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "symbol(bytes)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ARBTriCryptoOracle extends BaseContract {
  contractName: "ARBTriCryptoOracle";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ARBTriCryptoOracleInterface;

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
    A0(overrides?: CallOverrides): Promise<[BigNumber]>;

    "A0()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    BTC_FEED(overrides?: CallOverrides): Promise<[string]>;

    "BTC_FEED()"(overrides?: CallOverrides): Promise<[string]>;

    DISCOUNT0(overrides?: CallOverrides): Promise<[BigNumber]>;

    "DISCOUNT0()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    ETH_FEED(overrides?: CallOverrides): Promise<[string]>;

    "ETH_FEED()"(overrides?: CallOverrides): Promise<[string]>;

    GAMMA0(overrides?: CallOverrides): Promise<[BigNumber]>;

    "GAMMA0()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    TRI_CRYPTO(overrides?: CallOverrides): Promise<[string]>;

    "TRI_CRYPTO()"(overrides?: CallOverrides): Promise<[string]>;

    USDT_FEED(overrides?: CallOverrides): Promise<[string]>;

    "USDT_FEED()"(overrides?: CallOverrides): Promise<[string]>;

    WBTC_FEED(overrides?: CallOverrides): Promise<[string]>;

    "WBTC_FEED()"(overrides?: CallOverrides): Promise<[string]>;

    _name(overrides?: CallOverrides): Promise<[string]>;

    "_name()"(overrides?: CallOverrides): Promise<[string]>;

    _symbol(overrides?: CallOverrides): Promise<[string]>;

    "_symbol()"(overrides?: CallOverrides): Promise<[string]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    "decimals()"(overrides?: CallOverrides): Promise<[number]>;

    get(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "get(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    name(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "name(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    peek(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { success: boolean; rate: BigNumber }>;

    "peek(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { success: boolean; rate: BigNumber }>;

    peekSpot(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    "peekSpot(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    symbol(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "symbol(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  A0(overrides?: CallOverrides): Promise<BigNumber>;

  "A0()"(overrides?: CallOverrides): Promise<BigNumber>;

  BTC_FEED(overrides?: CallOverrides): Promise<string>;

  "BTC_FEED()"(overrides?: CallOverrides): Promise<string>;

  DISCOUNT0(overrides?: CallOverrides): Promise<BigNumber>;

  "DISCOUNT0()"(overrides?: CallOverrides): Promise<BigNumber>;

  ETH_FEED(overrides?: CallOverrides): Promise<string>;

  "ETH_FEED()"(overrides?: CallOverrides): Promise<string>;

  GAMMA0(overrides?: CallOverrides): Promise<BigNumber>;

  "GAMMA0()"(overrides?: CallOverrides): Promise<BigNumber>;

  TRI_CRYPTO(overrides?: CallOverrides): Promise<string>;

  "TRI_CRYPTO()"(overrides?: CallOverrides): Promise<string>;

  USDT_FEED(overrides?: CallOverrides): Promise<string>;

  "USDT_FEED()"(overrides?: CallOverrides): Promise<string>;

  WBTC_FEED(overrides?: CallOverrides): Promise<string>;

  "WBTC_FEED()"(overrides?: CallOverrides): Promise<string>;

  _name(overrides?: CallOverrides): Promise<string>;

  "_name()"(overrides?: CallOverrides): Promise<string>;

  _symbol(overrides?: CallOverrides): Promise<string>;

  "_symbol()"(overrides?: CallOverrides): Promise<string>;

  decimals(overrides?: CallOverrides): Promise<number>;

  "decimals()"(overrides?: CallOverrides): Promise<number>;

  get(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "get(bytes)"(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  name(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "name(bytes)"(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  peek(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber] & { success: boolean; rate: BigNumber }>;

  "peek(bytes)"(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber] & { success: boolean; rate: BigNumber }>;

  peekSpot(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "peekSpot(bytes)"(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  symbol(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "symbol(bytes)"(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    A0(overrides?: CallOverrides): Promise<BigNumber>;

    "A0()"(overrides?: CallOverrides): Promise<BigNumber>;

    BTC_FEED(overrides?: CallOverrides): Promise<string>;

    "BTC_FEED()"(overrides?: CallOverrides): Promise<string>;

    DISCOUNT0(overrides?: CallOverrides): Promise<BigNumber>;

    "DISCOUNT0()"(overrides?: CallOverrides): Promise<BigNumber>;

    ETH_FEED(overrides?: CallOverrides): Promise<string>;

    "ETH_FEED()"(overrides?: CallOverrides): Promise<string>;

    GAMMA0(overrides?: CallOverrides): Promise<BigNumber>;

    "GAMMA0()"(overrides?: CallOverrides): Promise<BigNumber>;

    TRI_CRYPTO(overrides?: CallOverrides): Promise<string>;

    "TRI_CRYPTO()"(overrides?: CallOverrides): Promise<string>;

    USDT_FEED(overrides?: CallOverrides): Promise<string>;

    "USDT_FEED()"(overrides?: CallOverrides): Promise<string>;

    WBTC_FEED(overrides?: CallOverrides): Promise<string>;

    "WBTC_FEED()"(overrides?: CallOverrides): Promise<string>;

    _name(overrides?: CallOverrides): Promise<string>;

    "_name()"(overrides?: CallOverrides): Promise<string>;

    _symbol(overrides?: CallOverrides): Promise<string>;

    "_symbol()"(overrides?: CallOverrides): Promise<string>;

    decimals(overrides?: CallOverrides): Promise<number>;

    "decimals()"(overrides?: CallOverrides): Promise<number>;

    get(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { success: boolean; rate: BigNumber }>;

    "get(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { success: boolean; rate: BigNumber }>;

    name(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "name(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    peek(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { success: boolean; rate: BigNumber }>;

    "peek(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { success: boolean; rate: BigNumber }>;

    peekSpot(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "peekSpot(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "symbol(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    A0(overrides?: CallOverrides): Promise<BigNumber>;

    "A0()"(overrides?: CallOverrides): Promise<BigNumber>;

    BTC_FEED(overrides?: CallOverrides): Promise<BigNumber>;

    "BTC_FEED()"(overrides?: CallOverrides): Promise<BigNumber>;

    DISCOUNT0(overrides?: CallOverrides): Promise<BigNumber>;

    "DISCOUNT0()"(overrides?: CallOverrides): Promise<BigNumber>;

    ETH_FEED(overrides?: CallOverrides): Promise<BigNumber>;

    "ETH_FEED()"(overrides?: CallOverrides): Promise<BigNumber>;

    GAMMA0(overrides?: CallOverrides): Promise<BigNumber>;

    "GAMMA0()"(overrides?: CallOverrides): Promise<BigNumber>;

    TRI_CRYPTO(overrides?: CallOverrides): Promise<BigNumber>;

    "TRI_CRYPTO()"(overrides?: CallOverrides): Promise<BigNumber>;

    USDT_FEED(overrides?: CallOverrides): Promise<BigNumber>;

    "USDT_FEED()"(overrides?: CallOverrides): Promise<BigNumber>;

    WBTC_FEED(overrides?: CallOverrides): Promise<BigNumber>;

    "WBTC_FEED()"(overrides?: CallOverrides): Promise<BigNumber>;

    _name(overrides?: CallOverrides): Promise<BigNumber>;

    "_name()"(overrides?: CallOverrides): Promise<BigNumber>;

    _symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "_symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "decimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    get(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "get(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    name(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "name(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    peek(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "peek(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    peekSpot(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "peekSpot(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "symbol(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    A0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "A0()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BTC_FEED(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "BTC_FEED()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DISCOUNT0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "DISCOUNT0()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ETH_FEED(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ETH_FEED()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GAMMA0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "GAMMA0()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TRI_CRYPTO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "TRI_CRYPTO()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDT_FEED(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "USDT_FEED()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WBTC_FEED(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "WBTC_FEED()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "_name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "_symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decimals()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "get(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    name(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "name(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    peek(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "peek(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    peekSpot(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "peekSpot(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "symbol(bytes)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
