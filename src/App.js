import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Pr from "./components/pr";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pr" element={<Pr />} />
    </Routes>
  );
};

export default App;
