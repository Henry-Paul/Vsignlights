import Head from "next/head";

export default function BlogDetail() {
  return (
    <>
      <Head>
        <title>Signage Pricing Guide – V SIGN</title>
        <meta
          name="description"
          content="Detailed guide on signage pricing, materials and budgeting by V SIGN."
        />
      </Head>

      <header className="header">
        <div className="container nav">
          <strong>V SIGN</strong>
          <nav>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/blogs">Blogs</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Understanding signage pricing in India</h1>
          <h2>A practical guide for business owners and decision-makers</h2>
          <h3>Updated for real-world costs</h3>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p>
            Signage pricing is not fixed. It depends on multiple factors such as
            size, material, lighting, installation complexity and city-based costs.
          </p>

          <p>
            LED signage generally costs more due to lighting components,
            while ACP hoardings focus on panel strength and durability.
          </p>

          <p>
            Always treat online prices as approximate. Final pricing is confirmed
            after site inspection and design approval.
          </p>

          <a href="/products" className="btn">View Products</a>
        </div>
      </section>

      <style jsx>{`
        .hero { background:#f4f8ff; padding:80px 0; }
        h1 { font-size:40px; }
        h2,h3 { color:#6b7280; margin-top:12px; }
        .section { padding:70px 0; }
        p { color:#6b7280; margin-top:16px; line-height:1.7; }
        .btn {
          display:inline-block;
          margin-top:30px;
          background:#0b5ed7;
          color:#fff;
          padding:14px 26px;
          border-radius:10px;
        }
      `}</style>
    </>
  );
}
