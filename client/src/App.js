import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import FileCertificatorPage from './components/FileCertificatorPage/FileCertificatorPage'
import NavBar from './components/NavBar/NavBar'
import FaqPage from './components/FaqPage/FaqPage'
import AboutPage from './components/AboutPage/AboutPage'
import Intro from "./components/Intro/Intro";
import Payment from "./components/Payment/Payment"

import AuthenticityContract from "./contracts/Authenticity.json";

import getWeb3 from "./utils/getWeb3";
import CryptoJS from "crypto-js";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "./App.css";

class App extends Component {


  render() {

    return (
      <div className="App">
      <NavBar />
      <Router>
      <Route exact path="/" component={FileCertificatorPage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/intro" component={Intro}/>
      <Route path="/pay" component={Payment}/>

      </Router>
      <footer>
        <p className={"footerText"}>© 2022 CryptMyCert</p>
    </footer>
      </div>
    );
  }
}

export default App;
