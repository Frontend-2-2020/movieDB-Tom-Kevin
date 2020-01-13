import React, { Component } from "react";
import {Link} from 'react-router-dom';
import styling from "../Styles/Home.module.css";


class MovieCard extends Component {
  render() {
    return (
      <div className={styling.grid__item}>
        <img src="https://source.unsplash.com/random/200x400" alt=""/>
        <div className={styling.moviedetails}>
          <p>movie</p>
          <Link to={`movie/${this.props.movieId}`}>+ more info</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
