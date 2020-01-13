import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light mb-3">
        <Link to="/">
        <span className="navbar-brand mb-0 h1">MovieDB Kevin en Tom</span>
        </Link>
      </nav>
    )
  }
}
