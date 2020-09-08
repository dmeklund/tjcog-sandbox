import React from "react";
import NavBar from "./NavBar/navbar";

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

export default Layout;
