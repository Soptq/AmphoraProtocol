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
import type { Vault, VaultInterface } from "../../lending/Vault";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        internalType: "address",
        name: "master_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "usdi_address",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "_baseLiability",
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
    name: "_id",
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
    name: "_masterAddress",
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
    name: "_minter",
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
        name: "token_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "claim_erc20",
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
        internalType: "uint256",
        name: "base_amount",
        type: "uint256",
      },
    ],
    name: "decrease_liability",
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
        name: "token_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit_erc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getBalances",
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
    name: "getBaseLiability",
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
    name: "getMinter",
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
        internalType: "uint256",
        name: "base_amount",
        type: "uint256",
      },
    ],
    name: "increase_liability",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "masterTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw_erc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200163938038062001639833981810160405281019062000037919062000232565b8360008190555082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050620002a4565b600080fd5b6000819050919050565b620001a78162000192565b8114620001b357600080fd5b50565b600081519050620001c7816200019c565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001fa82620001cd565b9050919050565b6200020c81620001ed565b81146200021857600080fd5b50565b6000815190506200022c8162000201565b92915050565b600080600080608085870312156200024f576200024e6200018d565b5b60006200025f87828801620001b6565b945050602062000272878288016200021b565b935050604062000285878288016200021b565b925050606062000298878288016200021b565b91505092959194509250565b61138580620002b46000396000f3fe608060405234801561001057600080fd5b50600436106100ce5760003560e01c80636075851e1161008c578063da7eeea511610066578063da7eeea5146101ff578063dafb27b61461022f578063f36675171461025f578063fe84d0ae1461027d576100ce565b80636075851e14610195578063c84aae17146101b3578063d16544f0146101e3576100ce565b80629fd1d6146100d357806305180237146100f15780631c9c79031461010f57806324a5af311461012b578063578ec33f1461014757806359962b6514610165575b600080fd5b6100db61029b565b6040516100e89190610dc0565b60405180910390f35b6100f96102a5565b6040516101069190610dc0565b60405180910390f35b61012960048036038101906101249190610e6a565b6102ab565b005b61014560048036038101906101409190610ebd565b6103d8565b005b61014f6106cd565b60405161015c9190610f0c565b60405180910390f35b61017f600480360381019061017a9190610ebd565b6106f3565b60405161018c9190610dc0565b60405180910390f35b61019d610a64565b6040516101aa9190610f0c565b60405180910390f35b6101cd60048036038101906101c89190610f27565b610a8a565b6040516101da9190610dc0565b60405180910390f35b6101fd60048036038101906101f89190610ebd565b610ad3565b005b61021960048036038101906102149190610f54565b610c3e565b6040516102269190610dc0565b60405180910390f35b61024960048036038101906102449190610f54565b610cb8565b6040516102569190610dc0565b60405180910390f35b610267610d77565b6040516102749190610f0c565b60405180910390f35b610285610da1565b6040516102929190610dc0565b60405180910390f35b6000600754905090565b60005481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461030557600080fd5b8273ffffffffffffffffffffffffffffffffffffffff166323b872dd3084846040518463ffffffff1660e01b815260040161034293929190610f81565b602060405180830381600087803b15801561035c57600080fd5b505af1158015610370573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103949190610ff0565b6103d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ca9061107a565b60405180910390fd5b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461043257600080fd5b80600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116104b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104aa9061110c565b60405180910390fd5b60008290508073ffffffffffffffffffffffffffffffffffffffff166323b872dd3033856040518463ffffffff1660e01b81526004016104f593929190610f81565b602060405180830381600087803b15801561050f57600080fd5b505af1158015610523573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105479190610ff0565b5081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610593919061115b565b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638b7482646000546040518263ffffffff1660e01b81526004016106359190610dc0565b60206040518083038186803b15801561064d57600080fd5b505afa158015610661573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106859190610ff0565b9050806106c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106be90611201565b60405180910390fd5b50505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461074f57600080fd5b600083905082600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411156108e4578073ffffffffffffffffffffffffffffffffffffffff166323b872dd30600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866040518463ffffffff1660e01b81526004016107fa93929190610f81565b602060405180830381600087803b15801561081457600080fd5b505af1158015610828573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084c9190610ff0565b5082600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610898919061115b565b600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082915050610a5e565b8073ffffffffffffffffffffffffffffffffffffffff166323b872dd30600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600660008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518463ffffffff1660e01b815260040161098293929190610f81565b602060405180830381600087803b15801561099c57600080fd5b505af11580156109b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d49190610ff0565b506000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549150505b92915050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008111610b16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0d9061126d565b60405180910390fd5b60008290508073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610b5893929190610f81565b602060405180830381600087803b158015610b7257600080fd5b505af1158015610b86573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610baa9190610ff0565b5081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610bf6919061128d565b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c9a57600080fd5b81600754610ca8919061128d565b6007819055506007549050919050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d1457600080fd5b816007541015610d59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d509061132f565b60405180910390fd5b81600754610d67919061115b565b6007819055506007549050919050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60075481565b6000819050919050565b610dba81610da7565b82525050565b6000602082019050610dd56000830184610db1565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e0b82610de0565b9050919050565b610e1b81610e00565b8114610e2657600080fd5b50565b600081359050610e3881610e12565b92915050565b610e4781610da7565b8114610e5257600080fd5b50565b600081359050610e6481610e3e565b92915050565b600080600060608486031215610e8357610e82610ddb565b5b6000610e9186828701610e29565b9350506020610ea286828701610e29565b9250506040610eb386828701610e55565b9150509250925092565b60008060408385031215610ed457610ed3610ddb565b5b6000610ee285828601610e29565b9250506020610ef385828601610e55565b9150509250929050565b610f0681610e00565b82525050565b6000602082019050610f216000830184610efd565b92915050565b600060208284031215610f3d57610f3c610ddb565b5b6000610f4b84828501610e29565b91505092915050565b600060208284031215610f6a57610f69610ddb565b5b6000610f7884828501610e55565b91505092915050565b6000606082019050610f966000830186610efd565b610fa36020830185610efd565b610fb06040830184610db1565b949350505050565b60008115159050919050565b610fcd81610fb8565b8114610fd857600080fd5b50565b600081519050610fea81610fc4565b92915050565b60006020828403121561100657611005610ddb565b5b600061101484828501610fdb565b91505092915050565b600082825260208201905092915050565b7f6d61737465725472616e736665723a205472616e73666572204661696c656400600082015250565b6000611064601f8361101d565b915061106f8261102e565b602082019050919050565b6000602082019050818103600083015261109381611057565b9050919050565b7f63616e6e6f74207769746864726177206d6f7265207468616e20796f75206f7760008201527f6500000000000000000000000000000000000000000000000000000000000000602082015250565b60006110f660218361101d565b91506111018261109a565b604082019050919050565b60006020820190508181036000830152611125816110e9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061116682610da7565b915061117183610da7565b9250828210156111845761118361112c565b5b828203905092915050565b7f7468697320776974686472617720776f756c64206d616b6520796f757220616360008201527f636f756e7420696e736f6c76656e740000000000000000000000000000000000602082015250565b60006111eb602f8361101d565b91506111f68261118f565b604082019050919050565b6000602082019050818103600083015261121a816111de565b9050919050565b7f63616e6e6f74206465706f736974203000000000000000000000000000000000600082015250565b600061125760108361101d565b915061126282611221565b602082019050919050565b600060208201905081810360008301526112868161124a565b9050919050565b600061129882610da7565b91506112a383610da7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156112d8576112d761112c565b5b828201905092915050565b7f63616e6e6f74207265706179206d6f7265207468616e206973206f7765640000600082015250565b6000611319601e8361101d565b9150611324826112e3565b602082019050919050565b600060208201905081810360008301526113488161130c565b905091905056fea26469706673582212205c8f567a36c4a55d067a468beb5ec9e6dba8da01f5dd156a37653ad42e5d793164736f6c63430008090033";

type VaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vault__factory extends ContractFactory {
  constructor(...args: VaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    id: BigNumberish,
    minter: string,
    master_address: string,
    usdi_address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Vault> {
    return super.deploy(
      id,
      minter,
      master_address,
      usdi_address,
      overrides || {}
    ) as Promise<Vault>;
  }
  override getDeployTransaction(
    id: BigNumberish,
    minter: string,
    master_address: string,
    usdi_address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      id,
      minter,
      master_address,
      usdi_address,
      overrides || {}
    );
  }
  override attach(address: string): Vault {
    return super.attach(address) as Vault;
  }
  override connect(signer: Signer): Vault__factory {
    return super.connect(signer) as Vault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultInterface {
    return new utils.Interface(_abi) as VaultInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Vault {
    return new Contract(address, _abi, signerOrProvider) as Vault;
  }
}
