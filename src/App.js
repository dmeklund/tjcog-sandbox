import React from 'react';
import { Router } from "@reach/router"
import './App.css';
import Layout from "./components/layout";
import About from "./pages/about";
import Housing from "./pages/housing101"

function App() {
  return (
      <Layout>
        <Router>
            <Housing path="/"/>
            <About path="/about"/>
        </Router>
      </Layout>
  );
}

export default App;
