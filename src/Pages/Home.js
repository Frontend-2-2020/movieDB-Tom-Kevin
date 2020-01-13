import React, { Component } from 'react';
import { KEY } from '../config';
import MovieCard from '../Components/MovieCard'
import axios from 'axios';
import queryString from 'query-string';

class Home extends Component {
  state = {
    movies: [],
    page: 1
  }  

  componentDidMount = () =>{
    axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&page=1`)
    .then(response => {
      const output = {
        movies: response.data.results,
        page: response.data.page
      }
      
      this.setState({movies: output.movies, page: output.page})
      console.log(this.state);
      });  
  }

  render() {
    const movies = this.state.movies;
    return (
      <div className="overview__grid">
        {movies.map(movie =>{
          return <MovieCard key={movie.id}/>
        })}
      </div>
    );
  }
}

export default Home;