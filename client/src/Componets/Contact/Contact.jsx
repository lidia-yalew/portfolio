import React, { useState } from "react";
import "./Contact.css";
import { FiSend } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
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
      <div className="contact-section">
        {/* Contact Content */}
        <div className="contact-left">
          <h2>Contact Me</h2>
          <div className="contact-info">
            <p>
              <FiSend className="icon" /> contact@example.com
            </p>
            <p>
              <AiOutlinePhone className="icon" /> 0123456789
            </p>
          </div>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="contact-right">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
