/* ============================================================
   FUREVER CARE VAX — JS (Simple + Clean)
   Countdown • Scroll Reveal • Mobile Menu • Stats Counter
   Drag-scroll for product carousel
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initReveal();
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initStatsCounter();
  initDragScroll();
});

/* --- COUNTDOWN --- */
function initCountdown() {
  const eventDate = new Date('2026-07-12T08:00:00+07:00').getTime();
  const els = {
    d: document.getElementById('cd-days'),
    h: document.getElementById('cd-hours'),
    m: document.getElementById('cd-mins'),
    s: document.getElementById('cd-secs')
  };
  if (!els.d) return;

  function tick() {
    const diff = eventDate - Date.now();
    if (diff <= 0) {
      els.d.textContent = els.h.textContent = els.m.textContent = els.s.textContent = '00';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    set(els.d, d); set(els.h, h); set(els.m, m); set(els.s, s);
  }

  function set(el, v) {
    const str = String(v).padStart(2, '0');
    if (el.textContent !== str) el.textContent = str;
  }

  tick();
  setInterval(tick, 1000);
}

/* --- SCROLL REVEAL --- */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  items.forEach(el => obs.observe(el));
}

/* --- NAVBAR SCROLL --- */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* --- MOBILE MENU --- */
function initMobileMenu() {
  const btn = document.getElementById('menuBtn');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

/* --- SMOOTH SCROLL --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = document.getElementById('navbar')?.offsetHeight || 64;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    });
  });
}

/* --- STATS COUNTER --- */
function initStatsCounter() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  if (!nums.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.target, 10);
        countUp(el, target, 1200);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  nums.forEach(n => obs.observe(n));
}

function countUp(el, target, duration) {
  const start = performance.now();
  (function frame(now) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(target * ease) + '+';
    if (p < 1) requestAnimationFrame(frame);
  })(start);
}

/* --- DRAG SCROLL for Products carousel --- */
function initDragScroll() {
  const track = document.getElementById('productsTrack');
  if (!track) return;

  let isDown = false, startX, scrollL;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.style.cursor = 'grabbing';
    startX = e.pageX - track.offsetLeft;
    scrollL = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => { isDown = false; track.style.cursor = 'grab'; });
  track.addEventListener('mouseup', () => { isDown = false; track.style.cursor = 'grab'; });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    track.scrollLeft = scrollL - (x - startX) * 1.5;
  });
}
