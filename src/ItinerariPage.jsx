import React, { useRef, useEffect, useState } from "react";
import BoxPopup from "./boxPopup";
import "./itinerariPage.css";

export default function ItinerariPage({ bg, assignatures }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [selected, setSelected] = useState(null);

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

        {selected && <BoxPopup assignatura={selected} onClose={() => setSelected(null)} />}
      </div>
    </div>
  );
}
