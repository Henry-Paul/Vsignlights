import Head from "next/head";

const BLOGS = [
  {
    title: "How to choose the right signage for your business",
    desc: "A practical guide to selecting signage based on visibility, branding and budget.",
    tag: "SIGNAGE GUIDE"
  },
  {
    title: "Understanding signage pricing in India",
    desc: "Learn how signage costs are calculated and what factors affect the final price.",
    tag: "PRICING"
  },
  {
    title: "LED boards vs ACP hoardings: which is better?",
    desc: "A clear comparison to help you choose the right signage material.",
    tag: "COMPARISON"
  },
  {
    title: "Why 3D letters improve brand perception",
    desc: "How dimensional signage creates a premium brand presence.",
    tag: "BRANDING"
  }
];

export default function Blogs() {
  return (
    <>
      <Head>
        <title>Blogs – V SIGN</title>
        <meta
          name="description"
          content="Read expert blogs on signage planning, pricing, materials and branding insights by V SIGN."
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
          <h1>Blogs & insights</h1>
          <h2>
            Practical guidance on signage planning, pricing, materials
            and branding decisions.
          </h2>
          <h3>Written for business owners & decision-makers</h3>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="section">
        <div className="container grid">
          {BLOGS.map((b, i) => (
            <div key={i} className="card">
              <span className="tag">{b.tag}</span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
              <a className="read">Read article →</a>
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
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 28px;
        }
        .card {
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 28px;
        }
        .card h3 {
          margin-top: 10px;
        }
        .card p {
          margin-top: 10px;
          color: #6b7280;
        }
        .tag {
          font-size: 12px;
          font-weight: 600;
          color: #0b5ed7;
        }
        .read {
          display: inline-block;
          margin-top: 16px;
          font-weight: 600;
          color: #0b5ed7;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
