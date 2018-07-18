import React, { Component } from "react";
import Articles from "./Articles";

export default class ArticleList extends Component {
  render() {
    let propart = this.props.articles;
    return (
      <React.Fragment>
        {console.log(propart)}
        <button className="addArticle">ADD ARTICLE</button>
        {propart.map(article => (
          <Articles key={article.id} article={article} />
        ))}
      </React.Fragment>
    );
  }
}
