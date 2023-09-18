
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
    <FunctionalInput/>
<p>{counter} seconds have passed.</p>
</>
  )
}

export default App
