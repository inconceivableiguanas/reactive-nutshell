import React, { Component } from "react";
import { Route } from "react-router-dom";
import Api from "./APIManager";
// import Events from "./components/events/Events";
import EventsList from "./components/events/EventsList";
import ArticleList from "./components/articles/ArticleList";
import Articles from "./components/articles/Articles";
import Chat from "./components/chat/Chat";
import FriendsList from "./components/friends/FriendsList";
import Todo from "./components/toDo/Todo";
// import Home from "./Home";
import Friends from "./components/friends/Friends";
import ToDoList from "./components/toDo/ToDoList";
import Home from "./Home";
import EditChat from "./components/chat/EditChat";
import APIManager from "./APIManager";
import EventsForm from "./components/events/EventsForm";

export default class ApplicationViews extends Component {
  state = {
    events: [],
    task: [],
    tasks: [
      {
        name: "dogshit",
        id: "1",
        date: "2018-07-2018",
        completion: "false"
      }
    ],
    chat: [],
    article: [{ name: "Dogshit" }],
    friends: [],
    users: []
  };

  friendState = () => {
    Api.friendsExpand("1").then(friend => {
      this.setState({ friends: friend });
    });
  };
  // userState = () => {
  //   Api.getAll("users")
  //   .then(user => {
  //     this.setState({users: user})
  //   })
  // }

  // AUSTINS BIG OL ARTICLE DUMP
  setTheState = () => {
    APIManager.getAll("article?_sort=id&order=desc").then(articles =>
      this.setState({
        article: articles
      })
    );
  };
  // SHU'S BIG OL CHAT DUMP
  //  setTheState = () => {
  //   APIManager.getAll("chat").then(chats =>
  //     this.setState({
  //       chat: chats
  //     })
  //   );
  // };

  // END OF ARTICLE DUMP
  // END OF CHAT DUMP

  setEventState = () => {
    return APIManager.getAll("events").then(event =>
      this.setState({
        events: event
      })
    );
  };
  deleteEvents = id => {
    APIManager.deleteItem("events", id).then(() => {
      this.setEventState();
    });
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
                deleteEvents={this.deleteEvents}
              >
                {this.state.events}
              </EventsList>
            );
          }}
        />
        {/* <Route
          path="/events/:eventId"
          render={props => {
            return (
              <Events event={props.location.state.Events}>
                {props.location.state.Events.name}
                {console.log(props.location.state)}
              </Events>
            );
          }}
        /> */}

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
