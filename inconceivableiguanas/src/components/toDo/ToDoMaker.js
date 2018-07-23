//leah gwin 2018
import React, { Component } from "react";
import { Route } from "react-router-dom";
import Todo from "./Todo";

export default class TodoForm extends Component {
  state = { clicked: "" };

  componentDidMount() {
    this.props.setTaskState();
  }

  addNewTask = event => {
    const taskName = event.target.taskName.value;
    const dueDate = event.target.dueDate.value;

    fetch("http://localhost:5002/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        name: taskName,
        date: dueDate
      })
    })
      .then(() => {
        return fetch("http://localhost:5002/tasks");
      })
      .then(a => a.json())
      .then(this.props.setTaskState);
  };

  taskFormLauncher = () => {
    if (this.state.clicked === "") {
      this.setState({
        clicked: (
          <form onSubmit={this.addNewTask}>
            <label>Task Name</label>
            <input id="taskName" name="ArticleTitle" type="text" />
            <label>Article Summary</label>
            <input id="dueDate" name="dueDate" type="text" />
            <button type="submit">Submit</button>
          </form>
        )
      });
    } else {
      this.setState({ clicked: "" });
    }
  };

  render() {
    let propTask = this.props.tasks;
    return (
      <React.Fragment>
        <div>
          <button id="addTask" onClick={this.taskFormLauncher}>
            Create Task
          </button>
          {this.state.clicked}
        </div>

        {propTask.map(indivTask => (
          //the first ToDo is the import(name of the component), then we're passing in the individual task from the array to then assign it a key w/ an id and set it to a variable to be called later(on the other side itll be called props.toDo)
          <Todo key={indivTask.id} toDo={indivTask} />
        ))}
      </React.Fragment>
    );
  }
}
