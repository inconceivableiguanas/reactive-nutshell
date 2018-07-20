import React, { Component } from "react";
import ApiManager from "../../APIManager.js"

export default class EditChat extends Component {
  // Set initial state
  state = {
    message: this.props.chat.message
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleUpdate = e => {
    e.preventDefault();

    const updatedChat = {message: this.state.name}
    ApiManager.updateItem("chat", this.props.chat.id, updatedChat)
    .then(() => {
      this.props.history.push("/chat");
    })
  };

  render() {
    return (
      <form onSubmit={this.handleUpdate}>
        <h1 className="h3 mb-3 font-weight-normal">Edit Chat</h1>
        <label htmlFor="inputMessage">Chat Name</label>
        <input
          value={this.state.name}
          onChange={this.handleFieldChange}
          type="text"
          id="message"
          placeholder="message"
          required=""
          autoFocus=""
        />
        <button type="submit">Update</button>
      </form>
    );
  }
}