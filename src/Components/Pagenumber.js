import React, { Component } from 'react';
import styling from "../Styles/Home.module.css";

class Pagenumber extends Component {
  render() {
    return (
      <div>
        <span className={styling.bigPageIndicator}>#{this.props.currentPage}</span>
      </div>
    );
  }
}

export default Pagenumber;