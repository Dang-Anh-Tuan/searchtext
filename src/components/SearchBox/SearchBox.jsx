import React, { useState } from "react";
import "./SearchBox.css";

function SearchBox({handleSearch}) {
  const [inputSearch, setInputSearch] = useState("")

  const handleChangeInputSearch = (e) => {
    setInputSearch(e.target.value)
  }

  return (
    <div className="container-search-box">
      <div className="search-box">
        <input
          className="search-input"
          placeholder="Enter text you wana to search"
          value={inputSearch}
          onChange={handleChangeInputSearch}
        ></input>
        <button className="search-btn" onClick={() => handleSearch(inputSearch)}>Search</button>
      </div>
    </div>
  );
}

export default SearchBox;
