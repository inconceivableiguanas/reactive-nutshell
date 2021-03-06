import React, { Component } from "react";
import ChatDom from "./ChatDOM";
import APIManager from "../../APIManager.js";
import "bulma/css/bulma.css";
import { Card, CardHeader, CardHeaderTitle, Button } from "bloomer";

export default class Chat extends Component {
  state = {
    chat: [],
    message: "",
    userId: "9"
  };
  componentDidMount() {
    
    APIManager.getAll("chat?_sort=id&_order=asc").then(chat =>
      this.setState({ chat })
    );
    //don't need tp do chat:chat is they are named the same
  }

  handleFieldChange = evt => {
    //used on add chat input
    this.setState({
      message: evt.target.value //took out evt.target.id and changed to message since I only have to worry about one input field
    });
  };
  addMessage = e => {
    e.preventDefault();
    APIManager.postItem("chat", {
      message: this.state.message,
      userId: this.state.userId
    })
      .then(e => e.json())
      .then(messageToPush =>
        this.setState(
          ({ chat, message }) => ({
            chat: [...chat, messageToPush],
            message: ""
          })
          //({ chat, message }) is previous state destructured => new state destructured state with new property, empty message string sets input to empty string
        )
      );
  };

  


  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardHeaderTitle>Chat Area</CardHeaderTitle>
          </CardHeader>

          <div className="card-body" />

          {this.state.chat.map(chat => (
            <ChatDom key={chat.id} chat={chat} editMessage={this.editMessage} />
          ))}
          <form onSubmit={this.addMessage}>
            <label>
              New Message:
              <input
                type="text"
                id="message"
                value={this.state.message}
                onChange={this.handleFieldChange}
              />
            </label>

            <Button type="submit" isColor="info">
              Add New Message
            </Button>
          </form>
        </Card>
      </React.Fragment>
    );
  }
}
