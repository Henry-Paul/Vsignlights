import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact – V SIGN</title>
        <meta
          name="description"
          content="Contact V SIGN for premium signage solutions across Andhra Pradesh and Telangana."
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
          <h1>Get in touch</h1>
          <h2>
            Speak with our signage experts for clear guidance on products,
            pricing and execution.
          </h2>
          <h3>Serving Andhra Pradesh & Telangana</h3>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <div className="container contact-grid">

          <div>
            <h2>We’re here to help</h2>
            <p>
              Whether you’re planning new signage or upgrading existing branding,
              our team will guide you through materials, costs and timelines.
            </p>

            <ul className="info">
              <li><strong>Service area:</strong> AP & Telangana</li>
              <li><strong>Response time:</strong> Within 24 business hours</li>
              <li><strong>Business hours:</strong> Mon–Sat · 10AM–7PM</li>
            </ul>
          </div>

          <div className="form">
            <h3>Send us an enquiry</h3>

            <input placeholder="Your name" />
            <input placeholder="Email address" />
            <input placeholder="Phone number" />
            <textarea placeholder="Tell us about your signage requirement"></textarea>

            <button>Submit enquiry</button>
          </div>

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
        .contact-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
        .info {
          margin-top: 20px;
          color: #6b7280;
        }
        .form {
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 28px;
        }
        input, textarea {
          width: 100%;
          padding: 12px;
          margin-top: 12px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }
        textarea {
          min-height: 120px;
        }
        button {
          margin-top: 16px;
          padding: 14px;
          width: 100%;
          background: #0b5ed7;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
