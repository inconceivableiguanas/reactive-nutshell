import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "bulma/css/bulma.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/todo">To Do</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/chat">Chat</Link>
      </div>
    );
  }
}
