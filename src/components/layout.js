import React from "react";
import NavBar from "./navbar";
import {Container} from "react-bootstrap";

const Layout = ({children}) => (
    <Container fluid>
        <NavBar/>
        {children}
    </Container>
);

export default Layout;