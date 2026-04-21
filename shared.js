// shared.js — injects nav, ticker, footer, and scroll animations into every page

const CURRENT_PAGE = document.body.dataset.page || '';

const NAV_HTML = `
<nav id="main-nav">
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-emblem">SA</div>
    <div class="nav-logo-text">
      <div class="nav-logo-name">St. Antony Busowa</div>
      <div class="nav-logo-sub">Primary School · Uganda</div>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="index.html" data-page="home">Home</a></li>
    <li><a href="about.html" data-page="about">About</a></li>
    <li><a href="news.html" data-page="news">News & Events</a></li>
    <li><a href="gallery.html" data-page="gallery">Gallery</a></li>
    <li><a href="community.html" data-page="community">Community</a></li>
    <li><a href="donate.html" data-page="donate">Support Us</a></li>
  </ul>
  <a href="donate.html" class="nav-cta">Donate Now</a>
  <div class="nav-burger" id="nav-burger" aria-label="Menu">
    <span></span><span></span><span></span>
  </div>
</nav>
<div class="mobile-menu" id="mobile-menu">
  <a href="index.html">Home</a>
  <a href="about.html">About the School</a>
  <a href="news.html">News & Events</a>
  <a href="gallery.html">Gallery</a>
  <a href="community.html">Community & Parish</a>
  <a href="donate.html">Support Us</a>
</div>`;

const TICKER_HTML = `
<div class="ticker">
  <div class="ticker-inner">
    <span class="ticker-item">St. Antony Busowa Primary School</span><span class="ticker-dot"> ✦ </span>
    <span class="ticker-item">Serving Busowa since 1945</span><span class="ticker-dot"> ✦ </span>
    <span class="ticker-item">1,000 children · 25 teachers</span><span class="ticker-dot"> ✦ </span>
    <span class="ticker-item">Bugiri District · Eastern Uganda</span><span class="ticker-dot"> ✦ </span>
    <span class="ticker-item">Education as a catalyst for transformation</span><span class="ticker-dot"> ✦ </span>
    <span class="ticker-item">St. Antony Busowa Primary School</span><span class="ticker-dot"> ✦ </span>
    <span class="ticker-item">Serving Busowa since 1945</span><span class="ticker-dot"> ✦ </span>
    <span class="ticker-item">1,000 children · 25 teachers</span><span class="ticker-dot"> ✦ </span>
    <span class="ticker-item">Bugiri District · Eastern Uganda</span><span class="ticker-dot"> ✦ </span>
    <span class="ticker-item">Education as a catalyst for transformation</span><span class="ticker-dot"> ✦ </span>
  </div>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-brand-name">St. Antony Busowa Primary School</div>
      <div class="footer-brand-sub">Bugiri District · Eastern Uganda</div>
      <div class="footer-brand-desc">Providing quality education as a catalyst for positive social and economic transformation in the Busowa community since 1945.</div>
    </div>
    <div>
      <div class="footer-col-title">Navigate</div>
      <ul class="footer-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="news.html">News & Events</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="community.html">Community</a></li>
        <li><a href="donate.html">Support Us</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">The School</div>
      <ul class="footer-links">
        <li><a href="about.html#history">Our History</a></li>
        <li><a href="about.html#mission">Mission & Values</a></li>
        <li><a href="about.html#staff">Our Staff</a></li>
        <li><a href="community.html#parish">The Parish</a></li>
        <li><a href="donate.html#project">Classroom Project</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Contact</div>
      <div class="footer-contact-item">Busowa Catholic Church / Kirabo<br>P.O. Box 673, Jinja, Uganda</div>
      <div class="footer-contact-item"><a href="tel:+256752327344">+256 752 327 344</a></div>
      <div class="footer-contact-item"><a href="mailto:frclakpupa@gmail.com">frclakpupa@gmail.com</a></div>
      <div class="footer-contact-item">GPS: 0.602977, 33.700708<br>Jinja–Tororo Road</div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 St. Antony Busowa Primary School. All rights reserved.</span>
    <span>Bugiri District, Eastern Uganda</span>
  </div>
</footer>`;

// Inject
document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

// Mark active nav link
document.querySelectorAll('#main-nav .nav-links a').forEach(a => {
  if (a.dataset.page === CURRENT_PAGE) a.classList.add('active');
});

// Mobile menu toggle
document.getElementById('nav-burger').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('open');
});

// Insert ticker after page-hero or after nav
const hero = document.querySelector('.page-hero') || document.querySelector('#hero');
if (hero) hero.insertAdjacentHTML('afterend', TICKER_HTML);

// Footer
document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

// Scroll fade-up observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
