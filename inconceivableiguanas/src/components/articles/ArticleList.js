import React, { Component } from "react";
import Articles from "./Articles";
import APIManager from "../../APIManager";
// import Moment from "react-moment";

export default class ArticleList extends Component {
  state = { clicked: "" };

  componentDidMount() {
    this.props.setTheState();
  }

  addNewArticle = event => {
    event.preventDefault();
    const title = event.target.ArticleTitle.value;
    const summary = event.target.ArticleSummary.value;
    const url = event.target.ArticleURL.value;
    // const time = Moment().format("YYYY-MM-DD hh:mm:ss a");

    fetch("http://localhost:5002/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        name: title,
        synopsis: summary,
        url: url
        // timestamp: time
      })
    })
      // When DELETE is finished, retrieve the new list of animals
      .then(() => {
        // Remember you HAVE TO return this fetch to the subsequenet `then()`
        return fetch("http://localhost:5002/article");
      })
      // Once the new array of animals is retrieved, set the state
      .then(a => a.json())
      .then(this.props.setTheState);
  };

  deleteArticle = articleId => {
    // console.log("it works");
    // Delete the specified animal from the API
    fetch(`http://localhost:5002/article/${articleId}`, {
      method: "DELETE"
    })
      // When DELETE is finished, retrieve the new list of animals
      .then(() => {
        // Remember you HAVE TO return this fetch to the subsequenet `then()`
        return fetch("http://localhost:5002/article");
      })
      // Once the new array of animals is retrieved, set the state
      .then(a => a.json())
      .then(articleList => {
        this.props.setTheState({ article: articleList });
      });
  };

  formLauncher = () => {
    if (this.state.clicked === "") {
      this.setState({
        clicked: (
          <form onSubmit={this.addNewArticle}>
            <label>Article Title</label>
            <input id="ArticleTitle" name="ArticleTitle" type="text" />
            <label>Article Summary</label>
            <input id="ArticleSummary" name="ArticleSummary" type="text" />
            <label>Article URL</label>
            <input id="ArticleURL" name="ArticleURL" type="url" />
            <button type="submit">Submit</button>
          </form>
        )
      });
    } else {
      this.setState({ clicked: "" });
    }
  };

  render() {
    let propart = this.props.articles;
    return (
      <React.Fragment>
        <div>
          <button id="addArticle" onClick={this.formLauncher}>
            ADD ARTICLE
          </button>
          {this.state.clicked}

          {propart.map(article => (
            <Articles
              key={article.id}
              article={article}
              delete={this.deleteArticle}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
