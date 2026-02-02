import { useState } from "react";
import "./Banner.css"

const Banner = () => {

    return (
        <div className="banner_container">
            <h3>
                Explore
            </h3>

            <p className="sub_tittle">
                What are you gonna watch today ?
            </p>

            <div className="BannerShow" >
                <img className="bannerImg" src="https://www.impericon.com/cdn/shop/articles/Spy_family_Code_White.webp?v=1718270858" alt="" />

                <div className="banner_overlay"></div>
                <div className="banner_content">
                    <h2 className="movie-title">Weather With You</h2>
                    <p className="movie-desc">
                        Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.                     </p>
                </div>
            </div>
        </div>
    )
}

export default Banner