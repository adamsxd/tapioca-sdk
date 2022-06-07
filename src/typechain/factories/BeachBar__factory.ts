/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BeachBar, BeachBarInterface } from "../BeachBar";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract YieldBox",
        name: "_yieldBox",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "tapToken_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newFeeTo",
        type: "address",
      },
    ],
    name: "FeeToUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newFeeVeTap",
        type: "address",
      },
    ],
    name: "FeeVeTapUpdate",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "markets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "ProtocolWithdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "location",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum ContractType",
        name: "risk",
        type: "uint8",
      },
    ],
    name: "RegisterMasterContract",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "location",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
    ],
    name: "RegisterMixologist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "swapper",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isRegistered",
        type: "bool",
      },
    ],
    name: "SwapperUpdate",
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
    inputs: [
      {
        internalType: "address[]",
        name: "mc",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "executeMixologistFn",
    outputs: [
      {
        internalType: "bool[]",
        name: "success",
        type: "bool[]",
      },
      {
        internalType: "bytes[]",
        name: "result",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeTo",
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
    name: "feeVeTap",
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
    name: "masterContractLength",
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
        internalType: "address",
        name: "mcAddress",
        type: "address",
      },
      {
        internalType: "enum ContractType",
        name: "contractType_",
        type: "uint8",
      },
    ],
    name: "registerMasterContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mc",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "useCreate2",
        type: "bool",
      },
    ],
    name: "registerMixologist",
    outputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "feeTo_",
        type: "address",
      },
    ],
    name: "setFeeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "feeVeTap_",
        type: "address",
      },
    ],
    name: "setFeeVeTap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract MultiSwapper",
        name: "swapper",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enable",
        type: "bool",
      },
    ],
    name: "setSwapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract MultiSwapper",
        name: "",
        type: "address",
      },
    ],
    name: "swappers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tapAssetId",
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
    name: "tapToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tapiocaMarkets",
    outputs: [
      {
        internalType: "address[]",
        name: "markets",
        type: "address[]",
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
  {
    inputs: [
      {
        internalType: "contract MultiSwapper[]",
        name: "swappers_",
        type: "address[]",
      },
    ],
    name: "withdrawAllProtocolFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract YieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162001a1738038062001a17833981016040819052620000349162000138565b600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600160a01b03808316608081905290821660a052604051632c1876e560e21b815263b061db9490620000b4906001908590600090819060040162000177565b602060405180830381600087803b158015620000cf57600080fd5b505af1158015620000e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200010a9190620001bd565b6001600160601b031660c05250620001d79050565b6001600160a01b03811681146200013557600080fd5b50565b600080604083850312156200014c57600080fd5b825162000159816200011f565b60208401519092506200016c816200011f565b809150509250929050565b60808101600486106200019a57634e487b7160e01b600052602160045260246000fd5b9481526001600160a01b0393841660208201529190921660408201526060015290565b600060208284031215620001d057600080fd5b5051919050565b60805160a05160c0516117f4620002236000396000610173015260006102f20152600081816103760152818161057101528181610bea01528181610cbf0152610ead01526117f46000f3fe6080604052600436106101045760003560e01c80638cad7fbe116100a0578063d164c24111610064578063d164c24114610314578063dc2d27b714610336578063de40657714610364578063e30c397814610398578063f46901ed146103b857600080fd5b80638cad7fbe146102405780638da5cb5b14610280578063a76820de146102a0578063aedf4272146102c0578063c7cee532146102e057600080fd5b8063017e7e5814610109578063078dfbe71461013f5780630e7ee227146101615780630feb123d146101a3578063226a414b146101c35780633f2617cb146101d65780634e71e0c8146101f65780634eb51e291461020b578063515104a814610220575b600080fd5b34801561011557600080fd5b50600454610129906001600160a01b031681565b6040516101369190611109565b60405180910390f35b34801561014b57600080fd5b5061015f61015a36600461114a565b6103d8565b005b34801561016d57600080fd5b506101957f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610136565b3480156101af57600080fd5b50600554610129906001600160a01b031681565b6101296101d136600461118f565b6104f0565b3480156101e257600080fd5b5061015f6101f1366004611224565b61064d565b34801561020257600080fd5b5061015f6106da565b34801561021757600080fd5b50600254610195565b34801561022c57600080fd5b5061015f61023b366004611259565b610797565b34801561024c57600080fd5b5061027061025b366004611296565b60066020526000908152604090205460ff1681565b6040519015158152602001610136565b34801561028c57600080fd5b50600054610129906001600160a01b031681565b3480156102ac57600080fd5b5061015f6102bb366004611305565b610958565b3480156102cc57600080fd5b5061015f6102db366004611296565b610b12565b3480156102ec57600080fd5b506101297f000000000000000000000000000000000000000000000000000000000000000081565b34801561032057600080fd5b50610329610b92565b604051610136919061138a565b34801561034257600080fd5b506103566103513660046113e3565b610dda565b604051610136929190611552565b34801561037057600080fd5b506101297f000000000000000000000000000000000000000000000000000000000000000081565b3480156103a457600080fd5b50600154610129906001600160a01b031681565b3480156103c457600080fd5b5061015f6103d3366004611296565b611098565b6000546001600160a01b0316331461040b5760405162461bcd60e51b815260040161040290611604565b60405180910390fd5b81156104ce576001600160a01b0383161515806104255750805b6104695760405162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152606401610402565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b031991821617909155600180549091169055505050565b600180546001600160a01b0385166001600160a01b0319909116179055505050565b600080546001600160a01b0316331461051b5760405162461bcd60e51b815260040161040290611604565b6001600160a01b038516600090815260036020526040902054859060ff16151560011461055a5760405162461bcd60e51b815260040161040290611639565b604051631f54245b60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690631f54245b906105ac908990899089908990600401611670565b602060405180830381600087803b1580156105c657600080fd5b505af11580156105da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fe91906116ba565b604080516001600160a01b038084168252891660208201529193507fd319b549895a1e94f537d0fca704a174ab4c6b5d804b0f5442a90e0817904f78910160405180910390a150949350505050565b6000546001600160a01b031633146106775760405162461bcd60e51b815260040161040290611604565b6001600160a01b038216600081815260066020908152604091829020805460ff19168515159081179091558251938452908301527fa893ff5e6c8549e5f4e3d6bb1d38cbf1ede3443ef5726c0477f01c296f7eaf02910160405180910390a15050565b6001546001600160a01b03163381146107355760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152606401610402565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b6000546001600160a01b031633146107c15760405162461bcd60e51b815260040161040290611604565b6001600160a01b03821660009081526003602052604090205460ff16156108245760405162461bcd60e51b815260206004820152601760248201527610995858da10985c8e881350c81c9959da5cdd195c9959604a1b6044820152606401610402565b604080518082019091526000602082019081526001600160a01b0384168252826002811115610855576108556116d7565b90816002811115610868576108686116d7565b90525060028054600181018255600082905282517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace90910180546001600160a01b031981166001600160a01b039093169283178255602085015185949293909284926001600160a81b03191690911790600160a01b9084908111156108ef576108ef6116d7565b021790555050506001600160a01b03831660009081526003602052604090819020805460ff19166001179055517f1b171ff9e281f7033f8c4d90b0d08fa61c8ad18aba517793d5b6619a21d4c04c9061094b90859085906116ed565b60405180910390a1505050565b60008282828161096a5761096a611728565b905060200201602081019061097f9190611296565b6001600160a01b031614156109cf5760405162461bcd60e51b815260206004820152601660248201527542656163684261723a207a65726f206164647265737360501b6044820152606401610402565b6002548181141560006109e0610b92565b805190915060005b81811015610ad057828181518110610a0257610a02611728565b60200260200101516001600160a01b03166350afeb8e85610a4957888884818110610a2f57610a2f611728565b9050602002016020810190610a449190611296565b610a71565b88886000818110610a5c57610a5c611728565b9050602002016020810190610a719190611296565b6040518263ffffffff1660e01b8152600401610a8d9190611109565b600060405180830381600087803b158015610aa757600080fd5b505af1158015610abb573d6000803e3d6000fd5b5050505080610ac99061173e565b90506109e8565b507fdc0aec64e01514853db7bc1f49a7321726ef185b59f680c9bc9edcf499722bc78242604051610b02929190611767565b60405180910390a1505050505050565b6000546001600160a01b03163314610b3c5760405162461bcd60e51b815260040161040290611604565b600580546001600160a01b0319166001600160a01b0383161790556040517fe8fb39e0250fa1bfc54b044703d7949c0630d364b2f315a8bb7b42f267faf34990610b87908390611109565b60405180910390a150565b600254606090806001600160401b03811115610bb057610bb061139d565b604051908082528060200260200182016040528015610bd9578160200160208202803683370190505b5091506000805b82811015610dd4577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fba96be860028381548110610c2a57610c2a611728565b6000918252602090912001546040516001600160e01b031960e084901b168152610c60916001600160a01b031690600401611109565b60206040518083038186803b158015610c7857600080fd5b505afa158015610c8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb09190611789565b915060005b82811015610dc3577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638fd4365460028481548110610cff57610cff611728565b60009182526020909120015460405160e083901b6001600160e01b03191681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b158015610d5157600080fd5b505afa158015610d65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8991906116ba565b858381518110610d9b57610d9b611728565b6001600160a01b0390921660209283029190910190910152610dbc8161173e565b9050610cb5565b50610dcd8161173e565b9050610be0565b50505090565b60005460609081906001600160a01b03163314610e095760405162461bcd60e51b815260040161040290611604565b83806001600160401b03811115610e2257610e2261139d565b604051908082528060200260200182016040528015610e4b578160200160208202803683370190505b509250806001600160401b03811115610e6657610e6661139d565b604051908082528060200260200182016040528015610e9957816020015b6060815260200190600190039081610e845790505b50915060005b8181101561108e57600360007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bafe4f148a8a86818110610eec57610eec611728565b9050602002016020810190610f019190611296565b6040518263ffffffff1660e01b8152600401610f1d9190611109565b60206040518083038186803b158015610f3557600080fd5b505afa158015610f49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f6d91906116ba565b6001600160a01b0316815260208101919091526040016000205460ff16610fa65760405162461bcd60e51b815260040161040290611639565b868682818110610fb857610fb8611728565b9050602002016020810190610fcd9190611296565b6001600160a01b0316858281518110610fe857610fe8611728565b6020026020010151604051610ffd91906117a2565b6000604051808303816000865af19150503d806000811461103a576040519150601f19603f3d011682016040523d82523d6000602084013e61103f565b606091505b5085838151811061105257611052611728565b6020026020010185848151811061106b5761106b611728565b602090810291909101019190915290151590526110878161173e565b9050610e9f565b5050935093915050565b6000546001600160a01b031633146110c25760405162461bcd60e51b815260040161040290611604565b600480546001600160a01b0319166001600160a01b0383161790556040517f68953050a837881c7c6f52c422b0f82e1fd474e6931654ea29f569d19fcc42c290610b879083905b6001600160a01b0391909116815260200190565b6001600160a01b038116811461113257600080fd5b50565b8035801515811461114557600080fd5b919050565b60008060006060848603121561115f57600080fd5b833561116a8161111d565b925061117860208501611135565b915061118660408501611135565b90509250925092565b600080600080606085870312156111a557600080fd5b84356111b08161111d565b935060208501356001600160401b03808211156111cc57600080fd5b818701915087601f8301126111e057600080fd5b8135818111156111ef57600080fd5b88602082850101111561120157600080fd5b60208301955080945050505061121960408601611135565b905092959194509250565b6000806040838503121561123757600080fd5b82356112428161111d565b915061125060208401611135565b90509250929050565b6000806040838503121561126c57600080fd5b82356112778161111d565b915060208301356003811061128b57600080fd5b809150509250929050565b6000602082840312156112a857600080fd5b81356112b38161111d565b9392505050565b60008083601f8401126112cc57600080fd5b5081356001600160401b038111156112e357600080fd5b6020830191508360208260051b85010111156112fe57600080fd5b9250929050565b6000806020838503121561131857600080fd5b82356001600160401b0381111561132e57600080fd5b61133a858286016112ba565b90969095509350505050565b600081518084526020808501945080840160005b8381101561137f5781516001600160a01b03168752958201959082019060010161135a565b509495945050505050565b6020815260006112b36020830184611346565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156113db576113db61139d565b604052919050565b600080600060408085870312156113f957600080fd5b84356001600160401b038082111561141057600080fd5b61141c888389016112ba565b909650945060209150868201358181111561143657600080fd5b8701601f8101891361144757600080fd5b8035828111156114595761145961139d565b8060051b6114688582016113b3565b918252828101850191858101908c84111561148257600080fd5b86850192505b83831015611510578235868111156114a05760008081fd5b8501603f81018e136114b25760008081fd5b87810135878111156114c6576114c661139d565b6114d8601f8201601f19168a016113b3565b8181528f8b8385010111156114ed5760008081fd5b818b84018b83013760009181018a01919091528352509186019190860190611488565b80985050505050505050509250925092565b60005b8381101561153d578181015183820152602001611525565b8381111561154c576000848401525b50505050565b604080825283519082018190526000906020906060840190828701845b8281101561158d57815115158452928401929084019060010161156f565b50505083810382850152845180825282820190600581901b8301840187850160005b838110156115f557601f1980878503018652825180518086526115d7818b88018c8501611522565b96890196601f019091169390930187019250908601906001016115af565b50909998505050505050505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601b908201527f42656163684261723a204d43206e6f7420726567697374657265640000000000604082015260600190565b6001600160a01b038516815260606020820181905281018390528284608083013760008184016080908101919091529115156040820152601f909201601f19169091010192915050565b6000602082840312156116cc57600080fd5b81516112b38161111d565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b0383168152604081016003831061171b57634e487b7160e01b600052602160045260246000fd5b8260208301529392505050565b634e487b7160e01b600052603260045260246000fd5b600060001982141561176057634e487b7160e01b600052601160045260246000fd5b5060010190565b60408152600061177a6040830185611346565b90508260208301529392505050565b60006020828403121561179b57600080fd5b5051919050565b600082516117b4818460208701611522565b919091019291505056fea2646970667358221220fefa88b5497cf31cf51dbbe13b308fc7f7bd429834020b70066cdb94a4b2447864736f6c63430008090033";

export class BeachBar__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _yieldBox: string,
    tapToken_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BeachBar> {
    return super.deploy(
      _yieldBox,
      tapToken_,
      overrides || {}
    ) as Promise<BeachBar>;
  }
  getDeployTransaction(
    _yieldBox: string,
    tapToken_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yieldBox, tapToken_, overrides || {});
  }
  attach(address: string): BeachBar {
    return super.attach(address) as BeachBar;
  }
  connect(signer: Signer): BeachBar__factory {
    return super.connect(signer) as BeachBar__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BeachBarInterface {
    return new utils.Interface(_abi) as BeachBarInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BeachBar {
    return new Contract(address, _abi, signerOrProvider) as BeachBar;
  }
}
