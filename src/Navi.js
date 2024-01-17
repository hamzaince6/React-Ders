import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand tag={Link} to="/">Northwind App</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/form1">Form Demo 1</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.garantibbva.com.tr/" target="_blank">Form Demo adsas2</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap" target="_blank">GitHubfsdsd</NavLink>
                </NavItem>
                <CartSummary
                    removeFromCart={this.props.removeFromCart}
                    cart={this.props.cart}
                />
              </Nav>
            </Collapse>
          </Navbar>
        </div>
    );
  }
}
