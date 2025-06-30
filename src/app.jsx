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
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import ItinerariPage from "./ItinerariPage";
import SearchGroups from "./SearchGroups";
import BoxPopup from "./boxPopup";
import { itinerarisData } from "./itineraris/index.jsx";
import { LanguageProvider, useLanguage } from "../contexts/LanguageContext";

function AppRoutes() {
  const { language } = useLanguage();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedFromSearch, setSelectedFromSearch] = useState(null);

  return (
    <>
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/basiques" replace />} />

        {Object.entries(itinerarisData).map(([slug, config]) => {
          // Substitueix -ca per -es si cal
          const bg = language === "ca" ? config.bg : config.bg.replace("_ca", "_es");
          console.log("Ruta del fons:", bg);
          return (
            <Route
              key={slug}
              path={`/${slug}`}
              element={<ItinerariPage bg={bg} assignatures={config.assignatures} />}
            />
          );
        })}
      </Routes>

      {/* Popup buscador de grups */}
      <SearchGroups 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectAssignatura={(assignatura) => setSelectedFromSearch(assignatura)}
      />

      {/* Popup detalls assignatura des del buscador */}
      {selectedFromSearch && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1100,
            pointerEvents: "none",
            padding: "10px",
          }}
        >
          <div
            style={{
              pointerEvents: "auto",
              width: "auto",
              maxWidth: "90vw",
            }}
          >
            <BoxPopup
              assignatura={selectedFromSearch}
              ratings={{}}
              onClose={() => setSelectedFromSearch(null)}
            />
          </div>
        </div>
      )}
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
