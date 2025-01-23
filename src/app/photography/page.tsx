// pages/maintenance.tsx
import React from "react";

const Maintenance: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>I'll be back soon!</h1>
      <p style={styles.text}>
        My website is currently undergoing scheduled maintenance.
        <br />
        Thank you for your patience!
      </p>
      <p style={styles.footer}>
        — Patralika Ghosh
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center" as "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.25rem",
    color: "#555",
  },
  footer: {
    marginTop: "2rem",
    fontSize: "1rem",
    color: "#777",
  },
};

export default Maintenance;
