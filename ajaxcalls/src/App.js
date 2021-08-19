import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";  



class App extends Component {

  handleClick(event) {
    const axios = require('axios');
  
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data);
      }).catch(error => {
        console.error('Error',error)
      })
  }

  handlePostClick(event) {
    const axios = require('axios');

    axios.post('http://test-routes.herokuapp.com/test/uppercase',{message: "react is great"})
      .then(response => {
        console.log(response.data);
      }).catch(error => {
        console.error('Error',error)
      })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick.bind(this)}>Get Countries</button>
        <button onClick={this.handlePostClick.bind(this)}>Convert to Uppercase</button>
      </div>
    );
  }

  
}

export default App;
