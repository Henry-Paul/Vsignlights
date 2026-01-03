import Head from "next/head";

const REVIEWS = [
  {
    stars: "★★★★★",
    text: "Excellent quality signage and professional execution. Highly recommended.",
    name: "Ravi Kumar",
    place: "Retail Store · Hyderabad"
  },
  {
    stars: "★★★★★",
    text: "Transparent pricing and timely delivery. Very smooth experience.",
    name: "Anita Sharma",
    place: "Clinic · Vijayawada"
  },
  {
    stars: "★★★★☆",
    text: "Good quality ACP hoardings with solid finishing.",
    name: "Mahesh Reddy",
    place: "Builder · Guntur"
  },
  {
    stars: "★★★★★",
    text: "3D letters gave our office a premium look. Professional team.",
    name: "Sneha Iyer",
    place: "Corporate Office · Vizag"
  }
];

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>Testimonials – V SIGN</title>
        <meta
          name="description"
          content="Read 4+ star customer testimonials for V SIGN premium signage solutions."
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
          <h1>Trusted by businesses</h1>
          <h2>
            Our clients trust V SIGN for quality, transparency
            and professional execution.
          </h2>
          <h3>Rated 4★ and above across customer feedback</h3>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="container grid">
          {REVIEWS.map((r, i) => (
            <div key={i} className="review">
              <div className="stars">{r.stars}</div>
              <p>{r.text}</p>
              <strong>{r.name}</strong>
              <span>{r.place}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="section light">
        <div className="container trust">
          <div><strong>4.6★</strong><span>Average rating</span></div>
          <div><strong>300+</strong><span>Projects delivered</span></div>
          <div><strong>AP & TS</strong><span>Service regions</span></div>
          <div><strong>100%</strong><span>Professional execution</span></div>
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
          gap: 28px;
        }
        .review {
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 26px;
          background: #fff;
        }
        .stars {
          color: #f4b400;
          font-size: 18px;
        }
        .review p {
          margin-top: 14px;
        }
        .review span {
          display: block;
          margin-top: 6px;
          color: #6b7280;
          font-size: 14px;
        }
        .light {
          background: #f4f8ff;
        }
        .trust {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 24px;
          text-align: center;
        }
        .trust strong {
          font-size: 22px;
        }
        .trust span {
          color: #6b7280;
          font-size: 14px;
        }
      `}</style>
    </>
  );
}
