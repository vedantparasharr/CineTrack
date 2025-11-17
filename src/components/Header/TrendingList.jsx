import { MoviePoster } from "../Movie/MoviePoster";

export const TrendingList = ({ trendingMovies }) => {
  return (
    <ul>
      {trendingMovies.map((movie, index) => (
        <li key={movie.id}>
          <p>{index + 1}</p>
          <MoviePoster
            path={movie.poster_path}
            title={movie.title}
          />
        </li>
      ))}
    </ul>
  );
};
