import React, { Component } from "react";
import { useParams } from "react-router-dom";
import ReciveTask from './ReceiveTasks.jsx'
import DefaultTask from './DefaultTask.jsx'
import OrderTask from './OrderTask.jsx'

const ClassInput = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "order" ? (
        <OrderTask />
      ) : name === "recive" ? (
        <ReciveTask />
      ) : (
        <DefaultTask/> 
      )}
    </div>
  );
};

export default ClassInput;