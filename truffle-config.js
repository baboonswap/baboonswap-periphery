const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
  privateKeys: ['31f4729dfbfa97742b9d3e71f7cc6d787774777b0686bdb629ee471ce530571a', '03b70ef699d3109cbca6cac8ff65aaff94abf6ba0a3154b484f04e9625af6b95'],
  providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
});

module.exports = {
  

  networks: {

    bTest: {
      provider: () => provider,
      network_id: "97"
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.6",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        //  evmVersion: "byzantium"
      }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false
  }
};
