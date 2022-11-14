// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;
contract IPFS {
    string ipfsHash;
    
    // send CID
    function sendHash(string memory x) public {
        ipfsHash = x;
    }
    
    // get CID
    function getHash() public view returns (string memory) {
        return ipfsHash;
    }
}