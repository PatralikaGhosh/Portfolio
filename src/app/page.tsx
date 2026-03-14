// UnderMaintenance.tsx
import React from "react";

const UnderMaintenance: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        color: "#333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
        🚧 Under Maintenance
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#666" }}>
        I’ll be back shortly.
      </p>
    </div>
  );
};

export default UnderMaintenance;
