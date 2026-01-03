import Layout from "../components/Layout";
import FAQAccordion from "../components/FAQAccordion";

export default function Products() {
  return (
    <Layout>

      <section className="section product-grid">
        {["LED Boards", "ACP Hoardings", "3D Letters"].map(p => (
          <div key={p} className="card">
            <img src="/placeholder.jpg" />
            <h3>{p}</h3>
            <p>Premium signage solution</p>
            <button>Enquire Now</button>
            <button>Calculate</button>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Product FAQs</h2>
        <FAQAccordion />
      </section>

    </Layout>
  );
}
