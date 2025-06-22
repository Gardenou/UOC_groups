import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "/uoc_logo.png";

const itineraris = [
  { slug: "basiques", nom: "Bàsiques" },
  { slug: "informacio", nom: "Tecnologies de la Informació" },
  { slug: "sistemes", nom: "Sistemes de la Informació" },
  { slug: "computacio", nom: "Computació" },
  { slug: "enginyeria-computadors", nom: "Enginyeria de Computadors" },
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
}