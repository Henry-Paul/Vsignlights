import { useState } from "react";
import BudgetModal from "../components/BudgetModal";
import BudgetPlanner from "../components/BudgetPlanner";
import Header from "../components/Header";
import ProductSlider from "../components/ProductSlider";
import TestimonialSlider from "../components/TestimonialSlider";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="section" style={{ background:"linear-gradient(180deg,#F4F8FF,#fff)" }}>
        <div className="container">
          <h1>Premium signage solutions for modern businesses</h1>
          <h2 style={{ color:"var(--muted)" }}>
            LED boards, ACP hoardings & 3D letters with transparent pricing
          </h2>
          <h3 style={{ color:"var(--muted)", marginTop:"20px" }}>
            Serving Andhra Pradesh & Telangana
          </h3>

          <a className="btn-primary" style={{ marginTop:"30px" }}>
            Plan Your Budget
          </a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container">
          <h2>Our Products</h2>
          <ProductSlider />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background:"var(--light)" }}>
        <div className="container">
          <h2>Trusted by Businesses</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <FAQSection />
        </div>
      </section>
    </>
  );
}
