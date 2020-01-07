import React, { Component } from 'react';
import { KEY } from '../config';
import MovieCard from '../Components/MovieCard'
import axios from 'axios';
import queryString from 'query-string';

class Home extends Component {
  getData = () =>{
    axios
      .get("https://uselessfacts.jsph.pl/random.json?language=en")
      .then(response => {
        console.log(response);
        });  
  }

  render() {
    this.getData();
    console.log(KEY)
    return (
      <div>
        <MovieCard />
      </div>
    );
  }
}

export default Home;