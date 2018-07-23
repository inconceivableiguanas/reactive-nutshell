import React, { Component } from "react";
import { Route } from "react-router-dom";
import Api from "./APIManager";
import Events from "./components/events/Events";
import EventsList from "./components/events/EventsList";
import ArticleList from "./components/articles/ArticleList";
import Articles from "./components/articles/Articles";
import Chat from "./components/chat/Chat";
import FriendsList from "./components/friends/FriendsList";
import Todo from "./components/toDo/Todo";
import Home from "./Home";
import Friends from "./components/friends/Friends";
import Home from "./Home";
import TodoForm from "./components/toDo/ToDoMaker";
import ToDoMaker from "./components/toDo/ToDoMaker";

import EditChat from "./components/chat/EditChat";
import APIManager from "./APIManager";
export default class ApplicationViews extends Component {
  state = {
    events: [],
    tasks: [],
    chat: [],
    article: [],
    friends: [],
    users: []
  };

  friendState = () => {
    Api.friendsExpand("1").then(friend => {
      this.setState({ friends: friend });
    });
  };

  // AUSTINS BIG OL ARTICLE DUMP
  setTheState = () => {
    APIManager.getAll("article?_sort=timestamp&order=desc").then(articles =>
      this.setState({
        article: articles
      })
    );
  };

  setEventState = () => {
    APIManager.getAll("events").then(event =>
      this.setState({
        events: event
      })
    );
  };

  //leah's task DUMP
  setTaskState = () => {
    APIManager.getAll("toDo").then(tasks =>
      this.setState({
        tasks: tasks
      })
    );
  };

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
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
          render={state => {
            //key is todo, value is the array of tasks
            return (
              <ToDoMaker
                toDos={this.state.tasks}
                setTaskState={this.setTaskState}
              />
            );
          }}
        />

        <Route
          exact
          path="/chat"
          render={props => {
            return <Chat chat={this.state.chat} />;
          }}
        />
        <Route
          exact
          path="/chat/:chatId/edit"
          render={props => {
            return <EditChat chat={props.location.state.chat} {...props} />;
          }}
        />

        <Route
          path="/events"
          render={state => {
            return (
              <EventsList
                events={this.state.events}
                setEventState={this.setEventState}
              >
                {this.state.events}
              </EventsList>
            );
          }}
        />

        <Route
          path="/friends"
          render={props => {
            return (
              <FriendsList
                friends={this.state.friends}
                users={this.state.users}
                friendState={this.friendState}
                userState={this.userState}
              />
            );
          }}
        />
      </React.Fragment>
    );
  }
}
