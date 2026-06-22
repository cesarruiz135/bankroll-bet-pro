import { useState } from "react";

export default function Home() {
  const [capitalInicial, setCapitalInicial] = useState(45000);
  const [cuota, setCuota] = useState(1.75);
  const [riesgo, setRiesgo] = useState(5);

  return (
    <div
      style={{
        background: "#f3f4f6",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
        }}
      >
        <h1 style={{ color: "#1e3a5f" }}>Bankroll Bet Pro</h1>

        <div style={{ marginBottom: "20px" }}>
          <label>Capital Inicial (COP)</label>
          <input
            type="number"
            value={capitalInicial}
            onChange={(e) => setCapitalInicial(Number(e.target.value))}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Cuota Promedio</label>
          <input
            type="number"
            step="0.01"
            value={cuota}
            onChange={(e) => setCuota(Number(e.target.value))}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>% Riesgo por Paso</label>
          <input
            type="number"
            value={riesgo}
            onChange={(e) => setRiesgo(Number(e.target.value))}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <h2 style={{ color: "green" }}>
          Capital Actual: ${capitalInicial.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}
