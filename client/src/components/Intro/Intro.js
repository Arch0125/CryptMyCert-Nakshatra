//CORE DEPENDENCIES
import React, { Component } from "react";
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AuthenticityContract from "../../contracts/Authenticity.json";
import getWeb3 from "../../utils/getWeb3";
import CryptoJS from "crypto-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//UI COMPONENTS
import { faChevronDown, faInfoCircle, faUpload, faStamp, faHourglassHalf, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ListGroup, ListGroupItem, Card, CardBody, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'shards-react';
import extensions from '../../assets/fileIcons';
import particlesConfig from '../../assets/backgrParticlesConfig.json';
import "./FileCertificatorPage.css";
import "./styles.css";



const IPFS = require('ipfs-api');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

// export default ipfs;
// assets & style


//import certificateTemplateJpg from '../../utils/1_Thapar_Student_Residencies.jpg';
//import certificateTemplateJpg from '/Users/shivansh/Downloads/1_Thapar_Student_Residencies.jpg';
var recep='recep_add';
class FileCertificatorPage extends Component {

  constructor() {
    super()
    this.state = {
      accountHistory: null,
      web3: null,
      accounts: null,
      contract: null,
      fileHash: null,
      fileSize: null,
       buffer: null,
      fileExtension: null,
      clickAnimation: 'shadow-pop-tr',
      clickAnimation2: '',
      fadeInAnimation: 'fade-in',
      errorBanner: true,
      isTxModalOpen: false,
      modalContent: null
    };
    this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
      this.setState({value: event.target.value});
        event.preventDefault();
    }

    handleSubmit(event) {
      recep=this.state.value;
      console.log("recep add= ",recep);
      event.preventDefault();
    }


  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3(); //PASS AS PROP
      //
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
        console.log("THIS IS THE account:",accounts[0]);
      // // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = AuthenticityContract.networks[networkId];
      const instance = new web3.eth.Contract(
        AuthenticityContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.getAcctHistory);

    } catch (error) {
      // Catch any errors for any of the above operations.
      console.error("[WEB3 ERROR]",error);
      this.setState({web3: null, errorBanner: true}, this.forceUpdate)
      return (<h1>connection error</h1>);
    }
  };

  certifyFile = async () => {
    const { accounts, contract } = this.state;
    this.state.fileExtension=recep;
    const dataToWrite = {
      fileSize: this.state.fileSize,
      fileHash: this.state.fileHash,
      fileExtension: this.state.fileExtension
    }
    //triggers UI animation
//    this.clickAnimation2()
    // Stores the file info into the blockchain
    await contract.methods.certifyFile(dataToWrite.fileSize, dataToWrite.fileHash, dataToWrite.fileExtension).send({ from: accounts[0] });

    //alert user that everything went ok
    window.alert("File sent to address "+recep);

    // // Get the value from the contract to prove it worked.
    this.getAcctHistory();
  };

  getAcctHistory = async () => {

    const { accounts, contract } = this.state;
    //call the get method of the contract
    console.log("INSIDE HISTORY");
    console.log("accounts ",accounts[0],accounts[1])
    let response
    try {
      response = await contract.getPastEvents("FileCertified", {
        // filter: {author: accounts[0] },
        fromBlock: 0,
        toBlock: 'latest'
      });
      // response=contract.filters.Transfer(accounts[0]);
    } catch (e) {
      console.error("[GETACCTHISTORY ERROR]", e);
      this.setState({web3: null, errorBanner: true}, this.forceUpdate)
      // return
    }
    //debug

    console.log(">>>>>>>>>", response, "getAcctHistory EVENTS>-----")
    this.setState({accountHistory: response, errorBanner: false})

    console.log("test", contract);
  }



  render() {

    

    //load a loading screen on first load and errors
    if (!this.state.web3 || this.state.errorBanner === true) {
      return (
        <div className={"globalErrCont"}>
          <div class="loader" ></div>
          <p>Loading Web3, accounts, and contract...</p>

        </div>
      );
    }


    return (
      <>
  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
<div className="App">
      <p>
        <img
          align="right"
          src="https://image.freepik.com/vecteurs-libre/illustration-certification-ligne_23-2148575636.jpg"
          width="300"
        />
      </p>
      <h1 class="header">
        Give your Hackathon a <span class="br" />
        twist of <span class="purpletext">Crypto ✨</span>
      </h1>
      <br/>
      <h2 class="intro">
        with <span class="bold">CryptMyCert</span> you can
      </h2>
      <p class="feature">📜 Send certificates to participants through IPFS </p>
      <p class="feature">
        ✅ Participants can verify their certificates using Hash
      </p>
      <p class="feature">
        💸 Transfer prize money in form of Cryptocurrencies
      </p>

      <div id="container">
        <h1 class="header2">
          Let's get <span class="purpletext"> started </span> with <span class="purpletext" >CryptMyCert</span>
        </h1>
        <a href="/faq" >
        <button class="button" type="button">
          Login as Participant
        </button>
        </a>
        <a href="/" >
        <button class="button" type="button">
          Login as Organiser
        </button>
        </a>
      </div>

      <div id="container1">
        <h1 class="support"> This project is powered by </h1>
        <button class="brand" type="button">
          <img
            src="https://www.crypto-news.net/wp-content/uploads/2017/09/ethereum.png"
            width="100pt"
          />
        </button>
        <button class="brand" type="button">
          <img
            src="https://www.moonpay.com/assets/logos/polygon-logo.svg"
            width="100pt"
          />
        </button>
      </div>
    </div>
    </>
    )
  }
}

export default FileCertificatorPage