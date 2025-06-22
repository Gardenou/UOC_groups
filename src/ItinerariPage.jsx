import React, { useRef, useEffect, useState } from "react";
import BoxPopup from "./boxPopup";
import "./ItinerariPage.css";

export default function ItinerariPage({ bg, assignatures }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [selected, setSelected] = useState(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (nav) {
      nav.style.padding = isMobile ? "2px 6px" : "15px 30px";
      nav.style.height = isMobile ? "36px" : "70px";
      nav.style.fontSize = isMobile ? "12px" : "inherit";
      const select = nav.querySelector("select");
      if (select) {
        select.style.fontSize = isMobile ? "12px" : "inherit";
        select.style.padding = isMobile ? "4px" : "8px";
      }
    }
  }, [isMobile]);

  return (
    <div style={{ paddingTop: isMobile ? "36px" : "70px", display: "flex", justifyContent: "center" }}>
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
                width: isMobile ? "360px" : "auto",
                maxWidth: "90vw",
              }}
            >
              <BoxPopup assignatura={selected} onClose={() => setSelected(null)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
