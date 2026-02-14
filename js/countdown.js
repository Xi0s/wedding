/**
 * Countdown Timer
 * Calculates and displays the countdown to the wedding event
 */

(function() {
  'use strict';

  /**
   * Initialize the countdown timer
   * @param {string} targetDateString - Target date string in format 'YYYY-MM-DD'
   */
  function initCountdown(targetDateString) {
    const targetDate = new Date(targetDateString).getTime();

    /**
     * Update the countdown display
     */
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Calculate time units
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Pad numbers with leading zeros
      const displayDays = String(days).padStart(3, '0');
      const displayHours = String(hours).padStart(2, '0');
      const displayMinutes = String(minutes).padStart(2, '0');
      const displaySeconds = String(seconds).padStart(2, '0');

      // Update DOM
      const daysElement = document.querySelector('[data-countdown="days"]');
      const hoursElement = document.querySelector('[data-countdown="hours"]');
      const minutesElement = document.querySelector('[data-countdown="minutes"]');
      const secondsElement = document.querySelector('[data-countdown="seconds"]');

      if (daysElement) daysElement.textContent = displayDays;
      if (hoursElement) hoursElement.textContent = displayHours;
      if (minutesElement) minutesElement.textContent = displayMinutes;
      if (secondsElement) secondsElement.textContent = displaySeconds;

      // If countdown is finished
      if (distance < 0) {
        clearInterval(countdownInterval);
        if (daysElement) daysElement.textContent = '00';
        if (hoursElement) hoursElement.textContent = '00';
        if (minutesElement) minutesElement.textContent = '00';
        if (secondsElement) secondsElement.textContent = '00';
      }
    }

    // Initial update
    updateCountdown();

    // Update every second
    const countdownInterval = setInterval(updateCountdown, 1000);
  }

  // When DOM is ready, initialize countdown
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      // Wedding date: June 24, 2026
      initCountdown('2026-06-24');
    });
  } else {
    // Document is already loaded
    initCountdown('2026-06-24');
  }
})();
