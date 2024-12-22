import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import OurTeam from "../pages/Our Team/OurTeam";
import DermAi from "../pages/Features/DermAi";
import DermJournal from "../pages/Features/DermJournal";
import DermMart from "../pages/Features/DermMart";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/dermai" element={<DermAi />} />
        <Route path="/dermjournal" element={<DermJournal />} />
        <Route path="/dermmart" element={<DermMart />} />
        <Route path="*" element={<h>404 Not Found</h>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;