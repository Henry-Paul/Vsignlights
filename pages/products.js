import Head from "next/head";

const PRODUCTS = [
  {
    name: "LED Shop Boards",
    price: "₹850 – ₹1,500 / sq ft",
    desc: "High-visibility illuminated signage for retail stores, clinics and showrooms."
  },
  {
    name: "ACP Hoardings",
    price: "₹1,200 – ₹2,500 / sq ft",
    desc: "Durable outdoor signage for buildings, highways and commercial spaces."
  },
  {
    name: "3D Letters",
    price: "₹1,500 – ₹4,000 / sq ft",
    desc: "Premium dimensional letters for brand-focused businesses."
  }
];

export default function Products() {
  return (
    <>
      <Head>
        <title>Products – V SIGN</title>
        <meta
          name="description"
          content="Explore premium signage products including LED boards, ACP hoardings and 3D letters with transparent pricing."
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
          <h1>Our signage products</h1>
          <h2>
            Professionally engineered signage solutions designed for visibility,
            durability and long-term brand impact.
          </h2>
          <h3>Transparent pricing · Expert installation · Trusted quality</h3>
        </div>
      </section>

      {/* PRODUCT LIST */}
      <section className="section">
        <div className="container grid">
          {PRODUCTS.map((p, i) => (
            <div key={i} className="card">
              <h3>{p.name}</h3>
              <p className="desc">{p.desc}</p>
              <p className="price">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .hero {
          background: #f4f8ff;
          padding: 80px 0;
        }
        h1 {
          font-size: 40px;
        }
        h2, h3 {
          color: #6b7280;
          margin-top: 12px;
        }
        .section {
          padding: 70px 0;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .card {
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 26px;
        }
        .price {
          margin-top: 14px;
          font-weight: 600;
          color: #0b5ed7;
        }
        .desc {
          color: #6b7280;
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}
