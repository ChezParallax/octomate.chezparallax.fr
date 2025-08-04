// Script de preload intelligent pour optimiser l'expérience utilisateur
// Précharge les composants React avant qu'ils soient visibles

(function() {
  'use strict';
  
  let hasPreloadedQuiz = false;
  let hasPreloadedTestimonials = false;
  
  // Observer pour précharger le quiz quand on approche de la section
  const quizObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasPreloadedQuiz) {
        hasPreloadedQuiz = true;
        
        // Précharger le module quiz en arrière-plan
        import('/src/components/react/QuizCalculator.jsx')
          .then(() => {
            console.log('✅ Quiz préchargé avec succès');
          })
          .catch(err => {
            console.warn('⚠️ Erreur preload quiz:', err);
          });
          
        // Précharger aussi le modal associé
        import('/src/components/react/LeadCaptureModal.jsx')
          .catch(() => {}); // Silent fail
          
        // Arrêter d'observer une fois préchargé
        quizObserver.disconnect();
      }
    });
  }, {
    rootMargin: '200px 0px', // Précharge 200px avant d'être visible
    threshold: 0.1
  });
  
  // Observer pour précharger les testimonials
  const testimonialsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasPreloadedTestimonials) {
        hasPreloadedTestimonials = true;
        
        // Précharger les carousels
        import('/src/components/react/TestimonialsCarousel.jsx')
          .then(() => {
            console.log('✅ Testimonials préchargés');
          })
          .catch(() => {});
          
        import('/src/components/react/CaseStudiesCarousel.jsx')
          .catch(() => {});
          
        testimonialsObserver.disconnect();
      }
    });
  }, {
    rootMargin: '300px 0px',
    threshold: 0.1
  });
  
  // Attendre que le DOM soit prêt
  function initPreloaders() {
    // Observer la section du calculateur
    const calculatorSection = document.getElementById('calculateur');
    if (calculatorSection) {
      quizObserver.observe(calculatorSection);
    }
    
    // Observer la section testimonials
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
      testimonialsObserver.observe(testimonialsSection);
    }
  }
  
  // Démarrer quand le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPreloaders);
  } else {
    initPreloaders();
  }
  
})();
