import React, { useState } from "react";

const StarRating = ({ label }) => {
  const [rating, setRating] = useState(0);
  return (
    <div style={{ marginBottom: "10px" }}>
      <strong>{label}:</strong>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            cursor: "pointer",
            fontSize: "20px",
            color: star <= rating ? "#FFD700" : "#CCC",
            marginLeft: "5px"
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function BoxPopup({ assignatura, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "400px",
          width: "90%",
        }}
      >
        <h2>{assignatura.nom}</h2>

        {assignatura.telegram && (
          <p>
            <a href={assignatura.telegram} target="_blank" rel="noopener noreferrer">
              Canal de Telegram
            </a>
          </p>
        )}

        {assignatura.plaDocent && (
          <p>
            <a href={assignatura.plaDocent} target="_blank" rel="noopener noreferrer">
              Pla docent
            </a>
          </p>
        )}

        <h4>Dificultat</h4>
        <StarRating label="Matèria" />
        <StarRating label="Temps" />
        <StarRating label="Global" />

        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Tanca
        </button>
      </div>
    </div>
  );
}