import { useEffect, useState } from "react";
import { useDebounce } from "react-use";

import { Header } from "./components/Header/Header";
import { MovieGrid } from "./components/Movie/MovieGrid";
import { Loading } from "./components/UI/Loading";
import { searchContext } from "./context/searchContext";
// Import API functions
import { fetchMovies } from "./api/tmdb";

/* =======================================
   APP COMPONENT
======================================= */
const App = () => {
  /* -------------------------------
     STATE
  -------------------------------- */
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  /* -------------------------------
     DEBOUNCE SEARCH INPUT
  -------------------------------- */
  useDebounce(() => {
    setDebouncedTerm(searchTerm);
  }, 750, [searchTerm]);

  /* -------------------------------
     FETCH MOVIES
  -------------------------------- */
  const loadMovies = async (query) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetchMovies(query);
      setMovies(response.data.results || []);
    } catch (err) {
      console.error("Error fetching movies:", err);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  /* -------------------------------
     RUN WHEN DEBOUNCED TERM CHANGES
  -------------------------------- */
  useEffect(() => {
    loadMovies(debouncedTerm);
  }, [debouncedTerm]);

  /* -------------------------------
     RENDER
  -------------------------------- */
  return (
    <searchContext.Provider value={{searchTerm, setSearchTerm}} >
    <main>
      <div className="pattern"></div>

      <div className="wrapper">
        <Header/>

        <section className="all-movies mt-5">
          <h2>All Movies</h2>

          {isLoading ? (
            <Loading />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <MovieGrid movies={movies} />
          )}
        </section>
      </div>
    </main>
    </searchContext.Provider>
  );
};

export default App;
