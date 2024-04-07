import { createThirdwebClient, defineChain, getContract } from 'thirdweb';
import { sepolia } from 'thirdweb/chains';

const CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string;

export const client = createThirdwebClient({
  clientId: CLIENT_ID,
});

export const chain = defineChain(sepolia);

const contractAddress = '0xb363dF89B7da236778B9F97a19f509B21EbD94Ea';
const contractABI = [
  {
    type: 'function',
    name: 'count',
    inputs: [],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'decrement',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'getCount',
    inputs: [],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'increment',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const;

export const CONTRACT = getContract({
  client,
  chain,
  address: contractAddress,
  abi: contractABI,
});
