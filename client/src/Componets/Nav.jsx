import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    
      const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
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
   
  )
}

export default Nav
