import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = (props) => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
    <Footer />
  </Router>
);

export default App;