import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./config/ScrollToTop";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import CGV from "./pages/CGV";
import HôtelRivage from "./pages/projects/HôtelRivage";
import Space from "./pages/projects/Space";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realisations" element={<Works />} />
        <Route path="/realisations/hotel-rivage" element={<HôtelRivage />} />
        <Route path="/realisations/space" element={<Space />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<CGV />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
