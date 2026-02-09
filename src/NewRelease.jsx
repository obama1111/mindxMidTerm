// File: src/NewRelease.jsx
import { useState } from "react";
import { movieList } from "./movieData";
import "./NewRelease.css";
import MovieCard from "./MovieCard";

const NewRelease = ({ onMovieClick }) => {
  const [movies, setMovies] = useState(movieList.slice(1));

  const handleMovieClick = (movie) => {
    console.log("Chi tiết phim:", movie);
    onMovieClick(movie); 
  }

  return (
    <div className="RL_container">
      <h3>New Release</h3>
      <div className="section_wrap">
        {movies.map((item) => (
          <MovieCard 
            key={item.id} 
            movie={item} 
            onClick={() => handleMovieClick(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default NewRelease;