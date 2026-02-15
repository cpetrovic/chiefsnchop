/* ==========================================================================
   ChiefsNChop - Website Scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── Navigation ──────────────────────────────────────────────────────────

  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = navLinks.querySelectorAll('a');

  // Scroll effect for navbar
  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Mobile toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile nav on link click
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ── Active nav link on scroll ───────────────────────────────────────────

  const sections = document.querySelectorAll('section[id]');

  const updateActiveNav = () => {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      const link = navLinks.querySelector(`a[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  // ── Scroll Reveal Animations ────────────────────────────────────────────

  const revealElements = document.querySelectorAll(
    '.about-grid, .about-image, .about-text, ' +
    '.stream-embed, .stream-info, .stat-card, .game-card, ' +
    '.merch-card, .merch-cta, ' +
    '.community-card, ' +
    '.sponsor-card, ' +
    '.link-card'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Stagger animations for sibling cards
          const parent = entry.target.parentElement;
          const siblings = parent.querySelectorAll('.reveal');
          const index = Array.from(siblings).indexOf(entry.target);

          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);

          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  // ── Smooth scroll for all anchor links ──────────────────────────────────

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ── Parallax on hero (subtle) ───────────────────────────────────────────

  const hero = document.getElementById('hero');
  const heroContent = hero.querySelector('.hero-content');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
      heroContent.style.opacity = 1 - scrolled / (window.innerHeight * 0.8);
    }
  });

});
