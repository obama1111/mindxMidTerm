// src/App.jsx
import { useState } from "react";
// import "./App.css"; // (Nếu có)
import Header from "./Header";
import Banner from "./Banner";
import NewRelease from "./NewRelease";
import { movieList } from "./movieData"; // Import data để lấy phim mặc định

function App() {
  const [selectedMovie, setSelectedMovie] = useState(movieList[0]);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <Header />

      <Banner movie={selectedMovie} />

      <NewRelease onMovieClick={handleMovieSelect} />
    </div>
  );
}

export default App;