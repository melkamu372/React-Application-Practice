import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './App.css'
import ContextApp from './context/context.jsx'
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
    <h1>Our First Test</h1>
    <ContextApp/>
    <Link to="/React-Application-Practice/profile">Profile page</Link>
</>
  )
}

export default App
