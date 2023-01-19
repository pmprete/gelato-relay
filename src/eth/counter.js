import { ethers } from 'ethers';
import deployJson from '../../contracts/deploy.json';
const address = deployJson.CounterERC2771

const abi = [{"inputs":[{"internalType":"address","name":"trustedForwarder","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_msgSender","type":"address"}],"name":"IncrementContextCounter","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contextCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_msgSender","type":"address"}],"name":"currentContextCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"incrementContext","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}];

export function createInstance(provider) {
  return new ethers.Contract(address, abi, provider);
}
