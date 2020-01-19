// React
import React, { Component } from "react";

// React Router
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

export class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Router>
          <Switch>
              <Route path="/signup" component={SignUp}/>
              <Route path="/login" component={LogIn}/>
              <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </React.StrictMode>
    );
  }
}

export default App;
