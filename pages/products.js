import Layout from "../components/Layout";

const products = [
  { name: "LED Boards", img: "/led.jpg" },
  { name: "ACP Hoardings", img: "/acp.jpg" },
  { name: "3D Letters", img: "/3d.jpg" }
];

export default function Products() {
  return (
    <Layout>
      <h1>Our Products</h1>

      <div className="product-grid">
        {products.map(p => (
          <div key={p.name} className="card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <button>Calculate Budget</button>
          </div>
        ))}
      </div>
    </Layout>
  );
}
