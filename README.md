# Minimal NFT Minter

This repository provides an expert-level, yet accessible foundation for launching an NFT collection. It utilizes OpenZeppelin standards for maximum security while keeping all files in the root for simplicity.

### Features
* **ERC-721 Standards:** Fully compliant with Ethereum NFT standards.
* **Auto-Incrementing IDs:** Built-in logic to handle Token IDs automatically.
* **Owner Controls:** Restrict minting capabilities to the contract deployer.
* **Flat Architecture:** No complex directory nesting—ideal for rapid deployment and learning.

### Quick Start
1.  Install dependencies: `npm install`
2.  Configure your network in `hardhat.config.js`.
3.  Deploy: `npx hardhat run deploy.js --network <your-network>`
