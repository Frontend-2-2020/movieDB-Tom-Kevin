import React, { Component } from 'react';
import Axios from "axios";
import { KEY } from "../config";
import CompanyLogo from '../Components/CompanyLogo';
import Genre from '../Components/Genre';


export default class Detail extends Component {
  state = {
    movie:[],
    compagnie: [],
    genres: []
  };

  componentDidMount() {
    Axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${KEY}`)
      .then(response => {
        this.setState({
          compagnie: response.data.production_companies,
          genres: response.data.genres,
          movie: response.data
        });
      });
  }

  render() {
    return (
      <div id="detail" style={{ display: "block" }}>
        <div className="jumbotron" style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${this.state.movie.backdrop_path}')`}}>
          <h1 className="display-4">
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

                  <div className="logos mt-4">
                      {this.state.compagnie.map(post => (
                        <CompanyLogo key={post.id} logo_path={post.logo_path}/>
                      ))}
                  </div>

                  <div className="logos mt-4">
                      {this.state.genres.map(genre => (
                        <Genre key={genre.id} genre={genre.name}/>
                      ))}
                  </div>

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
