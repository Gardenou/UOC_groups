/*import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "/uoc_logo.png";

const itineraris = [
  { slug: "basiques", nom: "Bàsiques" },
  { slug: "informacio", nom: "Tecnologies de la Informació" },
  { slug: "sistemes", nom: "Sistemes de la Informació" },
  { slug: "computacio", nom: "Computació" },
  { slug: "computadors", nom: "Enginyeria de Computadors" },
  { slug: "programari", nom: "Enginyeria del Programari" },
  { slug: "optatives", nom: "Optatives" }
];

export default function Navbar() {
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate(`/${e.target.value}`);
  };

  return (
    <div style={{
      position: "fixed",
      top: 0,
      width: "100%",
      backgroundColor: "#001B4C",
      color: "white",
      padding: "6px 25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      zIndex: 1000
    }}>
      <img src={logo} alt="UOC logo" style={{ height: "60px" }} />
      <select
        onChange={handleChange}
        style={{
          fontSize: "16px",
          padding: "8px 30px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "white",
          color: "#001B4C",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        <option disabled selected>Selecciona Itinerari</option>
        {itineraris.map((it) => (
          <option key={it.slug} value={it.slug}>{it.nom}</option>
        ))}
      </select>
    </div>
  );
}*/
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import logo from "/uoc_logo.png";

const itineraris = [
  { slug: "basiques", nom_ca: "Bàsiques", nom_es: "Básicas" },
  { slug: "informacio", nom_ca: "Tecnologies de la Informació", nom_es: "Tecnologías de la Información" },
  { slug: "sistemes", nom_ca: "Sistemes de la Informació", nom_es: "Sistemas de la Información" },
  { slug: "computacio", nom_ca: "Computació", nom_es: "Computación" },
  { slug: "computadors", nom_ca: "Enginyeria de Computadors", nom_es: "Ingeniería de Computadores" },
  { slug: "programari", nom_ca: "Enginyeria del Programari", nom_es: "Ingeniería del Software" },
  { slug: "optatives", nom_ca: "Optatives", nom_es: "Optativas" },
];

export default function Navbar({ onOpenSearch }) {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();

  const handleChange = (e) => {
    navigate(`/${e.target.value}`);
  };

  return (
    <div
      className="navbar-container"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#001B4C",
        color: "white",
        padding: "6px 25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 1000,
      }}
    >
      <img src={logo} alt="UOC logo" className="navbar-logo" style={{ height: "60px" }} />
      
      <div className="navbar-controls" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <select
          onChange={handleChange}
          defaultValue=""
          style={{
            fontSize: "16px",
            padding: "8px 30px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "white",
            color: "#001B4C",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          <option disabled value="">
            {language === "ca" ? "Selecciona Itinerari" : "Selecciona Itinerario"}
          </option>
          {itineraris.map((it) => (
            <option key={it.slug} value={it.slug}>
              {language === "ca" ? it.nom_ca : it.nom_es}
            </option>
          ))}
        </select>

        <button
          onClick={onOpenSearch}
          style={{
            fontSize: "14px",
            padding: "6px 12px",
            borderRadius: "6px",
            backgroundColor: "#0088cc",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🔍 {language === "ca" ? "Assignatures" : "Asignaturas"}
        </button>

        <button
          onClick={toggleLanguage}
          style={{
            fontSize: "14px",
            padding: "6px 12px",
            borderRadius: "6px",
            backgroundColor: "#ffffff",
            color: "#001B4C",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {language === "ca" ? "Català" : "Castellano"}
        </button>
      </div>
    </div>
  );
}
