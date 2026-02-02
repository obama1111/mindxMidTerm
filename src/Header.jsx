import { useState } from "react";
import "./Header.css"
const Header = () => {

    return (
        <div className="header">
            <h1>Anonime</h1>
            <a>Home</a>
            <a>List anime</a>
            <input className="search_bar" type="text" placeholder="Search anime or movie" />
        </div>
    )
}
export default Header