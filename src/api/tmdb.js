import axios from "axios";

const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

export const fetchMovies = (query) =>
  query
    ? API.get(`search/movie?query=${encodeURIComponent(query)}`)
    : API.get("discover/movie?sort_by=popularity.desc");

export const fetchTrending = () => API.get("movie/top_rated");

export const fetchMovieDetails = (id) => 
  API.get(`movie/${id}?append_to_response=videos,credits`);
