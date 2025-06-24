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
  const [showInfo, setShowInfo] = useState(false);

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
          position: "relative",
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

        {/* Enllaç informatiu */}
        <div
          onClick={() => setShowInfo(true)}
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            cursor: "pointer",
            color: "#0070f3",
            fontSize: "14px",
            fontWeight: "500",
            gap: "6px",
          }}
        >
          <span style={{ fontSize: "18px" }}>❓</span>
          <span style={{ textDecoration: "underline" }}>
            ¿Cómo funciona el sistema de dificultad?
          </span>
        </div>

        {/* Modal secundari */}
        {showInfo && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 200,
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                maxWidth: "500px",
                width: "90%",
                whiteSpace: "pre-line",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>¿Cómo funciona el sistema de dificultad?</h3>
              <p style={{ fontSize: "14px" }}>
                Hay tres conceptos disponibles: Materia (la dificultad de los contenidos de la asignatura), Tiempo (la cantidad de tiempo que hay que invertir en ella) y Global (el nombre habla por sí mismo, ¿no?).{'\n\n'}
                Podeis votar del 1 al 5 la dificultad que os parece que tiene la asignatura, pero recordad: MUCHA GENTE SE GUIA POR ESTO PARA MATRICULARSE, así que por favor, haced un uso responsable del sistema de votación, por el bien de todos.{'\n\n'}
                Del mismo que entrais para mirar la dificultad, os pedimos que cuando termineis dediqueis un tiempo a volver aquí i valorarla. ¡Gracias!
              </p>
              <button
                onClick={() => setShowInfo(false)}
                style={{
                  marginTop: "15px",
                  padding: "6px 14px",
                  backgroundColor: "#0070f3",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}

        {/* Botó de tancar */}
        <button
          onClick={onClose}
          style={{
            marginTop: "20px",
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
