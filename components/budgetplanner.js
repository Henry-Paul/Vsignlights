import { useState } from "react";

const PRODUCTS = {
  led: { label: "LED Shop Board", min: 850, max: 1500 },
  acp: { label: "ACP Hoarding", min: 1200, max: 2500 },
  letters: { label: "3D Letters", min: 1500, max: 4000 }
};

const CITIES = {
  tier1: { label: "Hyderabad", multiplier: 1.1 },
  tier2: { label: "Vijayawada / Vizag", multiplier: 1.05 },
  tier3: { label: "Other cities", multiplier: 1.0 }
};

export default function BudgetPlanner() {
  const [product, setProduct] = useState("led");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [city, setCity] = useState("tier1");

  const area = width && height ? width * height : 0;

  let estimate = null;
  if (area > 0) {
    const p = PRODUCTS[product];
    const m = CITIES[city].multiplier;

    estimate = {
      min: Math.round(area * p.min * m),
      max: Math.round(area * p.max * m)
    };
  }

  return (
    <div>
      <h2>Plan Your Signage Budget</h2>
      <p style={{ color: "var(--muted)", marginBottom: "20px" }}>
        Approximate estimate based on real-world pricing.
      </p>

      <label>Product</label>
      <select onChange={(e) => setProduct(e.target.value)} style={input}>
        <option value="led">LED Shop Board</option>
        <option value="acp">ACP Hoarding</option>
        <option value="letters">3D Letters</option>
      </select>

      <label>Width (ft)</label>
      <input type="number" onChange={(e) => setWidth(e.target.value)} style={input} />

      <label>Height (ft)</label>
      <input type="number" onChange={(e) => setHeight(e.target.value)} style={input} />

      <label>City</label>
      <select onChange={(e) => setCity(e.target.value)} style={input}>
        <option value="tier1">Hyderabad</option>
        <option value="tier2">Vijayawada / Vizag</option>
        <option value="tier3">Other cities</option>
      </select>

      {estimate && (
        <div style={{ marginTop: "24px", padding: "18px", background: "#F4F8FF", borderRadius: "12px" }}>
          <strong>Estimated Budget</strong>
          <p style={{ fontSize: "20px", marginTop: "8px", color: "var(--primary)" }}>
            ₹{estimate.min.toLocaleString()} – ₹{estimate.max.toLocaleString()}
          </p>
          <p style={{ fontSize: "13px", color: "var(--muted)" }}>
            Final price may vary after site inspection.
          </p>
        </div>
      )}
    </div>
  );
}

const input = {
  width: "100%",
  marginTop: "6px",
  marginBottom: "14px",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #e5e7eb"
};
