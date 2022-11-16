import { expect, use } from "chai"
import { ethers } from "hardhat"
import { IPFS } from "../typechain-types"

let signers
let owner
let contract1: IPFS

describe("ERC20 mock contract", function () {
  beforeEach(async function () {
    signers = await ethers.getSigners()
    owner = signers[0]

    const tokenFactory = await ethers.getContractFactory("IPFS")

    contract1 = await tokenFactory.connect(owner).deploy()
    await contract1.deployed()
  })

  describe("Deployment", function () {
    it("default value", async function () {
      const result = await contract1.getHash()
      expect(result).to.equal("")
    })
  })

  describe("Transactions", function () {
    it("Send and ckeck Get", async function () {
      const cid = "QmQy4HN59MbHfFz66n7s5RpimMrd29MgJNcPszsmkd8knR";
      await contract1.sendHash(cid)
      const result = await contract1.getHash()
      expect(result).to.equal(cid)
    })

    it("Double Send and Get", async function () {
      const cid1 = "QmQy4HN59MbHfFz66n7s5RpimMrd29MgJNcPszsmkd8knR";
      await contract1.sendHash(cid1)
      const result1 = await contract1.getHash()
      expect(result1).to.equal(cid1)

      const cid2 = "QmWaow4mdAycbBTaTafoMSvWe3MPka7NFwq3d4WzCzQzsr";
      await contract1.sendHash(cid2)
      const result2 = await contract1.getHash()
      expect(result2).to.equal(cid2)
    })


  })
})
