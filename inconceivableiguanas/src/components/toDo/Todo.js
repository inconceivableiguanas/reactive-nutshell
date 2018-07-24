//leah gwin 2018
import React, { Component } from "react";
import { Route } from "react-router-dom";
// import check from "./components/toDo/TodoCheckfn";

export default class Todo extends Component {
  render() {
    //this is toDo from the proptask map on ToDoMaker
    let propTask = this.props.toDo;
    console.log("PROPS tasks", this.props.toDo);
    return (
      <React.Fragment>
        <div id="individualTask">
          <h4>{propTask.name}</h4>
          <p>{propTask.date}</p>
          <input
            onClick={task => propTask.checkTask(propTask.task)}
            type="checkbox"
            name="isChecked"
          />
        </div>
      </React.Fragment>
    );
  }
}
