import React, { useState } from "react";
import "./AboutMe.css";
import profileImage from "./../img/6A1A9679.JPG";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="about-containers">
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
            <Link>Services</Link>
          </li>
          <li>
            <Link>Portfolio</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>

        <div className="about-content">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">
            Highly motivated technology enthusiast with solid web development
            skills and growing expertise in project coordination. Experienced in
            leading and developing full-stack projects using React.js and
            Node.js. A fast learner with a strong passion for problem-solving,
            teamwork, and delivering smart digital solutions. Currently
            expanding skills through Azure DevOps training.
          </p>

          <div className="tabs">
            <button
              className={`tab ${activeTab === "skills" ? "active" : ""}`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>
            <button
              className={`tab ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </button>
            <button
              className={`tab ${activeTab === "education" ? "active" : ""}`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
          </div>
          <div
            className="
        tab-content"
          >
            {activeTab === "skills" && (
              <div className="skills">
                <div className="skill-item">
                  <h2 className="skill-title uiux">Web Development</h2>
                  <p>Fullstack Developer using React and Node.js</p>
                </div>
                <div className="skill-item">
                  <h2 className="skill-title appdev">App Development</h2>
                  <p>Building Android/iOS apps</p>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="experience">
                <p>
                  <strong>Web Developer & Team Work</strong>
                </p>
                ➤ Built full-stack web applications using React and Node.js.
                <br />➤ Facilitated team collaboration through clear
                communication and Git-based version control.
              </div>
            )}

            {activeTab === "education" && (
              <div className="education">
                <p>
                  <strong>Bachelor’s Degree in Information Systems</strong>
                  <br />
                  Wollo University
                  <br />
                  <em>Graduated: February 2025</em>
                </p>
                <p>
                  <strong>Microsoft Azure DevOps Training</strong>
                  <br />
                  AppFactory Academy @ Wollo University
                  <br />
                  <em>Ongoing</em>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
