import { useState } from "react";
import Head from "next/head";

/* ---------- DATA ---------- */

const PRODUCTS = [
  { id: "led", name: "LED Shop Boards", min: 850, max: 1500 },
  { id: "acp", name: "ACP Hoardings", min: 1200, max: 2500 },
  { id: "letters", name: "3D Letters", min: 1500, max: 4000 }
];

const CITIES = [
  { id: "hyd", name: "Hyderabad", multiplier: 1.1 },
  { id: "tier2", name: "Vijayawada / Vizag", multiplier: 1.05 },
  { id: "other", name: "Other Cities", multiplier: 1.0 }
];

/* ---------- PAGE ---------- */

export default function Home() {
  const [showPlanner, setShowPlanner] = useState(false);
  const [product, setProduct] = useState(PRODUCTS[0]);
  const [city, setCity] = useState(CITIES[0]);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const area = width && height ? width * height : 0;
  const estimate =
    area > 0
      ? {
          min: Math.round(area * product.min * city.multiplier),
          max: Math.round(area * product.max * city.multiplier)
        }
      : null;

  return (
    <>
      <Head>
        <title>V SIGN – Premium Signage Solutions</title>
        <meta
          name="description"
          content="Premium signage solutions including LED boards, ACP hoardings and 3D letters with real-world budget estimation."
        />
      </Head>

      {/* HEADER */}
      <header className="header">
        <div className="container nav">
          <strong>V SIGN</strong>
          <nav>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/testimonials">Testimonials</a>
            <a href="/blogs">Blogs</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>Premium signage solutions for modern businesses</h1>
          <h2>
            LED boards, ACP hoardings and 3D letters with transparent,
            real-world pricing.
          </h2>
          <h3>Serving Andhra Pradesh & Telangana</h3>

          <button className="primary" onClick={() => setShowPlanner(true)}>
            Plan Your Budget
          </button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container">
          <h2>Our Products</h2>

          <div className="product-row">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="card">
                <h3>{p.name}</h3>
                <p className="price">
                  ₹{p.min} – ₹{p.max} / sq ft
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section light">
        <div className="container">
          <h2>Trusted by Businesses</h2>

          <div className="grid">
            <div className="review">★★★★★ Excellent quality & finishing.</div>
            <div className="review">★★★★★ Transparent pricing.</div>
            <div className="review">★★★★☆ Reliable signage partner.</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>

          <div className="faq">
            <p>
              <strong>How is pricing calculated?</strong><br />
              Based on size, material, city and installation complexity.
            </p>
            <p>
              <strong>Is this a final price?</strong><br />
              No. This is an approximate budget for planning purposes.
            </p>
            <p>
              <strong>Do you provide installation?</strong><br />
              Yes, end-to-end professional service.
            </p>
          </div>
        </div>
      </section>

      {/* BUDGET PLANNER MODAL */}
      {showPlanner && (
        <div className="overlay" onClick={() => setShowPlanner(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Budget Planner</h2>

            <label>Product</label>
            <select onChange={(e) => setProduct(PRODUCTS.find(p => p.id === e.target.value))}>
              {PRODUCTS.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>

            <label>Width (ft)</label>
            <input type="number" onChange={(e) => setWidth(e.target.value)} />

            <label>Height (ft)</label>
            <input type="number" onChange={(e) => setHeight(e.target.value)} />

            <label>City</label>
            <select onChange={(e) => setCity(CITIES.find(c => c.id === e.target.value))}>
              {CITIES.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>

            {estimate && (
              <div className="estimate">
                <strong>Estimated Budget</strong>
                <p>
                  ₹{estimate.min.toLocaleString()} – ₹{estimate.max.toLocaleString()}
                </p>
                <span>Final price may vary after site inspection</span>
              </div>
            )}

            <button onClick={() => setShowPlanner(false)}>Close</button>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style jsx>{`
        body { margin:0; font-family: Inter, sans-serif; }
        .container { max-width:1200px; margin:auto; padding:20px; }
        .header { border-bottom:1px solid #e5e7eb; }
        .nav { display:flex; justify-content:space-between; align-items:center; }
        nav a { margin-left:20px; color:#6b7280; text-decoration:none; }
        .hero { background:#f4f8ff; padding:80px 0; }
        h1 { font-size:42px; }
        h2 { color:#6b7280; margin-top:10px; }
        h3 { margin-top:20px; color:#6b7280; }
        .primary { margin-top:30px; padding:14px 26px; background:#0b5ed7; color:#fff; border:none; border-radius:10px; }
        .section { padding:70px 0; }
        .light { background:#f4f8ff; }
        .product-row { display:flex; gap:20px; overflow-x:auto; }
        .card { min-width:260px; border:1px solid #e5e7eb; padding:24px; border-radius:16px; }
        .price { color:#0b5ed7; font-weight:600; }
        .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:20px; }
        .review { background:#fff; padding:20px; border-radius:14px; }
        .faq p { margin-top:16px; color:#6b7280; }
        .overlay { position:fixed; inset:0; background:rgba(0,0,0,.4); display:flex; justify-content:center; align-items:center; }
        .modal { background:#fff; padding:30px; border-radius:18px; width:100%; max-width:500px; }
        label { display:block; margin-top:14px; }
        input, select { width:100%; padding:10px; margin-top:6px; }
        .estimate { margin-top:20px; background:#f4f8ff; padding:16px; border-radius:12px; }
      `}</style>
    </>
  );
}
