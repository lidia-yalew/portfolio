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
import Nav from "../Nav";

const Contact = () => {

  return (
    <div>
     <Nav/>
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
