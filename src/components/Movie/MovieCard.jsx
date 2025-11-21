import { MoviePoster } from "./MoviePoster";
import { Link } from "react-router-dom";
export const MovieCard = ({ movie }) => {
  const {
    title,
    vote_average,
    poster_path,
    release_date,
    original_language,
  } = movie;

  const rating = vote_average ? vote_average.toFixed(1) : "N/A";
  const year = release_date ? release_date.split("-")[0] : "N/A";

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card block">
      <MoviePoster path={poster_path} title={title} />

      <div className="mt-4">
        <h3>{title}</h3>
      </div>

      <div className="content">
        <div className="rating">
          <img src="/star.svg" alt="Star Icon" />
          <p>{rating}</p>
        </div>

        <span>•</span>
        <p className="lang">{original_language}</p>

        <span>•</span>
        <p className="year">{year}</p>
      </div>
    </Link>
  );
};
