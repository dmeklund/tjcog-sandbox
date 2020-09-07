import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";

export const NavItems = (props) => (
  <Navbar
    bg="primary"
    {...props}
    style={{ fontFamily: "Montserrat, system-ui" }}
  >
    <NavItem href="/">Affordable Housing 101</NavItem>
    <NavItem href="/bestpractices">Best Practices</NavItem>
    <NavItem href="/local">Find My Local Info</NavItem>
    <NavItem href="/strategies">Terms and Strategies</NavItem>
    <NavItem href="/resources">Resources</NavItem>
    <NavItem href="/casestudies">Case Studies</NavItem>
    <NavItem href="/profiles">Resident Profiles</NavItem>
    <NavItem href="/FAQ">FAQ</NavItem>
  </Navbar>
);

const NavItem = ({ children, href }) => (
  <Nav.Item className="m-auto text-center">
    <Nav.Link href={href} className="text-white font-weight-bold">
      {children}
    </Nav.Link>
  </Nav.Item>
);
