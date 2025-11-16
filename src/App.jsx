import React, { useEffect, useState } from "react";
import { Search } from "./components/Search";
import axios from "axios";
import { Loading } from "./components/Loading";

/* ===============================
   API CONFIGURATION
================================ */
const API_BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const API_KEY = import.meta.env.VITE_API_KEY;

const API_OPTIONS = {
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
    },
};

/* ===============================
   APP COMPONENT
================================ */
const App = () => {
    /* -------------------------------
       STATE VARIABLES
    -------------------------------- */
    const [searchTerm, setSearchTerm] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    /* -------------------------------
       FETCH MOVIES FUNCTION
    -------------------------------- */
    const fetchMovies = async () => {
        setIsLoading(true);
        setErrorMessage("");

        try {
            const endpoint = `${API_BASE_URL}?sort_by=popularity.desc`;
            const response = await axios.get(endpoint, API_OPTIONS);

            const movieData = response.data;
            console.log(movieData)
            // Update movie list
            setMovies(movieData.results || []);
        } catch (error) {
            console.log(`Error Fetching movies: ${error}`);
            setErrorMessage("Error fetching movies. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    /* -------------------------------
       INITIAL MOVIE FETCH
    -------------------------------- */
    useEffect(() => {
        fetchMovies();
    }, []);

    /* -------------------------------
       UI RENDER
    -------------------------------- */
    return (
        <main>
            <div className="pattern"></div>

            <div className="wrapper">
                <header>
                    <img src="/hero-img.png" alt="movie posters" />
                    <h1>
                        Find <span className="text-gradient">Movies</span> You'll Enjoy
                        Without the Hassle
                    </h1>

                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </header>

                <section className="all-movies mt-5 ">
                    <h2>All Movies</h2>

                    {isLoading ? (<Loading />
                    ) : errorMessage ? (
                        <p className="text-red-500">{errorMessage}</p>
                    ) : (
                        <ul>
                            {movies.map((movie) => (
                                <p key={movie.id} className="text-white">
                                    {movie.title}
                                </p>
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </main>
    );
};

export default App;
