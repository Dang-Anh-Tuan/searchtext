import React from "react";
import SearchResultItem from "../SearchResultItem/SearchResultItem";
import "./SearchResult.css";

function SearchResult({ resultSearch }) {
  return (
    <div className="rs-container">
      {resultSearch &&
        resultSearch.map((article, index) => (
          <SearchResultItem
            key={index}
            stt={index + 1}
            article={article}
            isOdd={!!(index % 2)}
          />
        ))}
    </div>
  );
}

export default SearchResult;
