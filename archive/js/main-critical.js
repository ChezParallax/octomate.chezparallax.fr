// === main-critical.js ===
// Charge header/footer dynamiques
document.addEventListener("DOMContentLoaded", function () {
  fetch("/parts/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
      if (window.lucide) lucide.createIcons();
    });
  fetch("/parts/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
      if (window.lucide) lucide.createIcons();
    });
});

// Initialisation Lucide icons au tout début pour éviter flash d’icônes
if (window.lucide) lucide.createIcons();

// === HERO + HEADER Animations ===
import { animate, inView } from "https://cdn.jsdelivr.net/npm/@motionone/dom/+esm";

// Animation cascade hero uniquement
inView("#hero-lead", () => {
  animate("#hero-lead", { opacity: [0, 1], y: [-30, 0] }, { duration: 0.7, easing: "ease" });
});
inView("#hero-title", () => {
  animate("#hero-title", { opacity: [0, 1], y: [-30, 0] }, { delay: 0.10, duration: 0.7, easing: "ease" });
});
inView("#hero-desc", () => {
  animate("#hero-desc", { opacity: [0, 1], y: [-20, 0] }, { delay: 0.20, duration: 0.7, easing: "ease" });
});
inView("#hero-cta", () => {
  animate("#hero-cta", { opacity: [0, 1], scale: [0.97, 1] }, { delay: 0.33, duration: 0.6, easing: "ease" });
});

// Social proof block + avatars
inView("#hero-social-proof", () => {
  animate("#hero-social-proof", { opacity: [0, 1], y: [30, 0] }, { delay: 0.40, duration: 0.6, easing: "ease" });
  [1, 2, 3, 4, 5, 6].forEach((n, i) => {
    animate(`#hero-avatar-${n}`, { opacity: [0, 1], x: [-10, 0] }, { delay: 0.54 + i * 0.10, duration: 0.45, easing: "ease" });
  });
});
inView("#hero-img-col", () => {
  animate("#hero-img-col", { opacity: [0, 1], x: [30, 0] }, { delay: 0.2, duration: 0.8, easing: "ease" });
});

// PREMIER BLOC DE “PROBLEME” (titre, item 1)
inView("#probleme-title", () => {
  animate("#probleme-title", { opacity: [0, 1], y: [-32, 0] }, { duration: 0.7, easing: "ease" });
});
inView("#probleme-item-1", () => {
  animate("#probleme-item-1", { opacity: [0, 1], x: [-24, 0] }, { delay: 0.15, duration: 0.65, easing: "ease" });
});