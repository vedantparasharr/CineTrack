import { Search } from "../Search";
import { Trending } from "../Trending";

export const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header>
      <img src="/logo.png" alt="" />
      <img src="/hero-img.png" alt="movie posters" />

      <h1>
        Find <span className="text-gradient">Movies</span> You'll Enjoy
        Without the Hassle
      </h1>

      {/* TOP RATED MOVIES */}
      <Trending />

      {/* SEARCH */}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </header>
  );
};
