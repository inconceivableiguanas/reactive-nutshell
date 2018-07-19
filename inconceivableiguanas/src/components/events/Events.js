import React, { Component } from "react";
import { Link } from "react-router-dom";

const Event = ({ event, children, deleteEvent, editEvent }) => {
  return (
    <div className="event-card" style={{ width: `18rem` }}>
      <div className="event-card-body">
        <h5 className="event-card-title">{children.name}</h5>
        <p className="event-card-text">{children.location}</p>
        <p className="event-card-text">{children.date}</p>
        <button onClick={() => deleteEvent(event.id)}>DELETE</button>
        {
          <button>
            <Link
              className="event-card-link"
              to={{
                pathname: "/eventForm",
                state: { event: event }
              }}
            >
              Edit Event
            </Link>
          </button>
        }
      </div>
    </div>
  );
};

export default Event;
