import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./config/ScrollToTop";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import CGV from "./pages/CGV";
import HôtelRivage from "./pages/projects/HôtelRivage";
import WorkingSpace from "./pages/projects/WorkingSpace";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Works />} />
        <Route path="/projets/hotel-rivage" element={<HôtelRivage />} />
        <Route path="/projets/space" element={<WorkingSpace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<CGV />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
