import React from 'react';
import { Router } from "@reach/router"
import './App.css';
import Layout from "./components/layout";
import About from "./pages/about";
import Housing from "./pages/housing101"
import TabDemo from "./pages/tab-demo";
import ControlledAccordions from "./pages/accordion-demo";
import TabDemo2 from "./pages/tab-demo2";

function App() {
  return (
      <Layout>
          <br />
          <Router>
              <Housing path="/"/>
              <About path="/about"/>
              <ControlledAccordions path="/accordion-demo"/>
              <TabDemo path="/tab-demo"/>
              <TabDemo2 path="/tab-demo2"/>
          </Router>
      </Layout>
  );
}

export default App;
