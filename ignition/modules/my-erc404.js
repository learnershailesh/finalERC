const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("TokenModule", (m) => {

  const token = m.contract("MyERC404", ["0x16Cf955D55bbD549B5b95ad8eF31dd8cDde32bC4"]);

  return { token };
});
