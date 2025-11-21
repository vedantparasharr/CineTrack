import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMovieDetails } from "../api/tmdb";
import { Loading } from "../components/UI/Loading";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchMovieDetails(id);
        setMovie(res.data);
      } catch (err) {
        console.error("Error loading details:", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading)
    return (
      <main className="min-h-screen flex items-center justify-center bg-primary">
        <Loading />
      </main>
    );

  if (!movie)
    return (
      <main className="min-h-screen flex items-center justify-center bg-primary">
        <p className="text-red-500 text-xl">Movie not found</p>
      </main>
    );

  return (
    <main className="relative bg-primary min-h-screen">
      <div className="pattern"></div>
      <div className="wrapper py-16">
        <Link
          to="/"
          className="text-light-200 hover:text-white transition font-medium mb-5 inline-block"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex justify-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-2xl shadow-xl w-full max-w-md object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              {movie.title}
            </h1>
            <div className="flex items-center gap-5 mt-4 text-light-200 text-lg">
              <span className="flex items-center gap-1">
                ⭐ <span className="text-white font-semibold">{movie.vote_average.toFixed(1)}</span>
              </span>
              <span>{movie.release_date?.slice(0, 4)}</span>
              <span className="capitalize">{movie.original_language}</span>
            </div>
            <div className="flex flex-wrap gap-3 mt-5">
              {movie.genres.map((g) => (
                <span
                  key={g.id}
                  className="px-4 py-1 bg-dark-100 text-light-200 rounded-xl text-sm font-medium shadow-inner shadow-light-100/10"
                >
                  {g.name}
                </span>
              ))}
            </div>
            <p className="text-gray-100 mt-6 leading-relaxed text-lg">
              {movie.overview}
            </p>
            <div className="mt-8 space-y-2 text-light-200">
              <p>
                <span className="font-semibold text-white">Runtime:</span>{" "}
                {movie.runtime} min
              </p>
              <p>
                <span className="font-semibold text-white">Status:</span>{" "}
                {movie.status}
              </p>
              {movie.tagline && (
                <p className="italic text-gray-100 mt-2">“{movie.tagline}”</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
