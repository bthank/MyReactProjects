import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";  /* useState is a React hook */

function App() {
  
    /* initializes count to 0 and setCount to the useState(0) function */
    const [count,setCount] = useState(0);
    const [data, setData] = useState([]);
    
    /* add a callback function to useEffect React hook*/
    /* useEffect hook gets invoked immediately after every time the render() happens */ 
    useEffect(()=>{
      if (count%3 === 0) {
        document.title = count;
      }
    })
   
    return (
      <div className="App">
        <button onClick= {() => setCount(count+1)} >Click Me</button>
         
      </div>
    );
   


  
}

export default App;
