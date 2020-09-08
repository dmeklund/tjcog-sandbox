import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { NavItems } from "./navbarItems";
import { NavbarMenu } from "./navbarMenu";

export default () => (
  <div className="d-flex flex-column d-lg-block">
    <Nav className="justify-content-between p-2">
      <Navbar.Brand href="/" className="d-none d-lg-flex pl-2">
        <Image height={90} width={90} src="/logo.png" />
        <div className="d-flex-col m-auto pl-2 text-uppercase">
          <div className="h2 mb-0" style={{ fontWeight: 800 }}>
            Triangle J
          </div>
          <div>Council of Governments</div>
        </div>
      </Navbar.Brand>
      <Navbar.Brand href="/" className="d-flex d-lg-none pl-2">
        <Image height={40} width={40} src="/logo.png" />
        <div className="d-flex-col m-auto pl-2 text-uppercase">
          <div className="h4 mb-0" style={{ fontWeight: 800 }}>
            Triangle J
          </div>
          <div style={{ fontSize: "0.8rem" }}>Council of Governments</div>
        </div>
      </Navbar.Brand>
      <div>
        <Nav className="align-items-center">
          <div className="d-none d-md-flex">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </div>
          <NavbarMenu />
        </Nav>
      </div>
    </Nav>
    <NavItems className="d-none d-lg-flex justify-content-around pl-0 text-uppercase font-weight-bold overflow-auto" />
  </div>
);
