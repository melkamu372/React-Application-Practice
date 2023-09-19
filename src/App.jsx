
import React, { useEffect, useState } from "react";
import './App.css'
import FunctionalInput from './components/Todo.jsx'

function App() {
 
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);

    return () => {
      clearInterval(key);
    };
  },[])

  return (
    <>
    <h1>Our First Test</h1>;
    <FunctionalInput/>
<p>{counter} seconds have passed.</p>
</>
  )
}

export default App
