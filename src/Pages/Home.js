import React, { Component } from 'react';
import { KEY } from '../config';
import MovieCard from '../Components/MovieCard'
import axios from 'axios';
import styling from "../Styles/Home.module.css";
import Pagination from '../Components/Pagination';

class Home extends Component {
  state = {
    movies: [],
    page: 5
  }

  componentDidMount = () =>{
    this.getData(this.state.page);
  }

  getData = (page) =>{
    axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&page=${page}`)
    .then(response => {
      const output = {
        movies: response.data.results,
        page: response.data.page
      }
      
      this.setState({movies: output.movies, page: output.page})
      console.log('state', this.state);
      });  
  }

  getNewPage = (nextPage) =>{
    this.getData(nextPage)
    console.log('clicked', nextPage)
  }

  render() {
    const movies = this.state.movies;
    return (
      <div>
        <div className={styling.overview__grid}>
          {movies.map(movie =>{
            return <MovieCard key={movie.id} 
                              movieId={movie.id} 
                              title={movie.title}
                              poster={movie.poster_path}
                              release={movie.release_date}
                              score={movie.vote_average}
                              />
          })}
        </div>
        <Pagination currentPage={this.state.page} getOverviewData={this.getNewPage} />
      </div>
    );
  }
}

export default Home;