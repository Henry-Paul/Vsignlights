/* =========================
   GLOBAL UI CONTROLS
========================= */

/* Hamburger Menu */
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu) menu.classList.toggle("open");
}

/* =========================
   BUDGET PLANNER
========================= */

function openPlanner() {
  const planner = document.getElementById("planner");
  if (planner) planner.style.display = "flex";
}

function closePlanner() {
  const planner = document.getElementById("planner");
  if (planner) planner.style.display = "none";
}

function calc() {
  const w = document.getElementById("w")?.value;
  const h = document.getElementById("h")?.value;
  const result = document.getElementById("result");

  if (!w || !h || !result) return;

  const min = w * h * 850;
  const max = w * h * 1500;

  result.innerText = `₹${min.toLocaleString()} – ₹${max.toLocaleString()} approx`;
}

/* =========================
   TESTIMONIAL SLIDER
   (Only runs if slider exists)
========================= */

let slideIndex = 0;

function startSlider() {
  const slider = document.getElementById("slider");
  if (!slider) return;

  const slides = slider.children.length;
  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides;
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  }, 5000);
}

/* =========================
   PAGE LOAD INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {
  startSlider();
});
