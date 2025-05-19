import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Componets/Home/Home.jsx";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </div>
  );
}
