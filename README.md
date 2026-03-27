# CineTrack

CineTrack is a React + Vite movie discovery app powered by The Movie Database (TMDB). It supports searching movies with debounced input, browsing top-rated titles, and opening a dedicated details page for each movie.

## Overview

- Browse popular movies by default.
- Search movies with a debounced query to reduce API calls.
- View top-rated movies in a horizontal trending strip.
- Open a movie details page with metadata, genres, runtime, and tagline.
- Navigate with React Router.

## Features

- Debounced search using `react-use` (`useDebounce`).
- API layer with Axios and reusable TMDB request helpers.
- Client-side routing:
	- `/` for home
	- `/movie/:id` for details
- Reusable UI building blocks:
	- Header, search, trending list
	- Movie card/grid/poster
	- Shared loading state component
- Tailwind CSS v4-based styling with custom theme tokens.

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- Axios
- react-use
- Tailwind CSS 4
- ESLint 9

## Project Structure

```text
CineTrack/
	public/
	src/
		api/
			tmdb.js
		assets/
		components/
			Header/
				Header.jsx
				TrendingList.jsx
			Movie/
				MovieCard.jsx
				MovieGrid.jsx
				MoviePoster.jsx
			UI/
				Loading.jsx
			Search.jsx
			Trending.jsx
		context/
			searchContext.js
		pages/
			Home.jsx
			MovieDetails.jsx
		App.jsx
		App.css
		index.css
		main.jsx
	index.html
	eslint.config.js
	vite.config.js
	package.json
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_KEY=your_tmdb_bearer_token
```

Important:

- This app sends the value as an `Authorization: Bearer ...` header.
- Use a valid TMDB Bearer token (v4 auth token), not a plain API key.
- Never commit your real token.

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- TMDB account and token

### Install

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open the local URL shown by Vite (commonly `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start the Vite development server.
- `npm run build` - Create a production build.
- `npm run preview` - Preview the production build locally.
- `npm run lint` - Run ESLint.

## Data Flow

1. Home page loads and requests popular movies from TMDB.
2. Search input updates `searchTerm`.
3. Debounce waits 750ms before firing a query request.
4. Movie results render in the grid.
5. Trending section fetches top-rated movies independently.
6. Clicking a movie opens `/movie/:id` and fetches details with videos and credits appended.

## API Endpoints Used

- `discover/movie?sort_by=popularity.desc`
- `search/movie?query=...`
- `movie/top_rated`
- `movie/:id?append_to_response=videos,credits`

Base URL:

- `https://api.themoviedb.org/3/`

## Build and Deployment

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Deploy the generated app with Vercel, Netlify, or any static host. Add `VITE_API_KEY` in the deployment environment variables.

## Troubleshooting

- Blank results or request failures:
	- Verify `.env` is present and `VITE_API_KEY` is valid.
	- Restart dev server after changing environment variables.
- 401/403 from TMDB:
	- Confirm the token format and permissions in TMDB account settings.

## Acknowledgements

- Movie data provided by TMDB.
- This product uses the TMDB API but is not endorsed or certified by TMDB.

## License

For personal and educational use.