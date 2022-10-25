import { task } from "hardhat/config";
import "@nomiclabs/hardhat-web3";

// npx hardhat balance --account $account --network $network
task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs, { web3 }) => {

    const account = web3.utils.toChecksumAddress(taskArgs.account);
    const balance = await web3.eth.getBalance(account);

    console.log(web3.utils.fromWei(balance, "ether"), "ETH");
})

