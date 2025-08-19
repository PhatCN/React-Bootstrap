import React, { useEffect, useState } from "react";
import "../main.css";

export default function PageLoadScreen({ duration = 2000, height = 20, children }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), duration + 50);
    return () => clearTimeout(t);
  }, [duration]);

  if (!loaded) {
    return (
      <div className="pls-overlay">
        <div className="pls-bar" style={{ height }}>
          <div
            className="pls-progress"
            style={{ animationDuration: `${duration}ms, ${Math.max(2000, duration * 1.5)}ms` }}
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}