const hre = require("hardhat");

async function main() {
  const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
  const recipient = "RECIPIENT_WALLET_ADDRESS";
  const metadataURI = "ipfs://QmYourHashHere/metadata.json";

  const NFT = await hre.ethers.getContractAt("MinimalNFT", contractAddress);
  const tx = await NFT.mintNFT(recipient, metadataURI);
  await tx.wait();

  console.log("NFT Minted successfully!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
