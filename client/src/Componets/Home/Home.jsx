import React, { useState } from "react";
import "./Home.css";
import profileImage from "./../img/photo_2025-05-19_09-27-43.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Lidia.</div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Lidia Yalew</span>
          </h1>
          <h2>
            Bachelor’s Degree Information Systems Graduate @ Wollo University
          </h2>
          <p className="role">Fullstack Developer</p>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Lidia Yalew" />
        </div>
      </div>
    </div>
  );
};

export default Home;
