import React, { Component } from "react";
import { Route } from "react-router-dom";
import Events from "./components/events/Events";
import Articles from "./components/articles/Articles";
import Chat from "./components/chat/Chat";
import Friends from "./components/friends/Friends";
import Todo from "./components/toDo/Todo";
import Home from "./Home";
export default class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>App Views</h1>

        <Route
          exact
          path="/"
          render={props => {
            return (
              <Home home={props.location.state.home}>
                {props.location.state.home.name}
              </Home>
            );
          }}
        />

        <Route
          path="/articles"
          render={props => {
            return (
              <Articles articles={props.location.state.articles}>
                {props.location.state.articles}
                {console.log(props.location.state)}
              </Articles>
            );
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
