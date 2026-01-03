import Layout from "../components/Layout";

const products = [
  {
    name: "LED Boards",
    img: "/led.jpg",
    desc: "High visibility illuminated signage for retail and commercial use."
  },
  {
    name: "ACP Hoardings",
    img: "/acp.jpg",
    desc: "Durable outdoor signage for buildings and highways."
  },
  {
    name: "3D Letters",
    img: "/3d.jpg",
    desc: "Premium dimensional signage for brand identity."
  }
];

export default function Products() {
  return (
    <Layout>
      <section className="hero">
        <h1>Our Products</h1>
        <h2>Professionally engineered signage solutions</h2>
      </section>

      <section className="section product-grid">
        {products.map(p => (
          <div key={p.name} className="card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <button>Enquire Now</button>
            <button style={{ marginLeft: "10px" }}>Calculate</button>
          </div>
        ))}
      </section>
    </Layout>
  );
}
