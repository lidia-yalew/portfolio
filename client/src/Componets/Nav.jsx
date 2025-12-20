import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="w-full flex justify-between items-center py-5 px-8 
      bg-[#111] shadow-[0_0_20px_rgba(255,165,0,0.2)] 
      fixed top-0 left-0 z-50 pt-7"
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-orange-400">Lidia.</div>

      {/* Hamburger (Mobile Only) */}
      <div
        className="text-3xl cursor-pointer md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
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
        <li className="md:ml-8 my-3 md:my-0">
          <Link
            className="hover:text-orange-400 text-white"
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>

        <li className="md:ml-8 my-3 md:my-0">
          <Link
            className="hover:text-orange-400 text-white"
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>

        <li className="md:ml-8 my-3 md:my-0">
          <Link
            className="hover:text-orange-400 text-white"
            to="/skill"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
        </li>

        <li className="md:ml-8 my-3 md:my-0">
          <Link
            className="hover:text-orange-400 text-white"
            to="/portfolio"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
        </li>

        <li className="md:ml-8 my-3 md:my-0">
          <Link
            className="hover:text-orange-400 text-white"
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
