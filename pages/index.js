import Layout from "../components/Layout";
import FAQAccordion from "../components/FAQAccordion";

export default function Home() {
  return (
    <Layout>

      <section className="hero">
        <div className="container">
          <h1>Premium Signage Solutions</h1>
          <h2>LED, ACP & 3D signage with transparent pricing</h2>
          <h3>Serving Andhra Pradesh & Telangana</h3>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <FAQAccordion />
        </div>
      </section>

    </Layout>
  );
}
