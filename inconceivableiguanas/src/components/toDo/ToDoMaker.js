//leah gwin 2018
import React, { Component } from "react";
import { Route } from "react-router-dom";

class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="enter task" />
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}

//thinking of deleting my modal and going with this simple form input instead.
