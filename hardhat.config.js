require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

require("dotenv").config({path: ".env"});
require("@nomicfoundation/hardhat-ignition");

/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: ALCHEMY_API_KEY,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },

  etherscan:{
    apiKey: {
      sepolia: ALCHEMY_API_KEY,
    },
  },

  sourcify: {
    enabled: false,
  }
};
