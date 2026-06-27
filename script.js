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
  tick();
  setInterval(tick, 1000);
}

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
    });
  });
}

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
}
