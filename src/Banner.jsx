import { useState } from "react";
import "./Banner.css"

// Nhận prop "movie" từ App truyền xuống
const Banner = ({ movie }) => {

    return (
        <div className="banner_container">
            <h3>Explore</h3>
            <p className="sub_tittle">What are you gonna watch today ?</p>

            <div className="BannerShow">
                <img 
                    className="bannerImg" 
                    src={movie.image} 
                    alt={movie.movieName} 
                />

                <div className="banner_overlay"></div>
                
                <div className="banner_content">
                    <h2 className="movie-title">{movie.movieName}</h2>
                    
                    <p className="movie-desc">
                        {movie.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner