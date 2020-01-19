import React, { Component } from "react";
import { Link } from "react-router-dom";
import styling from "../Styles/Home.module.css";

class MovieCard extends Component {
  render() {
    const { movieId, title, poster, release, score } = this.props;

    console.log(movieId, title, poster, release, score);
    return (
      <div className={`${styling.grid__item} rounded`}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster}`}
          alt={`${title} poster`}
        />

        <div className={styling.moviedetailsbox}>
          <Link to={`movie/${movieId}`}>
            <h1 className="text-light">{title}</h1>
          </Link>
          <h2 className="text-light">{release}</h2>
          <Link to={`movie/${movieId}`}>
            <span>+ more info</span>
          </Link>
          <h3 className={styling.score}>{score}</h3>

        </div>
      </div>
    );
  }
}

export default MovieCard;
