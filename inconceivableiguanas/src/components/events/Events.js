import React from "react";
import { Link } from "react-router-dom";

const Events = ({ event, children, deleteEvents, editEvents }) => {
  return (
    <div className="events-card" style={{ width: `18rem` }}>
      <div className="events-card-body">
        <h5 className="events-card-title">{children.name}</h5>
        <p className="events-card-text">{children.date}</p>
        <p className="events-card-text">{children.placeOf}</p>
      </div>
      <button
        type="submit"
        id="deleteEvent"
        onClick={() => deleteEvents(event.id)}
      >
        DELETE
      </button>
      <Link
        to={{
          pathname: `/events/${event.id}/edit`,
          state: { event: event }
        }}
      >
        EDIT
      </Link>
    </div>
  );
};

export default Events;
