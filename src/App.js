import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";

export default class App extends Component {
  render() {
    return (
        <Router>
          <NavBar/>
          <Switch>
            <Route path="XXXX" component={Detail}/>
            <Route path="/" component={Home}/>
          </Switch>
          {/* <Home />
          <Detail /> */}
        </Router>
    );
  }
}
