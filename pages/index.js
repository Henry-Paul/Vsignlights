import Layout from "../components/Layout";
import FAQAccordion from "../components/FAQAccordion";

const faqs = [
  { q: "How much does signage cost?", a: "Cost depends on size, material and city." },
  { q: "Is installation included?", a: "Installation is available after site inspection." },
  { q: "Do you serve AP & Telangana?", a: "Yes, we serve both states." }
];

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <h1>Premium Signage Solutions</h1>
        <h2>LED, ACP & 3D Letters with transparent pricing</h2>
        <h3>Serving AP & Telangana</h3>
      </section>

      <section>
        <h2>FAQs</h2>
        <FAQAccordion faqs={faqs} />
      </section>
    </Layout>
  );
}
