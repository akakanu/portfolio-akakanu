(() => {
  const toggleBtn = document.getElementById('lang-toggle');

  function applyLang(lang) {
    document.documentElement.lang = lang;
    toggleBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
  }

  toggleBtn.addEventListener('click', () => {
    const next = document.documentElement.lang === 'fr' ? 'en' : 'fr';
    applyLang(next);
  });

  applyLang(document.documentElement.lang === 'en' ? 'en' : 'fr');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealNodes = document.querySelectorAll('[data-reveal]');

  if (reduceMotion) {
    revealNodes.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );
    revealNodes.forEach((el) => io.observe(el));
  }
})();
