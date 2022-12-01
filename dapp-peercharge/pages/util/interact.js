
require('dotenv').config();
const alchemyKey = process.env.PEERCHARGE_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const contractABI = require("../contract-abi.json");
const contractAddress = "0x86f71A793e67888Cf20448CB7e720C10bB8181e8";
const web3 = createAlchemyWeb3(alchemyKey); 
 
export const RegistryContract = new web3.eth.Contract(
    contractABI,
    contractAddress
);

export const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
  };
export const getCurrentWalletConnected = async () => {
  
};
export const registerCreditHolder = async () => {

};
export const registerVerifiers = async () => {

};
export const mintNFT = async () => {

};