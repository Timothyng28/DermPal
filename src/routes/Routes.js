import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import OurTeam from "../pages/Our Team/OurTeam";
import DermAi from "../pages/Features/DermAi";
import DermJournal from "../pages/Features/DermJournal";
import DermMart from "../pages/Features/DermMart";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/features/dermai" element={<DermAi />} />
        <Route path="/features/dermjournal" element={<DermJournal />} />
        <Route path="/features/dermmart" element={<DermMart />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
  );
}

export default AppRoutes;