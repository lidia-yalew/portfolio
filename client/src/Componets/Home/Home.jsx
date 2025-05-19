import React from "react";
import "./Home.css";
import profileImage from "./../img/photo_2025-05-19_09-27-43.jpg"

const Home = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Lidia.</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <p className="role">Fullstack Developer</p>
          <h1>
            Hi, I'm <span className="highlight">Lidia Yalew</span>
          </h1>
          <h2>Information Systems Graduate from Wollo University</h2>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Kevin" />
        </div>
      </div>
    </div>
  );
};

export default Home;
