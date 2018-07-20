import React, { Component } from "react";
import { Route } from "react-router-dom";
import Events from "./components/events/Events";
import ArticleList from "./components/articles/ArticleList";
import Articles from "./components/articles/Articles";
import Chat from "./components/chat/Chat";
import Friends from "./components/friends/Friends";
import ToDoList from "./components/toDo/ToDoList";
import Home from "./Home";

import EditChat from "./components/chat/EditChat"
import APIManager from "./APIManager";

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
    chat:[],
    article: [{ name: "Dogshit" }],
    friends: [],
    users: []
  };
  // AUSTINS BIG OL ARTICLE DUMP
  setTheState = () => {
    APIManager.getAll("article?_sort=id&order=desc").then(articles =>
      this.setState({
        article: articles
   // SHU'S BIG OL CHAT DUMP
   setTheState = () => {
    APIManager.getAll("chat").then(chats =>
      this.setState({
        chat: chats
      })
    );
  };

  // END OF ARTICLE DUMP
  // END OF CHAT DUMP

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
          render={state => {
            //key is todo, value is the array of tasks
            return <ToDoList toDos={this.state.tasks} />;
          }}
        />

        <Route
          exact path="/chat"
          render={props => {
            return (
              <Chat chat={this.state.chat}/>
                
            );
          }}
        />
        <Route exact path="/chat/:chatId/edit" render={(props) => {
          return <EditChat chat={props.location.state.chat} />
        }} />
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
