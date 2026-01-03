import Layout from "../components/Layout";
import FAQAccordion from "../components/FAQAccordion";

export default function Home() {
  return (
    <Layout>

      <section className="hero">
        <h1>Premium Signage Solutions</h1>
        <h2>LED • ACP • 3D Letters</h2>
        <button>💰 Calculate Budget</button>
      </section>

      <section className="section">
        <h2>Our Products</h2>
        <div className="product-slider">
          {["LED Boards", "ACP Hoardings", "3D Letters"].map(p => (
            <div key={p} className="card">
              <img src="/placeholder.jpg" />
              <h3>{p}</h3>
              <p>High quality signage solution</p>
              <button>Calculate Estimate</button>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>FAQs</h2>
        <FAQAccordion />
      </section>

    </Layout>
  );
}
