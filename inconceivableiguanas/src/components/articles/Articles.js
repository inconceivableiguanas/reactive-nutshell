import React, { Component } from "react";

export default class Articles extends Component {
  // this.props.deleteArticle;

  render() {
    let propart = this.props.article;
    return (
      <div>
        <a href={propart.url}>
          <h2>{propart.name}</h2>
        </a>
        <h5>{propart.synopsis}</h5>
        <button
          type="submit"
          id="deleteArticle"
          onClick={() => this.props.delete(propart.id)}
        >
          DELETE
        </button>
      </div>
    );
  }
}
