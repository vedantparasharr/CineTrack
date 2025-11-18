import { useContext } from "react";
import { searchContext } from "../context/searchContext";

export const Search = () => {
  const {searchTerm, setSearchTerm} = useContext(searchContext)
  return (
    <div className="search">
      <div>
        <img src="/search.svg" alt="Search icon" />

        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};
