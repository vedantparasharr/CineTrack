import { MoviePoster } from "../Movie/MoviePoster";
import { Link } from "react-router-dom";

export const TrendingList = ({ trendingMovies }) => {
  return (
    <ul>
      {trendingMovies.map((movie, index) => (
        <li key={movie.id}>
          <p>{index + 1}</p>

          <Link to={`/movie/${movie.id}`}>
            <MoviePoster
              path={movie.poster_path}
              title={movie.title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
