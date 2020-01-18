import React, { Component } from "react";
import Axios from "axios";
import { KEY } from "../config";
import CompanyLogo from "../Components/CompanyLogo";
import Genre from "../Components/Genre";

export default class Detail extends Component {
  state = {
    movie: ""
  };

  componentDidMount() {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${KEY}`
    ).then(response => {
      this.setState({
        movie: response.data
      });
    });
  }

  render() {
    // onderstaande code is nodig omdat er anders geen .map kan worden gedaan bij initial mount
    let nestedRender;
    if (this.state.movie) {
      nestedRender = (
        <div>
          <div className="logos mt-4">
            {this.state.movie.production_companies.map(post => (
              <CompanyLogo key={post.id} logo_path={post.logo_path} />
            ))}
          </div>
          <div className="logos mt-4">
            {this.state.movie.genres.map(genre => (
              <Genre key={genre.id} genre={genre.name} />
            ))}
          </div>{" "}
        </div>
      );
    }

    return (
      <div id="detail" style={{ display: "block" }}>
        <div
          className="jumbotron"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original${this.state.movie.backdrop_path}')`
          }}
        >
          <h1 className="display-4 text-light">
            <span id="title">{this.state.movie.title}</span>{" "}
            <span className="badge badge-success" id="score">
              {this.state.movie.vote_average}
            </span>
          </h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <p id="samenvatting">{this.state.movie.overview}</p>

                  {nestedRender}

                  <p className="text-muted mt-4">
                    Release: {this.state.movie.release_date}
                    <span id="release"></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={
                  "https://image.tmdb.org/t/p/w500" +
                  this.state.movie.poster_path
                }
                alt=""
                id="poster"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
