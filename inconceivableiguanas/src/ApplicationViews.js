import React, { Component } from "react";
import { Route } from "react-router-dom";
import Events from "./components/events/Events";
import ArticleList from "./components/articles/ArticleList";
import Articles from "./components/articles/Articles";
import Chat from "./components/chat/Chat";
import Friends from "./components/friends/Friends";
import Todo from "./components/toDo/Todo";
import Home from "./Home";
import APIManager from "./APIManager";

export default class ApplicationViews extends Component {
  state = {
    event: [],
    task: [],
    article: [],
    friends: [],
    chat: [],
    users: []
  };
  // AUSTINS BIG OL ARTICLE DUMP
  setTheState = () => {
    APIManager.getAll("article?_sort=id&order=desc").then(articles =>
      this.setState({
        article: articles
      })
    );
  };

  // END OF ARTICLE DUMP

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
          path="/articles/:articleId"
          render={props => {
            return (
              <Articles article={props.location.state.Articles}>
                {props.location.state.Articles.name}
                {console.log(props.location.state)}
              </Articles>
            );
          }}
        />
        <Route
          path="/articles"
          render={state => {
            return (
              <ArticleList
                articles={this.state.article}
                setTheState={this.setTheState}
              />
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
