import React, { useState } from "react";
import { supabase } from "./supabaseClient";

const StarRating = ({ label, assignaturaId, value }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const avg = value || 0;

  const submitRating = async (star) => {
    setRating(star);
    try {
      const ipRes = await fetch("https://api.ipify.org?format=json");
      const { ip } = await ipRes.json();

      const { data: existing } = await supabase
        .from("ratings")
        .select("*")
        .eq("assignatura", assignaturaId)
        .eq("criteri", label)
        .eq("ip_address", ip);

      if (!existing || existing.length === 0) {
        await supabase.from("ratings").insert([
          {
            assignatura: assignaturaId,
            criteri: label,
            puntuacio: star,
            ip_address: ip,
          },
        ]);
        setErrorMsg("");
      } else {
        setErrorMsg("Ja has votat una vegada. No pots tornar a votar!!!");
      }
    } catch (err) {
      console.error("Error en votar:", err);
    }
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <strong>{label}:</strong>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => submitRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(null)}
          style={{
            cursor: "pointer",
            fontSize: "20px",
            color:
              star <= (hover || rating || Math.round(avg)) ? "#FFD700" : "#CCC",
            marginLeft: "5px",
          }}
        >
          ★
        </span>
      ))}
      <span style={{ marginLeft: "10px", fontSize: "14px" }}>
        (Mitjana: {avg.toFixed(1)})
      </span>
      {errorMsg && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{errorMsg}</div>
      )}
    </div>
  );
};

export default function BoxPopup({ assignatura, onClose, ratings }) {
  const nom = assignatura.nom;
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
        <h2>{nom}</h2>

        {assignatura.telegram && (
          <p>
            <a
              href={assignatura.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Canal de Telegram
            </a>
          </p>
        )}

        {assignatura.plaDocent && (
          <p>
            <a
              href={assignatura.plaDocent}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pla docent
            </a>
          </p>
        )}

        <h4>Dificultat</h4>
        <StarRating
          label="Matèria"
          assignaturaId={nom}
          value={ratings[`${nom}_Matèria`]}
        />
        <StarRating
          label="Temps"
          assignaturaId={nom}
          value={ratings[`${nom}_Temps`]}
        />
        <StarRating
          label="Global"
          assignaturaId={nom}
          value={ratings[`${nom}_Global`]}
        />

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
