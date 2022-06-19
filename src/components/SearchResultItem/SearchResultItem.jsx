import React, { useContext } from "react";
import "./SearchResultItem.css";
import { Link } from "react-router-dom";
import { ArticleContext } from "../../context/ArticleContext";

function SearchResultItem({ stt, article, isOdd }) {
  const context = useContext(ArticleContext);
  const handleSelectArticle = context.selectArticle;

  return (
    <div
      className="sri-container"
      style={{ backgroundColor: isOdd ? "#ddebf7" : "#fff" }}
    >
      <div className="sri-stt">{stt}</div>
      <Link
        className="sri-article-name"
        to={`/article/${article.id}`}
        onClick={() => handleSelectArticle(article)}
      >
        {article.title}
      </Link>
    </div>
  );
}

export default SearchResultItem;
