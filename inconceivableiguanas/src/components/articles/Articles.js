import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class Articles extends Component {
  render() {
    let propart = this.props.article;
    return (
      <React.Fragment>
        <div>
          <h5>{propart.name}</h5>
        </div>
      </React.Fragment>
    );
  }
}
