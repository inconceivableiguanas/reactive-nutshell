import React, { Component } from "react";
import APIManager from "../../APIManager";
// import { Link } from "react-router-dom";

export default class EventsForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    if (props.location.state.hasOwnProperty("events")) {
      this.setState = {
        events: props.location.state.events
      };
    } else {
      this.state = { events: {} };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  }
  changeEventName = event => {
    const eventName = this.state.eventName;
    eventName.name = event.target.value;
    this.setState({ eventName: eventName });
  };
  changeEventLocation = event => {
    const eventLocation = this.state.eventLocation;
    eventLocation.placeOf = event.target.value;
    this.setState({ eventLocation: eventLocation });
  };
  changeEventDate = event => {
    const eventDate = this.state.eventDate;
    eventDate.date = event.target.value;
    this.setState({ eventDate: eventDate });
  };

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

  // handleFieldChange = eventsValue => {
  //   const stateToChange = {};
  //   stateToChange[eventsValue.target.id] = eventsValue.target.value;
  //   this.setState(stateToChange);
  //   console.log(stateToChange);
  // };

  // handleChange = (events, event) => {
  //   const captureEventValue = this.state.captureValue;
  //   captureValue[events] = event.target.value;
  //   this.setState({ captureEventValue: captureEventValue });
  // };

  render() {
    return (
      <React.Fragment>
        <form>
          <div id="eventsInputFields">
            Event:{" "}
            <input
              type="text"
              onChange={this.handleChange.bind(this, { changeEventName })}
              value={this.state.eventName.name}
            />
            Location:{" "}
            <input
              type="text"
              onChange={this.handleChange.bind(this, { changeEventLocation })}
              value={this.state.eventLocaiton.placeOf}
            />
            Date:{" "}
            <input
              type="text"
              onChange={this.handleChange.bind(this, { changeEventDate })}
              value={this.state.eventDate.date}
            />
            <button onClick={this.eventsFunction}>SAVE</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
