import { useState } from "react";
import Footer from "./Footer";
import BudgetPlanner from "./BudgetPlanner";
import FloatingActions from "./FloatingActions";

export default function Layout({ children }) {
  const [menu, setMenu] = useState(false);
  const [planner, setPlanner] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="nav">
          <strong>V SIGN</strong>

          <nav className={menu ? "open" : ""}>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/blogs">Blogs</a>
            <a href="/testimonials">Testimonials</a>
            <a href="/contact">Contact</a>
            <button className="plan-btn" onClick={() => setPlanner(true)}>
              Plan Budget
            </button>
          </nav>

          <div className="hamburger" onClick={() => setMenu(!menu)}>☰</div>
        </div>
      </header>

      <main>{children}</main>

      {/* BUDGET PLANNER */}
      {planner && (
        <div className="overlay" onClick={() => setPlanner(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <BudgetPlanner />
          </div>
        </div>
      )}

      <FloatingActions />
      <Footer />
    </>
  );
}
