/* =========================================================
   GLOBAL UI CONTROLS
   World-class, production-safe JavaScript
========================================================= */

/* -------------------------
   HAMBURGER MENU
-------------------------- */
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (!menu) return;
  menu.classList.toggle("open");
}

/* -------------------------
   BUDGET PLANNER MODAL
-------------------------- */
function openPlanner() {
  const planner = document.getElementById("planner");
  if (!planner) return;
  planner.style.display = "flex";
}

function closePlanner() {
  const planner = document.getElementById("planner");
  if (!planner) return;
  planner.style.display = "none";
}

/* Close planner on ESC (premium UX) */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closePlanner();
  }
});

/* -------------------------
   BUDGET CALCULATOR LOGIC
-------------------------- */
/*
  Real-world pricing logic:
  - User selects product
  - Enters width & height (ft)
  - Price calculated per sq ft
*/

function calc() {
  const width = parseFloat(document.getElementById("w")?.value);
  const height = parseFloat(document.getElementById("h")?.value);
  const product = document.getElementById("product")?.value;
  const result = document.getElementById("result");

  if (!width || !height || !product || !result) {
    return;
  }

  // Pricing per sq ft (industry-realistic)
  const PRICING = {
    led: [850, 1500],
    acp: [1200, 2500],
    "3d": [1500, 4000]
  };

  const area = width * height;
  const min = area * PRICING[product][0];
  const max = area * PRICING[product][1];

  result.innerHTML = `
    <div>
      <strong>Estimated Budget</strong><br>
      ₹${min.toLocaleString()} – ₹${max.toLocaleString()}
      <p style="margin-top:6px;font-size:14px;color:#6b7280">
        Approximate estimate. Final pricing after site inspection.
      </p>
    </div>
  `;
}

/* -------------------------
   TESTIMONIAL SLIDER
-------------------------- */
/*
  Automatically activates ONLY
  if testimonial slider exists.
*/

let slideIndex = 0;

function startSlider() {
  const slider = document.getElementById("slider");
  if (!slider) return;

  const slides = slider.children.length;
  if (slides <= 1) return;

  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides;
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  }, 5000);
}

/* -------------------------
   INIT ON PAGE LOAD
-------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  startSlider();
});
