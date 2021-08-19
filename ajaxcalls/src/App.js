import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";  



class App extends Component {

  handleClick(event) {
    const axios = require('axios');
  
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data);
      })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick.bind(this)}>Get Countries</button>
      </div>
    );
  }

  
}

export default App;
