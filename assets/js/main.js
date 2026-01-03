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

function startSlider(sliderId, direction = 1) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  const slides = slider.children.length;
  if (slides <= 1) return;

  let index = 0;
  let interval;

  const move = () => {
    index = (index + direction + slides) % slides;
    slider.style.transform = `translateX(-${index * 100}%)`;
  };

  const start = () => {
    interval = setInterval(move, 5000);
  };

  const stop = () => {
    clearInterval(interval);
  };

  // Desktop hover
  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);

  // Mobile touch
  slider.addEventListener("touchstart", stop);
  slider.addEventListener("touchend", start);

  start();
}

/* Init all sliders safely */
document.addEventListener("DOMContentLoaded", () => {
  startSlider("slider", 1);          // Testimonials → right
  startSlider("projectSlider", -1);  // Projects → left
  startSlider("productSlider", 1);   // Product strategy
});
/* -------------------------
   INIT ON PAGE LOAD
-------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  startSlider();
});
