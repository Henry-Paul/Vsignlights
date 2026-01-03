import { useState } from "react";
import BudgetPlanner from "./BudgetPlanner";
import FloatingActions from "./FloatingActions";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="nav">
          <strong>V SIGN</strong>

          <nav className={menuOpen ? "open" : ""}>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/blogs">Blogs</a>
            <a href="/testimonials">Testimonials</a>
            <a href="/contact">Contact</a>
            <button className="plan-btn" onClick={() => setPlannerOpen(true)}>
              Plan Budget
            </button>
          </nav>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>
      </header>

      {children}

      {/* GLOBAL BUDGET PLANNER */}
      {plannerOpen && (
        <div className="overlay" onClick={() => setPlannerOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <BudgetPlanner />
          </div>
        </div>
      )}

      <FloatingActions />
    </>
  );
}
