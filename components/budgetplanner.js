import { useState } from "react";

const DATA = {
  LED: [850, 1500],
  ACP: [1200, 2500],
  "3D Letters": [1500, 4000],
};

export default function BudgetPlanner() {
  const [type, setType] = useState("LED");
  const [w, setW] = useState("");
  const [h, setH] = useState("");

  const area = w && h ? w * h : 0;
  const min = area ? area * DATA[type][0] : 0;
  const max = area ? area * DATA[type][1] : 0;

  return (
    <>
      <h2>Budget Planner</h2>

      <label>Product</label>
      <select onChange={(e) => setType(e.target.value)}>
        {Object.keys(DATA).map(p => <option key={p}>{p}</option>)}
      </select>

      <label>Width (ft)</label>
      <input type="number" onChange={(e) => setW(e.target.value)} />

      <label>Height (ft)</label>
      <input type="number" onChange={(e) => setH(e.target.value)} />

      {area > 0 && (
        <div className="estimate">
          ₹{min.toLocaleString()} – ₹{max.toLocaleString()}
          <p>Approximate estimate. Final price after site visit.</p>
        </div>
      )}
    </>
  );
}
