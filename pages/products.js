import Layout from "../components/Layout";
import FAQAccordion from "../components/FAQAccordion";

export default function Products() {
  return (
    <Layout>

      <section className="hero">
        <div className="container">
          <h1>Our Products</h1>
          <h2>Signage solutions designed for visibility & durability</h2>
        </div>
      </section>

      {/* Products section already exists here */}

      <section className="section">
        <div className="container">
          <h2>Product FAQs</h2>
          <FAQAccordion />
        </div>
      </section>

    </Layout>
  );
}
