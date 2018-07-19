import React, { Component } from "react";
import ToDo from "./Todo";

export default class ToDoList extends Component {
  render() {
    let propToDo = this.props.toDos;
    return (
      <React.Fragment>
        {console.log(propToDo)}
        <button className="addTask">Add Task</button>
        {propToDo.map(indivTask => (
          <ToDo key={indivTask.id} toDo={indivTask} />
        ))}
      </React.Fragment>
    );
  }
}
