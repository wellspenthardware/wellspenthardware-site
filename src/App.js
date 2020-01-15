// React
import React, { Component } from "react";

// React Router
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";

export class App extends Component {
  render() {
    return (
      <React.StrictMode>
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
