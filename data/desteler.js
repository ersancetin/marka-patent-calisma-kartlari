/* ============================================================
   Marka & Patent Çalışma Kartları — İÇERİK DOSYASI
   ------------------------------------------------------------
   Kartları BURADAN düzenleyin. Başka hiçbir dosyaya dokunmanıza
   gerek yoktur; kaydedip sayfayı yenilemeniz yeterlidir.

   Bir kartın yapısı:

     {
       soru:   "Kartın ön yüzünde görünecek soru.",
       cevap:  "Arka yüzünde görünecek cevap.",
       kaynak: "SMK m.4"        // isteğe bağlı, boş bırakılabilir
     }

   Notlar:
   · Metin içinde <b>kalın</b> ve <br> kullanabilirsiniz.
   · Metinde çift tırnak (") kullanacaksanız \" biçiminde kaçırın
     veya tek tırnaklı '...' dizgi tercih edin.
   · Yeni deste eklemek için diziye yeni bir { ... } bloğu ekleyin.
     ikon: marka | patent | tasarim | cografi | belge | dunya |
           kalkan | devre  (tanımsız ad verilirse varsayılan ikon)

   UYARI: Aşağıdaki kartlar biçimi göstermek için konulmuş
   ÖRNEKLERDİR. Yayına almadan önce kendi içeriğinizle
   değiştirin ve mevzuat atıflarını güncel metinden doğrulayın.
   ============================================================ */

window.KARTLAR = {

  meta: {
    surum: '0.1',
    guncelleme: '2026-07-29'
  },

  desteler: [

    /* ---------------------------------------------------- */
    {
      id: 'marka-hukuku',
      ad: 'Marka Hukuku',
      aciklama: 'Marka tanımı, tescil şartları, mutlak ve nispi ret nedenleri, hükümsüzlük ve iptal.',
      ikon: 'marka',
      kartlar: [
        {
          soru: 'Bir işaretin marka olabilmesi için aranan iki temel şart nedir?',
          cevap: 'İşaretin, (1) bir teşebbüsün mallarının veya hizmetlerinin diğer teşebbüslerin mal veya hizmetlerinden <b>ayırt edilmesini sağlaması</b> ve (2) marka sahibine sağlanan korumanın konusunun açık ve kesin olarak anlaşılmasını sağlayabilecek şekilde <b>sicilde gösterilebilir olması</b> gerekir.',
          kaynak: 'SMK m.4'
        },
        {
          soru: 'Marka tescilinin koruma süresi ne kadardır ve nasıl yenilenir?',
          cevap: 'Koruma süresi <b>başvuru tarihinden itibaren on yıldır</b>. Bu süre, onar yıllık dönemler hâlinde yenilenir.',
          kaynak: 'SMK m.23'
        },
        {
          soru: 'Marka başvurusunun Bültende yayımlanmasından sonra üçüncü kişilerin itiraz süresi ne kadardır?',
          cevap: '<b>Yayımdan itibaren iki ay</b> içinde itiraz edilebilir.',
          kaynak: 'SMK m.18'
        },
        {
          soru: 'Tescilli bir markanın kullanılmaması nedeniyle iptal edilebilmesi için aranan süre nedir?',
          cevap: 'Markanın, <b>tescil tarihinden itibaren beş yıl</b> içinde haklı bir sebep olmadan Türkiye’de ciddi biçimde kullanılmaması ya da kullanıma beş yıl kesintisiz ara verilmesi hâlinde iptaline karar verilir.',
          kaynak: 'SMK m.9, m.26'
        },
        {
          soru: 'Mutlak ret nedenleri ile nispi ret nedenleri arasındaki temel fark nedir?',
          cevap: '<b>Mutlak ret nedenleri</b> (m.5) Kurum tarafından resen incelenir ve kamu yararını korur. <b>Nispi ret nedenleri</b> (m.6) ise önceki hak sahiplerinin menfaatini korur; kural olarak resen değil, ilgililerin itirazı üzerine incelenir.',
          kaynak: 'SMK m.5, m.6'
        }
      ]
    },

    /* ---------------------------------------------------- */
    {
      id: 'patent-faydali-model',
      ad: 'Patent & Faydalı Model',
      aciklama: 'Patentlenebilirlik şartları, yenilik ve buluş basamağı, istemler, süreçler ve lisanslar.',
      ikon: 'patent',
      kartlar: [
        {
          soru: 'Patent verilebilmesi için buluşta aranan üç şart nedir?',
          cevap: 'Buluşun <b>yeni</b> olması, <b>buluş basamağı</b> içermesi ve <b>sanayiye uygulanabilir</b> olması gerekir.',
          kaynak: 'SMK m.82'
        },
        {
          soru: 'Patent ve faydalı modelin koruma süreleri nedir?',
          cevap: 'Patentin koruma süresi <b>başvuru tarihinden itibaren yirmi yıl</b>, faydalı modelin koruma süresi <b>başvuru tarihinden itibaren on yıldır</b>. Bu süreler uzatılamaz.',
          kaynak: 'SMK m.101'
        },
        {
          soru: 'Faydalı model korumasında patentten farklı olarak hangi şart aranmaz?',
          cevap: '<b>Buluş basamağı</b> şartı aranmaz. Faydalı model için buluşun yeni olması ve sanayiye uygulanabilir olması yeterlidir.',
          kaynak: 'SMK m.142'
        },
        {
          soru: 'Patent başvurusunda korumanın kapsamı neye göre belirlenir?',
          cevap: 'Koruma kapsamı <b>istemlerle</b> belirlenir. İstemler tarifname ve resimler esas alınarak yorumlanır.',
          kaynak: 'SMK m.89'
        },
        {
          soru: 'Paris Sözleşmesi uyarınca patent ve faydalı model başvuruları için rüçhan süresi ne kadardır?',
          cevap: 'Patent ve faydalı modelde <b>on iki ay</b>, marka ve tasarımda ise <b>altı aydır</b>.',
          kaynak: 'Paris Söz. m.4'
        }
      ]
    },

    /* ---------------------------------------------------- */
    {
      id: 'tasarim-cografi-isaret',
      ad: 'Tasarım & Coğrafi İşaret',
      aciklama: 'Tasarım tescili, yenilik ve ayırt edicilik; menşe adı, mahreç işareti ve geleneksel ürün adı.',
      ikon: 'tasarim',
      kartlar: [
        {
          soru: 'Tescilli tasarımın koruma süresi ne kadardır?',
          cevap: 'Tescilli tasarımın koruma süresi <b>başvuru tarihinden itibaren beş yıldır</b>. Bu süre beşer yıllık dönemler hâlinde yenilenmek suretiyle <b>toplam yirmi beş yıla</b> kadar uzatılabilir.',
          kaynak: 'SMK m.69'
        },
        {
          soru: 'Tasarımın korunabilmesi için aranan iki şart nedir?',
          cevap: 'Tasarımın <b>yeni</b> olması ve <b>ayırt edici niteliğe</b> sahip olması gerekir.',
          kaynak: 'SMK m.56'
        },
        {
          soru: 'Tescilsiz tasarım ne kadar süreyle korunur?',
          cevap: 'Tescilsiz tasarımlar, <b>kamuya ilk sunulduğu tarihten itibaren üç yıl</b> süreyle korunur.',
          kaynak: 'SMK m.69'
        },
        {
          soru: 'Menşe adı ile mahreç işareti arasındaki temel fark nedir?',
          cevap: '<b>Menşe adında</b> üretim, işleme ve diğer işlemlerin <b>tamamı</b> belirlenen coğrafi alan sınırları içinde gerçekleşir. <b>Mahreç işaretinde</b> ise bu işlemlerden <b>en az biri</b> belirlenen coğrafi alanda gerçekleşir; ürün bu alan dışında da üretilebilir.',
          kaynak: 'SMK m.34'
        },
        {
          soru: 'Coğrafi işaret tescilinin koruma süresi ne kadardır?',
          cevap: 'Coğrafi işaret ve geleneksel ürün adı tescili <b>süreye bağlı değildir</b>; yenileme gerektirmez. Koruma, tescil ile başlar ve şartların ortadan kalkması hâlinde tescilin iptaliyle sona erer.',
          kaynak: 'SMK m.34 vd.'
        }
      ]
    },

    /* ---------------------------------------------------- */
    {
      id: 'ortak-hukumler',
      ad: 'Ortak Hükümler',
      aciklama: 'Sınai mülkiyet haklarında devir, lisans, rehin, haciz, birlikte hak sahipliği ve sona erme.',
      ikon: 'belge',
      kartlar: [
        {
          soru: 'Sınai mülkiyet hakkının devri hangi şekil şartına tabidir?',
          cevap: 'Devir sözleşmesinin <b>yazılı</b> yapılması ve tarafların <b>imzalarının noterce onaylanması</b> gerekir. Aksi hâlde devir geçersizdir.',
          kaynak: 'SMK m.148'
        },
        {
          soru: 'İnhisari lisans ile inhisari olmayan lisans arasındaki fark nedir?',
          cevap: '<b>İnhisari lisansta</b> hak sahibi başkasına lisans veremez ve hakkını açıkça saklı tutmadıkça kendisi de kullanamaz. <b>İnhisari olmayan lisansta</b> hak sahibi hakkı kendisi kullanabileceği gibi başkalarına da lisans verebilir. Sözleşmede aksi kararlaştırılmamışsa lisans inhisari değildir.',
          kaynak: 'SMK m.24, m.125'
        },
        {
          soru: 'Sınai mülkiyet hakkı üzerindeki hukuki işlemlerin üçüncü kişilere karşı ileri sürülebilmesi için ne gerekir?',
          cevap: 'İşlemin <b>sicile kaydedilmesi</b> gerekir. Sicile kaydedilmeyen hukuki işlemler, iyiniyetli üçüncü kişilere karşı ileri sürülemez.',
          kaynak: 'SMK m.148'
        },
        {
          soru: 'Sınai mülkiyet hakkının hükümsüz kılınmasının etkisi ne zamandan itibaren doğar?',
          cevap: 'Hükümsüzlük kararı <b>geçmişe etkilidir</b>; hakkın koruma süresince doğmuş sayılan tüm hükümleri baştan itibaren geçersiz sayılır. Buna karşılık <b>iptal kararı</b>, kural olarak <b>iptal talebinin Kuruma sunulduğu tarihten</b> itibaren etkilidir.',
          kaynak: 'SMK m.27, m.28'
        }
      ]
    },

    /* ---------------------------------------------------- */
    {
      id: 'tecavuz-yaptirimlar',
      ad: 'Tecavüz & Yaptırımlar',
      aciklama: 'Hakka tecavüz sayılan fiiller, hukuk davaları, tazminat, zamanaşımı ve cezai hükümler.',
      ikon: 'kalkan',
      kartlar: [
        {
          soru: 'Marka hakkına tecavüz hâlinde hak sahibinin açabileceği hukuk davaları nelerdir?',
          cevap: 'Başlıca; <b>tecavüzün tespiti</b>, <b>muhtemel tecavüzün önlenmesi</b>, <b>tecavüzün durdurulması ve giderilmesi (ref’i)</b>, <b>maddi ve manevi tazminat</b>, ürünlere el konulması, mülkiyet hakkı tanınması, imha ve <b>kararın ilanı</b> talepleridir.',
          kaynak: 'SMK m.149'
        },
        {
          soru: 'Sınai mülkiyet hakkına tecavüzde yoksun kalınan kazanç hangi yöntemlerle hesaplanabilir?',
          cevap: 'Zarar gören, üç seçenekten birini seçer: (1) tecavüz olmasaydı hak sahibinin elde edebileceği <b>muhtemel gelir</b>, (2) tecavüz edenin <b>elde ettiği net kazanç</b>, (3) tecavüz eden lisans alsaydı ödenmesi gereken <b>lisans bedeli</b>.',
          kaynak: 'SMK m.151'
        },
        {
          soru: 'Sınai mülkiyet hakkına tecavüz suçları bakımından yalnızca hangi hak türü cezai korumadan yararlanır?',
          cevap: 'Yalnızca <b>marka hakkına</b> tecavüz fiilleri için hapis ve adli para cezası öngörülmüştür. Patent, faydalı model, tasarım ve coğrafi işaret ihlalleri için SMK’da suç düzenlenmemiştir.',
          kaynak: 'SMK m.30'
        },
        {
          soru: 'Marka hakkına tecavüz suçlarının soruşturulması hangi şarta bağlıdır?',
          cevap: 'Bu suçların soruşturulması ve kovuşturulması <b>şikâyete bağlıdır</b>.',
          kaynak: 'SMK m.30'
        }
      ]
    },

    /* ---------------------------------------------------- */
    {
      id: 'uluslararasi-sistemler',
      ad: 'Uluslararası Sistemler',
      aciklama: 'Paris Sözleşmesi, TRIPS, Madrid Protokolü, PCT, Lahey ve Avrupa Patent Sözleşmesi.',
      ikon: 'dunya',
      kartlar: [
        {
          soru: 'Markaların uluslararası tescili hangi sistemle yapılır?',
          cevap: '<b>Madrid Sistemi</b> ile (Madrid Anlaşması ve Madrid Protokolü). Başvuru, menşe ofis aracılığıyla <b>WIPO Uluslararası Bürosuna</b> iletilir.',
          kaynak: 'Madrid Protokolü'
        },
        {
          soru: 'PCT nedir ve ne sağlar?',
          cevap: '<b>Patent İşbirliği Anlaşması</b>’dır. Tek bir uluslararası başvuruyla çok sayıda üye ülkede patent koruması talep etme imkânı verir; ancak PCT “uluslararası patent” vermez, ulusal/bölgesel aşamada koruma yine her ülkenin ofisince kararlaştırılır.',
          kaynak: 'PCT'
        },
        {
          soru: 'Tasarımların uluslararası tescili hangi anlaşmayla yapılır?',
          cevap: '<b>Lahey (Hague) Anlaşması</b> ile; WIPO nezdinde tek başvuruyla birden çok ülkede tasarım tescili talep edilebilir.',
          kaynak: 'Lahey Anlaşması'
        },
        {
          soru: 'Paris Sözleşmesi’nin öngördüğü iki temel ilke nedir?',
          cevap: '<b>Ulusal muamele (eşit işlem) ilkesi</b> ve <b>rüçhan hakkı</b> ilkesidir.',
          kaynak: 'Paris Söz.'
        }
      ]
    },

    /* ---------------------------------------------------- */
    {
      id: 'vekillik-mevzuati',
      ad: 'Vekillik Mevzuatı & Usul',
      aciklama: 'Vekillik sınavı ve sicili, TÜRKPATENT işlemleri, itiraz süreleri, YİDK ve dava usulü.',
      ikon: 'kalem',
      kartlar: [
        {
          soru: 'Yerleşim yeri yurt dışında bulunan kişiler TÜRKPATENT nezdindeki işlemlerini nasıl yürütür?',
          cevap: 'İşlemlerini <b>zorunlu olarak vekil aracılığıyla</b> yürütürler.',
          kaynak: 'SMK m.160'
        },
        {
          soru: 'Kurum kararlarına karşı Yeniden İnceleme ve Değerlendirme Kurulu (YİDK) nezdinde itiraz süresi ne kadardır?',
          cevap: 'Kararın bildirim tarihinden itibaren <b>iki ay</b> içinde itiraz edilebilir.',
          kaynak: 'SMK m.20'
        },
        {
          soru: 'YİDK’nın nihai kararlarına karşı dava hangi mahkemede ve hangi süre içinde açılır?',
          cevap: 'Kararın bildiriminden itibaren <b>iki ay</b> içinde <b>Ankara Fikrî ve Sınaî Haklar Hukuk Mahkemesinde</b> dava açılır.',
          kaynak: 'SMK m.172'
        },
        {
          soru: 'Sınai mülkiyet vekili olarak faaliyet gösterebilmenin ön koşulu nedir?',
          cevap: 'Vekillik sınavında başarılı olmak ve <b>Kurum nezdinde tutulan Sicile kayıt olmak</b> gerekir. Sicile kayıtlı olmayan kişiler vekil olarak işlem yapamaz.',
          kaynak: 'SMK m.180'
        }
      ]
    },

    /* ---------------------------------------------------- */
    {
      id: 'entegre-devre',
      ad: 'Entegre Devre Topoğrafyaları',
      aciklama: '5147 sayılı Kanun kapsamında entegre devre topoğrafyalarının korunması.',
      ikon: 'devre',
      kartlar: [
        {
          soru: 'Entegre devre topoğrafyaları hangi kanunla korunur?',
          cevap: '<b>5147 sayılı Entegre Devre Topoğrafyalarının Korunması Hakkında Kanun</b> ile korunur; bu haklar 6769 sayılı SMK kapsamı dışındadır.',
          kaynak: '5147 s.K.'
        },
        {
          soru: 'Entegre devre topoğrafyası korumasının temel şartı nedir?',
          cevap: 'Topoğrafyanın <b>kendi yaratıcısının fikrî çabası sonucu ortaya çıkması</b> ve üretimi sırasında entegre devre üreticileri ile topoğrafya yaratıcıları arasında <b>bilinmemesi (orijinallik)</b> gerekir.',
          kaynak: '5147 s.K. m.5'
        }
      ]
    }

  ]
};
