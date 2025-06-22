import React, { useRef, useState, useEffect } from "react";
import BoxPopup from "./boxPopup";
import "./ItinerariPage.css";
import { supabase } from "./supabaseClient";

export default function ItinerariPage({ bg, assignatures }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    const fetchRatings = async () => {
      const { data, error } = await supabase.from("ratings").select();
      if (!error && data) {
        const grouped = {};
        data.forEach(({ assignatura, criteri, puntuacio }) => {
          const key = `${assignatura}_${criteri}`;
          if (!grouped[key]) grouped[key] = [];
          grouped[key].push(puntuacio);
        });

        const averages = {};
        Object.keys(grouped).forEach((key) => {
          const arr = grouped[key];
          const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
          averages[key] = avg;
        });
        setRatings(averages);
      }
    };
    fetchRatings();
  }, []);

  return (
    <div style={{ paddingTop: "70px", display: "flex", justifyContent: "center" }}>
      <div
        ref={containerRef}
        style={{
          position: "relative",
          overflow: "hidden",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        <img
          ref={imageRef}
          src={bg}
          alt="background"
          style={{ display: "block", width: "100%", height: "auto" }}
        />

        {assignatures.map((a, i) => (
          <div
            key={i}
            onClick={() => setSelected(a)}
            className="assignatura-box"
            style={{
              position: "absolute",
              top: a.top,
              left: a.left,
              width: a.width,
              height: a.height,
              zIndex: 10,
            }}
          ></div>
        ))}

        {selected && (
          <div
            style={{
              transform: "none",
              transformOrigin: "center",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 100,
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
                assignatura={selected}
                ratings={ratings}
                onClose={() => setSelected(null)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}