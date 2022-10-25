import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config"
import "./tasks"

const config: HardhatUserConfig = {
  solidity: { version: "0.8.16" },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
    testnetBNB: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      accounts: {
        mnemonic: process.env.MNEMONIC
      }
    },
  },
};

export default config;