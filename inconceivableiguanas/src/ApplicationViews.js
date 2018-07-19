import React, { Component } from "react";
import { Route } from "react-router-dom";
import Events from "./components/events/Events";
import ArticleList from "./components/articles/ArticleList";
import Chat from "./components/chat/Chat";
import FriendsList from "./components/friends/FriendsList";
import Todo from "./components/toDo/Todo";
import Home from "./Home";
import Friends from "./components/friends/Friends"
export default class ApplicationViews extends Component {
  state = {
    event: [],
    task: [],
    article: [{ name: "Dogshit" }],
    friends: [{name: "Tom"}],
    chat: [],
    users: []
  };

  render() {
    return (
      <React.Fragment>
        <h1>App Views</h1>

        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
            // <Home home={props.location.state.home}>
            //   {props.location.state.home.name}
            // </Home>
          }}
        />

        <Route
          path="/articles"
          render={state => {
            return <ArticleList articles={this.state.article} />;
          }}
        />
        <Route
          path="/todo"
          render={props => {
            return (
              <Todo todo={props.location.state.todo}>
                {props.location.state.todo}
              </Todo>
            );
          }}
        />

        <Route
          path="/chat"
          render={props => {
            return (
              <Chat chat={props.location.state.chat}>
                {props.location.state.chat}
              </Chat>
            );
          }}
        />
        <Route
          path="/events"
          render={props => {
            return (
              <Events events={props.location.state.events}>
                {props.location.state.events}
              </Events>
            );
          }}
        />

        <Route
          path="/friends" 
          render={props => {
            return <FriendsList friends={this.state.friends} />
          }} />
      </React.Fragment>
    );
  }
}
