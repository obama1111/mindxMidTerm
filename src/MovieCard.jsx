
const MovieCard = ({ movie, onClick }) => {
  return (
    
    <div className="movie_section" onClick={onClick}>
      <div className="movie_in4">
        <div style={{ cursor: "pointer" }}> 
            <img src={movie.image} alt={movie.movieName} />
            
            <div className="movie_overlay">
            <p className="episode_text">Episode {movie.episode}</p>
            <h4 className="movie_name">{movie.movieName}</h4>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;