const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
    const [deployer] = await ethers.getSigners();

    const Withdraw = await ethers.getContractFactory("Withdraw");
    const withdraw = await Withdraw.deploy();

    console.log(`${deployer.address} deployed Withdraw to ${withdraw.target}`);
}

main();