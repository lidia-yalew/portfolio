import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Web Development",
    desc: "Building full-stack websites using modern technologies.",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile App Development",
    desc: "Creating intuitive mobile applications for Android and iOS.",
  },
  {
    icon: "fas fa-palette",
    title: "UI/UX Design",
    desc: "Crafting beautiful and user-friendly interfaces.",
  },
];

const Services = () => {
  return (
    <div className="services-container">
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
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </nav>
      <h2 className="section-title">My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <i className={`${service.icon} icon`}></i>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
