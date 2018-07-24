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
    name: this.props.event.name,
    placeOf: this.props.event.placeOf,
    date: this.props.event.date
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  eventsFunction = () => {
    if (this.props.location.events.hasOwnProperty("events")) {
      console.log("edit");
      let eventsName = this.props.events.name;
      let eventsLocation = this.props.events.placeOf;
      let eventsDate = this.props.events.date;
      let eventsId = this.props.events.id;
      let body = {
        name: eventsName,
        placeOf: eventsLocation,
        date: eventsDate
      };
      console.log(body);
      APIManager.patchItem("events", eventsId, body)
        .then(() => {
          return APIManager.getAll("events");
        })
        .then(eventsList => {
          this.setState({
            events: eventsList
          });
        });
    } else {
      console.log("add");
      let eventsName = document.getElementById("name").value();
      let eventsLocation = document.getElementById("placeOf").value();
      let eventsDate = document.getElementById("date").value();
      let body = {
        name: eventsName,
        placeOf: eventsLocation,
        date: eventsDate
      };
      console.log(eventsDate);
      APIManager.addData("events", body)
        .then(() => {
          return APIManager.getAll("events");
        })
        .then(eventsList => {
          this.props.setState({
            events: eventsList
          });
        });
    }
  };

  editEventForm = () => {
    return (
      // if (this.state.clicked === "") {
      //   this.setState({
      //     clicked: (
      <form onSubmit={this.handleSubmit}>
        <label>Event Title</label>
        <input
          id="eventsTitle"
          name="eventsTitle"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <label>Event Location</label>
        <input
          id="eventsLocation"
          name="eventsLocation"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <label>Event Date</label>
        <input
          id="eventsDate"
          name="eventsDate"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.eventsFunction} type="submit" value="Submit" />
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
