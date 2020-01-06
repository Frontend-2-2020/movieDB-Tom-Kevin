import React, { Component } from 'react';
import { KEY } from '../../config';
import axios from 'axios';

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
        
      </div>
    );
  }
}

export default Home;