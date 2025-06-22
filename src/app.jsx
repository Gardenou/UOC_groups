import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./navbar";
import ItinerariPage from "./itinerariPage";
import { itinerarisData } from "./itineraris/index.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/basiques" replace />} />
        {Object.entries(itinerarisData).map(([slug, config]) => (
          <Route
            key={slug}
            path={`/${slug}`}
            element={<ItinerariPage bg={config.bg} assignatures={config.assignatures} />}
          />
        ))}
      </Routes>
    </Router>
  );
}
