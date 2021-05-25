const DegRouter = artifacts.require('DegRouter.sol');


module.exports = async function (deployer, _network, addresses) {
    const factory = '0x08d97905063A55f18cC8c1074ED4DC2b2e7C11aE';
    const wBnb = '0xd3c54c4f6b79063c63b3b18fcee2d56722610a02';

    deployer.deploy(DegRouter, factory, wBnb);
};



