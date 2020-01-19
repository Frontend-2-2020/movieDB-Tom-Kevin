import React, { Component } from 'react';
import { KEY } from '../config';
import axios from 'axios';
import MovieCard from '../Components/MovieCard'
import Pagination from '../Components/Pagination';
import Pagenumber from '../Components/Pagenumber';
import styling from "../Styles/Home.module.css";

class Home extends Component {
  state = {
    movies: [],
    page: 1
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
      });  
  }

  changePage = (newPage) =>{
    this.getData(newPage);
  }

  render() {
    const {movies, page} = this.state;

    return (
      <div className={styling.homecontainer}>
        {/* Pagenumber component for the number indicator on the right */}
        <Pagenumber currentPage={page}/>

        {/* Render out all the moviecards based on API */}
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
        
        {/* Render pagination */}
        <Pagination currentPage={page} getOverviewData={this.changePage} />
      </div>
    );
  }
}

export default Home;