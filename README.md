# 🎬 Movio – Movie Discovery App

Movio is a modern React application that allows users to search, browse, and explore movies using the TMDB API. It includes trending movies, a debounced search feature, reusable UI components, and a clean modular architecture.

---

## 🚀 Features

- 🔍 **Live Search with Debounce** – Minimizes API calls and improves performance
- 🎞 **Trending / Top Rated Movies Section**
- 🖼 **Movie Grid with Cards**
- ⭐ **Ratings, Language, Year Display**
- 🧩 **Clean Component Architecture**
- ⚡ **Vite + React**
- 🎨 **Tailwind CSS Styling**
- 🌐 **TMDB API Integration**

---

## 📁 Project Structure

```
src
│
├── api/
│   └── tmdb.js
│
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── TrendingList.jsx
│   │
│   ├── Movie/
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   └── MoviePoster.jsx
│   │
│   └── UI/
│       ├── Loading.jsx
│       └── Search.jsx
│
├── assets/
│   └── (images/icons)
│
├── App.jsx
└── main.jsx
```

---

## 🔧 Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **Axios**
- **React-Use (debounce)**
- **TMDB API**
- **Vercel Hosting**

---

## 🔑 Environment Variables

Create a `.env` file in the project root:

```
VITE_API_KEY=your_tmdb_api_key
```

**Do NOT expose the actual key publicly.**

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/movio.git
cd movio
npm install
npm run dev
```

---

## 🚀 Build & Deploy

To create a production build:

```bash
npm run build
```

Deploy easily using **Vercel**, **Netlify**, or any static hosting provider.

For Vercel, remember to add the environment variable:

```
VITE_API_KEY=your_tmdb_api_key
```

---

## 🙌 Acknowledgements

- Movie data provided by **TMDB API**
- UI inspired by modern movie discovery platforms

---

## 📜 License

This project is for educational and personal use.

---

**Enjoy discovering movies with Movio! 🎬🍿**