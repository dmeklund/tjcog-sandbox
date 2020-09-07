import React from "react";
import { Link } from "@reach/router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const NavItems = (props) => (
  <Navbar bg="primary" {...props}>
    <NavItem to="/">Affordable Housing 101</NavItem>
    <NavItem to="/triangle-regional-data">Triangle Regional Data</NavItem>
    <NavItem to="/strategies">Best Practices & Strategies</NavItem>
    <NavItem to="/resources">Resources</NavItem>
    <NavItem to="/glossary">Glossary of Terms</NavItem>
    <NavItem to="/faq">FAQ</NavItem>

    {/* These items are removed on small screens, so we add them to the dropdown menu */}
    <NavItem to="/about" className="d-flex d-md-none">
      About Us
    </NavItem>
    <NavItem to="/contact" className="d-flex d-md-none">
      Contact Us
    </NavItem>
  </Navbar>
);

const NavItem = (props) => {
  const { className, ...rest } = props;
  return (
    <Nav.Item className={`m-auto text-center ${className || ""}`}>
      <Link className="text-white font-weight-bold" {...rest} />
    </Nav.Item>
  );
};
