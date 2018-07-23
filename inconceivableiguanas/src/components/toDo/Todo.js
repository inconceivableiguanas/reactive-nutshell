//leah gwin 2018
import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class Todo extends Component {
  render() {
    let propToDo = this.props.toDo;
    console.log("PROPS TODO", this.props.toDo);
    return (
      <React.Fragment>
        <div>
          <h5>{propToDo.name}</h5>
        </div>
      </React.Fragment>
    );
  }
}
