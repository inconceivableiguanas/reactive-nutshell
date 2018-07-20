import React, { Component } from "react";
import APIManager from "../../APIManager";
import { Link } from "react-router-dom";

export default class EventsForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    if (props.location.state.hasOwnProperty("events")) {
      this.state = {
        events: props.location.state.events
      };
    } else {
      this.state = { events: {} };
    }
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
        location: eventsLocation,
        date: eventsDate
      };
      console.log(body);
      ApiManager.patchItem("events", eventsId, body)
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
        location: eventsLocation,
        date: eventsDate
      };
      console.log(eventsDate);
      APIManager.addData("events", body)
        .then(() => {
          return ApiManager.getAll("events");
        })
        .then(eventsList => {
          this.setState({
            events: eventsList
          });
        });
    }
  };

  handleFieldChange = eventsValue => {
    const stateToChange = {};
    stateToChange[eventsValue.target.id] = eventsValue.target.value;
    this.setState(stateToChange);
    console.log(stateToChange);
  };

  // handleChange = date => {
  //   this.setState({
  //     eventsDate: date
  //   });
  //   console.log(this.state.events.date);
  // };

  render() {
    return (
      <React.Fragment>
        <div id="eventsInputFields">
          Event:{" "}
          <input
            class="events-input-name"
            onChange={this.handleFieldChange}
            id="name"
            value={this.props.events.name}
          />
          Location:{" "}
          <input
            class="events-input-location"
            onChange={this.handleFieldChange}
            id="placeOf"
            value={this.props.events.placeOf}
          />
          Date:{" "}
          <input
            class="events-input-date"
            onChange={this.handleFieldChange}
            id="date"
            value={this.props.events.date}
          />
          <button onClick={this.eventsFunction}>SAVE</button>
        </div>
      </React.Fragment>
    );
  }
}