<p align="center">
  <img src="assets/logo.png" width="120" alt="Cumhuriyet Avukatları">
</p>

<h1 align="center">Marka &amp; Patent Çalışma Kartları</h1>

<p align="center">
  Marka ve Patent Vekilliği Sınavı'na hazırlananlar için <strong>%100 tarayıcıda çalışan</strong>,
  ücretsiz ve açık kaynak soru–cevap kartları.<br>
  Üyelik yok, çerez yok, veri toplanmaz.
</p>

<p align="center">
  <strong>Canlı site:</strong> <a href="https://ersancetin.github.io/marka-patent-calisma-kartlari/">ersancetin.github.io/marka-patent-calisma-kartlari</a>
</p>

---

## Nedir?

Sınai mülkiyet mevzuatını **aktif hatırlama** yöntemiyle tekrar etmek için hazırlanmış çevrilebilir
soru–cevap kartlarıdır. Kartın ön yüzünde soru, arka yüzünde cevap ve varsa mevzuat dayanağı yer alır.

Cumhuriyet Avukatları'nın [PDF Araçları](https://ersancetin.github.io/cumhuriyet-avukatlari/) projesiyle
aynı marka kimliğini ve aynı ilkeyi paylaşır: **her şey kullanıcının tarayıcısında çalışır.**

## Özellikler

| Özellik | Açıklama |
|---|---|
| Çoklu deste seçimi | Birden çok konuyu tek turda birleştirerek çalışma |
| Kart çevirme | Tıklama, `Boşluk` tuşu veya dokunmatik |
| Bildim / Tekrar Et | Kart işaretleme; tur sonunda yalnızca bilemediklerini tekrar etme |
| Kalıcı ilerleme | İşaretler `localStorage`'da tutulur, sonraki oturumda korunur |
| Karışık / sıralı mod | Sırayı bozarak ezber etkisini kırma |
| Ters yön | "Cevap → Soru" yönüyle tanımdan kuruma gitme |
| Klavye ve kaydırma | `←` `→` `1` `2` `S` `Esc`, mobilde sağa–sola kaydırma |
| Tur özeti | Bilme oranı, sayaçlar ve tekrar seçenekleri |

## Desteler

| Deste | Kapsam |
|---|---|
| Marka Hukuku | Marka tanımı, tescil şartları, mutlak/nispi ret nedenleri, hükümsüzlük, iptal |
| Patent & Faydalı Model | Patentlenebilirlik, yenilik, buluş basamağı, istemler, süreçler |
| Tasarım & Coğrafi İşaret | Tasarım tescili, yenilik ve ayırt edicilik, menşe adı, mahreç işareti |
| Ortak Hükümler | Devir, lisans, rehin, haciz, sicil, hükümsüzlük ve iptalin etkisi |
| Tecavüz & Yaptırımlar | Tecavüz fiilleri, hukuk davaları, tazminat, cezai hükümler |
| Uluslararası Sistemler | Paris, TRIPS, Madrid, PCT, Lahey, EPC |
| Vekillik Mevzuatı & Usul | Vekillik sicili, TÜRKPATENT işlemleri, itiraz süreleri, YİDK, dava |
| Entegre Devre Topoğrafyaları | 5147 sayılı Kanun kapsamındaki koruma |

> **Not:** Depodaki mevcut kartlar, biçimi göstermek için konulmuş **örneklerdir**. Yayına almadan
> önce kendi içeriğinizle değiştirin ve mevzuat atıflarını güncel metinden doğrulayın.

## Kart eklemek

Tüm içerik tek dosyadadır: **`data/desteler.js`**. Derleme adımı yoktur; dosyayı düzenleyip
sayfayı yenilemeniz yeterlidir.

```js
{
  soru:   "Marka tescilinin koruma süresi ne kadardır?",
  cevap:  "Başvuru tarihinden itibaren <b>on yıldır</b>; onar yıllık dönemlerle yenilenir.",
  kaynak: "SMK m.23"    // isteğe bağlı
}
```

Ayrıntılı anlatım, yeni deste ekleme ve sık yapılan hatalar için: [Kart Ekleme Rehberi](katki.html)
(canlı sitede `/katki.html`).

## Veri güvenliği ve KVKK

- Site **kişisel veri toplamaz**; çerez, analitik ve izleme kodu içermez.
- "Bildim / Tekrar Et" işaretleri yalnızca tarayıcının yerel deposunda (`mpck.ilerleme.v1`) tutulur,
  hiçbir sunucuya gönderilmez ve "İlerlemeyi sıfırla" ile silinebilir.
- İddia doğrulanabilir: geliştirici araçlarının "Ağ" sekmesinde, site dosyaları dışında hiçbir
  isteğin gitmediği görülebilir.
- Ayrıntılar: [Gizlilik & KVKK Bildirimi](gizlilik.html)

## Teknik yapı

Derleme adımı olmayan statik bir sitedir (HTML + CSS + vanilla JS). Çalışma anında hiçbir CDN'e
veya dış kaynağa bağlanılmaz; ikonlar satır içi SVG'dir.

```
index.html            — deste seçimi, çalışma ekranı, tur özeti
katki.html            — kart ekleme rehberi
gizlilik.html         — gizlilik & KVKK bildirimi
data/desteler.js      — KART İÇERİĞİ (düzenlenecek tek dosya)
assets/css/style.css  — marka katmanı (header, hero, bölümler, footer)
assets/css/kartlar.css— kart arayüzü
assets/js/kartlar.js  — kart motoru
assets/js/common.js   — mobil menü
```

### Yerelde çalıştırma

```bash
python3 -m http.server 8000
# http://localhost:8000
```

### Yayın

Depo, `.github/workflows/deploy.yml` üzerinden GitHub Pages'e otomatik yayınlanır.

## Sorumluluk

Kartlar bir **çalışma aracıdır**; hukuki görüş, danışmanlık veya güncel mevzuat metni yerine geçmez.
Mevzuat değişebilir; karar verirken daima güncel metne ve içtihada başvurunuz.

## Katkı

Kart önerileri, düzeltmeler ve hata bildirimleri için
[Issues](https://github.com/ersancetin/marka-patent-calisma-kartlari/issues) sayfasını
kullanabilirsiniz.

## Lisans

[MIT](LICENSE) — Cumhuriyet Avukatları tarafından meslektaş dayanışması için geliştirilmiştir.
