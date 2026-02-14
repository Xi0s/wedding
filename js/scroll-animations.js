/**
 * Scroll Animation Handler
 * Triggers animations when elements come into viewport
 */

(function() {
  'use strict';

  /**
   * Initialize Intersection Observer for scroll animations
   */
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Add animation class when element enters viewport
          entry.target.classList.add('scroll-animate');
          // Stop observing this element
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections and major content elements
    const elementsToObserve = document.querySelectorAll(
      '.section__title, ' +
      '.section__content, ' +
      '.info-grid, ' +
      '.highlight, ' +
      '.details, ' +
      '.selection-grid, ' +
      '.selection-category, ' +
      '.page-break'
    );

    elementsToObserve.forEach(function(element) {
      observer.observe(element);
    });
  }

  // When DOM is ready, initialize scroll animations
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    // Document is already loaded
    initScrollAnimations();
  }
})();
