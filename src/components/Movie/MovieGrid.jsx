import { Loading } from "../UI/Loading";
import { MovieCard } from "./MovieCard";

export const MovieGrid = ({ movies, isLoading, errorMessage }) => {
  if (isLoading) return <Loading />;
  if (errorMessage) return <p className="text-red-500">{errorMessage}</p>;

  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
