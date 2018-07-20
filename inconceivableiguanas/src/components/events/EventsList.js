import React, { Component } from "react";
import { Link } from "react-router-dom";
import Events from "./Events";
import ApiManager from "../../APIManager";
import EventsForm from "./EventsForm";
// import "react-datepicker/dist/react-datepicker.css";

export default class EventsList extends Component {
  componentDidMount() {
    this.props.setEventState();
  }
  deleteEvents = id => {
    ApiManager.deleteItem("events", id)
      .then(() => {
        return ApiManager.getAll("events");
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
              className="events-card-link"
              to={{
                pathname: "/eventsForm",
                setState: {}
              }}
            >
              New Event
            </Link>
          </button>
        }
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
      </React.Fragment>
    );
  }
}
