/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  CurveStableToUsdoBidder,
  CurveStableToUsdoBidderInterface,
} from "../../../../contracts/LiquidationQueue/bidders/CurveStableToUsdoBidder";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICurveSwapper",
        name: "curveSwapper_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "curvePoolAssetCount_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "CurveSwapperUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "curveSwapper",
    outputs: [
      {
        internalType: "contract ICurveSwapper",
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
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getInputAmount",
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
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getOutputAmount",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
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
    inputs: [],
    name: "pendingOwner",
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
        internalType: "contract ICurveSwapper",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setCurveSwapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080346100ab57601f6119ae38819003918201601f19168301916001600160401b038311848410176100b05780849260409485528339810103126100ab5780516001600160a01b03811691908290036100ab576020015160008054336001600160a01b03199182168117835560405194927f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a360025416176002556003556118e790816100c78239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040818152600436101561001457600080fd5b600091823560e01c90816306fdde03146103af57508063078dfbe7146102895780634e71e0c8146101dd5780635810e7ec146101655780635dd82b36146101485780638da5cb5b14610123578063b691d78c14610105578063e30c3978146100de578063e91f9961146100b75763fef744fa1461009057600080fd5b346100b3576020906100ac6100a436610450565b505091610831565b9051908152f35b5080fd5b50346100b357816003193601126100b3576020906001600160a01b03600254169051908152f35b50346100b357816003193601126100b3576020906001600160a01b03600154169051908152f35b50346100b3576020906100ac61011a36610450565b93929092610a0a565b50346100b357816003193601126100b3576001600160a01b0360209254169051908152f35b50346100b3576020906100ac61015d36610450565b505091610613565b82346101da5760203660031901126101da576004356001600160a01b038082168092036101d65761019a8184541633146104ba565b816002549182167faa9eb2cf6e6a7bce28901c01eb97556feb7824a5a9b13df2c67580509a62633f8580a36001600160a01b0319161760025580f35b8280fd5b80fd5b50346100b357816003193601126100b3576001546001600160a01b03918282169081330361024657508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b5162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152606490fd5b50346100b35760603660031901126100b3576004356001600160a01b03918282168092036103ab5760243580151581036103a7576044359081151582036103a3576102d88587541633146104ba565b156103845782159081159161037c575b501561033957508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36bffffffffffffffffffffffff60a01b8092161782556001541660015580f35b5162461bcd60e51b815260206004820152601560248201527f4f776e61626c653a207a65726f206164647265737300000000000000000000006044820152606490fd5b9050386102e8565b505090506bffffffffffffffffffffffff60a01b600154161760015580f35b8580fd5b8480fd5b8380fd5b919050346101d657826003193601126101d65761040c92506103d082610505565b601a82527f737461626c65202d3e205553444f2028334372762b5553444f29000000000000602083015251918291602083526020830190610410565b0390f35b919082519283825260005b84811061043c575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520161041b565b60806003198201126104b5576004356001600160a01b03811681036104b55791602435916044359160643567ffffffffffffffff928382116104b557806023830112156104b55781600401359384116104b557602484830101116104b5576024019190565b600080fd5b156104c157565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6040810190811067ffffffffffffffff82111761052157604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161052157604052565b6080810190811067ffffffffffffffff82111761052157604052565b6060810190811067ffffffffffffffff82111761052157604052565b90601f8019910116810190811067ffffffffffffffff82111761052157604052565b51906001600160a01b03821682036104b557565b156105c057565b60405162461bcd60e51b815260206004820152600c60248201526b1554d113c81b9bdd081cd95d60a21b6044820152606490fd5b908160209103126104b557516001600160a01b03811681036104b55790565b60408051636c3d8b8f60e01b808252919594936001600160a01b03939092916020918516908281600481855afa9081156107ee57869184916000916107f9575b5060048b5180948193631192124760e11b8352165afa80156107ee5786906000906107b5575b61068692501615156105b9565b87519283528183600481845afa8015610735578593600091610779575b50829060048a51809881936386c8e21d60e01b8352165afa9485156107355760009561074a575b50848414610740578160049189519283809263de40657760e01b82525afa91821561073557610705979850600092610708575b50501661149a565b90565b6107279250803d1061072e575b61071f8183610583565b8101906105f4565b38806106fd565b503d610715565b88513d6000823e3d90fd5b5093955050505050565b90948282813d8311610772575b6107618183610583565b810103126101da57505193386106ca565b503d610757565b919280945082813d83116107ae575b6107928183610583565b810103126101da575090826107a88694936105a5565b906106a3565b503d610788565b90508382813d83116107e7575b6107cc8183610583565b810103126101da5750856107e2610686926105a5565b610679565b503d6107c2565b89513d6000823e3d90fd5b92509082813d811161082a575b6108108183610583565b810103126101da57508261082487926105a5565b38610653565b503d610806565b60408051636c3d8b8f60e01b80825291959493926001600160a01b0392916020918416908281600481855afa9081156107ee57859184916000916109c5575b5060048b5180948193631192124760e11b8352165afa80156107ee57859060009061098c575b6108a392501615156105b9565b87519283528183600481845afa8015610735578493600091610950575b50829060048a51809781936386c8e21d60e01b8352165afa93841561073557600094610921575b50838514610740578160049189519283809263de40657760e01b82525afa918215610735576107059798506000926107085750501661149a565b90938282813d8311610949575b6109388183610583565b810103126101da57505192386108e7565b503d61092e565b919280945082813d8311610985575b6109698183610583565b810103126101da5750908261097f8594936105a5565b906108c0565b503d61095f565b90508382813d83116109be575b6109a38183610583565b810103126101da5750846109b96108a3926105a5565b610896565b503d610999565b92509082813d81116109f6575b6109dc8183610583565b810103126101da5750826109f086926105a5565b38610870565b503d6109d2565b519081151582036104b557565b604051636c3d8b8f60e01b808252949695600095949093926001600160a01b031691602081600481865afa8015610e71578790611257575b604051631192124760e11b81529991506001600160a01b031660208a600481845afa998a15610eb057889a611206575b50610a8d6001600160a01b0360209798999a9b1615156105b9565b6040519586809263473ec51560e11b825286600483015260249889915afa908115610f515789916111cc575b50156111955760405163de40657760e01b815292602084600481845afa938415610f51578994611174575b5060405163c23ea21f60e01b815297602089600481855afa988915610f09578a99611152575b5060209060046040518094819382525afa908115610f5157899161110b575b509060206001600160a01b03926004604051809581936386c8e21d60e01b8352165afa918215610f515789926110d3575b506001600160a01b03881633036110a557818514610fad57889680610f94575b50506001600160a01b036002541660405190638eb22cdd60e01b825285600483015283878301528960448301526020826064816001600160a01b0389165afa918215610f09578a92610f60575b506001600160a01b0385163b15610f5c57604051630208d92960e11b81523060048201526001600160a01b039091166024820152604481018690526064810191909152888180608481010381836001600160a01b0389165af18015610f5157908991610f39575b505060405192630cf35bdd60e41b9283855285600486015260808588816001600160a01b0386165afa948515610f09578a95610f14575b5060405193845282600485015260808488816001600160a01b0386165afa938415610f09578a94610ebb575b50906064602092610cb3610cad6001600160a01b03979861173c565b9761173c565b60405197610cc089610567565b60028952604036878b0137610cd4896112d4565b52610cde886112f7565b526040519586938492638eb22cdd60e01b84528a60048501528b8401528d6044840152165afa918215610eb0578892610e7c575b506001600160a01b03600254169460405194633d9545e960e11b86526004860152840152866044840152606483015260016084830152600160a483015261014091828160c481875afa928315610e715792610dc292889260409796958493610e36575b5050610d8f610d9d610de3928951928391602083016113f2565b03601f198101835282610583565b6001600160a01b038851998a988997889663efa84c6d60e01b8852600488019061142d565b610144860152166101648401526101a06101848401526101a4830190610410565b03925af1918215610e2a578092610df957505090565b9091506040823d604011610e22575b81610e1560409383610583565b810103126101da57505190565b3d9150610e08565b604051903d90823e3d90fd5b610de3929350610e62610d8f9282610d9d93903d10610e6a575b610e5a8183610583565b810190611307565b939250610d75565b503d610e50565b6040513d89823e3d90fd5b9091506020813d602011610ea8575b81610e9860209383610583565b810103126104b557519038610d12565b3d9150610e8b565b6040513d8a823e3d90fd5b6001600160a01b03945060209291610cb3610cad610ef260649460803d608011610f02575b610eea8183610583565b81019061129b565b5050905097505050919250610c91565b503d610ee0565b6040513d8c823e3d90fd5b610f2e91955060803d608011610f0257610eea8183610583565b505090509338610c65565b610f4290610537565b610f4d578738610c2e565b8780fd5b6040513d8b823e3d90fd5b8980fd5b9091506020813d602011610f8c575b81610f7c60209383610583565b810103126104b557519038610bc7565b3d9150610f6f565b819297509060209181010312610f4d5735943880610b7a565b50509594919293506001600160a01b03908660405195638eb22cdd60e01b87528560048801528601528560448601521690602084606481855afa93841561109a578594611066575b50813b156103a757604051630208d92960e11b81523060048201526001600160a01b03919091166024820152604481019290925260648201929092529082908290608490829084905af1801561105b5761104e57505090565b61105790610537565b5090565b6040513d84823e3d90fd5b9093506020813d602011611092575b8161108260209383610583565b810103126103a757519238610ff5565b3d9150611075565b6040513d87823e3d90fd5b60405162461bcd60e51b815260206004820152600781880152666f6e6c79204c5160c81b6044820152606490fd5b9091506020813d602011611103575b816110ef60209383610583565b810103126110ff57519038610b5a565b8880fd5b3d91506110e2565b90506020813d60201161114a575b8161112660209383610583565b810103126110ff579060206111426001600160a01b03936105a5565b919250610b29565b3d9150611119565b602091995061116d90823d841161072e5761071f8183610583565b9890610b0a565b61118e91945060203d60201161072e5761071f8183610583565b9238610ae4565b60405162461bcd60e51b8152602060048201526010818701526f13585c9ad95d081b9bdd081d985b1a5960821b6044820152606490fd5b90506020813d6020116111fe575b816111e760209383610583565b810103126110ff576111f8906109fd565b38610ab9565b3d91506111da565b995060208a3d60201161124f575b8161122160209383610583565b81010312610f4d57610a8d6001600160a01b03611243602098999a9b9c6105a5565b9b9a9998975050610a72565b3d9150611214565b506020813d602011611293575b8161127160209383610583565b8101031261128f5761128a6001600160a01b03916105a5565b610a42565b8680fd5b3d9150611264565b91908260809103126104b557815160058110156104b557916112bf602082016105a5565b9160606112ce604084016105a5565b92015190565b8051156112e15760200190565b634e487b7160e01b600052603260045260246000fd5b8051600110156112e15760400190565b8091039061014082126104b55760408051926060840184811067ffffffffffffffff82111761052157808352608082126104b5576113448161054b565b61134d846105a5565b8152602084015160808601526113648385016105a5565b60a0860152606084015160c086015284526080607f198201126104b5578190815161138e8161054b565b6080850151815260a0850151602082015260c08501518382015260e08501516060820152602086015260ff1901126104b5576113e76101208251936113d285610505565b6113df61010082016109fd565b8552016109fd565b602083015282015290565b6020908160408183019282815285518094520193019160005b828110611419575050505090565b83518552938101939281019260010161140b565b6020604061012092606081516001600160a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b90939291936001600160a01b03809216604093845193630cf35bdd60e41b948581528460048201526080958682602481885afa91821561073557600092611719575b5087519081528960048201528681602481885afa968715610735576000976116e7575b5050906115176115116064949361173c565b9661173c565b9587519461152486610567565b6002865260209788928a36858a013761153c886112d4565b52611546876112f7565b52885194858092638eb22cdd60e01b8252896004830152866024830152600060448301525afa9283156116dc576000936116ad575b506002541697865194633d9545e960e11b8652600486015260248501526044840152606483015260016084830152600160a483015261014091828160c4818a5afa9283156116a25784936115ee9361162d9899936116199360009361167d575b50506115fc9088519586918883016113f2565b03601f198101865285610583565b8651630b7ecdc960e31b815297889485938493600485019061142d565b610160610144840152610164830190610410565b03915afa9182156116735750600091611647575b50905090565b82813d831161166c575b61165b8183610583565b810103126101da5750518038611641565b503d611651565b513d6000823e3d90fd5b6115fc929350908161169a92903d10610e6a57610e5a8183610583565b9190386115db565b85513d6000823e3d90fd5b90928682813d83116116d5575b6116c48183610583565b810103126101da575051913861157b565b503d6116ba565b87513d6000823e3d90fd5b6064949392975061170b611517928261151193903d10610f0257610eea8183610583565b5050905097929394506114ff565b611731919250873d8911610f0257610eea8183610583565b5050905090386114dc565b6001600160a01b03806002541660408051928380936310c3a8d960e11b8252602094859160049788915afa9081156118a65790829160009161186f575b50169060001995600092600354935b8481106117d75750505050506000198413156117a45750505090565b5162461bcd60e51b815291820152600f60248201526e185cdcd95d081b9bdd08199bdd5b99608a1b604482015260649150fd5b855163c661065760e01b81528881018290528781602481865afa9081156116dc5760009161183a575b50841683851614611832575b600019811461181d57600101611788565b601188634e487b7160e01b6000525260246000fd5b97508761180c565b908882813d8311611868575b6118508183610583565b810103126101da5750611862906105a5565b38611800565b503d611846565b91508482813d831161189f575b6118868183610583565b810103126101da575061189982916105a5565b38611779565b503d61187c565b83513d6000823e3d90fdfea2646970667358221220a551c85af930ac21e44b694c4f32eb732740433d2753d7db0430a8e73af799cf64736f6c63430008120033";

type CurveStableToUsdoBidderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurveStableToUsdoBidderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurveStableToUsdoBidder__factory extends ContractFactory {
  constructor(...args: CurveStableToUsdoBidderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CurveStableToUsdoBidder";
  }

  override deploy(
    curveSwapper_: PromiseOrValue<string>,
    curvePoolAssetCount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurveStableToUsdoBidder> {
    return super.deploy(
      curveSwapper_,
      curvePoolAssetCount_,
      overrides || {}
    ) as Promise<CurveStableToUsdoBidder>;
  }
  override getDeployTransaction(
    curveSwapper_: PromiseOrValue<string>,
    curvePoolAssetCount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      curveSwapper_,
      curvePoolAssetCount_,
      overrides || {}
    );
  }
  override attach(address: string): CurveStableToUsdoBidder {
    return super.attach(address) as CurveStableToUsdoBidder;
  }
  override connect(signer: Signer): CurveStableToUsdoBidder__factory {
    return super.connect(signer) as CurveStableToUsdoBidder__factory;
  }
  static readonly contractName: "CurveStableToUsdoBidder";

  public readonly contractName: "CurveStableToUsdoBidder";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveStableToUsdoBidderInterface {
    return new utils.Interface(_abi) as CurveStableToUsdoBidderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveStableToUsdoBidder {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CurveStableToUsdoBidder;
  }
}
