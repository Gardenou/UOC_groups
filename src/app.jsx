/*import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import ItinerariPage from "./ItinerariPage";
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
}*/
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import ItinerariPage from "./ItinerariPage";
import { itinerarisData } from "./itineraris/index.jsx";
import { LanguageProvider, useLanguage } from "../contexts/LanguageContext";

function AppRoutes() {
  const { language } = useLanguage();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/basiques" replace />} />
        {Object.entries(itinerarisData).map(([slug, config]) => {
          // Substitueix -ca per -es si cal
          const bg = language === "ca" ? config.bg : config.bg.replace("-ca", "-es");

          return (
            <Route
              key={slug}
              path={`/${slug}`}
              element={<ItinerariPage bg={bg} assignatures={config.assignatures} />}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppRoutes />
      </Router>
    </LanguageProvider>
  );
}
