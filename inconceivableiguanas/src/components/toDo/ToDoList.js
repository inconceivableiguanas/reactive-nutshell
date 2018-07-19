//leahgwin 2018
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
          //the first ToDo is the import(name of the component), then we're passing in the individual task from the array to then assign it a key w/ an id and set it to a variable to be called later(on the other side itll be called props.toDo)
          <ToDo key={indivTask.id} toDo={indivTask} />
        ))}
      </React.Fragment>
    );
  }
}
