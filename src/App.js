// React
import React, { Component } from "react";

// React Router
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar"
import Home from "./pages/Home";
import Footer from "./components/Footer";

export class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <NavBar/>
        <Router>
          <Switch>
          <Route path="/register"/>
              <Route path="/login"/>
              <Route exact path="/" component={Home} />
          </Switch>
        </Router>
        <Footer/>
      </React.StrictMode>
    );
  }
}

export default App;
