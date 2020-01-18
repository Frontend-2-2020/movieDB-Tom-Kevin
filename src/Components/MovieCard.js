import React, { Component } from "react";
import {Link} from 'react-router-dom';
import styling from "../Styles/Home.module.css";


class MovieCard extends Component {
  render() {
    const {movieId, title, poster, release, score} = this.props;

    console.log(movieId, title, poster, release, score)
    return (
      <div className={styling.grid__item}>
        {/* <img src="https://source.unsplash.com/random/200x400" alt=""/> */}
        <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt={`${title} poster`}/>

        <div className={styling.moviedetails}>
          <h1>{title}</h1>
          <p>{release}</p>
          <Link to={`movie/${movieId}`}>+ more info</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
