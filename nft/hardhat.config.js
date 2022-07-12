/** @type import('hardhat/config').HardhatUserConfig */
//module.exports = {
//  solidity: "0.8.0",
//};
/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: {
    compilers: [
      {
        version: "0.8.1"
      },
      {
        version: "0.8.0"
      },
      {
        version: "0.7.3"
      }
    ]
  },
   defaultNetwork: "rinkeby",
   networks: {
      hardhat: {},
      rinkeby: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}