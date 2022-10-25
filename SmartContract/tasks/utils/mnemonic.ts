import { task } from "hardhat/config"

task("mnemonic", "Generate new mnemonic", async (taskArgs, hre) => {
    const wallet = hre.ethers.Wallet.createRandom()
    console.log(`Mnemonic: ${wallet.mnemonic.phrase}`)
    console.log(`PublicKey: ${wallet._signingKey().publicKey}`)
    console.log(`PrivateKey: ${wallet._signingKey().privateKey}`)
    console.log(`Address: ${await wallet.getAddress()}`)
})