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

  var moduller = (window.KARTLAR && window.KARTLAR.moduller) || [];
  var desteler = [];   // tüm konular, modül bilgisiyle düzleştirilmiş
  moduller.forEach(function (mo) {
    (mo.konular || []).forEach(function (k) {
      desteler.push({
        id: k.kod, kod: k.kod, ad: k.ad, ikon: k.ikon,
        modulKod: mo.kod, modulAd: mo.ad, kartlar: k.kartlar || []
      });
    });
  });
  var secili = [];          // seçili deste id'leri
  var sira = 'karisik';     // karisik | sirali
  var yon = 'soru';         // soru | cevap  (kartın ön yüzünde ne yazacağı)
  var kapsam = 'tumu';      // tumu | bilinmeyen | sinav
  var turBoyu = 50;         // bir turda çalışılacak en fazla kart (0 = sınırsız)
  var havuz = [];           // tura girmeye uygun tüm kartlar (sıralanmış hâli)
  var havuzBas = 0;         // içinde bulunulan turun havuzdaki başlangıç sırası
  var havuzSon = 0;         // içinde bulunulan turun havuzdaki bitiş sırası
  var kuyruk = [];          // içinde bulunulan turun kartları
  var indeks = 0;
  var ilerleme = ilerlemeOku();

  /* ---------- deste seçimi ekranı ---------- */

  function desteleriBas() {
    var kap = $('#deste-grid');
    if (!kap) return;

    var toplam = desteler.reduce(function (n, d) { return n + d.kartlar.length; }, 0);
    if (!toplam) {
      kap.innerHTML = '';
      $('#bos-uyari').classList.remove('hidden');
      $('#alt-bar').classList.add('hidden');
      karmaGuncelle();
      return;
    }

    var sinavSay = desteler.reduce(function (n, d) {
      return n + d.kartlar.filter(function (k) { return !!k.yil; }).length;
    }, 0);
    $('#sayfa-alt').innerHTML =
      'Vekillik sınavı konu taksonomisine göre düzenlenmiş <b>' + toplam + ' soru–cevap kartı</b>. ' +
      'Bunların <b>' + sinavSay + ' tanesi</b> çıkmış sınav sorularından türetilmiştir.';

    kap.innerHTML = '';
    moduller.forEach(function (mo) {
      var konular = (mo.konular || []).filter(function (k) { return (k.kartlar || []).length > 0; });
      if (!konular.length) return;

      var kartSayisi = konular.reduce(function (n, k) { return n + k.kartlar.length; }, 0);

      var bolum = document.createElement('section');
      bolum.className = 'modul';
      bolum.dataset.modul = mo.kod;

      var bas = document.createElement('button');
      bas.type = 'button';
      bas.className = 'modul-bas';
      bas.setAttribute('aria-expanded', 'false');
      bas.innerHTML =
        '<span class="modul-kod">' + mo.kod + '</span>' +
        '<span class="modul-ad">' + mo.ad + '</span>' +
        '<span class="modul-rozet hidden"></span>' +
        '<span class="modul-say">' + konular.length + ' konu · ' + kartSayisi + ' kart</span>' +
        '<svg class="modul-ok" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
        'stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
      bas.addEventListener('click', function () { modulAcKapa(bolum); });
      bolum.appendChild(bas);

      var govde = document.createElement('div');
      govde.className = 'modul-govde';

      var arac = document.createElement('div');
      arac.className = 'modul-arac';
      var hepsiBtn = document.createElement('button');
      hepsiBtn.type = 'button';
      hepsiBtn.className = 'link-btn modul-hepsi';
      hepsiBtn.textContent = 'Modülün tümünü seç';
      hepsiBtn.addEventListener('click', function () { modulSec(mo.kod); });
      arac.appendChild(hepsiBtn);
      govde.appendChild(arac);

      var izgara = document.createElement('div');
      izgara.className = 'deste-grid';
      konular.forEach(function (k) { izgara.appendChild(desteKarti(k)); });
      govde.appendChild(izgara);

      bolum.appendChild(govde);
      kap.appendChild(bolum);
    });

    secimGuncelle();
  }

  function modulAcKapa(bolum, zorla) {
    var ac = typeof zorla === 'boolean' ? zorla : !bolum.classList.contains('acik');
    bolum.classList.toggle('acik', ac);
    bolum.querySelector('.modul-bas').setAttribute('aria-expanded', ac ? 'true' : 'false');
    tumunuAcGuncelle();
  }

  /* modüldeki konuların hepsi seçiliyse kaldırır, değilse hepsini seçer */
  function modulSec(modulKod) {
    var idler = desteler
      .filter(function (d) { return d.modulKod === modulKod && d.kartlar.length; })
      .map(function (d) { return d.id; });
    var hepsi = idler.every(function (id) { return secili.indexOf(id) !== -1; });
    idler.forEach(function (id) {
      var i = secili.indexOf(id);
      if (hepsi && i !== -1) secili.splice(i, 1);
      else if (!hepsi && i === -1) secili.push(id);
    });
    kartlariSenkronla();
    secimGuncelle();
  }

  function desteKarti(k) {
    var adet = (k.kartlar || []).length;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'deste-card';
    btn.dataset.id = k.kod;
    btn.setAttribute('aria-pressed', 'false');
    btn.innerHTML =
      '<span class="deste-icon">' + ikonSvg(k.ikon, 19) + '</span>' +
      '<span class="deste-body">' +
        '<h3><span class="deste-kod">' + k.kod + '</span>' + k.ad + '</h3>' +
        '<span class="deste-meta">' + adet + ' kart</span>' +
      '</span>' +
      '<span class="deste-check">' +
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" ' +
        'stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg>' +
      '</span>';
    btn.addEventListener('click', function () { desteSec(k.kod); });
    return btn;
  }

  function desteSec(id) {
    var i = secili.indexOf(id);
    if (i === -1) secili.push(id); else secili.splice(i, 1);
    kartlariSenkronla();
    secimGuncelle();
  }

  /* seçili dizisini ekrandaki kartlara yansıtır */
  function kartlariSenkronla() {
    Array.prototype.forEach.call(document.querySelectorAll('.deste-card'), function (el) {
      var on = secili.indexOf(el.dataset.id) !== -1;
      el.classList.toggle('selected', on);
      el.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function tumunuSec() {
    var hepsiSecili = secili.length === kullanilabilirDesteler().length;
    secili = hepsiSecili ? [] : kullanilabilirDesteler().map(function (d) { return d.id; });
    kartlariSenkronla();
    secimGuncelle();
  }

  function tumunuAcGuncelle() {
    var btn = $('#tumunu-ac');
    if (!btn) return;
    var bolumler = document.querySelectorAll('.modul');
    if (!bolumler.length) return;
    var acikSayisi = document.querySelectorAll('.modul.acik').length;
    btn.textContent = acikSayisi === bolumler.length ? 'Tümünü kapat' : 'Tümünü aç';
  }

  function tumunuAc() {
    var bolumler = document.querySelectorAll('.modul');
    var hepsiAcik = document.querySelectorAll('.modul.acik').length === bolumler.length;
    Array.prototype.forEach.call(bolumler, function (b) { modulAcKapa(b, !hepsiAcik); });
  }

  function kullanilabilirDesteler() {
    return desteler.filter(function (d) { return (d.kartlar || []).length > 0; });
  }

  /* karma tur: kapsamı "tüm kartlar", sırayı "karışık" yapar,
     bütün konuları seçip turu doğrudan başlatır */
  function karmaBasla() {
    kapsam = 'tumu';
    sira = 'karisik';
    Array.prototype.forEach.call(document.querySelectorAll('.opt-choice'), function (el) {
      if (el.dataset.grup === 'kapsam') el.classList.toggle('active', el.dataset.kapsam === 'tumu');
      if (el.dataset.grup === 'sira') el.classList.toggle('active', el.dataset.sira === 'karisik');
    });
    secili = kullanilabilirDesteler().map(function (d) { return d.id; });
    kartlariSenkronla();
    secimGuncelle();
    if (!$('#basla').disabled) basla();
  }

  function karmaGuncelle() {
    var btn = $('#karma');
    if (!btn) return;
    var toplam = desteler.reduce(function (n, d) { return n + d.kartlar.length; }, 0);
    btn.disabled = toplam === 0;
    $('#karma-alt').textContent = toplam
      ? 'Tüm konulardan karışık ' + (turBoyu ? Math.min(turBoyu, toplam) : toplam) + ' kart'
      : 'Kart bulunamadı';
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
          alt: k.alt || '',
          yil: k.yil || '',
          desteAd: d.kod + ' · ' + d.ad
        });
      });
    });
    return out;
  }

  function secimGuncelle() {
    var kartlar = seciliKartlar();
    var bilinmeyen = kartlar.filter(function (k) { return ilerleme[k.kimlik] !== 'bildim'; }).length;
    var sinav = kartlar.filter(function (k) { return !!k.yil; }).length;

    /* modül rozetleri ve seçili görünümü */
    Array.prototype.forEach.call(document.querySelectorAll('.modul'), function (bolum) {
      var kod = bolum.dataset.modul;
      var idler = desteler
        .filter(function (d) { return d.modulKod === kod && d.kartlar.length; })
        .map(function (d) { return d.id; });
      var n = idler.filter(function (id) { return secili.indexOf(id) !== -1; }).length;
      var rozet = bolum.querySelector('.modul-rozet');
      rozet.textContent = (n === idler.length) ? 'tümü seçili' : n + '/' + idler.length + ' seçili';
      rozet.classList.toggle('hidden', n === 0);
      bolum.classList.toggle('secili', n > 0);
      var hepsiBtn = bolum.querySelector('.modul-hepsi');
      if (hepsiBtn) hepsiBtn.textContent = (n === idler.length) ? 'Modül seçimini kaldır' : 'Modülün tümünü seç';
    });

    var calisilacak = kartlar.length;
    if (kapsam === 'bilinmeyen') calisilacak = bilinmeyen;
    else if (kapsam === 'sinav') calisilacak = sinav;
    var turluk = turBoyu ? Math.min(turBoyu, calisilacak) : calisilacak;

    var say = $('#secim-say');
    var not = $('#secim-not');
    if (!secili.length) {
      say.textContent = 'Konu seçilmedi';
      not.textContent = 'Çalışmak istediğiniz konuları seçin';
    } else {
      say.textContent = secili.length + ' konu · ' + calisilacak + ' kart';
      not.textContent = calisilacak === 0
        ? kapsamAdi() + ' kapsamında kart kalmadı'
        : (turluk < calisilacak
            ? 'Bu turda ' + turluk + ' kart · ' + kapsamAdi()
            : kapsamAdi());
    }

    var basla = $('#basla');
    basla.disabled = calisilacak === 0;
    basla.textContent = calisilacak > 0 ? turluk + ' Kartla Başla' : 'Çalışmaya Başla';

    var hepsiBtn = $('#tumunu-sec');
    if (hepsiBtn) {
      hepsiBtn.textContent = (secili.length && secili.length === kullanilabilirDesteler().length)
        ? 'Seçimi temizle' : 'Tüm konuları seç';
    }
    karmaGuncelle();
    tumunuAcGuncelle();
  }

  function kapsamAdi() {
    if (kapsam === 'bilinmeyen') return 'Bilemediklerim';
    if (kapsam === 'sinav') return 'Çıkmış sorular';
    return 'Tüm kartlar';
  }

  function ayarAcKapa() {
    var panel = $('#ayar-panel');
    var btn = $('#ayar-ac');
    var ac = panel.classList.contains('hidden');
    panel.classList.toggle('hidden', !ac);
    btn.classList.toggle('acik', ac);
    btn.setAttribute('aria-expanded', ac ? 'true' : 'false');
  }

  /* ---------- çalışma ---------- */

  function basla() {
    var kartlar = seciliKartlar();
    if (kapsam === 'bilinmeyen') {
      kartlar = kartlar.filter(function (k) { return ilerleme[k.kimlik] !== 'bildim'; });
    } else if (kapsam === 'sinav') {
      kartlar = kartlar.filter(function (k) { return !!k.yil; });
    }
    if (!kartlar.length) return;

    havuz = sira === 'karisik' ? karistir(kartlar.slice()) : kartlar.slice();
    havuzBas = 0;
    partiYukle();

    $('#secim-ekrani').classList.add('hidden');
    $('#ozet-ekrani').classList.add('hidden');
    $('#calisma-ekrani').classList.remove('hidden');
    altBar(false);
    bolumeKaydir();
    kartGoster();
  }

  function altBar(goster) {
    $('#alt-bar').classList.toggle('hidden', !goster);
    document.body.classList.toggle('bar-yok', !goster);
  }

  /* havuzun havuzBas'tan başlayan bir turluk dilimini kuyruğa alır */
  function partiYukle() {
    havuzSon = turBoyu ? Math.min(havuzBas + turBoyu, havuz.length) : havuz.length;
    kuyruk = havuz.slice(havuzBas, havuzSon);
    indeks = 0;
  }

  /* kuyruk tur içinde daralabildiği için havuzSon üzerinden hesaplanır */
  function kalanHavuz() {
    return Math.max(0, havuz.length - havuzSon);
  }

  function sonrakiParti() {
    if (!kalanHavuz()) return;
    havuzBas = havuzSon;
    partiYukle();
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
    $('#deste-etiket').textContent = k.desteAd;
    $('#kart-alt-on').textContent = k.alt;
    $('#kart-alt-arka').textContent = k.alt;
    var yilEt = k.yil ? '<span class="kart-yil">' + k.yil + ' sınavı</span>' : '';
    $('#kart-yil-on').innerHTML = yilEt;
    $('#kart-yil-arka').innerHTML = yilEt;

    $('#sayac-mevcut').textContent = indeks + 1;
    $('#sayac-toplam').textContent = kuyruk.length;
    $('#ilerleme-dolu').style.width = (((indeks + 1) / kuyruk.length) * 100) + '%';

    var sonKart = indeks === kuyruk.length - 1;
    $('#onceki').disabled = indeks === 0;
    $('#sonraki-metin').textContent = sonKart ? 'Turu Bitir' : 'Sonraki';

    var durum = ilerleme[k.kimlik];
    $('#bildim').classList.toggle('aktif', durum === 'bildim');
    $('#tekrar').classList.toggle('aktif', durum === 'tekrar');
  }

  function bolumeKaydir() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    var alt = oran === 100
      ? kuyruk.length + ' kartın tamamını bildiniz.'
      : bilinen + ' / ' + kuyruk.length + ' kart bilindi · ' + (kuyruk.length - bilinen) + ' kart tekrar bekliyor.';
    var kalan = kalanHavuz();
    if (kalan) alt += ' Seçiminizde ' + kalan + ' kart daha var.';
    $('#ozet-alt').textContent = alt;
    $('#tekrar-et').disabled = bilinen === kuyruk.length;

    var ileri = $('#sonraki-parti');
    if (ileri) {
      ileri.classList.toggle('hidden', kalan === 0);
      ileri.textContent = 'Sonraki ' + Math.min(kalan, turBoyu || kalan) + ' Kart';
      /* iki kırmızı buton yan yana durmasın: sıradaki parti varsa vurgu onda kalsın */
      $('#tekrar-et').classList.toggle('btn-primary', kalan === 0);
      $('#tekrar-et').classList.toggle('btn-outline', kalan > 0);
    }

    $('#calisma-ekrani').classList.add('hidden');
    $('#ozet-ekrani').classList.remove('hidden');
    bolumeKaydir();
  }

  function bilemediklerim() {
    var kalan = kuyruk.filter(function (k) { return ilerleme[k.kimlik] !== 'bildim'; });
    if (!kalan.length) return;
    kuyruk = sira === 'karisik' ? karistir(kalan) : kalan;
    indeks = 0;
    $('#ozet-ekrani').classList.add('hidden');
    $('#calisma-ekrani').classList.remove('hidden');
    kartGoster();
  }

  function bastanBasla() {
    indeks = 0;
    if (sira === 'karisik') kuyruk = karistir(kuyruk.slice());
    $('#ozet-ekrani').classList.add('hidden');
    $('#calisma-ekrani').classList.remove('hidden');
    kartGoster();
  }

  function secimeDon() {
    $('#calisma-ekrani').classList.add('hidden');
    $('#ozet-ekrani').classList.add('hidden');
    $('#secim-ekrani').classList.remove('hidden');
    altBar(true);
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
    $('#tumunu-ac').addEventListener('click', tumunuAc);
    $('#ayar-ac').addEventListener('click', ayarAcKapa);
    $('#karma').addEventListener('click', karmaBasla);
    $('#basla').addEventListener('click', basla);
    $('#kart').addEventListener('click', cevir);
    $('#onceki').addEventListener('click', onceki);
    $('#sonraki').addEventListener('click', sonraki);
    $('#karistir').addEventListener('click', yenidenKaristir);
    $('#geri').addEventListener('click', secimeDon);
    $('#bildim').addEventListener('click', function () { isaretle('bildim'); });
    $('#tekrar').addEventListener('click', function () { isaretle('tekrar'); });
    $('#tekrar-et').addEventListener('click', bilemediklerim);
    $('#sonraki-parti').addEventListener('click', sonrakiParti);
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
        if (grup === 'boy') { turBoyu = parseInt(el.dataset.boy, 10) || 0; secimGuncelle(); }
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
