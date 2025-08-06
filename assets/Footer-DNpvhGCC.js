import { b as createAstro, c as createComponent, a as renderTemplate, d as renderSlot, f as renderHead, e as addAttribute, r as renderComponent, m as maybeRenderHead } from './astro/server-BOzJTL68.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                        */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect, useCallback } from 'react';

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

/**
 * 📊 OctoMate Analytics Manager
 * Gestion centralisée et protégée des événements Umami
 * Anti-multi-déclenchement, session tracking, performance monitoring
 * Compatible SSR Astro
 */

class AnalyticsManager {
  constructor() {
    // Vérification environnement navigateur
    if (typeof window === 'undefined') {
      this.isServer = true;
      return;
    }
    
    this.isServer = false;
    this.sessionId = this.generateSessionId();
    this.eventLocks = new Map();
    this.sessionData = {
      startTime: Date.now(),
      userAgent: window.navigator.userAgent,
      viewport: { 
        width: window.innerWidth, 
        height: window.innerHeight 
      },
      referrer: typeof document !== 'undefined' ? document.referrer : '',
      device: window.innerWidth < 768 ? 'mobile' : 'desktop'
    };
    
    // Debounce delays par type d'événement (en ms)
    this.DELAYS = {
      carousel_interacted: 1000,    // 1s pour Embla (critical)
      quiz_question_answered: 500,  // 0.5s pour navigation quiz
      modal_opened: 300,            // 0.3s pour modals
      cta_clicked: 200,             // 0.2s pour boutons
      scroll_milestone: 2000,       // 2s pour scroll
      faq_expanded: 800,            // 0.8s pour FAQ
      header_nav_clicked: 300,      // 0.3s pour navigation
      default: 500
    };
    
    // État de session pour prévenir les doublons
    this.sessionState = {
      pageLoaded: false,
      quizStarted: false,
      quizCompleted: false,
      leadCaptured: false,
      scrollMilestones: new Set(),
      faqsOpened: new Set(),
      carouselDebugCompleted: new Set() // Pour workaround Embla
    };
    
    // Flag pour le mode développement
    this.isDev = typeof process !== 'undefined' && process.env?.NODE_ENV === 'development';
    
    this.init();
  }
  
  generateSessionId() {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  
  init() {
    // Skip initialization on server
    if (this.isServer) return;
    
    // Track page load automatiquement
    this.trackPageLoaded();
    
    // Global error handling
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (e) => {
        this.errorOccurred('javascript', e.message || 'Unknown error', 'global');
      });
      
      // Unhandled promise rejections
      window.addEventListener('unhandledrejection', (e) => {
        this.errorOccurred('promise', e.reason?.message || 'Promise rejection', 'global');
      });
    }
  }
  
  /**
   * 🛡️ Core tracking method with debouncing
   */
  track(eventName, properties = {}) {
    // Skip tracking on server
    if (this.isServer || typeof window === 'undefined') {
      return false;
    }
    
    if (!window.umami) {
      if (this.isDev) {
        console.warn('📊 Umami not loaded, event queued:', eventName);
      }
      return false;
    }
    
    const delay = this.DELAYS[eventName] || this.DELAYS.default;
    const lockKey = `${eventName}_${JSON.stringify(properties)}`;
    
    // Debouncing check
    if (this.eventLocks.has(lockKey)) {
      const lastSent = this.eventLocks.get(lockKey);
      if (Date.now() - lastSent < delay) {
        if (this.isDev) {
          console.log(`🚫 Event debounced: ${eventName}`, properties);
        }
        return false;
      }
    }
    
    // Update lock
    this.eventLocks.set(lockKey, Date.now());
    
    // Enhanced properties
    const enhancedProperties = {
      ...properties,
      session_id: this.sessionId,
      device: this.sessionData.device,
      timestamp: Date.now()
    };
    
    // Send to Umami
    try {
      window.umami.track(eventName, enhancedProperties);
      
      if (this.isDev) {
        console.group('📊 Analytics Event Sent');
        console.log('Event:', eventName);
        console.log('Properties:', enhancedProperties);
        console.log('Delay:', delay + 'ms');
        console.groupEnd();
      }
      
      return true;
    } catch (error) {
      console.error('📊 Analytics error:', error);
      return false;
    }
  }
  
  /**
   * 📄 PAGE & SESSION TRACKING
   */
  trackPageLoaded() {
    if (this.isServer || this.sessionState.pageLoaded) return;
    
    // Attribution tracking
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source');
      const utmMedium = urlParams.get('utm_medium');
      const utmCampaign = urlParams.get('utm_campaign');
      
      this.track('page_loaded', {
        load_time: Date.now() - (performance.timing?.navigationStart || Date.now()),
        has_attribution: !!(utmSource || utmMedium || utmCampaign),
        utm_source: utmSource || 'direct',
        utm_medium: utmMedium || 'none',
        utm_campaign: utmCampaign || 'none',
        referrer: (typeof document !== 'undefined' ? document.referrer : '') || 'direct'
      });
      
      this.sessionState.pageLoaded = true;
    }
  }
  
  /**
   * 🧭 NAVIGATION TRACKING
   */
  headerNavClicked(linkText, destination, menuType = 'desktop') {
    this.track('header_nav_clicked', {
      link_text: linkText,
      destination: destination,
      menu_type: menuType,
      scroll_position: typeof window !== 'undefined' ? Math.round(window.scrollY) : 0
    });
  }
  
  /**
   * 🎯 CTA TRACKING
   */
  ctaClicked(section, buttonText, buttonType = 'default', buttonId = null) {
    this.track('cta_clicked', {
      section: section,
      button_text: buttonText,
      button_type: buttonType,
      button_id: buttonId,
      scroll_position: typeof window !== 'undefined' ? Math.round(window.scrollY) : 0,
      time_on_page: Math.round((Date.now() - this.sessionData.startTime) / 1000)
    });
  }
  
  /**
   * 🧮 QUIZ TRACKING
   */
  quizPathSelected(path) {
    if (this.sessionState.quizStarted) return;
    
    this.track('quiz_path_selected', {
      path: path,
      time_to_start: Math.round((Date.now() - this.sessionData.startTime) / 1000)
    });
    
    this.sessionState.quizStarted = true;
  }
  
  quizQuestionAnswered(questionData) {
    this.track('quiz_question_answered', {
      path: questionData.path,
      question_id: questionData.questionId,
      question_number: questionData.questionNumber,
      question_type: questionData.questionType,
      answer_value: questionData.answer,
      answer_category: this.categorizeAnswer(questionData.answer, questionData.questionType),
      time_spent_seconds: Math.round(questionData.timeSpent / 1000),
      session_questions_count: questionData.sessionCount || 1
    });
  }
  
  quizCompleted(score, path, totalTime) {
    if (this.sessionState.quizCompleted) return;
    
    this.track('quiz_completed', {
      path: path,
      score: score,
      score_tier: this.getScoreTier(score),
      total_time_seconds: Math.round(totalTime / 1000),
      completion_rate: 100 // Ils ont fini
    });
    
    this.sessionState.quizCompleted = true;
  }
  
  quizAbandoned(step, reason = 'unknown') {
    this.track('quiz_abandoned', {
      abandoned_at_step: step,
      reason: reason,
      time_spent: Math.round((Date.now() - this.sessionData.startTime) / 1000),
      completion_rate: Math.round((step / 8) * 100)
    });
  }
  
  /**
   * 📊 RESULTS & MODALS
   */
  resultsDisplayed(score, path, timeToComplete) {
    this.track('results_displayed', {
      score: score,
      score_tier: this.getScoreTier(score),
      path: path,
      time_to_complete: Math.round(timeToComplete / 1000)
    });
  }
  
  modalOpened(modalType, triggerSource, userScore = null) {
    this.track('modal_opened', {
      modal_type: modalType,
      trigger_source: triggerSource,
      user_score: userScore,
      score_tier: userScore ? this.getScoreTier(userScore) : null,
      session_modals_count: this.getSessionModalCount()
    });
  }
  
  leadCaptureSubmitted(leadData) {
    if (this.sessionState.leadCaptured) return;
    
    this.track('lead_capture_submitted', {
      user_score: leadData.userScore,
      score_tier: this.getScoreTier(leadData.userScore),
      user_path: leadData.userPath,
      form_fields_filled: leadData.formFields || 4,
      time_to_convert: Math.round((Date.now() - this.sessionData.startTime) / 1000)
    });
    
    this.sessionState.leadCaptured = true;
  }
  
  shareSubmitted(shareData) {
    this.track('share_submitted', {
      team_emails_count: shareData.teamEmails || 1,
      user_score: shareData.userScore,
      user_path: shareData.userPath,
      viral_coefficient: shareData.teamEmails || 1
    });
  }
  
  /**
   * 🎠 CAROUSEL TRACKING (avec protection workaround renforcée)
   */
  carouselInteracted(carouselType, slideIndex, slideId, interactionType = 'swipe') {
    // PROTECTION RENFORCÉE : Vérifier si on est dans la phase de debug workaround
    const debugKey = `${carouselType}_debug`;
    if (!this.sessionState.carouselDebugCompleted.has(debugKey)) {
      if (this.isDev) {
        console.log(`🎠 Carousel ${carouselType}: Debug phase ACTIVE, ignoring interaction (${interactionType})`);
      }
      return false; // Explicit return false
    }
    
    // DOUBLE CHECK : Vérifier le timing depuis le page load
    const timeSinceLoad = Date.now() - this.sessionData.startTime;
    const minTimeRequired = carouselType === 'case_studies' ? 500 : 400;
    
    if (timeSinceLoad < minTimeRequired) {
      if (this.isDev) {
        console.log(`🎠 Carousel ${carouselType}: Too early (${timeSinceLoad}ms < ${minTimeRequired}ms), ignoring`);
      }
      return false;
    }
    
    // TRIPLE CHECK : Vérifier qu'on n'est pas en cours d'initialisation automatique
    if (interactionType === 'swipe' && slideIndex > 2) {
      // Les indices > 2 sont suspects pour des carrousels de 3 slides
      if (this.isDev) {
        console.warn(`🎠 Carousel ${carouselType}: Suspicious slide index ${slideIndex}, may be auto-init`);
      }
      return false;
    }
    
    this.track('carousel_interacted', {
      carousel_type: carouselType,
      slide_index: slideIndex,
      slide_id: slideId || `slide_${slideIndex}`,
      interaction_type: interactionType,
      total_slides: carouselType === 'case_studies' ? 3 : 3, // Adjust based on actual counts
      time_since_load: timeSinceLoad
    });
    
    return true;
  }
  
  /**
   * 🎠 CAROUSEL DEBUG COMPLETION (appelé après workaround)
   */
  carouselDebugCompleted(carouselType) {
    this.sessionState.carouselDebugCompleted.add(`${carouselType}_debug`);
    
    if (this.isDev) {
      console.log(`🎠 Carousel ${carouselType}: Debug phase completed, tracking enabled`);
    }
  }
  
  /**
   * ❓ FAQ TRACKING
   */
  faqExpanded(questionId, questionText, section = 'main_faq') {
    this.track('faq_expanded', {
      question_id: questionId,
      question_text: questionText.substring(0, 100), // Limit length
      section: section,
      session_faqs_opened: this.sessionState.faqsOpened.size + 1
    });
    
    this.sessionState.faqsOpened.add(questionId);
  }
  
  faqCollapsed(questionId, timeSpent) {
    this.track('faq_collapsed', {
      question_id: questionId,
      time_spent_seconds: Math.round(timeSpent / 1000),
      engagement_level: timeSpent > 5000 ? 'high' : timeSpent > 2000 ? 'medium' : 'low'
    });
  }
  
  /**
   * 📜 SCROLL TRACKING
   */
  scrollMilestone(percentage) {
    const milestone = `${percentage}%`;
    if (this.sessionState.scrollMilestones.has(milestone)) return;
    
    this.track('scroll_milestone', {
      percentage: percentage,
      time_to_milestone: Math.round((Date.now() - this.sessionData.startTime) / 1000)
    });
    
    this.sessionState.scrollMilestones.add(milestone);
  }
  
  /**
   * 📎 PDF & DOWNLOADS
   */
  pdfDownloadEligible(userPath, userScore, eligible) {
    this.track('pdf_download_eligible', {
      user_path: userPath,
      user_score: userScore,
      eligible: eligible,
      score_tier: this.getScoreTier(userScore)
    });
  }
  
  pdfDownloadStarted(userPath, userScore, downloadType) {
    this.track('pdf_download_started', {
      user_path: userPath,
      user_score: userScore,
      download_type: downloadType,
      score_tier: this.getScoreTier(userScore)
    });
  }
  
  /**
   * 🚨 ERROR TRACKING
   */
  errorOccurred(errorType, message, source) {
    this.track('error_occurred', {
      error_type: errorType,
      message: message.substring(0, 200),
      source: source,
      user_agent: typeof navigator !== 'undefined' ? navigator.userAgent.substring(0, 100) : 'unknown'
    });
  }
  
  /**
   * 🏃‍♂️ ABANDONMENT PREDICTION
   */
  abandonmentPredicted(signals) {
    this.track('abandonment_predicted', {
      signals: signals,
      risk_level: signals.length > 3 ? 'high' : signals.length > 1 ? 'medium' : 'low',
      time_on_page: Math.round((Date.now() - this.sessionData.startTime) / 1000)
    });
  }
  
  /**
   * 🛠️ UTILITY METHODS
   */
  categorizeAnswer(answer, questionType) {
    if (questionType === 'slider' || questionType === 'scale') {
      if (answer <= 3) return 'low';
      if (answer <= 7) return 'medium';
      return 'high';
    }
    
    if (questionType === 'multi_tag' || questionType === 'multi_select_grid') {
      if (Array.isArray(answer)) {
        if (answer.length <= 2) return 'low';
        if (answer.length <= 4) return 'medium';
        return 'high';
      }
    }
    
    return 'default';
  }
  
  getScoreTier(score) {
    if (score >= 70) return 'high';
    if (score >= 50) return 'medium';
    return 'low';
  }
  
  getSessionModalCount() {
    return Array.from(this.eventLocks.keys())
      .filter(key => key.startsWith('modal_opened')).length;
  }
}

// Export singleton instance with SSR protection
let analytics;

if (typeof window !== 'undefined') {
  analytics = new AnalyticsManager();
  
  // Expose for debugging (always in browser environment)
  window.analytics = analytics;
} else {
  // Server-side fallback
  analytics = {
    isServer: true,
    track: () => false,
    trackPageLoaded: () => false,
    headerNavClicked: () => false,
    ctaClicked: () => false,
    quizPathSelected: () => false,
    quizQuestionAnswered: () => false,
    quizCompleted: () => false,
    quizAbandoned: () => false,
    resultsDisplayed: () => false,
    modalOpened: () => false,
    leadCaptureSubmitted: () => false,
    shareSubmitted: () => false,
    carouselInteracted: () => false,
    carouselDebugCompleted: () => false,
    faqExpanded: () => false,
    faqCollapsed: () => false,
    scrollMilestone: () => false,
    pdfDownloadEligible: () => false,
    pdfDownloadStarted: () => false,
    errorOccurred: () => false,
    abandonmentPredicted: () => false
  };
}

const analytics$1 = analytics;

/**
 * 🪝 OctoMate Analytics Hooks
 * Hooks React spécialisés pour tracking comportemental
 */


/**
 * 🧮 QUIZ ANALYTICS HOOK
 */
const useQuizAnalytics = (userType = '') => {
  const [sessionState, setSessionState] = useState({
    pathSelected: false,
    questionsAnswered: new Set(),
    completed: false,
    abandoned: false,
    questionStartTimes: new Map()
  });
  
  const quizStartTime = useRef(Date.now());
  
  const trackPathSelected = useCallback((path) => {
    if (sessionState.pathSelected) return;
    
    analytics$1.quizPathSelected(path);
    setSessionState(prev => ({ ...prev, pathSelected: true }));
    quizStartTime.current = Date.now();
  }, [sessionState.pathSelected]);
  
  const trackQuestionAnswered = useCallback((questionData) => {
    const questionKey = `${questionData.questionId}_${questionData.questionNumber}`;
    
    if (sessionState.questionsAnswered.has(questionKey)) {
      return; // Déjà trackée
    }
    
    analytics$1.quizQuestionAnswered({
      ...questionData,
      timeSpent: questionData.timeSpent || 1000, // Fallback
      sessionCount: sessionState.questionsAnswered.size + 1
    });
    
    setSessionState(prev => ({
      ...prev,
      questionsAnswered: new Set([...prev.questionsAnswered, questionKey])
    }));
  }, [sessionState.questionsAnswered]);
  
  const trackQuizCompleted = useCallback((score, path, totalTime = null) => {
    if (sessionState.completed) return;
    
    const calculatedTime = totalTime || (Date.now() - quizStartTime.current);
    analytics$1.quizCompleted(score, path, calculatedTime);
    setSessionState(prev => ({ ...prev, completed: true }));
  }, [sessionState.completed]);
  
  const trackQuizAbandoned = useCallback((step, reason = 'page_exit') => {
    if (sessionState.abandoned || sessionState.completed) return;
    
    analytics$1.quizAbandoned(step, reason);
    setSessionState(prev => ({ ...prev, abandoned: true }));
  }, [sessionState.abandoned, sessionState.completed]);
  
  return {
    trackPathSelected,
    trackQuestionAnswered,
    trackQuizCompleted,
    trackQuizAbandoned,
    sessionState
  };
};

/**
 * 📊 MODAL ANALYTICS HOOK
 */
const useModalAnalytics = () => {
  const trackOpen = useCallback((modalType, triggerSource, userScore = null) => {
    analytics$1.modalOpened(modalType, triggerSource, userScore);
  }, []);
  
  const trackLeadCapture = useCallback((leadData) => {
    analytics$1.leadCaptureSubmitted(leadData);
  }, []);
  
  const trackShare = useCallback((shareData) => {
    analytics$1.shareSubmitted(shareData);
  }, []);
  
  const trackError = useCallback((error, context) => {
    analytics$1.errorOccurred('modal', error, context);
  }, []);
  
  return {
    trackOpen,
    trackLeadCapture,
    trackShare,
    trackError
  };
};

/**
 * 🎠 CAROUSEL ANALYTICS HOOK (avec protection workaround)
 */
const useCarouselAnalytics = (carouselType) => {
  const [debugPhase, setDebugPhase] = useState(true);
  const workaroundTimeoutRef = useRef(null);
  
  // Détecter la fin du workaround automatiquement
  useEffect(() => {
    // Timeout de sécurité pour s'assurer que le workaround est fini
    // CaseStudies: ~200ms delay + (slides * 10ms) + 10ms final
    // Testimonials: ~200ms delay + (3 * 10ms) + 10ms final
    const workaroundDuration = carouselType === 'case_studies' ? 500 : 400;
    
    workaroundTimeoutRef.current = setTimeout(() => {
      setDebugPhase(false);
      analytics$1.carouselDebugCompleted(carouselType);
    }, workaroundDuration);
    
    return () => {
      if (workaroundTimeoutRef.current) {
        clearTimeout(workaroundTimeoutRef.current);
      }
    };
  }, [carouselType]);
  
  const trackInteraction = useCallback((slideIndex, slideId, interactionType = 'swipe') => {
    if (debugPhase) {
      // En mode debug, on ignore
      return;
    }
    
    analytics$1.carouselInteracted(carouselType, slideIndex, slideId, interactionType);
  }, [carouselType, debugPhase]);
  
  const trackCardClick = useCallback((slideIndex, slideId) => {
    trackInteraction(slideIndex, slideId, 'card_click');
  }, [trackInteraction]);
  
  const trackArrowClick = useCallback((slideIndex, slideId, direction) => {
    trackInteraction(slideIndex, slideId, `arrow_${direction}`);
  }, [trackInteraction]);
  
  return {
    trackInteraction,
    trackCardClick,
    trackArrowClick,
    isDebugPhase: debugPhase
  };
};

/**
 * ❓ FAQ TRACKING HOOK
 */
const useFaqAnalytics = () => {
  const faqTimers = useRef(new Map());
  
  const trackExpanded = useCallback((questionId, questionText, section = 'main_faq') => {
    faqTimers.current.set(questionId, Date.now());
    analytics$1.faqExpanded(questionId, questionText, section);
  }, []);
  
  const trackCollapsed = useCallback((questionId) => {
    const startTime = faqTimers.current.get(questionId);
    if (startTime) {
      const timeSpent = Date.now() - startTime;
      analytics$1.faqCollapsed(questionId, timeSpent);
      faqTimers.current.delete(questionId);
    }
  }, []);
  
  return {
    trackExpanded,
    trackCollapsed
  };
};

/**
 * 🎯 CTA TRACKING HOOK
 */
const useCtaTracking = () => {
  const trackClick = useCallback((section, buttonText, buttonType = 'default', buttonId = null) => {
    analytics$1.ctaClicked(section, buttonText, buttonType, buttonId);
  }, []);
  
  return { trackClick };
};

/**
 * 🧭 NAVIGATION TRACKING HOOK
 */
const useNavigationTracking = () => {
  const trackHeaderClick = useCallback((linkText, destination, menuType = 'desktop') => {
    analytics$1.headerNavClicked(linkText, destination, menuType);
  }, []);
  
  return { trackHeaderClick };
};

/**
 * 📊 RESULTS TRACKING HOOK
 */
const useResultsAnalytics = () => {
  const trackDisplayed = useCallback((score, path, timeToComplete) => {
    analytics$1.resultsDisplayed(score, path, timeToComplete);
  }, []);
  
  const trackPdfEligible = useCallback((userPath, userScore, eligible) => {
    analytics$1.pdfDownloadEligible(userPath, userScore, eligible);
  }, []);
  
  const trackPdfDownload = useCallback((userPath, userScore, downloadType) => {
    analytics$1.pdfDownloadStarted(userPath, userScore, downloadType);
  }, []);
  
  return {
    trackDisplayed,
    trackPdfEligible,
    trackPdfDownload
  };
};

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
  const [currentPath, setCurrentPath] = useState("/");
  const { trackHeaderClick } = useNavigationTracking();
  const { trackClick: trackCtaClick } = useCtaTracking();
  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const getSmartHref = (originalHref) => {
    if (currentPath === "/") {
      return originalHref;
    }
    return `/${originalHref}`;
  };
  const getSmartCtaHref = () => {
    return currentPath === "/" ? "#calculateur" : "/#calculateur";
  };
  const handleLinkClick = (link) => {
    trackHeaderClick(link.label, link.href, "desktop");
    setIsMobileMenuOpen(false);
  };
  const handleMobileLinkClick = (link) => {
    trackHeaderClick(link.label, link.href, "mobile");
    setIsMobileMenuOpen(false);
  };
  const handleCtaClick = () => {
    trackCtaClick("header", "Estimer mes économies", "primary", "header_cta");
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
              href: getSmartHref(link.href),
              onClick: () => handleLinkClick(link),
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
              href: getSmartCtaHref(),
              onClick: handleCtaClick,
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
                  href: getSmartHref(link.href),
                  className: "block py-3 px-4 text-beige/80 hover:text-copper hover:bg-copper/10 transition-all duration-200 rounded-lg transform hover:translate-x-2",
                  onClick: () => handleMobileLinkClick(link),
                  style: { animationDelay: `${index * 0.1}s` },
                  children: link.label
                },
                link.href
              )),
              /* @__PURE__ */ jsx("div", { className: "pt-4 pb-4 px-2", children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: getSmartCtaHref(),
                  onClick: handleCtaClick,
                  className: "block w-full text-center px-4 py-3 bg-gradient-to-r from-copper to-copper/80 text-dark-blue font-bold rounded-xl hover:from-copper/90 hover:to-copper/70 transition-all duration-300 ease-out hover:scale-105 shadow-lg relative overflow-hidden group text-sm",
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

export { $$Layout as $, $$Header as a, $$Container as b, $$Footer as c, useResultsAnalytics as d, useCtaTracking as e, useQuizAnalytics as f, useCarouselAnalytics as g, useFaqAnalytics as h, useModalAnalytics as u };
