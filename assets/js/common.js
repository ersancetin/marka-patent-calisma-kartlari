/* Cumhuriyet Avukatları — Marka & Patent Çalışma Kartları
   Ortak yardımcılar. Tüm işlemler tarayıcıda çalışır; sunucuya veri gönderilmez. */
'use strict';

/* mobil menü */
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) nav.classList.remove('open');
  });
});
