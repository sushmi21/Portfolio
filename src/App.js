import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
