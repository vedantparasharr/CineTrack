import { Link } from "react-router-dom";

export const MoviePoster = ({ path, title }) => {
  const poster = path
    ? `https://image.tmdb.org/t/p/w500/${path}`
    : "/no-movie.png";

  return <img src={poster} alt={title} />;

};
