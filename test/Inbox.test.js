const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    // Get a list of all the accounts
    accounts = await web3.eth.getAccounts();

    // Use one of the accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ from: accounts[0], gas: '1000000' });

    inbox.setProvider(provider);
});

describe('Inbox', () => {
    // Test that the contract has been deployed successfully by
    // checking if it has an address
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });

    // Test that the contract has an initial message set
    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!');
    });

    // Test that the initial message can be updated
    it('can change the message', async () => {
        
        // Attempt to change the message
        await inbox.methods.setMessage('bye').send({ from: accounts[0] });

        // check that the message has been changed
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    });
});