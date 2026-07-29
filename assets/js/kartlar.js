/* ============================================================
   Marka & Patent Çalışma Kartları — kart motoru
   İçerik data/desteler.js dosyasından okunur. Hiçbir veri
   sunucuya gönderilmez; ilerleme yalnızca localStorage'da tutulur.
   ============================================================ */
'use strict';

(function () {

  var DEPO = 'mpck.ilerleme.v1';   // localStorage anahtarı

  /* ---------- ikonlar ---------- */

  var IKON = {
    marka:   '<path d="M3 12.5V5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.41.59l6.5 6.5a2 2 0 0 1 0 2.82l-7.5 7.5a2 2 0 0 1-2.82 0l-6.5-6.5A2 2 0 0 1 3 12.5z"/><circle cx="7.8" cy="7.8" r="1.4"/>',
    patent:  '<path d="M12 3v6M12 21v-4"/><circle cx="12" cy="12" r="3"/><path d="M5.6 6.2l3.2 3.2M18.4 6.2l-3.2 3.2M4 15h4M16 15h4"/>',
    tasarim: '<path d="M12 3l2.5 5.6L20.5 9l-4.4 4 1.2 6-5.3-2.9L6.7 19l1.2-6L3.5 9l6-.4z"/>',
    cografi: '<path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
    belge:   '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
    dunya:   '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    kalkan:  '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>',
    kalem:   '<path d="M4 20h4.5L20 8.5a2.1 2.1 0 0 0-3-3L5.5 17V20z"/><path d="M14.5 5.5l4 4"/>',
    devre:   '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
    varsayilan: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h6M9 13h6M9 17h3"/>'
  };

  function ikonSvg(ad, boyut) {
    var d = IKON[ad] || IKON.varsayilan;
    return '<svg width="' + (boyut || 22) + '" height="' + (boyut || 22) + '" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
  }

  /* ---------- yardımcılar ---------- */

  function $(s) { return document.querySelector(s); }

  function karistir(dizi) {
    for (var i = dizi.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = dizi[i]; dizi[i] = dizi[j]; dizi[j] = t;
    }
    return dizi;
  }

  /* kart kimliği: metne bağlı kısa özet — içerik sırası değişse de ilerleme korunur */
  function kartKimlik(desteId, soru) {
    var h = 5381;
    for (var i = 0; i < soru.length; i++) h = ((h * 33) ^ soru.charCodeAt(i)) >>> 0;
    return desteId + ':' + h.toString(36);
  }

  function ilerlemeOku() {
    try { return JSON.parse(localStorage.getItem(DEPO)) || {}; }
    catch (e) { return {}; }
  }

  function ilerlemeYaz(veri) {
    try { localStorage.setItem(DEPO, JSON.stringify(veri)); }
    catch (e) { /* özel sekme / kota — sessizce geç */ }
  }

  /* ---------- durum ---------- */

  var desteler = (window.KARTLAR && window.KARTLAR.desteler) || [];
  var secili = [];          // seçili deste id'leri
  var sira = 'karisik';     // karisik | sirali
  var yon = 'soru';         // soru | cevap  (kartın ön yüzünde ne yazacağı)
  var kapsam = 'tumu';      // tumu | bilinmeyen
  var kuyruk = [];          // çalışılan kartlar
  var indeks = 0;
  var ilerleme = ilerlemeOku();
  var oturum = { bildim: 0, tekrar: 0 };

  /* ---------- deste seçimi ekranı ---------- */

  function desteleriBas() {
    var kap = $('#deste-grid');
    if (!kap) return;

    if (!desteler.length) {
      kap.innerHTML = '';
      $('#bos-uyari').classList.remove('hidden');
      $('#secim-arac').classList.add('hidden');
      $('#secenekler').classList.add('hidden');
      return;
    }

    kap.innerHTML = '';
    desteler.forEach(function (d) {
      var adet = (d.kartlar || []).length;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'deste-card';
      btn.dataset.id = d.id;
      btn.disabled = adet === 0;
      btn.setAttribute('aria-pressed', 'false');
      btn.innerHTML =
        '<span class="deste-icon">' + ikonSvg(d.ikon, 21) + '</span>' +
        '<span class="deste-body">' +
          '<h3>' + d.ad + '</h3>' +
          '<p>' + (d.aciklama || '') + '</p>' +
          '<span class="deste-meta">' + (adet ? adet + ' kart' : 'içerik bekleniyor') + '</span>' +
        '</span>' +
        '<span class="deste-check">' +
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" ' +
          'stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg>' +
        '</span>';
      btn.addEventListener('click', function () { desteSec(d.id, btn); });
      kap.appendChild(btn);
    });

    secimGuncelle();
  }

  function desteSec(id, el) {
    var i = secili.indexOf(id);
    if (i === -1) { secili.push(id); el.classList.add('selected'); el.setAttribute('aria-pressed', 'true'); }
    else { secili.splice(i, 1); el.classList.remove('selected'); el.setAttribute('aria-pressed', 'false'); }
    secimGuncelle();
  }

  function tumunuSec() {
    var hepsiSecili = secili.length === kullanilabilirDesteler().length;
    secili = hepsiSecili ? [] : kullanilabilirDesteler().map(function (d) { return d.id; });
    Array.prototype.forEach.call(document.querySelectorAll('.deste-card'), function (el) {
      var on = secili.indexOf(el.dataset.id) !== -1;
      el.classList.toggle('selected', on);
      el.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    secimGuncelle();
  }

  function kullanilabilirDesteler() {
    return desteler.filter(function (d) { return (d.kartlar || []).length > 0; });
  }

  function seciliKartlar() {
    var out = [];
    desteler.forEach(function (d) {
      if (secili.indexOf(d.id) === -1) return;
      (d.kartlar || []).forEach(function (k) {
        out.push({
          kimlik: kartKimlik(d.id, k.soru),
          soru: k.soru,
          cevap: k.cevap,
          kaynak: k.kaynak || '',
          desteAd: d.ad
        });
      });
    });
    return out;
  }

  function secimGuncelle() {
    var kartlar = seciliKartlar();
    var bilinmeyen = kartlar.filter(function (k) { return ilerleme[k.kimlik] !== 'bildim'; }).length;

    var say = $('#secim-say');
    if (say) {
      say.innerHTML = secili.length
        ? '<strong>' + secili.length + '</strong> deste · <strong>' + kartlar.length + '</strong> kart seçildi'
        : 'Çalışmak istediğiniz desteleri seçin.';
    }

    var hepsiBtn = $('#tumunu-sec');
    if (hepsiBtn) {
      hepsiBtn.textContent = (secili.length && secili.length === kullanilabilirDesteler().length)
        ? 'Seçimi Temizle' : 'Tümünü Seç';
    }

    var bilinmeyenBtn = document.querySelector('.opt-choice[data-kapsam="bilinmeyen"]');
    if (bilinmeyenBtn) {
      bilinmeyenBtn.textContent = 'Yalnızca bilemediklerim' + (secili.length ? ' (' + bilinmeyen + ')' : '');
    }

    var basla = $('#basla');
    if (basla) {
      var calisilacak = kapsam === 'bilinmeyen' ? bilinmeyen : kartlar.length;
      basla.disabled = calisilacak === 0;
      basla.textContent = calisilacak > 0 ? calisilacak + ' Kartla Çalışmaya Başla' : 'Çalışmaya Başla';
    }
  }

  /* ---------- çalışma ---------- */

  function basla() {
    var kartlar = seciliKartlar();
    if (kapsam === 'bilinmeyen') {
      kartlar = kartlar.filter(function (k) { return ilerleme[k.kimlik] !== 'bildim'; });
    }
    if (!kartlar.length) return;

    kuyruk = sira === 'karisik' ? karistir(kartlar.slice()) : kartlar.slice();
    indeks = 0;
    oturum = { bildim: 0, tekrar: 0 };

    $('#secim-ekrani').classList.add('hidden');
    $('#ozet-ekrani').classList.add('hidden');
    $('#calisma-ekrani').classList.remove('hidden');
    bolumeKaydir();
    kartGoster();
  }

  function kartGoster() {
    var k = kuyruk[indeks];
    if (!k) return;

    var onMetin = yon === 'soru' ? k.soru : k.cevap;
    var arkaMetin = yon === 'soru' ? k.cevap : k.soru;

    $('#kart').classList.remove('cevrildi');
    $('#kart-on-metin').innerHTML = onMetin;
    $('#kart-arka-metin').innerHTML = arkaMetin;
    $('#kart-kaynak').innerHTML = k.kaynak;
    $('#kart-on-etiket').textContent = yon === 'soru' ? 'Soru' : 'Cevap';
    $('#kart-arka-etiket').textContent = yon === 'soru' ? 'Cevap' : 'Soru';
    $('#kart-no-on').textContent = (indeks + 1) + ' / ' + kuyruk.length;
    $('#kart-no-arka').textContent = (indeks + 1) + ' / ' + kuyruk.length;
    $('#deste-etiket').textContent = k.desteAd;

    $('#sayac-mevcut').textContent = indeks + 1;
    $('#sayac-toplam').textContent = kuyruk.length;
    $('#ilerleme-dolu').style.width = (((indeks + 1) / kuyruk.length) * 100) + '%';

    var sonKart = indeks === kuyruk.length - 1;
    $('#onceki').disabled = indeks === 0;
    $('#sonraki-metin').textContent = sonKart ? 'Turu Bitir' : 'Sonraki';

    var durum = ilerleme[k.kimlik];
    $('#bildim').classList.toggle('aktif', durum === 'bildim');
    $('#tekrar').classList.toggle('aktif', durum === 'tekrar');

    $('#ist-bildim').textContent = oturum.bildim;
    $('#ist-tekrar').textContent = oturum.tekrar;
    $('#ist-kalan').textContent = kuyruk.length - (indeks + 1);
  }

  /* çalışma bölümünü, yapışkan başlığın altında kalacak şekilde görünür kıl */
  function bolumeKaydir() {
    var bolum = document.getElementById('kartlar');
    if (!bolum) return;
    var ust = bolum.getBoundingClientRect().top + window.pageYOffset - 84;
    window.scrollTo({ top: Math.max(0, ust), behavior: 'smooth' });
  }

  function cevir() { $('#kart').classList.toggle('cevrildi'); }

  function sonraki() {
    if (indeks < kuyruk.length - 1) { indeks++; kartGoster(); }
    else ozetGoster();
  }

  function onceki() { if (indeks > 0) { indeks--; kartGoster(); } }

  function isaretle(durum) {
    var k = kuyruk[indeks];
    if (!k) return;
    var oncekiDurum = ilerleme[k.kimlik];
    if (oncekiDurum !== durum) {
      if (durum === 'bildim') oturum.bildim++; else oturum.tekrar++;
      if (oncekiDurum === 'bildim') oturum.bildim = Math.max(0, oturum.bildim - 1);
      if (oncekiDurum === 'tekrar') oturum.tekrar = Math.max(0, oturum.tekrar - 1);
    }
    ilerleme[k.kimlik] = durum;
    ilerlemeYaz(ilerleme);
    setTimeout(sonraki, 160);
  }

  function yenidenKaristir() {
    kuyruk = karistir(kuyruk.slice());
    indeks = 0;
    kartGoster();
  }

  /* ---------- özet ---------- */

  function ozetGoster() {
    var bilinen = kuyruk.filter(function (k) { return ilerleme[k.kimlik] === 'bildim'; }).length;
    var oran = kuyruk.length ? Math.round((bilinen / kuyruk.length) * 100) : 0;

    $('#ozet-oran').textContent = '%' + oran;
    $('#ozet-toplam').textContent = kuyruk.length;
    $('#ozet-bildim').textContent = bilinen;
    $('#ozet-tekrar').textContent = kuyruk.length - bilinen;
    $('#ozet-alt').textContent = oran === 100
      ? 'Bu turdaki tüm kartları bildiniz.'
      : (kuyruk.length - bilinen) + ' kart tekrar bekliyor.';
    $('#tekrar-et').disabled = bilinen === kuyruk.length;

    $('#calisma-ekrani').classList.add('hidden');
    $('#ozet-ekrani').classList.remove('hidden');
    bolumeKaydir();
  }

  function bilemediklerim() {
    var kalan = kuyruk.filter(function (k) { return ilerleme[k.kimlik] !== 'bildim'; });
    if (!kalan.length) return;
    kuyruk = sira === 'karisik' ? karistir(kalan) : kalan;
    indeks = 0;
    oturum = { bildim: 0, tekrar: 0 };
    $('#ozet-ekrani').classList.add('hidden');
    $('#calisma-ekrani').classList.remove('hidden');
    kartGoster();
  }

  function bastanBasla() {
    indeks = 0;
    oturum = { bildim: 0, tekrar: 0 };
    if (sira === 'karisik') kuyruk = karistir(kuyruk.slice());
    $('#ozet-ekrani').classList.add('hidden');
    $('#calisma-ekrani').classList.remove('hidden');
    kartGoster();
  }

  function secimeDon() {
    $('#calisma-ekrani').classList.add('hidden');
    $('#ozet-ekrani').classList.add('hidden');
    $('#secim-ekrani').classList.remove('hidden');
    secimGuncelle();
    bolumeKaydir();
  }

  function ilerlemeSifirla() {
    if (!window.confirm('Kaydedilmiş tüm ilerleme (bildiğiniz/tekrar edeceğiniz kart işaretleri) silinecek. Onaylıyor musunuz?')) return;
    ilerleme = {};
    ilerlemeYaz(ilerleme);
    secimGuncelle();
  }

  /* ---------- olaylar ---------- */

  function baglan() {
    $('#tumunu-sec').addEventListener('click', tumunuSec);
    $('#basla').addEventListener('click', basla);
    $('#kart').addEventListener('click', cevir);
    $('#onceki').addEventListener('click', onceki);
    $('#sonraki').addEventListener('click', sonraki);
    $('#karistir').addEventListener('click', yenidenKaristir);
    $('#geri').addEventListener('click', secimeDon);
    $('#bildim').addEventListener('click', function () { isaretle('bildim'); });
    $('#tekrar').addEventListener('click', function () { isaretle('tekrar'); });
    $('#tekrar-et').addEventListener('click', bilemediklerim);
    $('#bastan').addEventListener('click', bastanBasla);
    $('#ozet-geri').addEventListener('click', secimeDon);
    $('#sifirla').addEventListener('click', ilerlemeSifirla);

    Array.prototype.forEach.call(document.querySelectorAll('.opt-choice'), function (el) {
      el.addEventListener('click', function () {
        var grup = el.dataset.grup;
        Array.prototype.forEach.call(document.querySelectorAll('.opt-choice[data-grup="' + grup + '"]'), function (k) {
          k.classList.remove('active');
        });
        el.classList.add('active');
        if (grup === 'sira') sira = el.dataset.sira;
        if (grup === 'yon') yon = el.dataset.yon;
        if (grup === 'kapsam') { kapsam = el.dataset.kapsam; secimGuncelle(); }
      });
    });

    /* klavye */
    document.addEventListener('keydown', function (e) {
      if ($('#calisma-ekrani').classList.contains('hidden')) return;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
      switch (e.key) {
        case ' ': e.preventDefault(); cevir(); break;
        case 'ArrowRight': sonraki(); break;
        case 'ArrowLeft': onceki(); break;
        case 's': case 'S': yenidenKaristir(); break;
        case '1': isaretle('bildim'); break;
        case '2': isaretle('tekrar'); break;
        case 'Escape': secimeDon(); break;
      }
    });

    /* dokunmatik kaydırma */
    var basX = 0, basY = 0;
    var kart = $('#kart');
    kart.addEventListener('touchstart', function (e) {
      basX = e.changedTouches[0].screenX; basY = e.changedTouches[0].screenY;
    }, { passive: true });
    kart.addEventListener('touchend', function (e) {
      var dx = basX - e.changedTouches[0].screenX;
      var dy = basY - e.changedTouches[0].screenY;
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) sonraki(); else onceki();
      }
    }, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!$('#deste-grid')) return;
    desteleriBas();
    baglan();
  });

})();
