import React, { Component } from "react";
import { Link } from "react-router-dom";
import Event from "./Events";
import APIHandler from "./../APIHandler";
import EventForm from ".EventForm";
import "react-datepicker/dist/react-datepicker.css";

export default class EventsList extends Component {
  componentDidMount = () => {
    APIHandler.getData("events").then(events =>
      this.setState({
        events: events
      })
    );
  };
  deleteEvent = id => {
    APIHandler.deleteData("events", id)
      .then(() => {
        return APIHandler.getData("events");
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
        {
          <button>
            <Link
              className="event-card-link"
              to={{
                pathname: "/eventForm",
                state: {}
              }}
            >
              New Event
            </Link>
          </button>
        }
        {this.state.events.map(event => (
          <Event
            key={event.id}
            event={event}
            deleteEvent={this.deleteEvent}
            editEvent={this.editEvent}
          >
            {event}
          </Event>
        ))}
      </React.Fragment>
    );
  }
}
