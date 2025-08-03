// /js/main-noncritical.js

// === MOTION ONE — animations de sections ===
import { animate, inView } from "https://cdn.jsdelivr.net/npm/@motionone/dom/+esm";

// — Suite de la SECTION PROBLÈME (items 2-4 + note + cta)
[2, 3, 4].forEach((n, i) => {
  inView(`#probleme-item-${n}`, () => {
    animate(`#probleme-item-${n}`, { opacity: [0, 1], x: [-24, 0] }, { delay: 0.15 + i * 0.14, duration: 0.65, easing: "ease" });
  });
});
inView("#probleme-note", () => {
  animate("#probleme-note", { opacity: [0, 1], scale: [0.96, 1] }, { delay: 0.8, duration: 0.6, easing: "ease" });
});
inView("#probleme-cta", () => {
  animate("#probleme-cta", { opacity: [0, 1], scale: [0.97, 1] }, { delay: 1.05, duration: 0.55, easing: "ease" });
});

// — SECTION METHODE — titres, étapes, images, crédits, CTA
inView("#methode-title", () => {
  animate("#methode-title", { opacity: [0, 1], y: [-32, 0] }, { duration: 0.7, easing: "ease" });
});
[1, 2, 3, 4].forEach((n, i) => {
  inView(`#methode-step-${n}`, () => {
    animate(`#methode-step-${n}`, { opacity: [0, 1], x: [-28, 0] }, { delay: 0.12 + i * 0.14, duration: 0.66, easing: "ease" });
  });
});
inView("#methode-cta", () => {
  animate("#methode-cta", { opacity: [0, 1], scale: [0.96, 1] }, { delay: 0.75, duration: 0.56, easing: "ease" });
});
inView("#methode-img-col", () => {
  animate("#methode-img-col", { opacity: [0, 1], x: [32, 0] }, { delay: 0.22, duration: 0.88, easing: "ease" });
});
inView("#methode-credit", () => {
  animate("#methode-credit", { opacity: [0, 1], filter: ["blur(6px)", "blur(0px)"] }, { delay: 0.85, duration: 0.65, easing: "ease" });
});

// — SECTION SIMULATEUR — titres, accroches, formulaire

inView("#simulateur", () => {
    animate("#simulateur h2", { opacity: [0, 1], y: [24, 0] }, { duration: 0.7, delay: 0.35, easing: "ease" });
    const els = document.querySelectorAll("#simu-step-1 > div, #simu-step-1 > button, #simu-step-1 > .text-xs");
        els.forEach((el, i) => {
            animate(el, { opacity: [0, 1], y: [20, 0] }, {
            delay: 0.16 + i * 0.07,
            duration: 0.75,
            easing: "ease",
            complete: () => {
                // Met automatiquement le focus sur le 1er champ texte à la fin de la cascade
                if (i === 0) {
                el.querySelector("input")?.focus();
                }
            }
        });
    });
});

// — SECTION BENEFICES — titre + colonnes + cta
inView("#benefices-title", () => {
  animate("#benefices-title", { opacity: [0, 1], y: [-32, 0] }, { duration: 0.7, easing: "ease" });
});
[1, 2, 3].forEach((i) => {
  inView(`#benefices-col-${i}`, () => {
    animate(`#benefices-col-${i}`, { opacity: [0, 1], y: [32, 0] }, { delay: 0.15 + i * 0.17, duration: 0.7, easing: "ease" });
  });
});
inView("#benefices-cta", () => {
  animate("#benefices-cta", { opacity: [0, 1], scale: [0.96, 1] }, { delay: 0.72, duration: 0.52, easing: "ease" });
});

// — SECTION TEMOIGNAGES — titre, sous-titre, hero, etc
inView("#temoignages-title", () => {
  animate("#temoignages-title", { opacity: [0, 1], y: [-32, 0] }, { duration: 0.65, easing: "ease" });
});
inView("#temoignages-subtitle", () => {
  animate("#temoignages-subtitle", { opacity: [0, 1], y: [-18, 0] }, { delay: 0.10, duration: 0.52, easing: "ease" });
});
inView("#temoignage-hero", () => {
  animate("#temoignage-hero", { opacity: [0, 1], y: [24, 0] }, { delay: 0.23, duration: 0.66, easing: "ease" });
  animate("#temoignage-hero-title", { opacity: [0, 1], y: [-14, 0] }, { delay: 0.29, duration: 0.48, easing: "ease" });
  animate("#temoignage-hero-txt1", { opacity: [0, 1], x: [-18, 0] }, { delay: 0.36, duration: 0.46, easing: "ease" });
  animate("#temoignage-hero-txt2", { opacity: [0, 1], x: [-18, 0] }, { delay: 0.46, duration: 0.46, easing: "ease" });
  animate("#temoignage-hero-detail", { opacity: [0, 1], y: [14, 0] }, { delay: 0.54, duration: 0.38, easing: "ease" });
  animate("#temoignage-hero-client", { opacity: [0, 1], y: [16, 0] }, { delay: 0.62, duration: 0.36, easing: "ease" });
});
inView("#temoignage-hero-social", () => {
  animate("#temoignage-hero-social", { opacity: [0, 1], y: [18, 0] }, { delay: 0.80, duration: 0.44, easing: "ease" });
});
inView("#temoignage-2", () => {
  animate("#temoignage-2", { opacity: [0, 1], x: [32, 0] }, { delay: 0.38, duration: 0.54, easing: "ease" });
});
inView("#temoignage-3", () => {
  animate("#temoignage-3", { opacity: [0, 1], x: [32, 0] }, { delay: 0.52, duration: 0.54, easing: "ease" });
});

// — SECTION FAQ (question/réponse animées)
for (let i = 1; i <= 10; i++) {
  inView(`#faq-question-${i}`, () => {
    animate(`#faq-question-${i}`, { opacity: [0, 1], y: [28, 0] }, { delay: 0.05 + i * 0.07, duration: 0.48, easing: "ease" });
  });
}
// Animation ouverture FAQ (fonction globale)
window.faqAnimateOpen = function (n) {
  const el = document.getElementById(`faq-reponse-${n}`);
  if (el) {
    animate(el, { opacity: [0, 1], scaleY: [0.97, 1] }, { duration: 0.33, easing: "ease" });
  }
};

// — SECTION AUTOMATISATION (tabs & cards)
const tabs = document.querySelectorAll('#automation-tabs .tab-btn');
const cardsContainer = document.getElementById('automation-cards');
const allCards = Array.from(cardsContainer.querySelectorAll('.automation-card'));
let currentCategory = "admin";
let animating = false;
allCards.forEach(card => card.classList.add('hidden'));

// Onglet actif
function activateTab(tab) {
  tabs.forEach(btn => {
    btn.classList.remove('bg-[#7ea1c4]', 'text-[#25353f]', 'ring', 'ring-[#7ea1c4]');
    btn.classList.add('bg-[#25353f]', 'text-[#f5f1e6]');
  });
  tab.classList.add('bg-[#7ea1c4]', 'text-[#25353f]', 'ring', 'ring-[#7ea1c4]');
  tab.blur();
}
// Apparition cascade premium
function showCards(category) {
  const visibles = allCards.filter(c => c.getAttribute('data-category') === category);
  visibles.forEach((card, i) => {
    card.classList.remove('hidden');
    card.style.opacity = 0;
    card.style.transform = 'translateY(-28px)';
    animate(card, { opacity: [0, 1], y: [-28, 0] }, {
      delay: i * 0.14,
      duration: 0.60,
      easing: 'ease'
    }).finished.then(() => {
      card.style.opacity = "";
      card.style.transform = "";
    });
  });
}
// Disparition fluide des anciennes cartes (slide bas)
function hideCards(category, cb) {
  const visibles = allCards.filter(c => c.getAttribute('data-category') === category && !c.classList.contains('hidden'));
  let done = 0;
  if (!visibles.length) return cb();
  visibles.forEach((card, i) => {
    animate(card, { opacity: [1, 0], y: [0, 38] }, {
      delay: i * 0.09,
      duration: 0.34,
      easing: 'ease'
    }).finished.then(() => {
      card.classList.add('hidden');
      card.style.opacity = "";
      card.style.transform = "";
      done++;
      if (done === visibles.length && cb) cb();
    });
  });
}
// Switch catégorie
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const category = tab.getAttribute('data-category');
    if (category === currentCategory || animating) return;
    animating = true;
    activateTab(tab);
    hideCards(currentCategory, () => {
      currentCategory = category;
      showCards(category);
      setTimeout(() => { animating = false; }, 420);
    });
  });
});
// Apparition initiale premium à la scroll
let loaded = false;
inView("#taches-automatisables", () => {
  if (loaded) return;
  loaded = true;
  animate("#taches-automatisables h2", { opacity: [0, 1], y: [-32, 0] }, { duration: 0.7, easing: "ease" });
  tabs.forEach((tab, i) => {
    tab.style.opacity = 0;
    tab.style.transform = 'translateX(-20px)';
    animate(tab, { opacity: [0, 1], x: [-20, 0] }, { delay: 0.28 + i * 0.10, duration: 0.38, easing: "ease" }).finished.then(() => {
      tab.style.opacity = "";
      tab.style.transform = "";
    });
  });
  setTimeout(() => {
    activateTab(tabs[0]);
    currentCategory = tabs[0].getAttribute('data-category');
    showCards(currentCategory);
  }, 480);
}, { margin: "-12% 0px" });
// Hover effet premium — exclusif, smooth, pas de clignotement
let lastHovered = null;
cardsContainer.addEventListener("mouseover", e => {
  const hovered = e.target.closest(".automation-card");
  if (!hovered || hovered.classList.contains("hidden")) return;
  if (hovered === lastHovered) return;
  lastHovered = hovered;
  allCards.forEach(card => {
    if (card !== hovered && !card.classList.contains("hidden")) {
      card.style.transition = 'opacity 0.19s cubic-bezier(.5,.2,.2,1)';
      card.style.opacity = 0.47;
    }
  });
});
cardsContainer.addEventListener("mouseout", e => {
  if (!lastHovered) return;
  allCards.forEach(card => {
    card.style.transition = 'opacity 0.19s cubic-bezier(.5,.2,.2,1)';
    card.style.opacity = 1;
  });
  lastHovered = null;
});

// — SECTION CTA FINAL
inView("#cta", () => {
  animate("#cta-surtitre", { opacity: [0, 1], y: [-16, 0] }, { duration: 0.32, easing: "ease" });
  animate("#cta-badge", { opacity: [0, 1], scale: [0.90, 1] }, { delay: 0.09, duration: 0.32, easing: "ease" });
  animate("#cta-title", { opacity: [0, 1], y: [-26, 0] }, { delay: 0.18, duration: 0.44, easing: "ease" });
  animate("#cta-bullets", { opacity: [0, 1], y: [-18, 0] }, { delay: 0.34, duration: 0.34, easing: "ease" });
  animate("#cta-social", { opacity: [0, 1], x: [-28, 0] }, { delay: 0.46, duration: 0.38, easing: "ease" });
  animate("#cta-microcopy", { opacity: [0, 1], y: [12, 0] }, { delay: 0.58, duration: 0.34, easing: "ease" });
  animate("#cta-urgency", { opacity: [0, 1], scale: [0.97, 1] }, { delay: 0.70, duration: 0.27, easing: "ease" });
  animate("#cta-btn", { opacity: [0, 1], scale: [0.96, 1] }, { delay: 0.82, duration: 0.33, easing: "ease" });
  animate("#cta-note", { opacity: [0, 1], y: [10, 0] }, { delay: 0.93, duration: 0.24, easing: "ease" });
}, { margin: "-10% 0px" });


// === SIMULATEUR (formulaire + modal) ===
document.getElementById('gain-simulator').addEventListener('submit', function (e) {
  e.preventDefault();
  return false;
});
document.addEventListener("DOMContentLoaded", function () {
  // Champs du simulateur
  const step1 = document.getElementById("simu-step-1");
  const successMsg = document.getElementById("simu-success");
  const errorMsg = document.getElementById("simu-error");

  // Modal éléments
  const modalBg = document.getElementById("simu-modal-bg");
  const modal = document.getElementById("simu-modal");
  const modalClose = document.getElementById("simu-modal-close");
  const modalPrenom = document.getElementById("input-modal-prenom");
  const modalCompany = document.getElementById("input-modal-company");
  const modalEmail = document.getElementById("input-modal-email");
  const modalFake = document.getElementById("input-modal-fake");
  const modalBtn = document.getElementById("simu-modal-submit");
  const modalError = document.getElementById("simu-modal-error");
  const modalLoading = document.getElementById("simu-modal-loading");

  let simulation = {};

  document.getElementById("simu-estimate-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const tache = document.getElementById("input-tache").value.trim();
    const heures = parseFloat(document.getElementById("input-heures").value.replace(',', '.')) || 0;
    const taux = parseFloat(document.getElementById("input-taux").value.replace(',', '.')) || 19.9;
    if (!tache || heures < 0.1 || taux < 1) {
      alert("Merci de renseigner une tâche, le temps hebdo, et un taux horaire valide.");
      return;
    }
    simulation = { tache, heures, taux };
    modalBg.classList.remove("hidden");
    setTimeout(() => modalBg.classList.add("active"), 10);
    document.body.classList.add("modal-open");
    modalError.classList.add("hidden");
    modalLoading.classList.add("hidden");
    modalPrenom.value = "";
    modalCompany.value = "";
    modalEmail.value = "";
    modalPrenom.focus();
  });

  modalClose.addEventListener("click", closeModal);
  modalBg.addEventListener("click", function (e) { if (e.target === modalBg) closeModal(); });
  function closeModal() {
    modalBg.classList.remove("active");
    setTimeout(() => modalBg.classList.add("hidden"), 330);
    document.body.classList.remove("modal-open");
  }

  modalBtn.addEventListener("click", async function (e) {
    e.preventDefault();
    const prenom = modalPrenom.value.trim();
    const company = modalCompany.value.trim();
    const email = modalEmail.value.trim();
    if (modalFake.value) return; // honeypot anti-spam
    if (!prenom || !email || !/^[\w\.\-]+@[\w\-]+\.[a-z]{2,}$/i.test(email)) {
      modalError.textContent = "Merci de renseigner un prénom et un email valide.";
      modalError.classList.remove("hidden");
      return;
    }
    modalError.classList.add("hidden");
    modalLoading.classList.remove("hidden");
    modalBtn.disabled = true;

    simulation.prenom = prenom;
    simulation.company = company || "";
    simulation.email = email;
    simulation.euros = simulation.heures * simulation.taux;
    simulation.hoursMonth = simulation.heures * 4.33;
    simulation.eurosMonth = simulation.euros * 4.33;
    simulation.hoursYear = simulation.heures * 52;
    simulation.eurosYear = simulation.euros * 52;
    simulation.heuresHidden = +(simulation.heures * 1.375).toFixed(1);
    simulation.eurosHidden = +(simulation.euros * 1.375).toFixed(0);
    simulation.hoursMonthHidden = +(simulation.hoursMonth * 1.375).toFixed(1);
    simulation.eurosMonthHidden = +(simulation.eurosMonth * 1.375).toFixed(0);
    simulation.hoursYearHidden = +(simulation.hoursYear * 1.375).toFixed(1);
    simulation.eurosYearHidden = +(simulation.eurosYear * 1.375).toFixed(0);
    simulation.userAgent = navigator.userAgent;
    simulation.pageSource = window.location.href;
    simulation.type = "simulation-automation";

    try {
      const webhookUrl = "https://n8n.chezparallax.fr/webhook/36d699a4-0064-49f5-8cb8-bbb630fd60cd";
      const resp = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(simulation),
      });
      if (resp.ok) {
        closeModal();
        step1.classList.add("hidden");
        successMsg.classList.remove("hidden");
        successMsg.classList.remove("animate-fadeIn");
        successMsg.offsetWidth;
        successMsg.classList.add("animate-fadeIn");
        errorMsg.classList.add("hidden");
      } else {
        modalLoading.classList.add("hidden");
        modalError.textContent = "Erreur de connexion, merci de réessayer.";
        modalError.classList.remove("hidden");
        modalError.classList.remove("animate-fadeIn");
        modalError.offsetWidth;
        modalError.classList.add("animate-fadeIn");
      }
    } catch (err) {
      modalLoading.classList.add("hidden");
      modalError.textContent = "Erreur de connexion, merci de réessayer.";
      modalError.classList.remove("hidden");
    }
    modalBtn.disabled = false;
  });
});

// === CHARGEMENT DU WIDGET CAL.COM (popup) ===
(function (C, A, L) {
  let p = function (a, ar) { a.q.push(ar); };
  let d = C.document;
  C.Cal = C.Cal || function () {
    let cal = C.Cal; let ar = arguments;
    if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
    if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; }
    p(cal, ar);
  };
})(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "appel-decouverte-octomate", { origin: "https://cal.com" });
Cal.ns["appel-decouverte-octomate"]("ui", {
  "cssVarsPerTheme": {
    "light": { "cal-brand": "#25353F" },
    "dark": { "cal-brand": "#F5F1E6" }
  },
  "hideEventTypeDetails": false,
  "layout": "month_view"
});

// — Fix icons lucide après changements dynamiques
if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();