/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Data, ERC20DataInterface } from "../ERC20Data";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061016a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806370a08231146100465780637ecebe0014610078578063dd62ed3e14610098575b600080fd5b6100666100543660046100df565b60006020819052908152604090205481565b60405190815260200160405180910390f35b6100666100863660046100df565b60026020526000908152604090205481565b6100666100a6366004610101565b600160209081526000928352604080842090915290825290205481565b80356001600160a01b03811681146100da57600080fd5b919050565b6000602082840312156100f157600080fd5b6100fa826100c3565b9392505050565b6000806040838503121561011457600080fd5b61011d836100c3565b915061012b602084016100c3565b9050925092905056fea2646970667358221220d2ec147014132406a49004d9e2e48c4596c42cb070f009867e216eb1780f994e64736f6c63430008090033";

type ERC20DataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20DataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Data__factory extends ContractFactory {
  constructor(...args: ERC20DataConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20Data";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Data> {
    return super.deploy(overrides || {}) as Promise<ERC20Data>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20Data {
    return super.attach(address) as ERC20Data;
  }
  connect(signer: Signer): ERC20Data__factory {
    return super.connect(signer) as ERC20Data__factory;
  }
  static readonly contractName: "ERC20Data";
  public readonly contractName: "ERC20Data";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20DataInterface {
    return new utils.Interface(_abi) as ERC20DataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Data {
    return new Contract(address, _abi, signerOrProvider) as ERC20Data;
  }
}