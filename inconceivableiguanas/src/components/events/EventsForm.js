import React, { Component } from "react";
import APIManager from "../../APIManager";

export default class EventsForm extends Component {
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

  editEventForm = () => {
    return (
      <form onSubmit={this.handleUpdate} className="editForm">
        <label>Event Title</label>
        <input
          id="name"
          name="eventsTitle"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label>Event Location</label>
        <input
          id="placeOf"
          name="eventsLocation"
          type="text"
          value={this.state.placeOf}
          onChange={this.handleChange}
        />
        <label>Event Date</label>
        <input
          id="date"
          name="eventsDate"
          type="text"
          value={this.state.date}
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
