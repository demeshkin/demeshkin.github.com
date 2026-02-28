import { useState } from "react";

export default function Home() {
  const [n, setN] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function calculate() {
    setError(null);
    setResult(null);
    const res = await fetch(`/api/calculate?n=${encodeURIComponent(n)}`);
    const data = await res.json();
    if (!res.ok) {
      setError(data.error);
    } else {
      setResult(data);
    }
  }

  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: 480, margin: "60px auto", padding: "0 16px" }}>
      <h1>Jaga jaga</h1>
      <p>Enter a number to compute its factorial on the server:</p>
      <input
        type="number"
        min="0"
        max="20"
        value={n}
        onChange={(e) => setN(e.target.value)}
        placeholder="0 – 20"
        style={{ padding: "6px 10px", fontSize: "1rem", width: 120, marginRight: 8 }}
      />
      <button
        onClick={calculate}
        style={{ padding: "6px 16px", fontSize: "1rem", cursor: "pointer" }}
      >
        Calculate
      </button>
      {error && <p style={{ color: "red", marginTop: 16 }}>{error}</p>}
      {result && (
        <p style={{ marginTop: 16 }}>
          {result.n}! = <strong>{result.factorial}</strong>
        </p>
      )}
    </main>
  );
}
