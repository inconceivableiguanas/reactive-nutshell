//leah gwin 2018
import React, { Component } from "react";
import ApiManager from "../../APIManager";


export default class Todo extends Component {
  state = {
    completion: this.props.toDo.completion,
    propTask: this.props.toDo
  };
  //changes state of completion on click of checkbox
  handleChange = evt => {
    const stateToChange = { completion: this.props.toDo.completion };
    stateToChange["completion"] = true;
    this.setState(stateToChange);
    //collectionName, itemId, theObject
    ApiManager.patchItem("todo", this.props.toDo.id, stateToChange).then(() => {
      this.props.setTaskState();
    });
  };

  render() {
    //this is toDo from the proptask map on ToDoMaker
    let propTask = this.props.toDo;
    console.log("PROPS tasks", this.props.toDo);
    return (
      <React.Fragment>
        <div id="individualTask">
          <h4 id="clickableEditName">{propTask.name}</h4>
          <p>{propTask.date}</p>
          <input
            onChange={this.handleChange}
            type="checkbox"
            name="isChecked"
            id="completion"
          />
          <button type="edit">Edit</button>
        </div>
      </React.Fragment>
    );
  }
}
