//leah gwin 2018
import React, { Component } from "react";
import { Route } from "react-router-dom";

class TodoList extends Component {
  //getting ready to intialize local state and bind event handler
  constructor(props) {
    //used to access and call functions on the parent
    super(props);
    //setting local state here
    this.state = {
      items: []
    };
    //ensure the 'this' keyword resolves properly
    this.addItem = this.addItem.bind(this);
  }
  //   define our addItem event handler
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          {/* calls the event handler on submit */}
          <form onSubmit={this.addItem}>
            <input
              // storing a reference to our input element
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
            />
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter date"
            />
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}

//thinking of deleting my modal and going with this simple form input instead.
