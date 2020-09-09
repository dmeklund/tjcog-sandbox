import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Layout from "./components/layout";
import About from "./pages/about";

function App() {
  return (
    <Layout>
      <Router>
        <Housing path="/" />
        <LocalInfo path="/local" />
        <TriangleRegionalData path="/triangle-regional-data" />
        <Strategies path="/strategies" />
        <Resources path="/resources" />
        <Glossary path="/glossary" />
        <FAQ path="/faq" />
        <About path="/about" />
        <Contact path="/contact" />
      </Router>
    </Layout>
  );
}

export default App;
