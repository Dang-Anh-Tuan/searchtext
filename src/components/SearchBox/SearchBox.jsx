import React from "react";
import "./SearchBox.css";

function SearchBox() {
  return (
    <div className="container-search-box">
      <div className="search-box">
        <input
          className="search-input"
          placeholder="Enter text you wana to search"
        ></input>
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
}

export default SearchBox;
