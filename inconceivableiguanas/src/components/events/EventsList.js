import React, { Component } from "react";
import Events from "./Events";

export default class EventsList extends Component {
  render() {
    let propEvent = this.props.events;
    return (
        <React.Fragment>
            {console.log(propEvent)}
            <button className="addEvent">ADD EVENT</button>
            {propEvent.map(event => <Events key={event.id} event={event} />)};
            <section className="events">
            {
                this.props.events.map(event => 
                    <div key={event.id} className="event-card">
                        <div className="event-card-body">
                            <h5 className="event-card-title>
                                <a href="#"
                                    onClick={() => this.props.deleteEvent(event.id)}
                                    className="event-card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
        </section>
    </React.Fragment>
            )
        }