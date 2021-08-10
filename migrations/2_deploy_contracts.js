const BaboRouter = artifacts.require('BaboRouter.sol');


module.exports = async function (deployer, _network) {
    const factory = '0x85f35FEd0725DA586b934407144104da48A7976C';
    const wBnb = '0xA56c37DE55b4C0cf20D02a69e6D6f099fB0593C8';

    deployer.deploy(BaboRouter, factory, wBnb);

    console.log('Deployed BaboRouter');
};



