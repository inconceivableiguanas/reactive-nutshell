import React, { Component } from "react";
import ApiManager from "../../APIManager.js";

export default class ToDoEdit extends Component {
  //set state
  state = {
    task: this.props.task.name,
    date: this.props.task.date
  };

  //update state based on the input fields changing
  handleEditChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  //prevents form from reloading
  handleUpdate = e => {
    e.preventDefault();

    const editedTask = {
      name: this.state.name,
      date: this.state.date,
      completion: this.state.completion,
      id: this.state.id
    };
    //collectionName, itemId, theObject
    ApiManager.updateItem("todo", this.props.toDo.id, editedTask).then(() => {
      this.props.history.push("/toDo");
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleUpdate}>
          <label>Edit Task</label>
          <input
            id="taskName"
            name="editName"
            type="text"
            value={this.state.name}
            onChange={this.handleEditChange}
          />
          <label>Edit Due Date</label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            value={this.state.date}
            onChange={this.handleEditChange}
          />
          <button type="submit">Save Edited Task</button>
        </form>
      </React.Fragment>
    );
  }
}
