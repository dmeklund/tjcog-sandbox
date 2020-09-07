import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";

export const NavItems = (props) => (
  <Navbar bg="primary" {...props}>
    <NavItem href="/">Affordable Housing 101</NavItem>
    <NavItem href="/triangle-regional-data">Triangle Regional Data</NavItem>
    <NavItem href="/strategies">Best Practices & Strategies</NavItem>
    <NavItem href="/resources">Resources</NavItem>
    <NavItem href="/glossary">Glossary of Terms</NavItem>
    <NavItem href="/faq">FAQ</NavItem>

    {/* These items are removed on small screens, so we add them to the dropdown menu */}
    <NavItem href="/about" className="d-flex d-md-none">
      About Us
    </NavItem>
    <NavItem href="/contact" className="d-flex d-md-none">
      Contact Us
    </NavItem>
  </Navbar>
);

const NavItem = (props) => {
  const { className, ...rest } = props;
  return (
    <Nav.Item className={`m-auto text-center ${className || ""}`}>
      <Nav.Link className="text-white font-weight-bold" {...rest} />
    </Nav.Item>
  );
};
