import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Ethiozon",
    description:
      "Amazon-style shopping platform built using MERN stack with full user, product, and order management.",
    link: "https://github.com/yourusername/ethiozon",
  },
  {
    title: "Netflix Clone",
    description:
      "Movie streaming UI with Firebase authentication and TMDB integration.",
    link: "https://github.com/yourusername/netflix-clone",
  },
  {
    title: "Amazon Clone",
    description:
      "E-commerce front-end with cart, checkout, and responsive UI. Built using React and styled-components.",
    link: "https://github.com/yourusername/amazon-clone",
  },
  {
    title: "Bid Platform",
    description:
      "Real-time bidding system (like eBay) with full stack architecture and bidding logic.",
    link: "https://github.com/yourusername/bid-platform",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <nav className="navbar ">
        <div className="logo">Lidia.</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
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
      <div className="portfolio">
        <h2 className="portfolio-title">My Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
