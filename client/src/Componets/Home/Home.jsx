import React from "react";
import "./Home.css";
import profileImage from "./../img/photo_2025-05-19_09-27-43.jpg"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Lidia.</div>
        <ul className="nav-links">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Lidia Yalew</span>
          </h1>
          <h2>Information Systems Graduate @ Wollo University</h2>
          <p className="role">Fullstack Developer</p>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Kevin" />
        </div>
      </div>
    </div>
  );
};

export default Home;
