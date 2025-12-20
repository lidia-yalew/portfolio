import React, { useEffect, useState } from "react";
import profileImage from "./../img/aili.jpg";
import Nav from "../Nav";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div className="bg-black text-white w-screen h-screen fixed inset-0 overflow-hidden">
      <Nav />

      {/* HERO SECTION - Centered vertically and horizontally */}
      <div className="h-[calc(100vh-80px)] flex items-center justify-center sm:mt-20">
        <div className="max-w-[1300px] w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <div className="space-y-4 text-center md:text-left">
            <p className="text-orange-400 text-lg font-semibold">
              Fullstack Developer
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I'm <span className="text-orange-400">Lidia Yalew</span>
            </h1>

            <h2 className="text-lg md:text-xl text-gray-300">
              Bachelor’s Degree Information Systems <br />
              Graduate @ Wollo University
            </h2>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end relative">
            {/* Floating animation container */}
            <div
              className={`relative transform transition-all duration-1500 delay-400 ${
                loaded
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-20 opacity-0 scale-95"
              }`}
            >
              {/* Main image with hover effect */}
              <div className="relative group">
                <img
                  src={profileImage}
                  alt="Lidia Yalew"
                  className="w-[95%] max-w-[380px] md:max-w-[450px] object-contain rounded-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl group-hover:shadow-orange-500/20"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(251, 146, 60, 0.15))",
                  }}
                />

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700 -z-10"></div>

                {/* Decorative border on hover */}
                <div className="absolute inset-0 border-2 border-orange-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"></div>
              </div>

              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500/20 rounded-full border border-orange-400/30 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-600/10 to-transparent rounded-full border border-orange-400/20 animate-bounce"></div>

              {/* Animated ring */}
              <div className="absolute inset-0 border-4 border-transparent border-t-orange-400/30 border-r-orange-400/20 rounded-2xl animate-spin-slow -z-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          ></div>
        ))}

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default Home;
