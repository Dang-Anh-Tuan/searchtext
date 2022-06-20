import { useLayoutEffect, useState } from "react";
import searchApi from "../api/Search.api";
import SearchBox from "../components/SearchBox/SearchBox";
import SearchResult from "../components/SearchResult/SearchResult";

function SearchPage() {
  const [resultSearch, setResultSearch] = useState([]);

  const handleSearch = async (input) => {
    try {
      console.log(input);
      const result = await  searchApi.findSimilarDoc(input)
      console.log(result);
      setResultSearch(result)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <SearchBox handleSearch={handleSearch}/>
      <SearchResult resultSearch={resultSearch} />
    </div>
  );
}

export default SearchPage;
