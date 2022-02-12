import React, { Component } from "react";

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse
} from "shards-react";

// style
import "./NavBar.css";

import iconimg from "../../assets/iconz.png"
import logoWeb from "../../assets/logo-web.png"

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
  this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }



  render() {

    return (
      <Navbar id={"appNavBar"} type="dark" expand="md">
          <NavbarBrand href="/">
            <b>CryptMyCert</b>
          </NavbarBrand>
          <NavbarToggler onClick={() => this.toggleNavbar()} />

          <Collapse open={this.state.collapseOpen} navbar>
              <Nav navbar className="ml-auto">
              <NavItem>
              <a class="purpletext" href="/about"><button class="button-34" type="button" >Verification Portal</button></a>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    )
  }
}

export default NavBar