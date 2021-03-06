const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const keys = require('./keys');

const provider = new HDWalletProvider(
    keys.mnemonic,
    keys.infuraRinkebyURL
);

const web3 = new Web3(provider);

// Add arbitrary function to enable the asunc-await syntax
const deploy = async () => {

    // Get list of accounts in HDWalletProvider
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    // Deploy contract
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] });

    // Record the address of the deployed contract
    console.log('Contract deployed to', result.options.address);
};
deploy();