import React from 'react';
import { Router } from "@reach/router"
import './App.css';
import Layout from "./components/layout";
import About from "./pages/about";
import Housing from "./pages/housing101"
import TabAccordionDemo from "./pages/tab-accordion-demo";

function App() {
  return (
      <Layout>
        <Router>
            <Housing path="/"/>
            <About path="/about"/>
            <TabAccordionDemo path={"/tab-accordion-demo"}/>
        </Router>
      </Layout>
  );
}

export default App;
