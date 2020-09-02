import React from 'react';
import { Router } from "@reach/router"
import './App.css';
import Layout from "./components/layout";
import About from "./pages/about";
import Housing from "./pages/housing101"
import LocalInfo from "./pages/localinfo";

function App() {
  return (
      <Layout>
        <Router>
            <Housing path="/"/>
            <About path="/about"/>
            <LocalInfo path="/local"/>
        </Router>
      </Layout>
  );
}

export default App;
