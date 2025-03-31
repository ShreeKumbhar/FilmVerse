import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/" className="header__title">
          FilmVerse
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>

      <div className="headerRight">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <span className="headerRightOption">Login</span>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <span className="headerRightOption">Profile</span> 
        </Link>
      </div>
    </div>
  );
};

export default Header;
