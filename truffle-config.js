const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonicp = fs.readFileSync(".secret").toString().trim();
const MNEMONIC ='sail first renew exclude pattern sea display nuclear matter miracle abstract slab'

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "src/contracts"),
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "5777"
    },
    matic: {
        provider: () => new HDWalletProvider(mnemonicp, `https://rpc-mumbai.maticvigil.com`),
        network_id: 80001,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true
      },
         ropsten: {
        provider: function() {
          return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/7edf2bfe316044cebd40fe102701cb89")
        },
        network_id: 3,
        gas: 4000000      
      }
  }
};

/*require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
contracts_build_directory: path.join(__dirname, "client/src/contracts"),
        networks: {
                development: {
                        host: "127.0.0.1",
                        port: 8545,
                        network_id: "*"
                },
                "ropsten-infura": {
                        provider: () => new HDWalletProvider(process.env.TEST_MNEMONIC, "https://ropsten.infura.io/"+process.env.INFURA_KEY, 0),
                        network_id: 3,
                        gas: 4700000,
                        gasPrice: 100000000000
                }
        }
};*/

