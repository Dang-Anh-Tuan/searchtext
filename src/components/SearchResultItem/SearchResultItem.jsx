import React from "react";
import "./SearchResultItem.css";
import {Link} from "react-router-dom"

function SearchResultItem({ stt, article, isOdd }) {
  return (
    <div
      className="sri-container"
      style={{ backgroundColor: isOdd ? "#ddebf7" : "#fff" }}
    >
      <div className="sri-stt">{stt}</div>
      <Link className="sri-article-name" to={`/article/${article.id}`}>{article.title}</Link>
    </div>
  );
}

export default SearchResultItem;
