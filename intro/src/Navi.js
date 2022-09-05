import React, { Component } from 'react';
import CartSummary from './CartSummary';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';

export default class Navi extends Component {
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
        <Navbar light expand="md"  style={{backgroundColor:"#131921" , fontFamily:"Arial", padding:"20px",marginBottom:"30px", borderRadius:"5px"}}>
          <NavbarBrand style={{color:"yellow", fontSize:"30px", textDecorationLine:"overline"}} href="/">Ercan Deutsch Markt</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse  isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar >
              <NavItem> 
                <NavLink>
                <Link style={{color:"white", textDecoration:"none"}} to="form1">User Info</Link>
                </NavLink>
              </NavItem>
              <NavItem> 
                <NavLink>
                <Link style={{color:"white", textDecoration:"none"}}  to="form2">Registration</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:"white"}}  href="https://github.com/ErcanSuzen">GitHub</NavLink>
              </NavItem>
              <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}