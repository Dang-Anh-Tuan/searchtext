import React, { useLayoutEffect, useState } from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import SearchResult from "../components/SearchResult/SearchResult";

const fakeListResult = [
  {
    id: 1,
    title:
      "House Republicans Fret About Winning Their Health Care Suit - The New York Times",
    author: "Carl Hulse",
    publishYear: 2016,
    category: "news",
    fileName: "news-1",
    folderName: "news",
  },
  {
    id: 2,
    title:
      "House Republicans Fret About Winning Their Health Care Suit - The New York Times",
    author: "Carl Hulse",
    publishYear: 2016,
    category: "news",
    fileName: "news-1",
    folderName: "news",
  },
  {
    id: 3,
    title:
      "House Republicans Fret About Winning Their Health Care Suit - The New York Times",
    author: "Carl Hulse",
    publishYear: 2016,
    category: "news",
    fileName: "news-1",
    folderName: "news",
  },
  {
    id: 4,
    title:
      "House Republicans Fret About Winning Their Health Care Suit - The New York Times",
    author: "Carl Hulse",
    publishYear: 2016,
    category: "news",
    fileName: "news-1",
    folderName: "news",
  },
  {
    id: 1,
    title:
      "House Republicans Fret About Winning Their Health Care Suit - The New York Times",
    author: "Carl Hulse",
    publishYear: 2016,
    category: "news",
    fileName: "news-1",
    folderName: "news",
  },
  {
    id: 1,
    title:
      "House Republicans Fret About Winning Their Health Care Suit - The New York Times",
    author: "Carl Hulse",
    publishYear: 2016,
    category: "news",
    fileName: "news-1",
    folderName: "news",
  },
  {
    id: 1,
    title:
      "House Republicans Fret About Winning Their Health Care Suit - The New York Times",
    author: "Carl Hulse",
    publishYear: 2016,
    category: "news",
    fileName: "news-1",
    folderName: "news",
  },
  {
    id: 1,
    title:
      "House Republicans Fret About Winning Their Health Care Suit - The New York Times",
    author: "Carl Hulse",
    publishYear: 2016,
    category: "news",
    fileName: "news-1",
    folderName: "news",
  },
  {
    id: 1,
    title:
      "House Republicans Fret About Winning Their Health Care Suit - The New York Times",
    author: "Carl Hulse",
    publishYear: 2016,
    category: "news",
    fileName: "news-1",
    folderName: "news",
  },
];

function SearchPage() {
  const [resultSearch, setResultSearch] = useState([]);

  useLayoutEffect(() => {
    setResultSearch(fakeListResult);
  }, []);
  return (
    <div>
      <SearchBox />
      <SearchResult resultSearch={resultSearch} />
    </div>
  );
}

export default SearchPage;
