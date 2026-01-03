import { useState } from "react";

const PRODUCTS = {
  LED: [850, 1500],
  ACP: [1200, 2500],
  "3D Letters": [1500, 4000],
};

const CITY_MULTIPLIER = {
  Hyderabad: 1.1,
  "Tier 2 City": 1.05,
  Others: 1,
};

export default function BudgetPlanner() {
  const [product, setProduct] = useState("LED");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [city, setCity] = useState("Hyderabad");

  const area = width && height ? width * height : 0;

  let estimate = null;
  if (area > 0) {
    const [min, max] = PRODUCTS[product];
    const m = CITY_MULTIPLIER[city];
    estimate = {
      min: Math.round(area * min * m),
      max: Math.round(area * max * m),
    };
  }

  return (
    <>
      <h2>Budget Planner</h2>

      <label>Product</label>
      <select onChange={(e) => setProduct(e.target.value)}>
        {Object.keys(PRODUCTS).map(p => <option key={p}>{p}</option>)}
      </select>

      <label>Width (ft)</label>
      <input type="number" onChange={(e) => setWidth(e.target.value)} />

      <label>Height (ft)</label>
      <input type="number" onChange={(e) => setHeight(e.target.value)} />

      <label>City</label>
      <select onChange={(e) => setCity(e.target.value)}>
        {Object.keys(CITY_MULTIPLIER).map(c => <option key={c}>{c}</option>)}
      </select>

      {estimate && (
        <div className="estimate">
          ₹{estimate.min.toLocaleString()} – ₹{estimate.max.toLocaleString()}
          <p>Approximate estimate. Final price after site visit.</p>
        </div>
      )}
    </>
  );
}
