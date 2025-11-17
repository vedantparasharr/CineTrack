import { useEffect, useState } from "react";

import { Loading } from "../components/UI/Loading";
import { TrendingList } from "./Header/TrendingList";
import { fetchTrending } from "../api/tmdb";

export const Trending = () => {
  /* -----------------------------------
     STATE
  ----------------------------------- */
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  /* -----------------------------------
     FETCH TOP-RATED MOVIES
  ----------------------------------- */
  const loadTrending = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetchTrending();
      setTrendingMovies(response.data.results || []);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  /* -----------------------------------
     RUN ON MOUNT
  ----------------------------------- */
  useEffect(() => {
    loadTrending();
  }, []);

  /* -----------------------------------
     RENDER
  ----------------------------------- */
  return (
    <section className="trending">
      <h2>Top Rated</h2>

      {isLoading ? (
        <Loading />
      ) : errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <TrendingList trendingMovies={trendingMovies.slice(0, 15)} />
      )}
    </section>
  );
};
