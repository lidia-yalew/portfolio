import React, { useEffect, useState } from "react";
import profileImage from "./../../../public/img/aili.jpg";
import Nav from "../Nav";
import cv from "./../../../public/img/Lidia-YalewCV.pdf";
import lid from "../../assets/lid.png"

const AboutMe = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div className="bg-black text-white w-screen h-screen fixed inset-0 overflow-hidden">
      <Nav />

      <div className="sm:mt-20 max-w-6xl mx-auto px-4 md:px-16 py-8 flex flex-col md:flex-row items-center md:items-start gap-8 mt-15">
        {/* Profile Image - Enhanced with animations */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            {/* Animated border effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-2xl blur-xl animate-pulse"></div>

            {/* Floating image container */}
            <div
              className={`relative transform transition-all duration-1500 ${
                loaded
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-20 opacity-0 scale-95"
              }`}
            >
              <div className="relative group cursor-pointer">
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                {/* Main image */}
                <img
                  src={lid}
                  alt="Profile"
                  loading="lazy"
                  decoding="async"
                  className="relative rounded-lg w-50 h-60 md:w-67 md:h-80 object-cover border-2 border-orange-500 shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-orange-500/30 group-hover:rotate-1"
                />

                {/* Corner decorations on hover */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-orange-400 rounded-tl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-orange-400 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-orange-400 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-orange-400 rounded-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300"></div>
              </div>

              {/* Floating dot animation */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-amber-400/50 rounded-full animate-bounce"
                style={{ animationDuration: "2s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* About Content - Kept exactly as original */}
        <div className="flex flex-col gap-4 max-w-xl text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500">
            About Me
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
           Frontend-focused full-stack developer with hands-on experience building production-ready web applications using React.js, Node.js, and PostgreSQL. Recently built a complete consultancy website and rastaurant with an admin dashboard, including authentication, notifications, and dynamic content management. Strong problem-solver who enjoys debugging tricky UI and state-management issues. Currently expanding my DevOps knowledge through Azure DevOps training to better understand the full software delivery lifecycle.
          </p>

          <a
            href={cv}
            download="Lidia-Valew-CV.pdf"
            className="inline-block bg-orange-500 text-black font-semibold px-6 py-2 rounded-md hover:bg-orange-600 transition-colors text-center transform transition-transform hover:scale-105 duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
