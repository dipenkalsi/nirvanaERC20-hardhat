const hre = require("hardhat");

async function main() {
  const Nirvana = await hre.ethers.getContractFactory("Nirvana");
  const nirvana = await Nirvana.deploy(100000000, 50);

  await nirvana.deployed();

  console.log("Nirvana deployed: ", nirvana.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
