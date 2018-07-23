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
//creates dataObject need for fetch patch method
    const updatedChat = {message: this.state.message}
    ApiManager.updateItem("chat", this.props.chat.id, updatedChat)
    //returns to chat page. {...props} is needed to be passed in from ApplicationViews ofr .history to work
    .then(() => {
      this.props.history.push("/chat");
    })
  };

  render() {
    return (
      // event listener that calls the update method are returns to chat
      <form onSubmit={this.handleUpdate}>
        <h1 className="h3 mb-3 font-weight-normal">Edit Chat</h1>
        <label htmlFor="inputMessage">Message</label>
        <input
          value={this.state.message} //reference to the state that is declared above
          onChange={this.handleFieldChange} //call to set input field value to state
          type="text"
          id="message"
          placeholder={this.props.message} //fills previous value to input field
          required=""
          autoFocus=""
        />
        <button type="submit">Update</button>
      </form>
    );
  }
}