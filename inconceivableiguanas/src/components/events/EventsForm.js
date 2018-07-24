import React, { Component } from "react";
import APIManager from "../../APIManager";
// import { Link } from "react-router-dom";

export default class EventsForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.setState = { value: "" };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  state = {
    name: this.props.location.state.event.name,
    placeOf: this.props.location.state.event.placeOf,
    date: this.props.location.state.event.date
  };

  handleChange = event => {
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;
    this.setState(stateToChange);
  };
  handleUpdate = e => {
    e.preventDefault();

    const updatedEvent = {
      name: this.state.name,
      placeOf: this.state.placeOf,
      date: this.state.date
    };
    APIManager.patchItem("events", this.props.event.id, updatedEvent).then(
      () => {
        this.props.history.push("/events");
      }
    );
  };

  // handleSubmit = event => {
  //   alert(this.state.name);
  //   event.preventDefault();

  // eventsFunction = () => {
  //   if (this.props.location.state.hasOwnProperty("event")) {
  //     console.log("edit");
  //     let eventsName = this.props.state.name;
  //     let eventsLocation = this.props.state.placeOf;
  //     let eventsDate = this.props.state.date;
  //     let eventsId = this.props.location.state.event.id;
  //     let body = {
  //       name: eventsName,
  //       placeOf: eventsLocation,
  //       date: eventsDate
  //     };
  //     console.log(body);
  //     APIManager.patchItem("events", eventsId, body).then(() => {
  //       //redirect to events page;
  //       // this.handleChange();
  //       this.props.history.push("events");
  //     });
  //   } else {
  //     console.log("add");
  //     let eventsName = document.getElementById("name").value();
  //     let eventsLocation = document.getElementById("placeOf").value();
  //     let eventsDate = document.getElementById("date").value();
  //     let body = {
  //       name: eventsName,
  //       placeOf: eventsLocation,
  //       date: eventsDate
  //     };
  //     console.log(eventsDate);
  //     APIManager.addData("events", body).then(() => {
  //       this.props.history.push("/events");
  //     });
  //   }
  // };

  editEventForm = () => {
    return (
      // if (this.state.clicked === "") {
      //   this.setState({
      //     clicked: (
      <form onSubmit={this.handleUpdate}>
        <label>Event Title</label>
        <input
          id="name"
          name="eventsTitle"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <label>Event Location</label>
        <input
          id="placeOf"
          name="eventsLocation"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <label>Event Date</label>
        <input
          id="date"
          name="eventsDate"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit" value="Submit">
          {" "}
          SAVE{" "}
        </button>
      </form>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.editEventForm()}</div>
      </React.Fragment>
    );
  }
}
