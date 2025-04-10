(() => {
  'use strict';
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a.nav-link');
    links.forEach((el) => {
      el.addEventListener('click', () => {
        const targetSelector = el.getAttribute('data-section-id');
        const target = document.querySelector(`section#${targetSelector}`);
        target.scrollIntoView({ behavior: 'smooth' });
      }); 
    });
  });
})();
