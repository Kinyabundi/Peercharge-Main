// interact.js

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/Registry.sol/Registry.json");

//console.log(JSON.stringify(contract.abi));

//provider (read and write access to blockchain)
const alchemyProvider = new ethers.providers.AlchemyProvider(network = "maticmum", API_KEY);

//signer (ethereum account to sign transactions)
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

//contract (contract deployed on-chain)
const registryContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);


// async function main() {
//     const TotalCreditHolders = await registryContract.getTotalCreditHolders();
//     console.log("The TotalCreditHolders: " + TotalCreditHolders);
//   }
//   main();
  async function main() {
    const TotalCreditHolders = await registryContract.getTotalCreditHolders();
    console.log("The message is: " + TotalCreditHolders);
    
    console.log("Updating the message...");
    const tx = await registryContract.update("This is the new message.");
    await tx.wait();

    const newTotalCreditHolders = await registryContract.getTotalCreditHolders();
   console.log("The TotalCreditHolders: " + newTotalCreditHolders);
  }
  main();