import React from 'react';
import { Router } from "@reach/router"
import './App.css';
import Layout from "./components/layout";
import About from "./pages/about";
import Housing from "./pages/housing101"
import TabDemo from "./pages/tab-demo";
import ControlledAccordions from "./pages/accordion-demo";

function App() {
  return (
      <Layout>
          <br />
          <Router>
              <Housing path="/"/>
              <About path="/about"/>
              <ControlledAccordions path="/accordion-demo"/>
              <TabDemo path="/tab-demo"/>
          </Router>
      </Layout>
  );
}

export default App;
