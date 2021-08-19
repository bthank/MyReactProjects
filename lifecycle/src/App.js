import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";  

class App extends Component {
  /* set initial state of component in constructor */
  constructor(props){
    super(props);
    console.log('In constructor of App component');
    
    this.state = {count: 0};
  }

  componentDidMount(){
    console.log('Component did mount');
  }

  // only update property on UI conditionally when state variable count is a multiple of 3
  shouldComponentUpdate(props,newState){
    console.log('In shouldComponentUpdate  newState.count=',newState.count);
    if(newState.count%3 == 0){
      console.log(' *** In shouldComponentUpdate: YES');
      return true;
    } else {
      console.log(' *** In shouldComponentUpdate: NO');
      return false;
    }
    
  }

  componentDidUpdate(){
    console.log('Component did update');
  }

  handleClick() {
    this.setState({count: this.state.count + 1});
    console.log("In handleClick method incrementing count by 1");
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick.bind(this)}>Click Me</button>
        <br/>
        {this.state.count}
      </div>
    );
  }


  
}

export default App;
