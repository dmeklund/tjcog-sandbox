import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default () => (
    <Container fluid>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Triangle J Council of Governments</Navbar.Brand>
            <Nav className="justify-content-center">
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
        </Navbar>
        <Navbar bg="secondary" variant="dark">
            <Nav className="justify-content-center" fill variant="pills">
                <Nav.Link href="/">Affordable Housing 101</Nav.Link>
                <Nav.Link href="/bestpractices">Best Practices</Nav.Link>
                <Nav.Link href="/local">Find My Local Info</Nav.Link>
                <Nav.Link href="/strategies">Terms and Strategies</Nav.Link>
                <Nav.Link href="/resourcse">Resources</Nav.Link>
                <Nav.Link href="/casestudies">Case Studies</Nav.Link>
                <Nav.Link href="/profiles">Resident Profiles</Nav.Link>
                <Nav.Link href="/FAQ">FAQ's</Nav.Link>
            </Nav>
        </Navbar>
    </Container>
);
