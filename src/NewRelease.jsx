// File: src/NewRelease.jsx
import { useState } from "react";
import { movieList } from "./movieData";
import "./NewRelease.css";
import MovieCard from "./MovieCard";


const NewRelease = () => {
  const [movies, setMovies] = useState(movieList);

  return (
    <div className="RL_container">
      <h3>New Release</h3>
      <div className="section_wrap">
        {movies.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
};

export default NewRelease;