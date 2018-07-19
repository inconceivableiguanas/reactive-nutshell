import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class Events extends Component {
  render() {
    let propEvent = this.props.event;
    return (
      <React.Fragment>
        <div>
          <h5>{propEvent.name}</h5>
        </div>
      </React.Fragment>
    );
  }
}
