const { ethers } = require("hardhat");

async function main() {
  var price = 10000000000000;  // 0.00001 Ether per product.
  const IceCreamFactory = await ethers.getContractFactory("IceCreamFactory");
  const instance = await IceCreamFactory.deploy(price);
  await instance.deployed().then(function(){
    console.log("IceCreamFactory Deployed at : ",instance.address);
  });

  const FrontFace = await ethers.getContractFactory("FrontFace");
  const ffinstance = await FrontFace.deploy(instance.address);
  await ffinstance.deployed().then(function(){
    console.log("Front Face Deployed at : ",ffinstance.address);
  });
}

main();