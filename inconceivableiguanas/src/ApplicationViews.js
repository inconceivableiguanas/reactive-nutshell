import React, { Component } from "react";
import { Route } from "react-router-dom";
import Events from "./components/events/Events";
import ArticleList from "./components/articles/ArticleList";
import Chat from "./components/chat/Chat";
import Friends from "./components/friends/Friends";
import ToDoList from "./components/toDo/ToDoList";
import Home from "./Home";

export default class ApplicationViews extends Component {
  state = {
    event: [],
    tasks: [
      {
        name: "dogshit",
        id: "1",
        date: "2018-07-2018",
        completion: "false"
      }
    ],
    article: [{ name: "Dogshit" }],
    friends: [],
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
          render={state => {
            //key is todo, value is the array of tasks
            return <ToDoList toDos={this.state.tasks} />;
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
            return (
              <Friends friends={props.location.state.friends}>
                {props.location.state.friends}
              </Friends>
            );
          }}
        />
      </React.Fragment>
    );
  }
}
