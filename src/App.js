// React
import React, { Component } from "react";

// React Router
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Post from "./pages/Post";

export class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/posts" />
              // <Route path="/signup" component={SignUp}/>
              // <Route path="/login" component={LogIn}/>
            }
            <Route exact path="/posts" component={Home} />
            <Route path="/posts/:post" component={Post} />
          </Switch>
        </Router>
      </React.StrictMode>
    );
  }
}

export default App;
