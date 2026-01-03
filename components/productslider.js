export default function ProductSlider() {
  const products = [
    { name:"LED Shop Boards", price:"₹850 – ₹1,500 / sq ft" },
    { name:"ACP Hoardings", price:"₹1,200 – ₹2,500 / sq ft" },
    { name:"3D Letters", price:"₹1,500 – ₹4,000 / sq ft" }
  ];

  return (
    <div style={{ display:"flex", gap:"20px", overflowX:"auto", paddingBottom:"10px" }}>
      {products.map((p,i)=>(
        <div key={i} style={{
          minWidth:"280px",
          border:"1px solid #e5e7eb",
          borderRadius:"16px",
          padding:"24px"
        }}>
          <h3>{p.name}</h3>
          <p style={{ color:"var(--primary)", fontWeight:600 }}>{p.price}</p>
        </div>
      ))}
    </div>
  );
}
