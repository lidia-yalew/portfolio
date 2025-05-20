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
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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

          <button className="btn-download">Download CV</button>
        </div>

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
      </div>

      <div className="tab-content">
        {activeTab === "skills" && (
          <div className="skills">
            <h3>Fullstack Developer using React and Node.js</h3>
            <div className="skil">
              <div className="skills-section">
                <h2>Frontend</h2>
                {[
                  { name: "HTML", level: 95 },
                  { name: "CSS", level: 95 },
                  { name: "Bootstrap", level: 80 },
                  { name: "JavaScript", level: 85 },
                  { name: "jQuery", level: 80 },
                  { name: "React", level: 90 },
                ].map((skill) => (
                  <div className="skill-bar" key={skill.name}>
                    <span>{skill.name}</span>
                    <div className="bar-bg">
                      <div
                        className="bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="skills-section">
                <h2>Backend</h2>
                {[
                  { name: "PHP", level: 60 },
                  { name: "Node.js", level: 85 },
                  { name: "MySQL", level: 75 },
                ].map((skill) => (
                  <div className="skill-bar" key={skill.name}>
                    <span>{skill.name}</span>
                    <div className="bar-bg">
                      <div
                        className="bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="skills-section">
                <h3>Soft Skills</h3>
                {[
                  { name: "Communication", level: 99 },
                  { name: "Adaptability", level: 95 },
                  { name: "Confidence", level: 90 },
                  { name: "Fast Learner", level: 99 },
                ].map((skill) => (
                  <div className="skill-bar" key={skill.name}>
                    <span>{skill.name}</span>
                    <div className="bar-bg">
                      <div
                        className="bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>KIOT Bid Platform</h3>
                <span>Real-Time Auction Application</span>
                <p>
                  Live bidding platform similar to eBay, allowing users to
                  create auctions and place real-time bids.
                </p>
                <h4>Responsibilities:</h4>
                <ul>
                  <li>
                    Designed and implemented real-time bidding with WebSocket
                    integration.
                  </li>
                  <li>Developed front-end components using React.js.</li>
                  <li>
                    Built and maintained Node.js backend services and APIs.
                  </li>
                  <li>Ensured responsiveness and performance optimization.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Ethiozon</h3>
                <span>Amazon-style E-commerce Platform</span>
                <p>
                  Full-stack e-commerce platform inspired by Amazon. Includes
                  user authentication, product listings, shopping cart, checkout
                  functionality and payment.
                </p>
                <h4>Responsibilities:</h4>
                <ul>
                  <li>Implemented user authentication and authorization.</li>
                  <li>Developed product catalog and search functionality.</li>
                  <li>Integrated payment gateway for secure transactions.</li>
                  <li>
                    Collaborated with UI/UX designers for a seamless experience.
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Netflix Clone</h3>
                <span>React, Firebase, TMDB API</span>
                <p>
                  Front-end clone of Netflix featuring movie browsing UI and
                  Firebase-based user authentication.
                </p>
                <h4>Responsibilities:</h4>
                <ul>
                  <li>Designed responsive UI mimicking Netflix's interface.</li>
                  <li>Integrated TMDB API for dynamic movie data fetching.</li>
                  <li>Implemented Firebase authentication and database.</li>
                  <li>Handled state management using React hooks.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Amazon Clone</h3>
                <span>React</span>
                <p>
                  Frontend clone of Amazon with search, product listing and
                  basic shopping cart UI.
                </p>
                <h4>Responsibilities:</h4>
                <ul>
                  <li>Built reusable React components for product listings.</li>
                  <li>Implemented search functionality with filters.</li>
                  <li>
                    Developed shopping cart UI with basic add/remove features.
                  </li>
                  <li>
                    Ensured cross-browser compatibility and responsive design.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "education" && (
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Bachelor’s Degree in Information Systems</h3>
                <span>Wollo University</span>
                <p>Graduated: February 2025</p>
                <p>CGPA: 3.61 / 4.0</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Microsoft Azure DevOps Training</h3>
                <span>AppFactory Academy @ Wollo University</span>
                <p>Ongoing</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
