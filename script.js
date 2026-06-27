<<<<<<< HEAD
/* ============================================================
   FUREVER CARE VAX
   Countdown · Mobile Menu · Smooth Scroll · Pet Grid · Scroll Reveal
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  initCountdown();
  initMobileMenu();
  initSmoothScroll();
  initPetGrid();
  initReveal();
});

/* --- COUNTDOWN: 16/08/2026 9:00 AM --- */
function initCountdown() {
  var eventDate = new Date('2026-08-16T09:00:00+07:00').getTime();
  var cd = { d: document.getElementById('cd-days'), h: document.getElementById('cd-hours'), m: document.getElementById('cd-mins'), s: document.getElementById('cd-secs') };
  if (!cd.d) return;
  function tick() {
    var diff = eventDate - Date.now();
    if (diff <= 0) { set(cd.d, '00'); set(cd.h, '00'); set(cd.m, '00'); set(cd.s, '00'); return }
    set(cd.d, pad(Math.floor(diff / 86400000)));
    set(cd.h, pad(Math.floor((diff % 86400000) / 3600000)));
    set(cd.m, pad(Math.floor((diff % 3600000) / 60000)));
    set(cd.s, pad(Math.floor((diff % 60000) / 1000)));
  }
  function set(el, v) { if (el.textContent !== v) el.textContent = v }
  function pad(n) { return String(n).padStart(2, '0') }
=======
﻿/* ============================================================
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

>>>>>>> eb68026f174707a3a9338e512a92d377ce2063f5
  tick();
  setInterval(tick, 1000);
}

<<<<<<< HEAD
/* --- MOBILE MENU --- */
function initMobileMenu() {
  var h = document.getElementById('hamburger');
  var d = document.getElementById('mobileDropdown');
  if (!h || !d) return;
  h.addEventListener('click', function () { h.classList.toggle('open'); d.classList.toggle('open') });
  d.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { h.classList.remove('open'); d.classList.remove('open') }) });
}

/* --- SMOOTH SCROLL --- */
function initSmoothScroll() {
  var nav = document.getElementById('NAVBAR');
  var offset = nav ? nav.offsetHeight : 63;
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.getElementById(id.replace('#', ''));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
=======
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
>>>>>>> eb68026f174707a3a9338e512a92d377ce2063f5
    });
  });
}

<<<<<<< HEAD
/* --- PET GRID: Dữ liệu từ Google Sheet --- */
var petsData = [
  // 4 Dogs
  { name: "Chó Poodle Nâu", img: "images/cho1.jpg", breed: "Poodle", color: "Nâu", age: "2.5 tuổi", gender: "Đực", status: "Chưa triệt sản, đã tiêm đủ" },
  { name: "Chó Cỏ Vàng Đen", img: "images/cho2.jpg", breed: "Cỏ", color: "Đen, vàng", age: "3.5 tuổi", gender: "Cái", status: "Chưa triệt sản, đã tiêm 1 bệnh, 1 dại" },
  { name: "Gào - Nhật lai", img: "images/cho3.jpg", breed: "Nhật lai", color: "Trắng", age: "Gần 1 tuổi", gender: "Đực", status: "Chưa triệt sản, đã tiêm đủ" },
  { name: "Luna - Lab lai", img: "images/cho4.jpg", breed: "Lab lai", color: "Trắng", age: "1 tuổi", gender: "Cái", status: "Chưa triệt sản, đã tiêm đủ" },
  // 4 Cats
  { name: "Mèo Mướp Trắng", img: "images/meo1.jpg", breed: "Mướp", color: "Trắng vằn", age: "2 tuổi", gender: "Cái", status: "Chưa triệt sản, chưa tiêm" },
  { name: "Mèo Mướp Cam Trắng", img: "images/meo2.jpg", breed: "Mướp", color: "Cam Trắng", age: "1.5 tuổi", gender: "Cái", status: "Chưa triệt sản, chưa tiêm" },
  { name: "Mèo Mướp Xám", img: "images/meo3.jpg", breed: "Mướp", color: "Xám", age: "1.5 tuổi", gender: "Đực", status: "Chưa triệt sản, chưa tiêm" },
  { name: "Mèo Trắng Quân Nhân", img: "images/meo4.jpg", breed: "Lai", color: "Trắng Xám Đen", age: "2 tháng", gender: "Cái", status: "Chưa triệt sản, đã tiêm 1 mũi" }
];

function initPetGrid() {
  var grid = document.getElementById('petsGrid');
  if (!grid) return;
  var html = '';
  for (var i = 0; i < petsData.length; i++) {
    var p = petsData[i];
    var statusClass = '';
    if (p.status.indexOf('triệt sản') !== -1 && p.status.indexOf('tiêm đủ') !== -1) statusClass = 'ready';
    else if (p.status.indexOf('tiêm 1 mũi') !== -1 || p.status.indexOf('tiêm đủ') !== -1) statusClass = 'vaccinated';
    else statusClass = 'pending';

    var statusLabel = 'Đã tiêm đủ';
    if (p.status.indexOf('1 mũi') !== -1) statusLabel = 'Đã tiêm 1 mũi';
    if (p.status.indexOf('chưa tiêm') !== -1) statusLabel = 'Chưa tiêm';

    var infoParts = [];
    if (p.breed) infoParts.push(p.breed);
    if (p.color) infoParts.push(p.color);
    if (p.age) infoParts.push(p.age);
    if (p.gender) infoParts.push(p.gender);
    if (p.note) infoParts.push(p.note);

    var imageContent = p.img
      ? '<img src="' + p.img + '" class="pet-card-img" alt="' + (p.name || 'Pet') + '">'
      : '<div class="pet-card-img-placeholder">' + (i < 4 ? '🐶' : '🐱') + '</div>';

    html += '<div class="pet-card" data-index="' + i + '">';
    html += '  ' + imageContent;
    html += '  <div class="pet-card-body">';
    html += '    <div class="pet-card-name">' + (p.name || 'Chó/Mèo') + '</div>';
    html += '    <div class="pet-card-info">' + infoParts.join(' · ') + '</div>';
    html += '    <span class="pet-card-status">' + statusLabel + '</span>';
    html += '  </div>';
    html += '</div>';
  }
  grid.innerHTML = html;
}

/* --- SCROLL REVEAL --- */
function initReveal() {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
    });
  }, { threshold: 0.1 });
  items.forEach(function (el) { obs.observe(el) });
=======
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
>>>>>>> eb68026f174707a3a9338e512a92d377ce2063f5
}
