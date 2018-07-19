import React, { Component } from "react";
import Articles from "./Articles";
import APIManager from "../../APIManager";

export default class ArticleList extends Component {
  state = {
    clicked: ""
  };
  formLauncher = () => {
    // const title = event.target.ArticleTitle.value;
    // const summary = event.target.ArticleSummary.value;
    // const url = event.target.ArticleURL.value;

    if (this.state.clicked === "") {
      this.setState({
        clicked: (
          <form onSubmit={APIManager.postItem()}>
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
        <button id="addArticle" onClick={this.formLauncher}>
          ADD ARTICLE
        </button>
        {this.state.clicked}

        {propart.map(article => (
          <Articles key={article.id} article={article} />
        ))}
      </React.Fragment>
    );
  }
}
