import Head from "next/head";

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ – V SIGN</title>
        <meta
          name="description"
          content="Frequently asked questions about signage pricing, installation, materials and services offered by V SIGN."
        />
      </Head>

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

      <section className="hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <h2>Clear answers to help you plan your signage confidently</h2>
          <h3>Pricing · Materials · Installation · Service</h3>
        </div>
      </section>

      <section className="section">
        <div className="container faq">
          <h3>How is signage pricing calculated?</h3>
          <p>Pricing is based on size (sq ft), material type, lighting, city and installation complexity.</p>

          <h3>Are prices shown final?</h3>
          <p>No. Prices are approximate ranges to help you plan budgets. Final pricing is confirmed after site inspection.</p>

          <h3>Do you provide installation?</h3>
          <p>Yes. We provide end-to-end fabrication and professional installation.</p>

          <h3>Which locations do you serve?</h3>
          <p>We serve Andhra Pradesh and Telangana.</p>

          <h3>Do you offer maintenance?</h3>
          <p>Yes. Maintenance support is available depending on product type.</p>
        </div>
      </section>

      <style jsx>{`
        .hero { background:#f4f8ff; padding:80px 0; }
        h1 { font-size:40px; }
        h2,h3 { color:#6b7280; margin-top:12px; }
        .section { padding:70px 0; }
        .faq h3 { margin-top:30px; }
        .faq p { color:#6b7280; margin-top:8px; }
      `}</style>
    </>
  );
}
