import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";  /* useState is a React hook */

function App() {
  
    /* initializes count to 0 and setCount to the useState(0) function */
    const [count,setCount] = useState(0);
     

   
    return (
      <div className="App">
        <button onClick={this.handleClick.bind(this)}>Click Me</button>
        <br/>
        {this.state.count}
      </div>
    );
   


  
}

export default App;
