import React, { Component } from "react";
import { Link } from "react-router-dom";
import Events from "./Events";
import APIManager from "../../APIManager";
import EventsForm from "./EventsForm";
// import "react-datepicker/dist/react-datepicker.css";

export default class EventsList extends Component {
  state = { clicked: "" };
  componentDidMount() {
    this.props.setEventState();
  }
  addNewEvent = event => {
    const name = event.target.eventsTitle.value;
    const placeOf = event.target.eventsLocation.value;
    const date = event.target.eventsDate.value;
    // const time = Moment().format("YYYY-MM-DD hh:mm:ss a");

    fetch("http://localhost:5002/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        name: name,
        placeOf: placeOf,
        date: date
      })
    })
      .then(() => {
        return fetch("http://localhost:5002/events");
      })
      .then(a => a.json())
      .then(this.props.setEventState);
  };
  formLauncher = () => {
    if (this.state.clicked === "") {
      this.setState({
        clicked: (
          <form onSubmit={this.addNewEvent}>
            <label>Event Title</label>
            <input id="eventsTitle" name="eventsTitle" type="text" />
            <label>Event Location</label>
            <input id="eventsLocation" name="eventsLocation" type="text" />
            <label>Event Date</label>
            <input id="eventsDate" name="eventsDate" type="text" />
            <button type="submit">Submit</button>
          </form>
        )
      });
    } else {
      this.setState({ clicked: "" });
    }
  };
  deleteEvents = id => {
    APIManager.deleteItem("events", id)
      .then(() => {
        return APIManager.getAll("events");
      })
      .then(eventsList => {
        this.setState({
          events: eventsList
        });
      });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.formLauncher}>ADD EVENT</button>
          {this.state.clicked}
          {this.props.events.map(event => (
            <Events
              key={event.id}
              event={event}
              deleteEvents={this.deleteEvents}
              editEvents={this.editEvents}
            >
              {event}
            </Events>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
