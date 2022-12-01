const { ethers } = require("hardhat");

async function main() {
    const Registry = await 
    ethers.getContractFactory("Registry");


const registry = await Registry.deploy();
console.log("Contract deployed to address:", registry.address);
}

 main()
 .then(() => process.exit(0))
 .catch(error => {
    console.error(error);
    process.exit(1)
 });