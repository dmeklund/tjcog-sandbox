import React from "react";
// import { Router } from "@reach/router";
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import "./App.css";
import Layout from "./components/layout";
import About from "./pages/about";
import TriangleRegionalData from "./pages/triangleRegionalData";
import Strategies from "./pages/strategies";
import LocalInfo from "./pages/localinfo";
import Resources from "./pages/resources";
import Glossary from "./pages/glossary";
import FAQ from "./pages/faq";
import Contact from "./pages/contact";
import Housing from "./pages/housing101";
import Footer from "./components/footer";

function App() {
  return (
    <Layout>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={ Housing } />
          <Route exact path="/triangle-regional-data" component={ TriangleRegionalData } />
          <Route exact path="/local" component={ LocalInfo } />
          <Route exact path="/strategies" component={ Strategies } />
          <Route exact path="/resources" component={ Resources } />
          <Route exact path="/glossary" component={ Glossary } />
          <Route exact path="/faq" component={ FAQ } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/contact" component={ Contact } />
        </Switch>
      </HashRouter>
      <Footer />
    </Layout>
  );
}

export default App;
