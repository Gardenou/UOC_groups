import React, { useState, useRef, useEffect } from "react";
import BoxPopup from "./BoxPopup";
import { assignatures } from "./data.jsx";

export default function App() {
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (imageRef.current && containerRef.current) {
        const width = imageRef.current.clientWidth;
        containerRef.current.style.width = `${width}px`;
        containerRef.current.style.height = `${imageRef.current.clientHeight}px`;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#000",
          margin: "0 auto",
        }}
      >
        <img
          ref={imageRef}
          src="/uoc_assignatures_pg1.png"
          alt="UOC Assignatures"
          style={{ display: "block", width: "100%", height: "auto", zIndex: 0 }}
        />

        {assignatures.map((a, i) => (
          <div
            key={i}
            onClick={() => setSelected(a)}
            style={{
              position: "absolute",
              top: a.top,
              left: a.left,
              width: a.width,
              height: a.height,
              backgroundColor: "rgba(255, 255, 0, 0.15)",
              border: "3px solid yellow",
              borderRadius: "8px",
              cursor: "pointer",
              zIndex: 10,
            }}
          ></div>
        ))}

        {selected && <BoxPopup assignatura={selected} onClose={() => setSelected(null)} />}
      </div>
    </div>
  );
}