import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skill" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/" || location.pathname === "/home";
    }
    return location.pathname === path;
  };

  return (
    <nav
      className="w-full flex justify-between items-center py-5 px-8 
      bg-[#111] shadow-[0_0_20px_rgba(255,165,0,0.2)] 
      fixed top-0 left-0 z-50 pt-7"
    >
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-orange-400">
        Lidia.
      </Link>

      {/* Hamburger (Mobile Only) */}
      <div
        className="text-3xl cursor-pointer md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex flex-col md:flex-row md:static absolute left-0 top-[70px] 
          w-full md:w-auto bg-[#111] md:bg-transparent 
          md:opacity-100 transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "opacity-100 h-auto py-6"
              : "opacity-0 h-0 overflow-hidden md:h-auto"
          }`}
      >
        {navLinks.map((link) => {
          const active = isActive(link.path);
          return (
            <li key={link.path} className="md:ml-8 my-3 md:my-0 text-center md:text-left">
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`relative py-1 transition-colors duration-300 inline-block ${
                  active
                    ? "text-orange-400 font-semibold"
                    : "text-gray-300 hover:text-orange-400"
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400 rounded-full shadow-[0_0_8px_rgba(251,146,60,0.8)]"></span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
