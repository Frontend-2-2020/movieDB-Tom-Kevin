import React, { Component } from 'react';
import { KEY } from '../config';
import MovieCard from '../Components/MovieCard'
import axios from 'axios';
import styling from "../Styles/Home.module.css";
import Pagination from '../Components/Pagination';
import Pagenumber from '../Components/Pagenumber';

class Home extends Component {
  state = {
    movies: [],
    page: 2
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

  changePage = (newPage) =>{
    this.getData(newPage);
    console.log('clicked', newPage)
  }

  render() {
    const movies = this.state.movies;
    return (
      <div>
        <Pagenumber currentPage={this.state.page}/>
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
        <Pagination currentPage={this.state.page} getOverviewData={this.changePage} />
      </div>
    );
  }
}

export default Home;