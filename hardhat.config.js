require("@nomiclabs/hardhat-waffle");
 require('dotenv').config();
 require("@nomiclabs/hardhat-ethers");
 require("@nomiclabs/hardhat-etherscan");
 
 const {  ACCOUNT_PRIVATE_KEY, ALCHEMY_RINKEBY_KEY, RINKEBY_KEY } = process.env;
 module.exports = {
   solidity: "0.8.4",
   networks: {
     hardhat: {},
     rinkeby: {
       url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_RINKEBY_KEY}`,
       accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
     }
   },
   etherscan: {
     apiKey: {
       rinkeby: `${RINKEBY_KEY}`
     }
   }
 };
 