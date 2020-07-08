import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="back">
      <Navbar light expand="md">
        <NavbarBrand>
          <Link className={"mx-3 link"} to="/">
            N M V
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="link" to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className="link" to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link className="link" to="/menu">Menu</Link>
            </NavItem>
            <NavItem>
              <Link className="link" to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <hr />
    </div>
  );
};

export default Sidebar;
