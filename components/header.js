import Link from "next/link";

export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid #e5e7eb" }}>
      <div className="container" style={{ display:"flex", justifyContent:"space-between", padding:"18px 0" }}>
        <strong>V SIGN</strong>
        <nav style={{ display:"flex", gap:"20px", color:"var(--muted)" }}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
