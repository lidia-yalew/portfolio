import React, { useState } from "react";
import "./Home.css";
import profileImage from "./../img/liR (1).png"
import Nav from "../Nav";


const Home = () => {
  return (
    <div className="home">
      <Nav />
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <p className=" highlight role">Fullstack Developer</p>
          <h1>
            Hi, I'm <span className="highlight">Lidia Yalew</span>
          </h1>
          <h2>
            Bachelor’s Degree Information Systems <br /> Graduate @ Wollo
            University
          </h2>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Lidia Yalew" />
        </div>
      </div>
    </div>
  );
};

export default Home;
