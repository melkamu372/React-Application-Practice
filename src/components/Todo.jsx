import React, { Component } from "react";
import { useParams } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import ReciveTask from './ReceiveTasks.jsx'
import DefaultTask from './default.jsx'
import OrderTask from './OrderTask.jsx'

function ClassInput() {
  // constructor(props) {
  //   super(props);
  //   this.name  = useParams();
  //   this.state = {
  //     todos: [],
  //     inputVal: "",
  //   };

  //   this.handleInputChange = this.handleInputChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  const { name } = useParams();
  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }


  render() {
    return (
      <section>
        <p>{this.props.name}</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>All the tasks!</p>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        {/* <Outlet/> */}

        {this.name === "order" ? (
        <OrderTask />
      ) : this.name === "receive" ? (
        <ReciveTask/>
      ) : (
        <DefaultTask />
      )}
      </section>
    );
  }
}

export default ClassInput;