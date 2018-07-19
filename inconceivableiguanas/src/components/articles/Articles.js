import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class Articles extends Component {
  render() {
    let propart = this.props.article;
    return (
      <React.Fragment>
        <div>
          <a href={propart.url}>
            <h2>{propart.name}</h2>
          </a>
          <h5>{propart.synopsis}</h5>
          <button id="deleteArticle" onClick={this.deleter}>
            DELETE
          </button>
        </div>
      </React.Fragment>
    );
  }
}
