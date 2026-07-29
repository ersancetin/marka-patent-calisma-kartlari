/* ============================================================
   Marka & Patent Vekilliği — ÇALIŞMA KARTLARI İÇERİK DOSYASI
   ------------------------------------------------------------
   Yapı, "Vekillik Konu Taksonomisi" belgesine göre kurulmuştur:

     Modül (A–E)  →  Konu (A1, D3, E1 …)  →  Kart (alt konu kodlu)

   Bir kart:
     { alt: "A1.3", soru: "…", cevap: "…", kaynak: "TTK m.18" }

   · alt    : taksonomideki alt konu kodu (isteğe bağlı, kartta rozet olarak görünür)
   · kaynak : mevzuat dayanağı (isteğe bağlı, cevap yüzünün altında görünür)
   · Metinde <b>kalın</b> ve <br> kullanılabilir.
   · Dizgiler çift tırnaklıdır; metin içinde tırnak gerekiyorsa “…” kullanın.

   Kartı olmayan konular arayüzde "hazırlanıyor" olarak listelenir;
   kartlar eklendikçe kendiliğinden çalışılabilir hale gelirler.
   ============================================================ */

window.KARTLAR = {

  meta: { surum: "1.0", guncelleme: "2026-07-29" },

  moduller: [

  /* ==========================================================
     MODÜL A — GENEL HUKUK (ORTAK)
     ========================================================== */
  {
    kod: "A",
    ad: "Genel Hukuk",
    konular: [

    {
      kod: "A1",
      ad: "Türk Ticaret Kanunu",
      ikon: "belge",
      kartlar: [

/* ---------- A1.1 Ticari işletme kavramı ve unsurları ---------- */

{ alt: "A1.1", soru: "Bir işletmenin “ticari işletme” sayılabilmesi için aranan temel unsurlar nelerdir?", cevap: "<b>Gelir sağlamayı hedefleme</b>, <b>devamlılık</b>, <b>bağımsızlık</b> ve faaliyetin <b>esnaf işletmesi sınırlarını aşan</b> bir düzeyde olması.", kaynak: "TTK m.11" },
{ alt: "A1.1", soru: "Ticari işletme ile esnaf işletmesi arasındaki sınır nasıl ve kim tarafından belirlenir?", cevap: "Sınır, <b>Cumhurbaşkanınca çıkarılacak kararnamede</b> gösterilir. (Eski metinlerde Bakanlar Kurulu olarak geçer.)", kaynak: "TTK m.11/2" },
{ alt: "A1.1", soru: "Esnaf işletmesini ticari işletmeden ayıran temel ölçüt nedir?", cevap: "Ekonomik faaliyetin <b>sermayeden çok bedeni çalışmaya</b> dayanması ve kazancın ancak <b>geçimini sağlayacak</b> düzeyde olmasıdır.", kaynak: "TTK m.15" },
{ alt: "A1.1", soru: "Yalnızca yaz sezonunda faaliyet gösteren bir yazlık sinema ticari işletme sayılır mı?", cevap: "<b>Evet.</b> Faaliyetin dönemsel olması devamlılık unsurunu ortadan kaldırmaz; gelir sağlama amacı ve esnaf sınırını aşan kapasite varsa ticari işletmedir.", kaynak: "TTK m.11" },
{ alt: "A1.1", soru: "Bir derneğin işlettiği lokanta, geliri tamamen dernek amacına harcansa bile ticari işletme sayılır mı?", cevap: "<b>Evet.</b> İşletme bağımsızsa ve esnaf sınırını aşıyorsa, sahibinin dernek/vakıf olması işletmenin ticari işletme niteliğini değiştirmez. (Ayrı mesele: kamu yararına çalışan dernek bu nedenle <b>tacir sayılmaz</b>.)", kaynak: "TTK m.11, m.16/2" },
{ alt: "A1.1", soru: "Şubeler bağımsız birer ticari işletme midir?", cevap: "<b>Hayır.</b> Şube, merkeze bağlı olmakla birlikte üçüncü kişilerle kendi başına işlem yapabilen bir birimdir; ayrı tüzel kişiliği ve bağımsız işletme niteliği yoktur.", kaynak: "TTK m.40/3" },
{ alt: "A1.1", soru: "Bir birimin “şube” sayılabilmesi için aranan en önemli ölçüt nedir?", cevap: "Merkeze bağlı olmasına rağmen üçüncü kişilerle ilişkide <b>kendi başına hareket edebilme (dış ilişkide bağımsızlık)</b> yetkisinin bulunmasıdır.", kaynak: "TTK m.40" },
{ alt: "A1.1", soru: "Ticari işletmenin malvarlığı unsurları ayrı ayrı devredilmek zorunda mıdır?", cevap: "<b>Hayır.</b> Ticari işletme, unsurlarının devri için ayrı ayrı tasarruf işlemi yapılmasına gerek olmaksızın <b>bir bütün hâlinde</b> devredilebilir.", kaynak: "TTK m.11/3" },

{ alt: "A1.1", soru: "Ticari işletmenin kendisi bir tüzel kişi midir?", cevap: "<b>Hayır.</b> Ticari işletme, organize bir <b>malvarlığı topluluğudur</b>; hak ve borçların sahibi, işletmeyi kendi adına işleten tacirdir.", kaynak: "TTK m.11" },
{ alt: "A1.1", soru: "Ticari işletmenin “merkezi” ne anlama gelir?", cevap: "İşletmenin idari ve hukuki olarak yönetildiği yerdir; tescil, yetkili sicil müdürlüğü ve yetkili mahkeme bakımından belirleyicidir.", kaynak: "TTK m.11, m.40" },
{ alt: "A1.1", soru: "Esnaf, tacir sayılmamasına rağmen hangi hükümlere tabi olur?", cevap: "<b>Ticaret unvanı</b> seçme ve kullanma, <b>haksız rekabet</b> ve belirli defter/kayıt düzenine ilişkin hükümlere tabidir.", kaynak: "TTK m.15/2" },
{ alt: "A1.1", soru: "Bir ticari işletme birden fazla kişi tarafından işletilebilir mi?", cevap: "<b>Evet</b>; adi ortaklık veya elbirliği hâlinde işletilebilir. Bu durumda tacir sıfatı, işletmeyi kendi adına işletenlerin <b>her birine</b> aittir.", kaynak: "TTK m.12" },

/* ---------- A1.2 Tacir sıfatı ve tacir olmanın sonuçları ---------- */

{ alt: "A1.2", soru: "Adına ticari işletme işletilen 14 yaşındaki bir küçük tacir sıfatını kazanır mı?", cevap: "<b>Evet</b>, tacir sıfatı küçüğe veya kısıtlıya aittir. Ancak tacir olmaya bağlı <b>cezai sorumluluk yasal temsilciye</b> (veli/vasi) aittir.", kaynak: "TTK m.13" },
{ alt: "A1.2", soru: "Kanunen ticaret yapması yasak olan bir devlet memuru kendi adına ticari işletme işletirse tacir sayılır mı?", cevap: "<b>Evet.</b> Yasağa aykırılık tacir sıfatını engellemez; kişi tacir olmanın tüm yükümlülüklerine tabi olur, yasağın yaptırımı ayrıca uygulanır.", kaynak: "TTK m.14" },
{ alt: "A1.2", soru: "Ticari işletme kurduğunu ilan yoluyla halka bildiren, ancak fiilen işe başlamayan kişinin durumu nedir?", cevap: "<b>Tacir sayılır.</b> İşletmeye fiilen başlamamış olması sonucu değiştirmez.", kaynak: "TTK m.12/2" },
{ alt: "A1.2", soru: "Ticari işletmesini fiilen işlettiği hâlde ticaret siciline tescil ettirmeyen kişi tacir midir?", cevap: "<b>Evet.</b> Tacir sıfatının kazanılmasında tescil kural olarak <b>açıklayıcıdır</b>; tescil ettirmemek yalnızca idari/cezai yaptırım doğurur.", kaynak: "TTK m.12" },
{ alt: "A1.2", soru: "“Tacir gibi sorumlu olanlar” kimlerdir?", cevap: "Bir ticari işletme açmış gibi kendi adına işlem yapan ya da işletme açtığını ilan eden kişi; tacir olmasa dahi <b>iyiniyetli üçüncü kişilere karşı tacir gibi sorumlu</b> olur.", kaynak: "TTK m.12/3" },
{ alt: "A1.2", soru: "Ticaret şirketleri tacir sıfatını ne zaman kazanır?", cevap: "<b>Ticaret siciline tescil</b> anında; tüzel kişilik ile birlikte tacir sıfatı da doğar.", kaynak: "TTK m.16/1, m.355, m.588" },
{ alt: "A1.2", soru: "Dernekler hangi hâlde tacir sayılır?", cevap: "Bir ticari işletmeyi kısmen de olsa kendi adlarına işlettiklerinde tacir sayılırlar. <b>Kamu yararına çalışan dernekler</b> ise tacir sayılmaz.", kaynak: "TTK m.16" },
{ alt: "A1.2", soru: "Devlet, belediye gibi kamu tüzel kişileri ticari işletme işletirse tacir sayılır mı?", cevap: "<b>Hayır.</b> Kamu tüzel kişileri, kamu yararına çalışan dernekler ve gelirinin yarıdan fazlasını kamu görevi niteliğindeki işlere harcayan vakıflar, ticari işletme işletseler bile tacir sayılmazlar.", kaynak: "TTK m.16/2" },
{ alt: "A1.2", soru: "Donatma iştiraki tacir midir?", cevap: "<b>Hayır</b>, donatma iştiraki tacir değildir; ancak tacirlere ilişkin hükümler donatma iştirakine de uygulanır.", kaynak: "TTK m.17" },
{ alt: "A1.2", soru: "Tacir olmanın başlıca hukuki sonuçları (yükümlülükleri) nelerdir?", cevap: "İflasa tabi olmak, ticaret unvanı seçip kullanmak, işletmeyi <b>sicile tescil</b> ettirmek, <b>ticari defter</b> tutmak, ticaret ve sanayi odasına kaydolmak ve <b>basiretli bir iş adamı gibi</b> hareket etmek.", kaynak: "TTK m.18" },
{ alt: "A1.2", soru: "“Basiretli bir iş adamı gibi hareket etme” yükümlülüğü ne anlama gelir?", cevap: "Tacirin, kendi kişisel yetenek ve imkânlarına göre değil; <b>kendi alanındaki orta düzey, sağduyulu ve bilgili bir tacirden</b> beklenen özeni göstermesi gerektiğini ifade eder (objektif ölçüt).", kaynak: "TTK m.18/2" },
{ alt: "A1.2", soru: "Bir tacir “tecrübesizdim, bilmiyordum” savunmasını ileri sürebilir mi?", cevap: "<b>Kural olarak hayır.</b> Basiretli iş adamı ölçüsü objektif olduğundan bu tür savunmalar kabul edilmez ve tacirin sorumluluğu ağırlaşır.", kaynak: "TTK m.18/2" },
{ alt: "A1.2", soru: "Tacir, işletmesiyle ilgili gördüğü bir iş için ücret istemek üzere bunu önceden kararlaştırmak zorunda mıdır?", cevap: "<b>Hayır.</b> Tacir, işletmesiyle ilgili bir iş gördüğünde veya hizmet sunduğunda, önceden kararlaştırılmamış olsa bile <b>uygun bir ücret</b> ve verdiği avanslar için <b>faiz</b> isteyebilir.", kaynak: "TTK m.20" },
{ alt: "A1.2", soru: "Tacir, borçlandığı ceza koşulunun (cezai şartın) fahiş olduğunu ileri sürerek indirim isteyebilir mi?", cevap: "<b>Hayır.</b> Tacir sıfatını taşıyan borçlu, ceza koşulunun aşırı olduğu gerekçesiyle indirim talep edemez.", kaynak: "TTK m.22" },
{ alt: "A1.2", soru: "Bir faturayı alan tacir, içeriğine ne kadar sürede itiraz etmelidir?", cevap: "Faturayı aldığı tarihten itibaren <b>sekiz gün</b> içinde itiraz etmezse, içeriğini kabul etmiş sayılır.", kaynak: "TTK m.21/2" },
{ alt: "A1.2", soru: "Sözlü veya telefonla kurulan bir sözleşmeyi doğrulayan teyit mektubunu alan taraf ne kadar sürede itiraz etmelidir?", cevap: "<b>Sekiz gün</b> içinde itiraz etmezse, teyit mektubunun sözleşmeye uygun olduğunu kabul etmiş sayılır.", kaynak: "TTK m.21/3" },
{ alt: "A1.2", soru: "Ticari satışta malın ayıbı teslim sırasında <b>açıkça belliyse</b> ihbar süresi nedir?", cevap: "Alıcı <b>iki gün</b> içinde durumu satıcıya ihbar etmelidir.", kaynak: "TTK m.23/1-c" },
{ alt: "A1.2", soru: "Ticari satışta ayıp teslim sırasında açıkça belli değilse (gizli ayıp) süre nedir?", cevap: "Alıcı malı <b>sekiz gün</b> içinde incelemek veya incelettirmek ve ayıp varsa bu süre içinde satıcıya ihbar etmek zorundadır.", kaynak: "TTK m.23/1-c" },
{ alt: "A1.2", soru: "Tacirlerin tutmakla yükümlü olduğu temel ticari defterler hangileridir?", cevap: "<b>Yevmiye defteri</b>, <b>defteri kebir</b> ve <b>envanter defteri</b>. Tüzel kişi tacirlerde ayrıca pay defteri, genel kurul toplantı ve müzakere defteri ile yönetim kurulu karar defteri tutulur.", kaynak: "TTK m.64" },
{ alt: "A1.2", soru: "Ticari defterlerin <b>açılış</b> onayı ne zaman ve kim tarafından yapılır?", cevap: "İşletmenin kuruluşunda ve her faaliyet dönemi kullanılmaya başlanmadan önce <b>noter</b> tarafından yapılır. (Şirket kuruluşunda ticaret sicili müdürlüğü de onaylayabilir.)", kaynak: "TTK m.64/3" },
{ alt: "A1.2", soru: "Yevmiye defterinin <b>kapanış</b> onayı için son tarih nedir?", cevap: "İzleyen faaliyet döneminin <b>altıncı ayının sonuna</b> kadar.", kaynak: "TTK m.64/3" },
{ alt: "A1.2", soru: "Yönetim kurulu karar defterinin kapanış onayı ne zamana kadar yapılmalıdır?", cevap: "İzleyen faaliyet döneminin <b>birinci ayının sonuna</b> kadar.", kaynak: "TTK m.64/3" },
{ alt: "A1.2", soru: "Envanter defteri hangi dönemlerde tutulur?", cevap: "İşletmenin <b>açılışında</b> ve her faaliyet döneminin <b>sonunda</b>.", kaynak: "TTK m.66" },
{ alt: "A1.2", soru: "Ticari defterler hangi dilde tutulmalıdır?", cevap: "<b>Türkçe</b> tutulması zorunludur; kısaltmalar, rakam ve semboller kullanılıyorsa anlamları açıkça belirtilmelidir.", kaynak: "TTK m.65" },
{ alt: "A1.2", soru: "Ticari defterler ve dayanak belgeler ne kadar süreyle saklanmalıdır?", cevap: "<b>On yıl</b> süreyle saklanmalıdır.", kaynak: "TTK m.82" },
{ alt: "A1.2", soru: "Defter saklama süresi ne zaman işlemeye başlar?", cevap: "Deftere <b>son kaydın yapıldığı</b>, belgelerde ise belgenin düzenlendiği <b>takvim yılının bitişiyle</b> başlar.", kaynak: "TTK m.82/5" },
{ alt: "A1.2", soru: "Defterler yangın, su baskını veya hırsızlık nedeniyle zayi olursa tacir ne yapmalıdır?", cevap: "Zıyaı öğrendiği tarihten itibaren <b>on beş gün</b> içinde ticari işletmesinin bulunduğu yer yetkili mahkemesinden <b>zayi belgesi</b> istemelidir.", kaynak: "TTK m.82/7" },
{ alt: "A1.2", soru: "Tacir ölürse defter tutma ve saklama yükümlülüğü kime geçer?", cevap: "<b>Mirasçılarına</b> geçer; mirasın resmî tasfiyesi hâlinde defterler sulh mahkemesince saklanır.", kaynak: "TTK m.82/6" },
{ alt: "A1.2", soru: "Ticari defterler sahibi lehine delil olabilir mi?", cevap: "Defterlerin <b>usulüne uygun</b> tutulmuş olması ve uyuşmazlığın <b>her iki tarafının da tacir</b> olduğu ticari işten doğması hâlinde defterler sahibi lehine de delil oluşturabilir.", kaynak: "TTK m.64, HMK m.222" },
{ alt: "A1.2", soru: "Ticari defter kayıtlarının doğru olmadığı nasıl ispatlanır?", cevap: "Herhangi bir <b>şekle bağlı değildir</b>; her türlü delille ispatlanabilir.", kaynak: "HMK m.222" },
{ alt: "A1.2", soru: "Tüzel kişi tacirlerde hapis cezası gerektiren sorumluluk kime aittir?", cevap: "Tüzel kişinin kendisine değil, onu temsil ve idare eden <b>gerçek kişi organlarına</b> (yönetim kurulu üyeleri, müdürler) aittir.", kaynak: "TTK m.16" },

{ alt: "A1.2", soru: "Tacir, ticaret ve sanayi odasına kaydolmak zorunda mıdır?", cevap: "<b>Evet.</b> Her tacir, ticaret siciline tescilin yanı sıra bulunduğu yerdeki ticaret ve sanayi odasına da kaydolmak zorundadır.", kaynak: "TTK m.18/1" },
{ alt: "A1.2", soru: "Tacir olmanın iflas bakımından sonucu nedir?", cevap: "Tacir, borcu ticari işletmesiyle ilgili olsun olmasın <b>tüm borçlarından dolayı iflasa tabidir</b>.", kaynak: "TTK m.18/1" },
{ alt: "A1.2", soru: "Tacirin ticaret unvanını kullanma yükümlülüğü neyi kapsar?", cevap: "İşletmesiyle ilgili işlemleri unvanıyla yapmak ve işletmesine ilişkin senet ve belgeleri <b>unvanı altında imzalamak</b> zorundadır.", kaynak: "TTK m.39/1" },
{ alt: "A1.2", soru: "Tacirin ticari belgelerinde unvanın yanında hangi bilgiler bulunmalıdır?", cevap: "İşletmenin <b>merkezi</b>, <b>ticaret sicili numarası</b> ve varsa <b>internet sitesi adresi</b>; sermaye şirketlerinde ayrıca sermaye bilgileri.", kaynak: "TTK m.39/2" },

/* ---------- A1.3 Ticari iş, ticari hüküm, ticari davalar ---------- */

{ alt: "A1.3", soru: "Tacirler arasında; karşı tarafı temerrüde düşürme, sözleşmeyi fesih veya sözleşmeden dönmeye ilişkin ihbar ve ihtarlar hangi yollarla yapılmalıdır?", cevap: "<b>Noter aracılığıyla</b>, <b>taahhütlü mektupla</b>, <b>telgrafla</b> veya güvenli elektronik imza kullanılarak <b>KEP (kayıtlı elektronik posta)</b> sistemiyle.", kaynak: "TTK m.18/3" },
{ alt: "A1.3", soru: "Tacirler arasında “ilan yoluyla” yapılan ihtar, muhatabı temerrüde düşürmek için geçerli midir?", cevap: "<b>Hayır.</b> İlan, TTK m.18/3'te sayılan geçerli yöntemler arasında yer almaz.", kaynak: "TTK m.18/3" },
{ alt: "A1.3", soru: "Ticari bir uyuşmazlıkta hâkim hükümleri hangi sırayla uygular?", cevap: "1) <b>Emredici kanun hükümleri</b>, 2) <b>sözleşme hükümleri</b>, 3) <b>ticari hükümler (TTK)</b>, 4) <b>ticari örf ve âdet</b>, 5) <b>genel hükümler (TBK/TMK)</b>.", kaynak: "TTK m.1, m.2" },
{ alt: "A1.3", soru: "Ticari örf ve âdet ne zaman uygulanır?", cevap: "Emredici bir kanun hükmü, taraflar arasında sözleşme hükmü ve uygulanacak ticari hüküm bulunmadığında; yani <b>genel hükümlerden önce</b> uygulanır.", kaynak: "TTK m.1/2, m.2" },
{ alt: "A1.3", soru: "Bir taraf için ticari iş sayılan sözleşme, diğer taraf için de ticari iş midir?", cevap: "<b>Evet.</b> Kanunda aksine hüküm yoksa, taraflardan yalnızca biri için ticari iş niteliğinde olan sözleşmeler diğeri için de ticari iş sayılır.", kaynak: "TTK m.19/2" },
{ alt: "A1.3", soru: "“Ticari iş karinesi” nedir ve nasıl çürütülür?", cevap: "Tacirin borçlarının <b>ticari olması asıldır</b>. Gerçek kişi tacir, işlemi yaptığı anda bunun ticari işletmesiyle ilgili olmadığını <b>karşı tarafa açıkça bildirirse</b> veya işin ticari sayılmasına durum elverişli değilse karine çürütülür.", kaynak: "TTK m.19/1" },
{ alt: "A1.3", soru: "Ticari işlerde birden fazla kişinin birlikte borç altına girmesinin sonucu nedir?", cevap: "Kanunda veya sözleşmede aksi öngörülmedikçe <b>müteselsilen sorumlu</b> olurlar (teselsül karinesi). Adi işlerde ise kural bunun tersidir.", kaynak: "TTK m.7/1" },
{ alt: "A1.3", soru: "Ticari işlerde faiz oranı serbestçe belirlenebilir mi?", cevap: "<b>Evet.</b> Ticari işlerde faiz oranı serbestçe kararlaştırılabilir; ancak emredici hükümlere, ahlaka ve kamu düzenine aykırı olamaz.", kaynak: "TTK m.8/1" },
{ alt: "A1.3", soru: "Ticari bir borçta faiz ne zaman işlemeye başlar?", cevap: "Aksine sözleşme yoksa; <b>vadenin bitiminden</b>, vade yoksa <b>ihtar gününden</b> itibaren işlemeye başlar.", kaynak: "TTK m.10" },
{ alt: "A1.3", soru: "Ticari işletmeler arası mal ve hizmet tedarikinde ödeme süresi kararlaştırılmamışsa borçlu ne zaman temerrüde düşer?", cevap: "Fatura veya eş değer ödeme talebinin alınmasını takip eden <b>otuz günlük sürenin sonunda</b>, ihtara gerek olmaksızın temerrüde düşer.", kaynak: "TTK m.1530" },

{ alt: "A1.3", soru: "Ticari davalarda görevli mahkeme hangisidir?", cevap: "Aksine hüküm bulunmadıkça, dava konusunun değerine bakılmaksızın <b>asliye ticaret mahkemesi</b>.", kaynak: "TTK m.5/1" },
{ alt: "A1.3", soru: "“Mutlak ticari dava” ne demektir?", cevap: "Tarafların tacir olup olmadığına ve işin bir ticari işletmeyle ilgili bulunup bulunmadığına <b>bakılmaksızın</b> ticari sayılan davalardır.", kaynak: "TTK m.4/1" },
{ alt: "A1.3", soru: "Fikrî mülkiyet mevzuatında öngörülen davalar ticari dava mıdır?", cevap: "<b>Evet</b>, bunlar <b>mutlak ticari davalardandır</b>; taraflar tacir olmasa dahi ticari dava sayılır. İhtisas mahkemesi (FSHHM) kuralları saklıdır.", kaynak: "TTK m.4/1-d" },
{ alt: "A1.3", soru: "Konusu bir miktar paranın ödenmesi olan ticari davalarda dava açmadan önce hangi şart aranır?", cevap: "<b>Arabulucuya başvurulmuş olması dava şartıdır</b>; arabuluculuk tüketilmeden açılan dava usulden reddedilir.", kaynak: "TTK m.5/A" },
{ alt: "A1.3", soru: "Asliye ticaret mahkemesi ile asliye hukuk mahkemesi arasındaki ilişki nedir?", cevap: "Aralarındaki ilişki bir <b>görev</b> ilişkisidir; göreve ilişkin usul hükümleri uygulanır ve görevsizlik resen dikkate alınır.", kaynak: "TTK m.5/3" },
{ alt: "A1.3", soru: "Ticari işlerde temerrüt faizi nasıl belirlenir?", cevap: "Taraflar oranı serbestçe kararlaştırabilir; kararlaştırılmamışsa <b>ticari işlere özgü kanuni temerrüt faizi</b> (avans faizi esaslı) uygulanır.", kaynak: "TTK m.8, m.9; 3095 s.K." },

/* ---------- A1.4 Ticaret unvanı — seçimi ve ekler ---------- */

{ alt: "A1.4", soru: "Gerçek kişi tacirin ticaret unvanı hangi unsurlardan oluşur?", cevap: "<b>Kısaltılmadan yazılan ad ve soyadından</b> oluşur. Ek yapmak isteğe bağlıdır; ancak ekler gerçeği yansıtmalı, üçüncü kişilerde yanlış izlenim yaratmamalı ve kamu düzenine aykırı olmamalıdır.", kaynak: "TTK m.41, m.45" },
{ alt: "A1.4", soru: "Anonim ve limited şirketlerin ticaret unvanında hangi unsurlar zorunludur?", cevap: "<b>İşletme konusu</b>nun (konularından en az birinin) ve <b>şirket türünü gösteren ibarenin</b> (Anonim Şirket / Limited Şirket) unvanda yer alması zorunludur.", kaynak: "TTK m.43" },
{ alt: "A1.4", soru: "Anonim veya limited şirket unvanında gerçek bir kişinin ad ve soyadı yer alırsa hangi kısıtlama doğar?", cevap: "Şirket türünü gösteren ibareler (<b>A.Ş. / Ltd. Şti.</b>) <b>hiçbir şekilde kısaltılarak</b> yazılamaz; açıkça “Anonim Şirket”, “Limited Şirket” yazılmalıdır.", kaynak: "TTK m.43/2" },
{ alt: "A1.4", soru: "Ticaret unvanında “Türk”, “Türkiye”, “Cumhuriyet” ve “Millî” kelimeleri nasıl kullanılabilir?", cevap: "Ancak <b>Cumhurbaşkanı kararıyla</b> kullanılabilir. (Eski metinlerde Bakanlar Kurulu.)", kaynak: "TTK m.46/3" },
{ alt: "A1.4", soru: "Bir ticaret unvanının tescil edilebilmesi için “ayırt edicilik” bakımından şartı nedir?", cevap: "Unvanın, <b>Türkiye'nin herhangi bir sicil dairesinde daha önce tescil edilmiş unvanlardan</b> ayırt edilmesini sağlayacak ekler içermesi gerekir.", kaynak: "TTK m.45, m.46" },
{ alt: "A1.4", soru: "Tasfiyeye giren bir şirketin ticaret unvanı nasıl kullanılır?", cevap: "Unvana <b>“tasfiye hâlinde”</b> ibaresi eklenerek kullanılır.", kaynak: "TTK m.533" },
{ alt: "A1.4", soru: "Şubeler merkezden farklı bir ticaret unvanı kullanabilir mi?", cevap: "<b>Hayır.</b> Şube, merkezin unvanını <b>şube olduğunu belirterek</b> kullanmak zorundadır; şubeye özgü ekler yapılabilir.", kaynak: "TTK m.48" },
{ alt: "A1.4", soru: "Ticari işletme işleten dernek ve vakıfların ticaret unvanı nedir?", cevap: "<b>Kendi adlarıdır.</b>", kaynak: "TTK m.44/2" },
{ alt: "A1.4", soru: "Mahalle arasında küçük bir ayakkabı dükkânı işleten Mehmet Doruk, unvanını “Doruk Ayakkabıcılık Fabrikası” olarak tescil ettirebilir mi?", cevap: "<b>Hayır.</b> İşletmenin gerçek niteliğiyle bağdaşmayan ve üçüncü kişilerde yanlış izlenim yaratan ekler kullanılamaz; talep reddedilir.", kaynak: "TTK m.45, m.46/1" },
{ alt: "A1.4", soru: "Bir tacir ticaret unvanını ne kadar sürede tescil ettirmelidir?", cevap: "Ticari işletmenin açıldığı günden itibaren <b>on beş gün</b> içinde tescil ve ilan ettirmelidir.", kaynak: "TTK m.40/1" },

{ alt: "A1.4", soru: "Kollektif ve komandit şirketlerin ticaret unvanı nasıl oluşur?", cevap: "En az bir ortağın <b>ad ve soyadıyla</b> şirketi ve türünü gösteren bir ibareden oluşur; <b>komanditer</b> ortağın adı unvanda yer alamaz.", kaynak: "TTK m.42" },
{ alt: "A1.4", soru: "İşletme konusunun ticaret unvanında gösterilmesi hangi şirketler için zorunludur?", cevap: "<b>Anonim, limited ve kooperatif</b> şirketler için; unvanda işletme konularından en az biri yer almalıdır.", kaynak: "TTK m.43" },
{ alt: "A1.4", soru: "Ticaret unvanına yapılacak ekler bakımından sınır nedir?", cevap: "Ekler; işletmenin genişliği, önemi veya malî durumu hakkında <b>yanlış izlenim yaratacak</b>, üçüncü kişileri aldatacak ya da kamu düzenine aykırı olamaz.", kaynak: "TTK m.45, m.46" },
{ alt: "A1.4", soru: "Ticaret unvanı seçmek ve kullanmak zorunlu mudur?", cevap: "<b>Evet.</b> Her tacir bir ticaret unvanı seçmek, kullanmak ve usulüne uygun tescil ettirmek zorundadır.", kaynak: "TTK m.18/1, m.39" },

/* ---------- A1.5 Ticaret unvanının korunması ve devri ---------- */

{ alt: "A1.5", soru: "Usulüne uygun tescil edilmiş ticaret unvanı hangi coğrafi alanda korunur?", cevap: "<b>Türkiye'nin tamamında</b>; tescil sahibine ulusal düzeyde tekel hakkı verir.", kaynak: "TTK m.50" },
{ alt: "A1.5", soru: "Ticaret unvanı, işletmeden ayrı olarak devredilebilir mi?", cevap: "<b>Hayır.</b> Ticaret unvanı işletmeden ayrı olarak devredilemez; ancak <b>işletmeyle birlikte</b> devri mümkündür.", kaynak: "TTK m.49" },
{ alt: "A1.5", soru: "Ticaret unvanına tecavüz edilen tacir hangi taleplerde bulunabilir?", cevap: "Tecavüzün <b>tespiti</b>, <b>men'i (önlenmesi)</b>, haksız kullanılan unvanın <b>sicilden silinmesi</b>, gerekiyorsa ilanı ve <b>maddi–manevi tazminat</b>.", kaynak: "TTK m.52" },
{ alt: "A1.5", soru: "Ticaret unvanına tecavüzde mütecavizin elde ettiği menfaat talep edilebilir mi?", cevap: "<b>Evet.</b> Maddi tazminat olarak, mütecavizin elde etmesi mümkün görülen <b>menfaatin karşılığına</b> da hükmedilebilir.", kaynak: "TTK m.52/2" },
{ alt: "A1.5", soru: "Ticaret unvanına tecavüz hâlinde, tecavüzde kullanılan malların mülkiyetinin devri istenebilir mi?", cevap: "<b>Kural olarak hayır.</b> Bu tür ürün ve araçlara ilişkin talepler sınai mülkiyet haklarına (örn. markaya) özgüdür; unvan korumasında tespit, men, silinme ve tazminat esastır.", kaynak: "TTK m.52" },
{ alt: "A1.5", soru: "Ticaret unvanı üzerindeki hak ne zaman sona erer?", cevap: "İşletmenin kapanması, faaliyetin sona ermesi veya unvanın <b>sicilden terkini</b> ile sona erer.", kaynak: "TTK m.47, m.50" },

{ alt: "A1.5", soru: "Ticaret unvanına tecavüz davalarında görevli mahkeme hangisidir?", cevap: "<b>Asliye ticaret mahkemesi</b>; ticaret unvanına ilişkin uyuşmazlıklar mutlak ticari davalardandır.", kaynak: "TTK m.4/1-a, m.5" },
{ alt: "A1.5", soru: "Ticaret unvanının haksız kullanımına karşı geçici koruma istenebilir mi?", cevap: "<b>Evet</b>; haksız kullanımın durdurulması için <b>ihtiyati tedbir</b> talep edilebilir.", kaynak: "TTK m.52; HMK m.389" },
{ alt: "A1.5", soru: "Ticaret unvanına tecavüzde kusur şartı aranır mı?", cevap: "Tespit, men ve maddi durumun ortadan kaldırılması için <b>kusur aranmaz</b>; <b>tazminat</b> talebi için kusur gereklidir.", kaynak: "TTK m.52" },

/* ---------- A1.6 İşletme adı ---------- */

{ alt: "A1.6", soru: "İşletme adı nedir?", cevap: "İşletme sahibiyle ilgili olmaksızın, doğrudan doğruya <b>işletmeyi tanıtmak</b> ve benzer işletmelerden ayırt etmek için kullanılan addır.", kaynak: "TTK m.53" },
{ alt: "A1.6", soru: "İşletme adının kullanılması ve tescili zorunlu mudur?", cevap: "İşletme adı <b>kullanmak zorunlu değildir</b>; ancak <b>kullanılıyorsa tescil ettirilmesi gerekir</b>. Zorunlu olan ve mutlaka tescil edilen ise ticaret unvanıdır.", kaynak: "TTK m.53" },
{ alt: "A1.6", soru: "İşletme adının tescili için nereye başvurulur?", cevap: "İşletme merkezinin bulunduğu yerdeki <b>Ticaret Sicili Müdürlüğü'ne</b>.", kaynak: "TTK m.53, m.40" },
{ alt: "A1.6", soru: "Tescil edilmiş bir işletme adı nasıl korunur?", cevap: "Ticaret unvanının korunmasına ilişkin hükümler (tespit, men, silinme, tazminat) işletme adı hakkında da <b>kıyasen uygulanır</b>; kullanma hakkı yalnızca sahibine aittir.", kaynak: "TTK m.53" },

{ alt: "A1.6", soru: "İşletme adı ile ticaret unvanı aynı anda kullanılabilir mi?", cevap: "<b>Evet.</b> Ticaret unvanı kullanma zorunluluğu devam ederken, tacir işletmesini tanıtmak için ayrıca bir işletme adı da kullanabilir.", kaynak: "TTK m.39, m.53" },
{ alt: "A1.6", soru: "İşletme adı işletmeden ayrı olarak devredilebilir mi?", cevap: "<b>Hayır.</b> İşletme adı tanıttığı işletmeden bağımsız devredilemez; işletmeyle birlikte devri mümkündür.", kaynak: "TTK m.53, m.49" },

/* ---------- A1.7 Ticaret unvanı ↔ işletme adı ↔ marka ayrımı ---------- */

{ alt: "A1.7", soru: "AYRIM: Ticaret unvanı ile işletme adı arasındaki temel fark nedir?", cevap: "<b>Ticaret unvanı taciri</b> tanıtır ve seçimi ile tescili zorunludur. <b>İşletme adı işletmeyi</b> tanıtır; kullanılması isteğe bağlıdır, kullanılıyorsa tescil edilir.", kaynak: "TTK m.39, m.53" },
{ alt: "A1.7", soru: "AYRIM: Marka ile ticaret unvanı neyi tanıtır ve hangi sicile kaydedilir?", cevap: "<b>Marka</b> mal ve hizmetleri tanıtır, <b>TÜRKPATENT</b> nezdindeki sicile tescil edilir. <b>Ticaret unvanı</b> taciri tanıtır, <b>Ticaret Sicili'ne</b> tescil edilir.", kaynak: "TTK m.39; SMK m.4" },
{ alt: "A1.7", soru: "Bir vekil, tescilli bir işaretin “ticaret unvanı” olarak korunup korunmadığını nereden araştırır?", cevap: "Ticaret unvanları <b>Ticaret Sicili</b> (ve Türkiye Ticaret Sicili Gazetesi) üzerinden araştırılır; TÜRKPATENT sicili yalnızca marka, patent, tasarım vb. sınai hakları gösterir.", kaynak: "TTK m.24 vd." },
{ alt: "A1.7", soru: "Markası tescilli olan bir kişi, bu işareti ticaret unvanı olarak kullanmak için ayrıca bir işlem yapmalı mıdır?", cevap: "<b>Evet.</b> Marka tescili tek başına yeterli değildir; ticaret unvanının ayrıca <b>ticaret siciline tescil</b> edilmesi gerekir.", kaynak: "TTK m.40; SMK m.7" },
{ alt: "A1.7", soru: "Bir marka ile tacirin ticaret unvanının aynı olması zorunlu mudur?", cevap: "<b>Hayır.</b> İkisi farklı işlevlere sahiptir ve farklı sicillerde takip edilir; aynı olmaları mümkün ancak zorunlu değildir.", kaynak: "TTK m.39; SMK m.4" },
{ alt: "A1.7", soru: "Şubenin ticaret unvanı üzerindeki hak sahibi kimdir?", cevap: "Şubenin ayrı tüzel kişiliği bulunmadığından hak sahibi <b>merkez işletmedir</b>; şube marka, patent gibi haklara da kendi adına sahip olamaz.", kaynak: "TTK m.40/3, m.48" },

{ alt: "A1.7", soru: "Aynı işaret farklı kişilerce hem marka hem ticaret unvanı olarak kullanılıyorsa hangi ölçüt öne çıkar?", cevap: "Önceki tarihli üstün hak, <b>karıştırılma ihtimali</b> ve dürüstlük kuralı. Marka sahibi, unvanın markasına tecavüz oluşturan kullanımını önleyebilir.", kaynak: "SMK m.7; TTK m.52, m.55" },

/* ---------- A1.8 Haksız rekabet — genel hüküm ve özel haller ---------- */

{ alt: "A1.8", soru: "TTK'ya göre haksız rekabetin genel tanımı nedir?", cevap: "Rakipler arasındaki veya tedarik edenlerle müşteriler arasındaki ilişkileri etkileyen, <b>aldatıcı veya dürüstlük kuralına diğer şekillerde aykırı</b> davranışlar ile ticari uygulamalardır.", kaynak: "TTK m.54/2" },
{ alt: "A1.8", soru: "Haksız rekabete ilişkin hükümlerin amacı nedir?", cevap: "Bütün katılanların menfaatine, <b>dürüst ve bozulmamış rekabetin</b> sağlanmasıdır.", kaynak: "TTK m.54/1" },
{ alt: "A1.8", soru: "Rakibin ürünlerini yanlış, yanıltıcı veya gereksiz yere incitici açıklamalarla kötülemek haksız rekabet midir?", cevap: "<b>Evet</b>; “dürüstlük kuralına aykırı reklamlar ve satış yöntemleri” kapsamında sayılan özel hâllerden biridir.", kaynak: "TTK m.55/1-a" },
{ alt: "A1.8", soru: "Bir tacirin, rakibinin mallarının “kanserojen” olduğu yönünde asılsız iddia yayması nasıl nitelendirilir?", cevap: "Rakibi <b>kötüleme</b> yoluyla haksız rekabettir; dürüstlük kuralına aykırıdır.", kaynak: "TTK m.55/1-a" },
{ alt: "A1.8", soru: "Başkasının iş ürünlerinden yetkisiz yararlanmak haksız rekabet midir?", cevap: "<b>Evet.</b> Başkasının iş ürünlerini teknik çoğaltma yöntemleriyle ve kendi uygun bir katkısı olmaksızın devralıp yararlanmak haksız rekabettir.", kaynak: "TTK m.55/1-c" },
{ alt: "A1.8", soru: "İş sırlarını hukuka aykırı olarak ele geçirmek veya yaymak haksız rekabet midir?", cevap: "<b>Evet.</b> Üretim ve iş sırlarını hukuka aykırı biçimde ifşa etmek veya değerlendirmek özel haksız rekabet hâllerindendir.", kaynak: "TTK m.55/1-d" },
{ alt: "A1.8", soru: "Bir işletmenin çalışanlarını, işverenlerinin sırlarını ifşaya yöneltmek haksız rekabet midir?", cevap: "<b>Evet</b>; “başkalarının işçilerini, vekillerini veya yardımcılarını sözleşmeye aykırı davranmaya yöneltme” kapsamında haksız rekabettir.", kaynak: "TTK m.55/1-b" },
{ alt: "A1.8", soru: "“Saldırgan satış yöntemleri” (örn. müşteriyi zorlayarak karar vermeye itme) haksız rekabet midir?", cevap: "<b>Evet.</b> Müşterinin karar verme özgürlüğünü özellikle saldırgan satış yöntemleriyle sınırlamak haksız rekabettir.", kaynak: "TTK m.55/1-a" },
{ alt: "A1.8", soru: "Taksitle satış ilanlarında hangi bilgilerin açıkça belirtilmesi gerekir?", cevap: "Satıcının <b>unvanı</b>, malın <b>peşin fiyatı</b>, taksitle satıştan doğan <b>toplam maliyet</b> ve <b>yıllık faiz/kredi oranları</b>. Belirtilmemesi haksız rekabettir.", kaynak: "TTK m.55/1-f" },
{ alt: "A1.8", soru: "Rakiple karşılaştırmalı reklam her hâlde haksız rekabet midir?", cevap: "<b>Hayır.</b> Karşılaştırma; yanlış, yanıltıcı, gereksiz yere incitici veya rakibin tanınmışlığından haksız yararlanacak nitelikte ise haksız rekabet olur.", kaynak: "TTK m.55/1-a" },
{ alt: "A1.8", soru: "İş şartlarına uymamak (örn. kanunla getirilen çalışma şartlarına aykırı davranarak avantaj sağlamak) haksız rekabet midir?", cevap: "<b>Evet.</b> Kanun veya sözleşmeyle rakiplere de yüklenmiş olan iş şartlarına uymamak haksız rekabet hâllerindendir.", kaynak: "TTK m.55/1-e" },

{ alt: "A1.8", soru: "Kendini veya mallarını yanıltıcı açıklamalarla üstün gösterme haksız rekabet midir?", cevap: "<b>Evet.</b> Kendisi, işletmesi, malları veya fiyatları hakkında yanlış ya da yanıltıcı açıklamalarla rakiplerine göre üstün duruma geçmeye çalışmak haksız rekabettir.", kaynak: "TTK m.55/1-a" },
{ alt: "A1.8", soru: "Başkasının malları veya işletmesiyle karıştırılmaya yol açan önlemler almak haksız rekabet midir?", cevap: "<b>Evet</b>; karıştırılmaya (iltibasa) yol açan her türlü davranış özel haksız rekabet hâllerindendir.", kaynak: "TTK m.55/1-a" },
{ alt: "A1.8", soru: "Malın miktarı, kaynağı veya niteliği hakkında yanıltıcı bilgi vermek haksız rekabet midir?", cevap: "<b>Evet.</b> Mal veya hizmetin miktarı, amacı, kaynağı, niteliği ya da stok durumu hakkında yanıltıcı açıklamalar haksız rekabettir.", kaynak: "TTK m.55/1-a" },
{ alt: "A1.8", soru: "Dürüstlük kuralına aykırı genel işlem şartları kullanmak haksız rekabet midir?", cevap: "<b>Evet.</b> Kanuni düzenlemeden önemli ölçüde ayrılan veya hak ve borç dağılımında dürüstlüğe aykırı genel işlem şartları kullanmak haksız rekabettir.", kaynak: "TTK m.55/1-f" },
{ alt: "A1.8", soru: "Rakibin tanınmışlığından haksız yararlanmak haksız rekabet midir?", cevap: "<b>Evet.</b> Başkasının tanınmışlığından haksız biçimde yararlanmak dürüstlük kuralına aykırı davranışlar arasındadır.", kaynak: "TTK m.55/1-a" },
{ alt: "A1.8", soru: "Seçilmiş bazı malları maliyetin altında satışa sunmak her hâlde haksız rekabet midir?", cevap: "<b>Hayır.</b> Ancak bu satışlarla müşteri çekilerek işletmenin yeteneği hakkında <b>yanıltma</b> amaçlanıyorsa haksız rekabet oluşur.", kaynak: "TTK m.55/1-a" },

/* ---------- A1.9 Haksız rekabette davalar ve zamanaşımı ---------- */

{ alt: "A1.9", soru: "Haksız rekabet hâlinde açılabilecek hukuk davaları nelerdir?", cevap: "<b>Tespit</b>, <b>men (önleme)</b>, haksız rekabetin sonucu olan maddi durumun <b>ortadan kaldırılması</b> (yanlış beyanların düzeltilmesi, araçların imhası dâhil), <b>maddi tazminat</b> ve şartları varsa <b>manevi tazminat</b>.", kaynak: "TTK m.56/1" },
{ alt: "A1.9", soru: "Haksız rekabet nedeniyle dava açabilecek kişiler kimlerdir?", cevap: "Haksız rekabet nedeniyle ekonomik menfaati zarar gören veya zarar görme tehlikesiyle karşılaşan <b>katılanlar (rakipler)</b>, <b>müşteriler</b> ve şartları varsa <b>mesleki/ekonomik birlikler</b>.", kaynak: "TTK m.56" },
{ alt: "A1.9", soru: "Müşteriler haksız rekabet nedeniyle dava açabilir mi?", cevap: "<b>Evet.</b> Ekonomik çıkarları zarar gören veya tehlikeye giren müşteriler tespit, men ve maddi zararlarının tazmini için dava açabilir.", kaynak: "TTK m.56/2" },
{ alt: "A1.9", soru: "Ticaret ve sanayi odaları gibi mesleki birlikler hangi davaları AÇAMAZ?", cevap: "Tespit, men ve düzeltme davalarını açabilirler; ancak üyeleri adına <b>maddi veya manevi tazminat</b> davası açamazlar.", kaynak: "TTK m.56/3" },
{ alt: "A1.9", soru: "Haksız rekabet davasında husumet (davalı sıfatı) kime yöneltilir?", cevap: "Haksız rekabet fiilini işleyene; fiil <b>çalışanları veya işçileri tarafından</b> işlenmişse ayrıca <b>istihdam edene</b> de yöneltilebilir.", kaynak: "TTK m.56, m.57" },
{ alt: "A1.9", soru: "Haksız rekabet davasında mahkeme kararının ilanı istenebilir mi?", cevap: "<b>Evet.</b> Davayı kazanan tarafın istemi üzerine, giderleri haksız çıkana ait olmak üzere hükmün <b>ilanına</b> karar verilebilir.", kaynak: "TTK m.59" },
{ alt: "A1.9", soru: "Haksız rekabette zamanaşımı süreleri nedir?", cevap: "Davaya hakkı olanın bunları <b>öğrendiği günden itibaren bir yıl</b> ve her hâlde <b>doğumlarından itibaren üç yıl</b> geçmekle zamanaşımına uğrar.", kaynak: "TTK m.60" },
{ alt: "A1.9", soru: "Haksız rekabet fiili aynı zamanda suç teşkil ediyorsa zamanaşımı nasıl uygulanır?", cevap: "Fiil, Türk Ceza Kanunu'na göre <b>daha uzun dava zamanaşımına</b> tabi bir cezayı gerektiriyorsa, bu süre hukuk davaları için de geçerli olur.", kaynak: "TTK m.60" },
{ alt: "A1.9", soru: "Haksız rekabet fiili 4 yıl önce işlenmiş ve yeni öğrenilmişse dava açılabilir mi?", cevap: "<b>Kural olarak hayır.</b> Üç yıllık azami süre dolduğundan zamanaşımı gerçekleşmiştir; fiilin ceza kanunlarına göre daha uzun zamanaşımına tabi olması hâli saklıdır.", kaynak: "TTK m.60" },
{ alt: "A1.9", soru: "Haksız rekabette maddi tazminat nasıl belirlenir?", cevap: "Zararın ispatı gerekir; mahkeme, davalının haksız rekabet sonucunda <b>elde etmesi mümkün görülen menfaatin karşılığına</b> göre de tazminata hükmedebilir.", kaynak: "TTK m.56/1-e" },
{ alt: "A1.9", soru: "Haksız rekabette manevi tazminatın şartı nedir?", cevap: "Türk Borçlar Kanunu'nun <b>kişilik haklarının ihlaline</b> ilişkin şartlarının gerçekleşmiş olması gerekir.", kaynak: "TTK m.56/1-e; TBK m.58" },
{ alt: "A1.9", soru: "Haksız rekabet davalarında ihtiyati tedbir istenebilir mi?", cevap: "<b>Evet.</b> Mahkeme, dava açılmadan önce veya dava sırasında haksız rekabetin önlenmesi için ihtiyati tedbire karar verebilir.", kaynak: "TTK m.61" },

{ alt: "A1.9", soru: "Basın veya yayın yoluyla işlenen haksız rekabette kime dava açılabilir?", cevap: "Kural olarak <b>yazı sahibine veya ilan verene</b>; yazı ya da ilan sahibinin rızasıyla yayımlanmışsa veya sorumlu belirlenemiyorsa <b>yayımlayanlara</b> da gidilebilir.", kaynak: "TTK m.58" },
{ alt: "A1.9", soru: "Haksız rekabet fiilleri cezai sorumluluk doğurur mu?", cevap: "<b>Evet.</b> TTK m.55 kapsamındaki hâllerden birini kasten işleyenler, <b>şikâyet üzerine</b> hapis veya adli para cezasıyla cezalandırılır.", kaynak: "TTK m.62" },
{ alt: "A1.9", soru: "Haksız rekabette cezai sorumluluk tüzel kişiler bakımından nasıl uygulanır?", cevap: "Fiil tüzel kişinin işleri görülürken işlenmişse tüzel kişi hakkında da <b>güvenlik tedbirlerine</b> hükmolunur; hapis cezası ilgili gerçek kişilere verilir.", kaynak: "TTK m.63" },
{ alt: "A1.9", soru: "Haksız rekabet davalarında görevli mahkeme hangisidir?", cevap: "<b>Asliye ticaret mahkemesi</b>; haksız rekabet davaları mutlak ticari davalardandır.", kaynak: "TTK m.4/1-a, m.5" },
{ alt: "A1.9", soru: "Haksız rekabetin önlenmesi (men) davası için fiilin gerçekleşmiş olması şart mıdır?", cevap: "<b>Hayır.</b> Haksız rekabetin <b>muhtemel olması</b> ve zarar tehlikesinin bulunması yeterlidir; önleyici dava açılabilir.", kaynak: "TTK m.56/1-a, b" },

/* ---------- A1.10 Ticari işletmenin devri ve rehni ---------- */

{ alt: "A1.10", soru: "Ticari işletmenin devri sözleşmesinin geçerlilik şartı nedir?", cevap: "Sözleşmenin <b>yazılı</b> yapılması ve <b>ticaret siciline tescil ve ilan</b> edilmesi gerekir.", kaynak: "TTK m.11/3" },
{ alt: "A1.10", soru: "Aksi kararlaştırılmamışsa ticari işletmenin devri neleri kapsar?", cevap: "<b>Duran malvarlığını</b>, <b>işletme değerini</b>, <b>kiracılık hakkını</b>, <b>ticaret unvanı ile diğer fikrî mülkiyet haklarını</b> (marka, patent, tasarım) ve sürekli olarak işletmeye özgülenmiş malvarlığı unsurlarını.", kaynak: "TTK m.11/3" },
{ alt: "A1.10", soru: "İşletme devrinde ticaret unvanının devir dışında bırakılması mümkün müdür?", cevap: "<b>Evet</b>, ancak bunun sözleşmede <b>açıkça</b> belirtilmesi gerekir; aksi hâlde unvan da devredilmiş sayılır.", kaynak: "TTK m.11/3, m.49" },
{ alt: "A1.10", soru: "İşletme devrinde marka ve patent gibi haklar da devredilmiş sayılır mı?", cevap: "<b>Evet</b>, aksi kararlaştırılmadıkça devir sözleşmesi fikrî mülkiyet haklarını da kapsar. (Sınai hakların ayrıca kendi sicillerine kaydı gerekir.)", kaynak: "TTK m.11/3; SMK m.148" },
{ alt: "A1.10", soru: "Ticari işletmesini devreden kişi, işletme borçlarından ne kadar süre sorumlu kalır?", cevap: "Devralanla birlikte <b>iki yıl</b> süreyle müteselsilen sorumludur.", kaynak: "TBK m.202" },
{ alt: "A1.10", soru: "Devredenin iki yıllık müteselsil sorumluluk süresi ne zaman işlemeye başlar?", cevap: "<b>Muaccel borçlar</b> için bildirme veya ilan tarihinden; <b>henüz muaccel olmamış borçlar</b> için muacceliyet (vade) tarihinden itibaren.", kaynak: "TBK m.202/2" },
{ alt: "A1.10", soru: "İşletmeyi devralan, işletmenin borçlarından sorumlu olur mu?", cevap: "<b>Evet.</b> Devralan, bildirme veya ilan tarihinden itibaren işletmenin borçlarını da üstlenmiş olur.", kaynak: "TBK m.202/1" },
{ alt: "A1.10", soru: "Ticari işletme rehni bugün hangi kanuna tabidir?", cevap: "<b>6750 sayılı Ticari İşlemlerde Taşınır Rehni Kanunu'na</b>. Bu Kanun, 1447 sayılı Ticari İşletme Rehni Kanunu'nu yürürlükten kaldırmıştır.", kaynak: "6750 s.K." },
{ alt: "A1.10", soru: "Ticari işlemlerde taşınır rehni sözleşmesi hangi şekilde yapılır ve nereye tescil edilir?", cevap: "Elektronik ortamda veya <b>noter huzurunda</b> düzenlenir ve <b>Rehinli Taşınır Sicili'ne</b> tescil edilmesiyle hüküm doğurur.", kaynak: "6750 s.K. m.4" },
{ alt: "A1.10", soru: "Ticari işletme (taşınır) rehninin kapsamına neler girer?", cevap: "Aksi kararlaştırılmadıkça işletmenin faaliyetine özgülenmiş <b>makine, araç, alet</b> ve <b>fikrî/sınai mülkiyet hakları</b> rehin kapsamına girer.", kaynak: "6750 s.K. m.5" },
{ alt: "A1.10", soru: "Ticari işletmenin adres veya merkez değişikliği sicile bildirilmeli midir?", cevap: "<b>Evet.</b> Tescil edilmiş hususlardaki her türlü değişiklik de tescil ve ilana tabidir.", kaynak: "TTK m.31/2" },

{ alt: "A1.10", soru: "Ticari işletmenin devri üçüncü kişilere nasıl duyurulur?", cevap: "<b>Alacaklılara bildirim</b> veya ticaret sicilinde <b>tescil ve ilan</b> yoluyla; sorumluluk süreleri bu tarihten itibaren işlemeye başlar.", kaynak: "TTK m.11/3; TBK m.202" },
{ alt: "A1.10", soru: "Ticari işletmenin devrinde iş sözleşmelerinin durumu ne olur?", cevap: "İşyeri devri niteliğindeki devirlerde <b>iş sözleşmeleri bütün hak ve borçlarıyla devralana geçer</b>; devreden ve devralan işçilik alacaklarından belirli süre birlikte sorumludur.", kaynak: "İş K. m.6" },
{ alt: "A1.10", soru: "Rehinli taşınır sicilindeki tescilin işlevi nedir?", cevap: "Rehin hakkı <b>tescille doğar</b> ve üçüncü kişilere karşı hüküm ifade eder; zilyetliğin devrine gerek yoktur.", kaynak: "6750 s.K. m.4" },
{ alt: "A1.10", soru: "Ticari işletmenin bütün olarak devrinde rekabet hukuku bakımından ne gözetilir?", cevap: "Devir bir <b>birleşme/devralma</b> niteliğindeyse ve eşik değerler aşılıyorsa <b>Rekabet Kurulu izni</b> gerekir.", kaynak: "4054 s.K. m.7" },

/* ---------- A1.11 Ticaret sicili ve tescilin etkileri ---------- */

{ alt: "A1.11", soru: "Ticaret siciline tescil işlemleri kural olarak nasıl başlar?", cevap: "Kural olarak <b>ilgililerin talebi</b> üzerine; tescil dilekçesi ve dayanak belgelerin sicil müdürlüğüne sunulmasıyla. Kanunda öngörülen hâllerde resen veya ilgili makamın bildirmesi üzerine de yapılır.", kaynak: "TTK m.27, m.32" },
{ alt: "A1.11", soru: "Tescil başvurusu için öngörülen genel süre nedir?", cevap: "Aksi belirtilmedikçe <b>on beş gün</b>; tescil edilecek hususun sicil müdürlüğünün yetki çevresi dışında gerçekleşmesi hâlinde bu süre <b>bir aydır</b>.", kaynak: "TTK m.30" },
{ alt: "A1.11", soru: "Sicil müdürlüğünün tescil talebi üzerindeki inceleme yetkisi neyi kapsar?", cevap: "Tescili istenen hususun <b>kanunun aradığı şartlara</b>, <b>emredici hükümlere</b> ve <b>kamu düzenine</b> uygunluğu ile gerçeği yansıtıp yansıtmadığının incelenmesini kapsar.", kaynak: "TTK m.32" },
{ alt: "A1.11", soru: "Sicil müdürlüğünün ret kararına karşı nereye ve ne kadar sürede itiraz edilir?", cevap: "Kararın tebliğinden itibaren <b>sekiz gün</b> içinde, sicilin bulunduğu yerdeki <b>asliye ticaret mahkemesine</b>.", kaynak: "TTK m.34" },
{ alt: "A1.11", soru: "Tescil edilen hususlar üçüncü kişilere karşı ne zaman hüküm ifade etmeye başlar?", cevap: "Tescil, ilan edilmişse <b>ilanın yapıldığı günü izleyen iş gününden</b> itibaren üçüncü kişilere karşı hüküm doğurur.", kaynak: "TTK m.36/1" },
{ alt: "A1.11", soru: "Tescil ve ilan edilmiş bir hususu bilmediğini ileri süren üçüncü kişinin durumu nedir?", cevap: "Üçüncü kişiler, ilanın etkisinin başladığı andan itibaren tescilli hususu <b>bilmediklerini ileri süremezler</b> (olumsuz etki).", kaynak: "TTK m.36" },
{ alt: "A1.11", soru: "Ticaret sicili kayıtları herkese açık mıdır?", cevap: "<b>Evet, sicil alenidir.</b> Herkes sicil içeriğini ve müdürlükte saklanan belgeleri inceleyebilir, onaylı suret isteyebilir.", kaynak: "TTK m.35/4" },
{ alt: "A1.11", soru: "Ticaret sicili kayıtlarının tutulmasından doğan zarardan kim sorumludur?", cevap: "<b>Devlet</b> ve <b>ilgili oda</b> müteselsilen sorumludur; kusurlu personele rücu edilir.", kaynak: "TTK m.25/2" },
{ alt: "A1.11", soru: "“Yolsuz tescil” hâlinde ne yapılabilir?", cevap: "Menfaati ihlal edilen kişi, sicil kaydının <b>düzeltilmesini veya silinmesini</b> asliye ticaret mahkemesinden isteyebilir; kusurlu olanlar zararı tazminle yükümlüdür.", kaynak: "TTK m.33, m.38" },
{ alt: "A1.11", soru: "Şubelerin tescili zorunlu mudur?", cevap: "<b>Evet.</b> Şubeler, bulundukları yerin ticaret siciline merkezin unvanı ve şube olduğu belirtilerek tescil ve ilan olunur.", kaynak: "TTK m.40/3" },
{ alt: "A1.11", soru: "Merkezin sicil kayıtlarındaki değişiklikler şube siciline de yansır mı?", cevap: "<b>Evet.</b> Merkezde tescil edilen hususlar, şubenin bağlı bulunduğu sicilde de tescil olunur.", kaynak: "TTK m.40/3" },
{ alt: "A1.11", soru: "Bir şubenin kapatılması sicile bildirilmeli midir?", cevap: "<b>Evet</b>; şubenin kapanması da tescil edilmiş hususlarda değişiklik olduğundan <b>sicilden terkin</b> ettirilmelidir.", kaynak: "TTK m.31/2" },
{ alt: "A1.11", soru: "Şube müdürünün temsil yetkisi tescil edilmeli midir?", cevap: "<b>Evet.</b> Şubeyi temsile yetkili kişiler ve yetki sınırları, şubenin bulunduğu yer siciline tescil ve ilan edilir.", kaynak: "TTK m.40/3" },
{ alt: "A1.11", soru: "Ticaret şirketlerinde müdür/yönetici seçimi ne kadar sürede tescil ettirilmelidir?", cevap: "Seçim veya atamadan itibaren <b>on beş gün</b> içinde tescil ve ilan edilmelidir.", kaynak: "TTK m.30, m.373" },
{ alt: "A1.11", soru: "Tescil talebinde bulunmayan ilgiliye karşı sicil müdürlüğü ne yapar?", cevap: "İlgiliyi, uygun süre vererek <b>tescile davet eder</b>; kaçınma sebebi bildirilmez veya haklı görülmezse durum mahkemeye bildirilir ve idari para cezası uygulanır.", kaynak: "TTK m.33" },

/* ---------- A1.12 Diğer TTK hükümleri (taksonomi dışı, tamamlayıcı) ---------- */

{ alt: "A1.12", soru: "Cari hesap sözleşmesi hangi geçerlilik şartına tabidir?", cevap: "<b>Yazılı</b> yapılmadıkça geçerli olmaz.", kaynak: "TTK m.89/2" },
{ alt: "A1.12", soru: "Cari hesapta bakiyeyi gösteren cetveli alan taraf ne kadar sürede itiraz etmelidir?", cevap: "Aldığı tarihten itibaren <b>bir ay</b> içinde; süresinde itiraz etmezse bakiyeyi kabul etmiş sayılır.", kaynak: "TTK m.94" },
{ alt: "A1.12", soru: "Cari hesap sözleşmesinden doğan alacaklarda zamanaşımı süresi nedir?", cevap: "Sözleşmenin sona ermesinden itibaren <b>beş yıl</b>.", kaynak: "TTK m.101" },
{ alt: "A1.12", soru: "Acente kimdir?", cevap: "Ticari mümessil, ticari vekil, satış memuru veya işletme çalışanı gibi bağımlı bir sıfatı olmaksızın; bir sözleşmeye dayanarak <b>belirli bir yer veya bölge içinde sürekli olarak</b> ticari bir işletmeyi ilgilendiren sözleşmelerde <b>aracılık etmeyi veya bunları o işletme adına yapmayı</b> meslek edinen kişidir.", kaynak: "TTK m.102" },
{ alt: "A1.12", soru: "Acente, müvekkili adına sözleşme yapabilir mi?", cevap: "<b>Kural olarak hayır.</b> Acente, yazılı olarak yetkilendirilip bu yetki ticaret siciline tescil ve ilan edilmedikçe müvekkili adına sözleşme yapamaz.", kaynak: "TTK m.107" },
{ alt: "A1.12", soru: "Acentenin denkleştirme istemi (portföy tazminatı) hangi süre içinde ileri sürülmelidir?", cevap: "Sözleşme ilişkisinin sona ermesinden itibaren <b>bir yıl</b> içinde.", kaynak: "TTK m.122/4" },
{ alt: "A1.12", soru: "Acentenin denkleştirme tazminatının üst sınırı nedir?", cevap: "Acentenin <b>son beş yıllık</b> faaliyeti sonucu aldığı yıllık komisyon ve diğer ödemelerin <b>ortalamasını</b> aşamaz; sözleşme ilişkisi daha kısa sürmüşse fiilî süre ortalaması esas alınır.", kaynak: "TTK m.122/2" },
{ alt: "A1.12", soru: "Acente, tahsil ettiği ve müvekkiline ait olan parayı zamanında göndermezse sorumluluğu nedir?", cevap: "Gönderme yükümlülüğünün doğduğu tarihten itibaren <b>faiz</b> ödemek ve gerekiyorsa ayrıca <b>tazminat</b> vermekle yükümlüdür.", kaynak: "TTK m.113" },
{ alt: "A1.12", soru: "Ticari temsilci, işletme sahibi adına taşınmazları devredebilir mi?", cevap: "<b>Hayır</b>; <b>açıkça yetkili kılınmadıkça</b> taşınmazı devredemez veya üzerinde bir hakla sınırlandıramaz.", kaynak: "TBK m.548" },
{ alt: "A1.12", soru: "Ticari vekil, kambiyo taahhüdünde bulunabilir mi?", cevap: "<b>Hayır.</b> Ticari vekil, özel olarak yetkilendirilmedikçe kambiyo taahhüdünde bulunamaz, ödünç alamaz ve dava açamaz.", kaynak: "TBK m.551" },
{ alt: "A1.12", soru: "Ticari temsilcinin yetkisi yalnızca bir şubeyle sınırlandırılabilir mi?", cevap: "<b>Evet.</b> Temsil yetkisi, işletmenin yalnızca bir şubesinin işleriyle sınırlandırılabilir; sınırlama tescil ve ilanla üçüncü kişilere karşı ileri sürülebilir.", kaynak: "TBK m.549" },
{ alt: "A1.12", soru: "Tacir yardımcıları için rekabet yasağının kapsamı nedir?", cevap: "İşletme sahibinin izni olmaksızın, doğrudan veya dolaylı olarak, kendi veya başkası hesabına <b>işletmenin yaptığı türden işler</b> yapamazlar.", kaynak: "TBK m.553" },
{ alt: "A1.12", soru: "Ticaret şirketleri ne zaman tüzel kişilik kazanır?", cevap: "<b>Ticaret siciline tescil</b> ile.", kaynak: "TTK m.355, m.588" },
{ alt: "A1.12", soru: "Anonim şirkette “kurucu” kimdir?", cevap: "Pay taahhüt edip <b>esas sözleşmeyi imzalayan</b> gerçek ve tüzel kişilerdir.", kaynak: "TTK m.337" },
{ alt: "A1.12", soru: "Limited şirkette esas sermaye payının devri hangi şekle tabidir?", cevap: "Devir sözleşmesinin <b>yazılı</b> yapılması ve imzaların <b>noterce onaylanması</b> şarttır; ayrıca kural olarak genel kurul onayı ve pay defterine kayıt gerekir.", kaynak: "TTK m.595" },
{ alt: "A1.12", soru: "Limited şirkette ortak sayısı bire düşerse bu durum ne kadar sürede bildirilir?", cevap: "Bu sonucu doğuran işlem tarihinden itibaren <b>yedi gün</b> içinde müdürlere yazıyla bildirilir; müdürler de tescil ettirir.", kaynak: "TTK m.574/2" },
{ alt: "A1.12", soru: "Şirketlerin internet sitesi açma yükümlülüğü ne zaman doğar?", cevap: "Denetime tabi sermaye şirketleri, kuruluşlarının <b>ticaret siciline tescilinden itibaren üç ay</b> içinde internet sitesi açmak zorundadır.", kaynak: "TTK m.1524" },
{ alt: "A1.12", soru: "Kıymetli evrakta borçlu ödemeyi neye karşılık yapar?", cevap: "Yalnızca <b>senedin teslimi karşılığında</b> ödemekle yükümlüdür.", kaynak: "TTK m.646" },
{ alt: "A1.12", soru: "Bir senedin çek sayılabilmesi için metninde hangi kelime mutlaka bulunmalıdır?", cevap: "Senet Türkçe ise <b>“çek”</b> kelimesi; başka dilde yazılmışsa o dildeki karşılığı.", kaynak: "TTK m.780/1-a" },
{ alt: "A1.12", soru: "Çekte ibraz süreleri nedir?", cevap: "Düzenlendiği yerde ödenecekse <b>on gün</b>; başka bir yerde ödenecekse <b>bir ay</b>; ayrı kıtalarda ise <b>üç ay</b>.", kaynak: "TTK m.796" },
{ alt: "A1.12", soru: "Çekte vade kararlaştırılabilir mi?", cevap: "<b>Hayır.</b> Çek <b>görüldüğünde ödenir</b>; aksine yazılmış vade kaydı yazılmamış sayılır.", kaynak: "TTK m.795" },
{ alt: "A1.12", soru: "Çizgili çekte iki çizgi arasına banka adı yazılmazsa ne olur?", cevap: "<b>Genel çizgili çek</b> sayılır; muhatap banka bunu yalnızca bir bankaya veya kendi müşterisine ödeyebilir.", kaynak: "TTK m.802, m.803" },
{ alt: "A1.12", soru: "Poliçede aval, kimin hesabına verildiği belirtilmemişse kim için verilmiş sayılır?", cevap: "<b>Düzenleyen (keşideci)</b> hesabına verilmiş sayılır.", kaynak: "TTK m.702" },
{ alt: "A1.12", soru: "Aval şerhi nereye yazılır?", cevap: "<b>Poliçenin üzerine</b> veya poliçeye eklenen <b>alonj</b> denilen ek kâğıda.", kaynak: "TTK m.701" },
{ alt: "A1.12", soru: "Poliçede vade ve protesto süresi geçtikten sonra yapılan ciro hangi sonucu doğurur?", cevap: "Yalnızca <b>alacağın temliki</b> hükmündedir; kambiyo hukukuna özgü sonuçları doğurmaz.", kaynak: "TTK m.690" },
{ alt: "A1.12", soru: "Poliçeyi ödeyen kişi kendisinden önce gelen borçlulara neyi talep edebilir?", cevap: "<b>Ödediği tutarın tamamını</b>, bu tutarın <b>faizini</b> ve yaptığı <b>giderleri</b>.", kaynak: "TTK m.727" },
{ alt: "A1.12", soru: "Kambiyo senetlerinde müracaat (başvurma) hakkı ne zaman düşer?", cevap: "İbraz veya protesto süreleri geçirilirse hamil; <b>kabul eden (asıl borçlu) dışındaki</b> cirantalara, düzenleyene ve diğer borçlulara karşı haklarını kaybeder.", kaynak: "TTK m.730" },
{ alt: "A1.12", soru: "Konişmento nedir?", cevap: "Taşıma sözleşmesinin yapıldığını ispatlayan, eşyanın taşıyan tarafından teslim alındığını gösteren ve eşyanın <b>ancak onun ibrazı karşılığında</b> teslim edileceğini belirten kıymetli evraktır.", kaynak: "TTK m.1228" },
{ alt: "A1.12", soru: "Konişmentoda eşyanın hâline ilişkin kayıt yoksa ne varsayılır?", cevap: "Eşyanın <b>haricen iyi hâlde</b> teslim alındığı varsayılır.", kaynak: "TTK m.1233" },
{ alt: "A1.12", soru: "Müşterek (büyük) avarya nedir?", cevap: "Gemi ve yükü <b>müşterek bir tehlikeden korumak</b> amacıyla makul bir hareketle yapılan olağanüstü fedakârlık ve giderlerdir.", kaynak: "TTK m.1272" },
{ alt: "A1.12", soru: "Gemi alacaklısı hakkı veren alacaklarda kanuni rehin hakkı ne kadar sürede düşer?", cevap: "Kural olarak <b>bir yıl</b> geçmekle düşer.", kaynak: "TTK m.1327" },
{ alt: "A1.12", soru: "Gemi sicili kayıtları herkes tarafından incelenebilir mi?", cevap: "<b>Evet</b>, gemi sicili alenidir; ilgisini inanılır kılan herkes kayıtları inceleyebilir ve örnek alabilir.", kaynak: "TTK m.966" },
{ alt: "A1.12", soru: "Gemi tasdiknamesi nedir?", cevap: "Geminin sicile kayıtlı olduğunu ve <b>Türk bayrağı çekme hakkına</b> sahip bulunduğunu gösteren belgedir.", kaynak: "TTK m.965" },
{ alt: "A1.12", soru: "Sigortacı, ödediği tazminat oranında sigortalının haklarına sahip olur mu?", cevap: "<b>Evet.</b> Sigortacı, ödediği tazminat tutarınca hukuken sigortalının yerine geçer (<b>halefiyet</b>).", kaynak: "TTK m.1472" },
{ alt: "A1.12", soru: "Sigorta ettirenin beyan yükümlülüğüne aykırılığı nedeniyle sigortacının fesih hakkı ne kadar sürede sona erer?", cevap: "Sigorta sözleşmesinin yapılmasından itibaren <b>beş yıl</b> geçtikten sonra sigortacı, beyan yükümlülüğünün ihlali nedeniyle sözleşmeyi feshedemez (kasıt hâli saklıdır).", kaynak: "TTK m.1439/2" },
{ alt: "A1.11", soru: "Tescili zorunlu olduğu hâlde tescil edilmemiş bir husus üçüncü kişilere karşı ileri sürülebilir mi?", cevap: "Ancak üçüncü kişilerin bunu <b>bildikleri veya bilmeleri gerektiği ispat edilirse</b> ileri sürülebilir.", kaynak: "TTK m.37" },
{ alt: "A1.11", soru: "Ticaret sicili müdürlükleri nerede ve kimin gözetiminde kurulur?", cevap: "<b>Ticaret ve sanayi odaları</b> bünyesinde kurulur; <b>Ticaret Bakanlığı</b>nın gözetim ve denetimi altında çalışır.", kaynak: "TTK m.24" },
{ alt: "A1.11", soru: "Tescil edilen hususlar nerede ilan olunur?", cevap: "<b>Türkiye Ticaret Sicili Gazetesi</b>nde (TTSG).", kaynak: "TTK m.35" },
{ alt: "A1.11", soru: "Sicile güvenerek hak kazanan iyiniyetli üçüncü kişinin durumu nedir?", cevap: "Tescil ve ilan edilen duruma duyulan güven korunur; kayıt gerçeğe aykırı olsa bile iyiniyetli üçüncü kişiye karşı ileri sürülemez.", kaynak: "TTK m.36, m.38" },
{ alt: "A1.11", soru: "Tescil talebinde bulunmaya kimler yetkilidir?", cevap: "İlgililer bizzat veya <b>temsilcileri</b> aracılığıyla; imza yetkisi ve temsil belgelerinin sicil müdürlüğüne sunulması gerekir.", kaynak: "TTK m.27, m.29" },
{ alt: "A1.11", soru: "Tescilin “kurucu” ve “açıklayıcı” etkisi arasındaki fark nedir?", cevap: "<b>Kurucu</b> tescilde hak tescille doğar (örn. şirketin tüzel kişilik kazanması). <b>Açıklayıcı</b> tescilde hak zaten doğmuştur, tescil yalnızca üçüncü kişilere karşı ileri sürülebilirliği sağlar.", kaynak: "TTK m.31, m.36" },
{ alt: "A1.11", soru: "Tescil başvurusunda dilekçe dışında ne sunulur?", cevap: "Tescili istenen hususu <b>ispat eden belgeler</b> (sözleşme, karar, imza beyannamesi vb.); bunlar müdürlükte saklanır.", kaynak: "TTK m.29, m.32" },
{ alt: "A1.11", soru: "Tescil edilmiş bir husus sonradan değişir veya sona ererse ne yapılır?", cevap: "Değişiklik <b>tescil ve ilan</b> ettirilir; sona eren hususlar <b>sicilden terkin</b> edilir.", kaynak: "TTK m.31/2" },

{ alt: "A1.11", soru: "Ticaret sicili müdürlüğü resen tescil yapabilir mi?", cevap: "<b>Evet</b>, kanunda öngörülen hâllerde; ayrıca mahkeme kararları ile ilgili makamların bildirimleri üzerine de tescil yapılır.", kaynak: "TTK m.27, m.33" },
{ alt: "A1.11", soru: "Sicil kaydına aykırı olarak üçüncü kişiye zarar veren tescil talebinde bulunanın sorumluluğu nedir?", cevap: "Gerçeğe aykırı tescil talebinde bulunan veya belge veren, bundan doğan <b>zararı tazminle</b> yükümlüdür.", kaynak: "TTK m.38" }

      ]
    },

    { kod: "A2", ad: "Türk Medeni Kanunu", ikon: "belge", kartlar: [] },
    { kod: "A3", ad: "Türk Borçlar Kanunu", ikon: "belge", kartlar: [] }

    ]
  },

  /* ==========================================================
     MODÜL B — KURUM VE ULUSLARARASI ÇERÇEVE
     ========================================================== */
  {
    kod: "B",
    ad: "Kurum ve Uluslararası Çerçeve",
    konular: [
      { kod: "B1", ad: "TÜRKPATENT", ikon: "kalem", kartlar: [] },
      { kod: "B2", ad: "Vekillik Mevzuatı", ikon: "kalem", kartlar: [] },
      { kod: "B3", ad: "Uluslararası Anlaşmalar", ikon: "dunya", kartlar: [] }
    ]
  },

  /* ==========================================================
     MODÜL C — TASARIM HUKUKU
     ========================================================== */
  {
    kod: "C",
    ad: "Tasarım Hukuku",
    konular: [
      { kod: "C1", ad: "Temel Kavramlar", ikon: "tasarim", kartlar: [] },
      { kod: "C2", ad: "Koruma Şartları", ikon: "tasarim", kartlar: [] },
      { kod: "C3", ad: "Başvuru ve Tescil Süreci", ikon: "tasarim", kartlar: [] },
      { kod: "C4", ad: "Süreler ve Hak Kaybı", ikon: "tasarim", kartlar: [] },
      { kod: "C5", ad: "Hak Sahipliği ve İhlal", ikon: "tasarim", kartlar: [] },
      { kod: "C6", ad: "Lahey Sistemi", ikon: "dunya", kartlar: [] }
    ]
  },

  /* ==========================================================
     MODÜL D — MARKA HUKUKU
     ========================================================== */
  {
    kod: "D",
    ad: "Marka Hukuku",
    konular: [
      { kod: "D1",  ad: "Marka Kavramı ve Türleri", ikon: "marka", kartlar: [] },
      { kod: "D2",  ad: "Başvuru Süreçleri ve Şekli Şartlar", ikon: "marka", kartlar: [] },
      { kod: "D3",  ad: "Mutlak Ret Nedenleri (m.5)", ikon: "marka", kartlar: [] },
      { kod: "D4",  ad: "Nispi Ret Nedenleri (m.6)", ikon: "marka", kartlar: [] },
      { kod: "D5",  ad: "İtiraz ve İnceleme Süreçleri", ikon: "marka", kartlar: [] },
      { kod: "D6",  ad: "Tescil Sonrası İşlemler", ikon: "marka", kartlar: [] },
      { kod: "D7",  ad: "Marka Hakkının Kapsamı ve Sınırları", ikon: "marka", kartlar: [] },
      { kod: "D8",  ad: "Markanın Kullanılması ve İptal", ikon: "marka", kartlar: [] },
      { kod: "D9",  ad: "Hükümsüzlük ve Sona Erme", ikon: "marka", kartlar: [] },
      { kod: "D10", ad: "Marka Hakkına Tecavüz", ikon: "kalkan", kartlar: [] },
      { kod: "D11", ad: "Madrid Protokolü", ikon: "dunya", kartlar: [] },
      { kod: "D12", ad: "Coğrafi İşaret ve Geleneksel Ürün Adı", ikon: "cografi", kartlar: [] }
    ]
  },

  /* ==========================================================
     MODÜL E — PATENT HUKUKU
     ========================================================== */
  {
    kod: "E",
    ad: "Patent Hukuku",
    konular: [
      { kod: "E1",  ad: "Patentlenebilirlik Kriterleri", ikon: "patent", kartlar: [] },
      { kod: "E2",  ad: "Araştırma Raporu ve Doküman Kategorileri", ikon: "patent", kartlar: [] },
      { kod: "E3",  ad: "Başvuru, Şekli Şartlar ve Belgeler", ikon: "patent", kartlar: [] },
      { kod: "E4",  ad: "İnceleme ve Belgelendirme", ikon: "patent", kartlar: [] },
      { kod: "E5",  ad: "Faydalı Model", ikon: "patent", kartlar: [] },
      { kod: "E6",  ad: "Ücretler ve Hakların Yeniden Tesisi", ikon: "patent", kartlar: [] },
      { kod: "E7",  ad: "Uluslararası Başvurular (PCT, EPC)", ikon: "dunya", kartlar: [] },
      { kod: "E8",  ad: "Hak Sahipliği ve Çalışan Buluşları", ikon: "belge", kartlar: [] },
      { kod: "E9",  ad: "Tecavüz ve Hükümsüzlük", ikon: "kalkan", kartlar: [] },
      { kod: "E10", ad: "Lisans ve Zorunlu Lisans", ikon: "belge", kartlar: [] },
      { kod: "E11", ad: "Entegre Devre Topoğrafyaları", ikon: "devre", kartlar: [] }
    ]
  }

  ]
};
