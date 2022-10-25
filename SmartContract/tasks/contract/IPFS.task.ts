import { utils } from "ethers";
import { task } from "hardhat/config"

const contractAddress = "0x0027083FBB4eEb19e59D6A25A6e08AFd906273a6";

// npx hardhat get-hash --network testnetBNB
task("get-hash")
    .setAction(async (taskArgs, hre) => {
        const accounts = await hre.ethers.getSigners();
        const account = accounts[0]

        const factory = await hre.ethers.getContractFactory('IPFS')
        const contract = factory.attach(contractAddress)

        const result = await contract.connect(account).getHash()
        console.log("Hash: " + result);

        console.log("Done!");
    })

// npx hardhat send-hash --network testnetBNB --hash $hash
task("send-hash")
    .addParam('hash')
    .setAction(async (taskArgs, hre) => {
        const accounts = await hre.ethers.getSigners();
        const account = accounts[0]

        const factory = await hre.ethers.getContractFactory('IPFS')
        const contract = factory.attach(contractAddress)

        const txn = await contract.connect(account).sendHash(taskArgs.hash)
        
        console.log("Txn Hash: " + txn.hash);
        const resultTxn = await txn.wait();
        if (resultTxn.events !== undefined) {
            for (const event of resultTxn.events) {
                console.log(`Event "${event.event}" with args [${event.args}]`);
            }
        }

        console.log("Done!");
    })
