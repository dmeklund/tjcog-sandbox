import React from 'react';
import { Router } from "@reach/router"
import './App.css';
import Layout from "./components/layout";
import About from "./pages/about";
import Housing from "./pages/housing101"
import CardDemo from "./pages/cardDemo";

function App() {
  return (
      <Layout>
        <Router>
            <Housing path="/"/>
            <About path="/about"/>
            <CardDemo path="/carddemo"/>
        </Router>
      </Layout>
  );
}

export default App;
