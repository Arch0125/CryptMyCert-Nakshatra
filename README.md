# CryptMyCert
The aim of the project is to integrate web3 into more frequently used web2 solutions to make people more aware how the technology works and build their their on the system, which will form a strong foundation to build large scale web3 solutions.

CryptMyCert provides a web3 alternative to Certificate verification service most frequently used by Hackathon Organizers. With web3 integrated into it the solution provides a much more secured and tamper-proof certificate distribution, which is identified by an unique Hash. The certificate can be verified by visiting our Verification Portal and entering the Hash. Every Organizer and Participant is recognised by their wallet addresses, hence it takes the advantage of Single Sign On, and tracks all of your certificates at one place.

Moreover, CryptMyCert supports Prize money distribution on the same platform, with the contract being deployed on both Ethereum and Polygon Blockchains. The organizers can pay the whole or a part of Prize money in ETH or MATIC. This payment system comes in handy if the Hackathon is international and the participant does not have account of the hosting country. Other than that, it serves as a unique way of integrating Blockchain into peoples' lives.

# Future Scaling
CryptMyCert is planned to become a subscription based service where X no. of hackathons can be conducted for free, then it would require subscriptions. Also, since Cryptocurrency market goes up and down pretty frequently, it would create a ambiguity to the prize money, to tackle this issue we will introduce a Stable coin whose value would be fixed thus no anomalies will be created. The last idea is to introduce token for each hackathon organizers to be distributed among the participants, in the long run it can prove to be a revenue source for the clubs.

## Tech Stack
React.js
Solidity
Truffle
IPFS

## How to run the app
1. Clone the repo
2. Create a .secret file in root containing your mnemonic code from metamask
3. Replace the same Menmonic code inside truffle-config.js
4. Run npm install
5. Run truffle deploy --network `ropsten/matic/development`
6. Run npm start
