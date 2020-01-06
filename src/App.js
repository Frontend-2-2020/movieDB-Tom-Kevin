import React, { Component } from "react";
import "./App.css";
import Detail from "./Pages/Detail/Detail";
import Home from "./Pages/Home/Home";


export default class App extends Component {
  render() {
    return (
    <div>
      <Home />
      <Detail/>
    </div>);
  }
}
