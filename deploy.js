const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const NFT = await hre.ethers.getContractFactory("MinimalNFT");
  const nft = await NFT.deploy();

  await nft.waitForDeployment();

  console.log(`NFT Contract deployed to: ${await nft.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
