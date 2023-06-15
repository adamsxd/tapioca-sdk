/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Balancer, BalancerInterface } from "../Balancer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_routerETH",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "DestinationNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "DestinationOftNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "ExceedsBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "FeeAmountNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "PoolInfoRequired",
    type: "error",
  },
  {
    inputs: [],
    name: "RebalanceAmountNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "RouterNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "SlippageNotValid",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_srcOft",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_dstOft",
        type: "address",
      },
    ],
    name: "ConnectedChainUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_srcOft",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalAmount",
        type: "uint256",
      },
    ],
    name: "RebalanceAmountUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_srcOft",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_slippage",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_isNative",
        type: "bool",
      },
    ],
    name: "Rebalanced",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_srcOft",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "addRebalanceAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_srcOft",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
    ],
    name: "checker",
    outputs: [
      {
        internalType: "bool",
        name: "canExec",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "execPayload",
        type: "bytes",
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
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    name: "connectedOFTs",
    outputs: [
      {
        internalType: "uint256",
        name: "srcPoolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dstPoolId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "dstOft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rebalanceable",
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
        name: "_srcOft",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "_dstOft",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_ercData",
        type: "bytes",
      },
    ],
    name: "initConnectedOFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_srcOft",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "_slippage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_ercData",
        type: "bytes",
      },
    ],
    name: "rebalance",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IStargateRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "routerETH",
    outputs: [
      {
        internalType: "contract IStargateRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c03461011b57601f61120338819003918201601f19168301916001600160401b038311848410176101205780849260609460405283398101031261011b5761006c61004a82610136565b604061005860208501610136565b936001600160a01b03938492839201610136565b16938460018060a01b031960005416176000556040519460007f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768180a31692831561010c57501680156100fa5760805260a0526040516110b8908161014b823960805181818160f001526102c0015260a05181818160a90152818161059b015281816105f601526106d60152f35b604051630801eaf160e01b8152600490fd5b630801eaf160e01b8152600490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820361011b5756fe6080604052600436101561001b575b361561001957600080fd5b005b6000803560e01c806303d5692614610c1557806313af403514610ba85780635dd94d4e14610b33578063623c12f8146109b557806380fd8987146108bf5780638da5cb5b146108995780639c25e27d14610114578063bcf8699f146100d05763f887ea401461008a575061000e565b346100cd57806003193601126100cd5760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b80fd5b50346100cd57806003193601126100cd5760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b5060a03660031901126100cd57610129610ddd565b610131610df8565b9060843567ffffffffffffffff811161044157610152903690600401610e77565b906101686001600160a01b038554163314610f0e565b6001600160a01b038116845260016020526040842061ffff841685526020526001600160a01b036002604086200154161561088757620186a06044351015610875576001600160a01b038116845260016020526040842061ffff84168552602052606435600360408620015410610863576001600160a01b038116845260016020526040842061ffff8416855260205261021c836001600160a01b036002604088200154166001600160a01b038416610fb9565b15610851576001600160a01b0381163b156104415760405163411950f360e11b815260643560048201528481602481836001600160a01b0387165af1801561077f5761083e575b50604051633c2f4f4360e11b8152916020836004816001600160a01b0386165afa92831561077f57859361081d575b506001600160a01b038316610474575060643534111561046257606435471061045057836001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166001600160a01b038316825260016020526040822061ffff8616600052602052600260406000200154604051906001600160601b03199060601b1660208201526014815261032d81610e39565b61033b604435606435611063565b90823b15610441576103889261ffff858981956040519788968795869463088a669560e11b86521660048501526001600160a01b038c16602485015260a0604485015260a4840190610ece565b906064356064840152608483015203925af180156104455761042d575b50506001600160a01b03608091817f7007030f22ba868c6abdfc92d9c47da38dca4e3c200c2d47043b5f5406bd0c0c945b818316885260016020526040882061ffff881660005260205260036040600020016104046064358254610f68565b905561ffff6040519716875260443560208801526064356040880152161560608601521692a280f35b61043690610e09565b6104415783386103a5565b8380fd5b6040513d84823e3d90fd5b604051637fa62f9d60e01b8152600490fd5b604051637b063a8960e11b8152600490fd5b341561046257604051633c2f4f4360e11b8152906020826004816001600160a01b0387165afa9182156108125786926107e1575b506040516370a0823160e01b81523060048201526020816024816001600160a01b0387165afa9081156107d65787916107a0575b506064351161045057806020806104f893518301019101610f8b565b6001600160a01b038493929316875260016020526040872061ffff87166000526020526001600160a01b0360026040600020015416926040519360208501526020845261054484610e39565b6040519283606081011067ffffffffffffffff60608601111761078a5760206001600160a01b0360448b979388946060890160405285895234858a01526040890152604051948593849263095ea7b360e01b8452817f00000000000000000000000000000000000000000000000000000000000000001660048501526064356024850152165af1801561077f57610750575b506105e5604435606435611063565b926040810151936001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163b1561074c5761ffff9461069a604080946106ac948a988e9884519b8c9a6327efc43f60e21b8c521660048b015260248a015260448901526001600160a01b038c166064890152606435608489015260a488015261012060c48801528051610124880152602081015161014488015201516060610164870152610184860190610ece565b8481036003190160e486015290610ece565b61060f60f31b60208483039260031984016101048701526002815201520181836001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165af1801561044557610738575b50506001600160a01b03608091817f7007030f22ba868c6abdfc92d9c47da38dca4e3c200c2d47043b5f5406bd0c0c946103d6565b61074190610e09565b610441578338610703565b8580fd5b6107719060203d602011610778575b6107698183610e55565b810190610fa1565b50386105d6565b503d61075f565b6040513d87823e3d90fd5b634e487b7160e01b600052604160045260246000fd5b90506020813d6020116107ce575b816107bb60209383610e55565b810103126107ca5751386104dc565b8680fd5b3d91506107ae565b6040513d89823e3d90fd5b61080491925060203d60201161080b575b6107fc8183610e55565b810190610f49565b90386104a8565b503d6107f2565b6040513d88823e3d90fd5b61083791935060203d60201161080b576107fc8183610e55565b9138610292565b61084a90949194610e09565b9238610263565b604051635e8ea7db60e01b8152600490fd5b60405163bb6a783760e01b8152600490fd5b604051631224b81560e01b8152600490fd5b6040516304889dcf60e01b8152600490fd5b50346100cd57806003193601126100cd576001600160a01b036020915416604051908152f35b50346100cd5760603660031901126100cd576108d9610ddd565b6108e1610df8565b906044356001600160a01b03809216928385526020926001845261ffff604087209216918287528452806002604088200154161561088757610927908654163314610f0e565b83855260018352604085208186528352600360408620018054908382018092116109a1575583855260018352604080862082875284528086206003015481519586529385019190915283015260608201527f3b100c278a9436e8a77b205a5395872158b05a3f1a0bc5e6052c1d92827c7bd590608090a180f35b634e487b7160e01b87526011600452602487fd5b50346100cd5760403660031901126100cd576109cf610ddd565b906109d8610df8565b604051633c2f4f4360e11b81526020936001600160a01b0390811691606091908681600481875afa9081156108125791610aa39391610ab99695938891610b16575b501615610abd575b610a95908287526001885261ffff6040882095169485885288526003604081818a20015415159885815260018b528181208882528b52200154604051958694639c25e27d60e01b8b870152602486015260448501526103e86064850152608484015260a060a484015260c4830190610ece565b03601f198101835282610e55565b6040805194859485528401526040830190610ece565b0390f35b5080855260018652610a956040862061ffff85169081885288526040872054908388526001895260408820908852885260016040882001546040519189830152604082015260408152610b0f81610e1d565b9050610a22565b610b2d9150893d8b1161080b576107fc8183610e55565b38610a1a565b50346100cd5760403660031901126100cd576080906040610b52610ddd565b91610b5b610df8565b6001600160a01b038094168252600160205261ffff838320911682526020522090815491600360018201549260028301541691015491604051938452602084015260408301526060820152f35b50346100cd5760203660031901126100cd57610bc2610ddd565b8154906001600160a01b0390610bdb8284163314610f0e565b1680916001600160601b0360a01b16178255337f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768380a380f35b50346100cd5760803660031901126100cd57610c2f610ddd565b610c37610df8565b90604435906001600160a01b03928383169384840361074c5767ffffffffffffffff90606435828111610dd957610c72903690600401610e77565b610c80828954163314610f0e565b604051633c2f4f4360e11b815285831696602096909187816004818c5afa8015610dce5785918c91610db1575b5016151580610da8575b610d9657610cc6918691610fb9565b1561085157808580610cdd93518301019101610f8b565b919060405193608085019085821090821117610d8257917f977b844ab5bd8c7c7282986679102e8c18c4374f0560736566e586613272191796959493916003936040528452858401918252604084019089825260608501928b8452898c526001885261ffff60408d20971696878d52885260408c2095518655516001860155600285019151166001600160601b0360a01b82541617905551910155604051908152a380f35b634e487b7160e01b8a52604160045260248afd5b60405163c804944560e01b8152600490fd5b50825115610cb7565b610dc89150893d8b1161080b576107fc8183610e55565b38610cad565b6040513d8d823e3d90fd5b8780fd5b600435906001600160a01b0382168203610df357565b600080fd5b6024359061ffff82168203610df357565b67ffffffffffffffff811161078a57604052565b6060810190811067ffffffffffffffff82111761078a57604052565b6040810190811067ffffffffffffffff82111761078a57604052565b90601f8019910116810190811067ffffffffffffffff82111761078a57604052565b81601f82011215610df35780359067ffffffffffffffff821161078a5760405192610eac601f8401601f191660200185610e55565b82845260208383010111610df357816000926020809301838601378301015290565b919082519283825260005b848110610efa575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610ed9565b15610f1557565b60405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606490fd5b90816020910312610df357516001600160a01b0381168103610df35790565b91908203918211610f7557565b634e487b7160e01b600052601160045260246000fd5b9190826040910312610df3576020825192015190565b90816020910312610df357518015158103610df35790565b9060209161ffff6001600160a01b0361102595604051946001600160601b0319809160601b16878701528460601b16603486015260288552610ffa85610e1d565b60405196879586948593631ec59c7b60e11b8552166004840152604060248401526044830190610ece565b0392165afa9081156110575760009161103c575090565b611054915060203d8111610778576107698183610e55565b90565b6040513d6000823e3d90fd5b818102918183041481151715610f7557620186a0611054920490610f6856fea2646970667358221220f2772d8c6622be7e53bc7a5ce3cc634d58129e83160136f6b16fba2282e24da964736f6c63430008120033";

type BalancerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BalancerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Balancer__factory extends ContractFactory {
  constructor(...args: BalancerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Balancer";
  }

  override deploy(
    _routerETH: PromiseOrValue<string>,
    _router: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Balancer> {
    return super.deploy(
      _routerETH,
      _router,
      _owner,
      overrides || {}
    ) as Promise<Balancer>;
  }
  override getDeployTransaction(
    _routerETH: PromiseOrValue<string>,
    _router: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _routerETH,
      _router,
      _owner,
      overrides || {}
    );
  }
  override attach(address: string): Balancer {
    return super.attach(address) as Balancer;
  }
  override connect(signer: Signer): Balancer__factory {
    return super.connect(signer) as Balancer__factory;
  }
  static readonly contractName: "Balancer";

  public readonly contractName: "Balancer";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerInterface {
    return new utils.Interface(_abi) as BalancerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Balancer {
    return new Contract(address, _abi, signerOrProvider) as Balancer;
  }
}
