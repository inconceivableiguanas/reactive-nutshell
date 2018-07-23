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
    event.preventDefault();
    const taskName = event.target.taskName.value;
    const dueDate = event.target.dueDate.value;

    fetch("http://localhost:5002/todo", {
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
        return fetch("http://localhost:5002/todo");
      })
      .then(a => a.json())
      .then(this.props.setTaskState)
      .then(this.setState({ clicked: "" }));
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
    //this todos is from the appviews
    let propTask = this.props.toDos;
    console.log("proptask", propTask);

    return (
      <React.Fragment>
        <div>
          <button className="addTask" onClick={this.taskFormLauncher}>
            Add Task
          </button>
        </div>
        {this.state.clicked}

        {propTask.map(task => (
          //the first ToDo is the import(name of the component), then we're passing in the individual task from the array to then assign it a key w/ an id and set it to a variable to be called later(on the other side itll be called props.toDo)
          <Todo key={task.id} toDo={task} />
        ))}
      </React.Fragment>
    );
  }
}
