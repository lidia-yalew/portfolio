import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Componets/Home/Home.jsx";
import AboutMe from "./Componets/About/Aboutme.jsx";
import Portfolio from "./Componets/Portfolio/Portfolio.jsx";
import Service from "./Componets/Skills/Service.jsx";
import Contact from "./Componets/Contact/Contact.jsx";
export default function App() {
  return (
    <div className="mt-18">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skill" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
