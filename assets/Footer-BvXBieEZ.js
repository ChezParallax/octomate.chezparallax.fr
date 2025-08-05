import { b as createAstro, c as createComponent, a as renderTemplate, d as renderSlot, f as renderHead, e as addAttribute, r as renderComponent, m as maybeRenderHead } from './astro/server-BOzJTL68.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                        */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://octomate.chezparallax.fr");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "OctoMate - Automatisation sur mesure pour PME",
    description = "D\xE9couvrez en 3 minutes combien vous pourriez \xE9conomiser en automatisant jusqu\u2019\xE0 85\u202F% de vos t\xE2ches r\xE9p\xE9titives et chronophages."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="fr" class="scroll-smooth" data-astro-cid-sckkx6r4> <head><!-- Essential Meta --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><!-- Primary Meta Tags --><title>', '</title><meta name="title"', '><meta name="description"', '><meta name="keywords" content="automatisation, PME, n8n, IA, processus, \xE9conomies, temps, productivit\xE9, france, moselle, octomate"><meta name="author" content="Parallax - Thibaud Beckrich"><meta name="robots" content="index, follow"><meta name="generator"', '><link rel="canonical" href="https://octomate.chezparallax.fr"><!-- Favicon & Icons --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url" content="https://octomate.chezparallax.fr"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image" content="https://octomate.chezparallax.fr/og-image.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:locale" content="fr_FR"><meta property="og:site_name" content="OctoMate"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url" content="https://octomate.chezparallax.fr"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image" content="https://octomate.chezparallax.fr/og-image.png"><!-- DNS Prefetch pour APIs critiques --><link rel="dns-prefetch" href="//n8n.chezparallax.fr"><!-- Preload polices critiques pour performance --><link rel="preload" href="/fonts/nunito/nunito-400.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/montserrat/montserrat-700.woff2" as="font" type="font/woff2" crossorigin><!-- Preload hero pattern critique --><link rel="preload" href="/pattern_hero.svg" as="image"><!-- Polices auto-h\xE9berg\xE9es import\xE9es via index.astro --><!-- Critical CSS --><!-- Polices auto-h\xE9berg\xE9es et styles import\xE9s via index.astro --><!-- Script de preload intelligent --><script src="/preload.js" defer><\/script><!-- Script de s\xE9curit\xE9 anti-skeleton bloquant --><!-- Structured Data - FAQ --><script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "FAQPage",\n      "mainEntity": [\n        {\n          "@type": "Question",\n          "name": "Est-ce que \xE7a marche avec nos outils actuels ?",\n          "acceptedAnswer": {\n            "@type": "Answer",\n            "text": "Absolument. Nous travaillons en priorit\xE9 avec vos outils existants (CRM, emailing, analytics, etc.). Pas besoin de tout changer : on connecte intelligemment ce que vous avez d\xE9j\xE0."\n          }\n        },\n        {\n          "@type": "Question", \n          "name": "Combien de temps faut-il vraiment pour mettre en place une automatisation ?",\n          "acceptedAnswer": {\n            "@type": "Answer",\n            "text": "Une V1 fonctionnelle est d\xE9ploy\xE9e sous 7 jours apr\xE8s validation du plan. Selon la complexit\xE9, un projet prend en moyenne entre 1 semaine et 1 mois."\n          }\n        },\n        {\n          "@type": "Question",\n          "name": "Est-ce vraiment adapt\xE9 aux entreprises comme la n\xF4tre ?",\n          "acceptedAnswer": {\n            "@type": "Answer", \n            "text": "Oui. Nous accompagnons les PME de 5 \xE0 50 employ\xE9s en croissance, qui veulent lib\xE9rer du temps et des moyens pour continuer \xE0 grandir sans complexit\xE9."\n          }\n        }\n      ]\n    }\n    <\/script><!-- Structured Data - Organization --><script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "Organization",\n      "name": "Parallax",\n      "alternateName": "OctoMate",\n      "url": "https://octomate.chezparallax.fr",\n      "logo": "https://octomate.chezparallax.fr/icon_octomate.svg",\n      "contactPoint": {\n        "@type": "ContactPoint",\n        "telephone": "+33(0)6 88 66 31 65",\n        "contactType": "\xC9quipe Parallax",\n        "availableLanguage": "French"\n      },\n      "founder": {\n        "@type": "Person",\n        "name": "Thibaud Beckrich"\n      },\n      "address": {\n        "@type": "PostalAddress",\n        "streetAddress": "3 place de la Gare",\n        "addressLocality": "Sarreguemines",\n        "addressRegion": "Grand Est",\n        "addressCountry": "FR"\n      },\n      "sameAs": [\n        "https://www.linkedin.com/in/thibaud-beckrich/"\n      ]\n    }\n    <\/script><!-- Tracking & Analytics --><!-- TODO: Ajouter Google Analytics si n\xE9cessaire --><script defer src="https://cloud.umami.is/script.js" data-website-id="3e434e93-cd43-468f-b306-0b2c748d69a6"><\/script><!-- Performance optimized --><!-- Core Web Vitals can be tracked via Google Analytics or other tools -->', '</head> <body class="bg-dark-blue text-beige font-nunito antialiased" data-astro-cid-sckkx6r4> ', " </body></html>"])), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "E:/PARALLAX/OCTOMATE/CODE/codex_parallax/src/layouts/Layout.astro", void 0);

const NAV_LINKS = Object.freeze([
  { href: "#calculateur", label: "🧮 Calculateur" },
  { href: "#methode", label: "⚙️ Notre méthode" },
  { href: "#case-studies", label: "💼 Études de cas" },
  { href: "#testimonials", label: "⭐ Témoignages" },
  { href: "#faq", label: "❓ FAQ" }
]);
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-dark-blue/90 backdrop-blur-xl shadow-2xl border-beige/20" : "bg-dark-blue/95 backdrop-blur-sm border-beige/10"} border-b`,
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("nav", { className: "flex items-center justify-between py-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "/#", className: "flex items-center gap-3 hover:scale-105 transition-transform duration-200", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-copper via-light-blue to-copper rounded-lg flex items-center justify-center shadow-lg p-1", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/icon_octomate.svg",
                alt: "OctoMate Icon",
                className: "w-full h-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col leading-none", children: [
              /* @__PURE__ */ jsx("div", { className: "font-bold text-lg md:text-xl text-beige tracking-tight whitespace-nowrap", style: { fontFamily: "Poppins, sans-serif" }, children: "octomate" }),
              /* @__PURE__ */ jsxs("div", { className: "text-[10px] md:text-xs text-beige/70 tracking-tight whitespace-nowrap", style: { fontFamily: "Poppins, sans-serif" }, children: [
                /* @__PURE__ */ jsx("span", { className: "mr-1", children: "un service" }),
                /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-beige", children: "P" }),
                  /* @__PURE__ */ jsx("span", { className: "text-light-blue", children: "AR" }),
                  /* @__PURE__ */ jsx("span", { className: "text-beige", children: "AL" }),
                  /* @__PURE__ */ jsx("span", { className: "text-copper", children: "LA" }),
                  /* @__PURE__ */ jsx("span", { className: "text-beige", children: "X" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-8", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsxs(
            "a",
            {
              href: link.href,
              className: "text-beige/80 hover:text-copper transition-all duration-200 font-medium relative group",
              children: [
                link.label,
                /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-copper transition-all duration-200 group-hover:w-full" })
              ]
            },
            link.href
          )) }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#calculateur",
              className: "hidden sm:inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-copper to-copper/80 text-dark-blue font-bold rounded-xl hover:from-copper/90 hover:to-copper/70 shadow-lg hover:shadow-xl relative overflow-hidden group header-cta transition-all duration-300 ease-out hover:scale-[1.02]",
              style: { willChange: "transform, box-shadow" },
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" }),
                /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "animate-pulse", children: "📊" }),
                  /* @__PURE__ */ jsx("span", { children: "Estimer mes économies (3 min)" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "md:hidden text-beige p-2 hover:bg-beige/10 rounded-lg transition-colors",
              onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
              "aria-label": "Toggle mobile menu",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: `w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`,
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: isMobileMenuOpen ? /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) : /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16M4 18h16" })
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
            children: /* @__PURE__ */ jsxs("div", { className: "py-4 space-y-3 border-t border-beige/10", children: [
              NAV_LINKS.map((link, index) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: link.href,
                  className: "block py-3 px-4 text-beige/80 hover:text-copper hover:bg-copper/10 transition-all duration-200 rounded-lg transform hover:translate-x-2",
                  onClick: handleLinkClick,
                  style: { animationDelay: `${index * 0.1}s` },
                  children: link.label
                },
                link.href
              )),
              /* @__PURE__ */ jsx("div", { className: "pt-4 pb-4 px-2", children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "#calculateur",
                  className: "block w-full text-center px-4 py-3 bg-gradient-to-r from-copper to-copper/80 text-dark-blue font-bold rounded-xl hover:from-copper/90 hover:to-copper/70 transition-all duration-300 ease-out hover:scale-105 shadow-lg relative overflow-hidden group text-sm",
                  onClick: handleLinkClick,
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" }),
                    /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center justify-center gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "animate-pulse", children: "💰" }),
                      /* @__PURE__ */ jsx("span", { children: "Découvrir mes économies" })
                    ] })
                  ]
                }
              ) })
            ] })
          }
        )
      ] })
    }
  );
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Navigation", Navigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/PARALLAX/OCTOMATE/CODE/codex_parallax/src/components/react/Navigation.jsx", "client:component-export": "default" })}`;
}, "E:/PARALLAX/OCTOMATE/CODE/codex_parallax/src/components/sections/Header.astro", void 0);

const $$Astro = createAstro("https://octomate.chezparallax.fr");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "E:/PARALLAX/OCTOMATE/CODE/codex_parallax/src/components/ui/Container.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Footer -->${maybeRenderHead()}<footer class="bg-dark-blue/95 border-t border-beige/10 py-12"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="flex flex-col items-center">  <a href="/#" class="flex items-center gap-4 mb-8 hover:scale-105 transition-transform duration-200"> <div class="w-12 h-12 bg-gradient-to-br from-copper via-light-blue to-copper rounded-xl flex items-center justify-center shadow-lg p-1.5"> <img src="/icon_octomate.svg" alt="OctoMate Icon" class="w-full h-full object-contain"> </div> <div class="flex flex-col leading-none"> <div class="font-bold text-2xl text-beige tracking-tight" style="font-family: 'Poppins', sans-serif;">
octomate
</div> <div class="text-sm text-beige/70" style="font-family: 'Poppins', sans-serif;"> <span class="mr-1">un service</span><span class="font-semibold"><span class="text-beige">P</span><span class="text-light-blue">AR</span><span class="text-beige">AL</span><span class="text-copper">LA</span><span class="text-beige">X</span></span> </div> </div> </a>  <div class="flex items-center justify-center mb-6"> <div class="h-px bg-gradient-to-r from-transparent via-beige/20 to-transparent w-32"></div> </div> <div class="flex justify-center gap-6 text-sm text-beige/60"> <a href="mailto:thibaud@chezparallax.fr" class="hover:text-copper transition-colors duration-200">
Contact
</a> <a href="https://www.linkedin.com/in/thibaud-beckrich/" class="hover:text-copper transition-colors duration-200" target="_blank">
LinkedIn
</a> <a href="/mentions-legales" class="hover:text-copper transition-colors duration-200">
Mentions légales
</a> </div> <p class="text-xs text-beige/40 mt-6">
© 2025 Parallax. Automatisation sur mesure pour PME.
</p> </div> ` })} </footer>`;
}, "E:/PARALLAX/OCTOMATE/CODE/codex_parallax/src/components/sections/Footer.astro", void 0);

export { $$Layout as $, $$Header as a, $$Container as b, $$Footer as c };
