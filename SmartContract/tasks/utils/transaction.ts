import { task } from "hardhat/config";
import "@nomiclabs/hardhat-web3";

// npx hardhat transaction --hash $hash --network $network
task("transaction", "Look transactions by hash")
  .addParam("hash", "Hash")
  .setAction(async (taskArgs, { web3 }) => {

    const transaction = await web3.eth.getTransaction(taskArgs.hash);
    const transactionReceipt= await web3.eth.getTransactionReceipt(taskArgs.hash);

    console.log('transactionReceipt: ', transactionReceipt, 'Transaction: ', transaction);
})

