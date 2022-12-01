/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;
//const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.17",
   defaultNetwork: "maticmum",
   networks: {
      hardhat: {},
      maticmum: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan: {
      apiKey: POLYGONSCAN_API_KEY
   }
}