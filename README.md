# inbox
An app based in the blockchain built to explore Ethereum, Solidity, and Smart Contracts.

In this project, I created `compiler.js`, in which I used the Solidity compiler to read the contents of the inbox contract, and feed the contents to the compiler. After finishing the compilation script, I started working on some tests. In the file `Inbox.test.js`, I made use of Web3, which is the portal to the Ethereum world. Web3 requires a provider, this provider instructs Web3 to what network it's connecting to, and it contains information about the different accounts that are available to Web3. In this case the provider was given by the Ganache CLI module. Ganache hosts a local test network, which generates a list of test accounts, recieves transactions, and we can also deploy contracts to it. Ganache also processes deployments and transaction almost instantly, to make it easier to test them. In the test file, I also imported the ABI and bytecode from the compiler. In addition, I used Mocha to setup the test cases, I used `beforeEach()` to set some configurations to run before each test. Then, I used `describe()` to implement each test.

After finishing the test file, I started working on the deployment script in `deploy.js`. In which I wrote some code to deploy the contract to the Rinkeby network. I used a module called HD Wallet Provider, which is used to connect to a target network and unlock an account for use on that network. I unlocked my account using the 12 work mnemonic and instructed that the provider should connect to an Infura node.
