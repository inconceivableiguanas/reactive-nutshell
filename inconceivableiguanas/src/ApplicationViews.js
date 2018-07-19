import React, { Component } from "react";
import { Route } from "react-router-dom";
import EventsList from "./components/events/EventsList";
import ArticleList from "./components/articles/ArticleList";
import Chat from "./components/chat/Chat";
import Friends from "./components/friends/Friends";
import Todo from "./components/toDo/Todo";
import Home from "./Home";

export default class ApplicationViews extends Component {
  state = {
    event: [],
    task: [],
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
          render={state => {
            return <EventsList events={this.state.event} />;
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
