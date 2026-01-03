export default function TestimonialSlider() {
  const reviews = [
    "★★★★★ Excellent quality and professional execution.",
    "★★★★★ Transparent pricing and timely delivery.",
    "★★★★☆ Very good signage and finishing."
  ];

  return (
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"20px" }}>
      {reviews.map((r,i)=>(
        <div key={i} style={{ background:"var(--light)", padding:"22px", borderRadius:"14px" }}>
          {r}
        </div>
      ))}
    </div>
  );
}
