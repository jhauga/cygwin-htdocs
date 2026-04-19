/**
 * Toggle stylesheet: press 'c' twice within one second to switch between
 * style.css (proposed PR changes) and toggle/style.css (current production).
 *
 * Designed for use by maintainers reviewing pull requests on the GitHub Pages
 * preview, where style.css is the proposed change and toggle/style.css is the
 * existing production stylesheet.
 */
(function () {
  'use strict';

  var pending = false;
  var timer = null;

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'c') return;

    if (pending) {
      // Second 'c' within the 1-second window — perform the toggle.
      clearTimeout(timer);
      timer = null;
      pending = false;

      var link = document.querySelector('link[rel="stylesheet"]');
      if (!link) return;

      var href = link.getAttribute('href');
      if (href.indexOf('toggle/style.css') !== -1) {
        // Currently on toggle (production) stylesheet — switch to proposed.
        link.setAttribute('href', href.replace('toggle/style.css', 'style.css'));
      } else {
        // Currently on proposed stylesheet — switch to toggle (production).
        link.setAttribute('href', href.replace(/style\.css$/, 'toggle/style.css'));
      }
    } else {
      // First 'c' — arm a 1-second window waiting for a second press.
      pending = true;
      timer = setTimeout(function () {
        pending = false;
        timer = null;
      }, 1000);
    }
  });
}());
