import React, { Component } from "react";
import { Link } from "react-router-dom";

const Events = ({ event, children, deleteEvents, editEvents }) => {
  return (
    <div className="events-card" style={{ width: `18rem` }}>
      <div className="events-card-body">
        <h5 className="events-card-title">{children.name}</h5>
        <p className="events-card-text">{children.date}</p>
        <p className="events-card-text">{children.placeOf}</p>
      </div>
      <button onClick={() => deleteEvents(this.props.events.id)}>DELETE</button>
      {
        <button>
          <Link
            className="events-card-link"
            to={{
              pathname: "/eventsForm",
              state: { events: event }
            }}
          >
            Edit Events
          </Link>
        </button>
      }
    </div>
  );
};

export default Events;
