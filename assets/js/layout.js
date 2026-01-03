document.addEventListener("DOMContentLoaded", () => {
  // HERO
  document.body.insertAdjacentHTML("afterbegin", `
    <header class="hero">
      <div class="hero-inner">
        <h1>V SIGN – Professional Signage Solutions</h1>
        <p>LED Boards · ACP Hoardings · 3D Letter Signage</p>
        <button class="primary-btn" onclick="openChatbot()">
          Get Instant Estimate
        </button>
      </div>
    </header>
  `);

  // FOOTER
  document.body.insertAdjacentHTML("beforeend", `
    <footer class="site-footer">
      <p>© ${new Date().getFullYear()} V SIGN  
      | Serving Andhra Pradesh & Telangana</p>
    </footer>
  `);
});
