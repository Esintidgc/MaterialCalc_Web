# MaterialCalc - Anasayfa Geliştirme ve Mobil Uyumluluk Eylem Planı

**Belge Adı:** `ANASAYFA_GELISTIRME_VE_MOBIL_PLAN.md`  
**Tarih:** 2026-08-23  
**Hedef Sayfa:** [`pages/anasayfa.html`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/pages/anasayfa.html)  
**İlişkili Dosyalar:** [`css/style.css`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/css/style.css), [`css/components.css`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/css/components.css), [`css/variables.css`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/css/variables.css), [`js/app.js`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/js/app.js)

---

## 1. Giriş ve Amaç

Bu belge, MaterialCalc projesinin vitrin sayfası olan `anasayfa.html`'in masaüstü, tablet ve mobil cihazlarda (320px - 4K) sıfır hata, sıfır yatay taşma (zero overflow) ve Awwwards seviyesinde premium bir kullanıcı deneyimi ile **tamamen bitirilmesi** için hazırlanmış detaylı teknik analiz ve uygulama planıdır.

---

## 2. Bölüm Bazlı Mevcut Durum, Mobil Hatalar ve Çözüm Matrisi

| # | Bölüm Adı | Masaüstü Davranışı | Tespit Edilen Mobil / Tablet Hataları | Uygulanacak Kesin Çözüm |
|---|---|---|---|---|
| **1** | **Floating Header (Dinamik Ada)** | 3 ayrı hap kapsayıcı (`logo-pill`, `nav-pill`, `action-pill`) ekranın üstünde yan yana durur. | Mobilde 3 hap yan yana sığmaz. 5 menü linki ekrandan taşar veya karmaşık alt alta dizilir. | Mobilde tek parça şık ada; Logo solda, TR/EN ve Hamburger butonu sağda yer alır. Tıklanınca cam efektli (`backdrop-filter`) tam ekran/açılır mobil menü açılır. |
| **2** | **Hero Bölümü** | `min-height: calc(100vh - 48px)`, `4rem` daktilo başlığı (`white-space: nowrap`), 360px arama çubuğu. | `white-space: nowrap` ve `4rem` yazı boyutu küçük ekranlarda (360px - 414px) sağdan taşar. Aşırı iç/dış padding alanı daraltır. | `white-space: normal`, responsive font boyutu (`clamp(2rem, 6vw, 3.5rem)`), `width: 100%` tam oturan arama çubuğu ve dikey/rahat dokunulabilir butonlar. |
| **3** | **Brands (Markalar) Bölümü** | 4 adet malzeme ikonu ve başlık yan yana ferahça durur. | Mobilde yazılar ve ikonlar daralabilir veya boşluklar orantısız kalabilir. | Mobilde 2x2 grid veya kaydırılabilir flex düzeni; dokunmatik uyumlu ikon ve yazı oranları. |
| **4** | **Nasıl Çalışır? (3D Cüzdan / Wallet)** | `440px` sabit genişlik, 3 basamaklı kartlar hover ile fırlayarak açılır. Göz butonuyla bakiye yıldızları kalkar. | `440px` sabit genişlik 375px/390px telefonlarda taşmaya sebep olur. Mobilde hover olmadığı için kartlar kapalı kalır. | `max-width: 100%` (örn: 340px) ölçeklenebilir cüzdan ve mobilde dokunulduğunda (`click/touch`) kartları açan aktif sınıf (`.wallet.active`). |
| **5** | **Hesaplayıcılar Akordiyonu** | 5 kart yatay flex (`height: 500px`), hover yapıldığında `flex: 5` ile `600px` genişlikte detay açılır. | 5 kart mobilde yan yana gelince her biri 60px kalır. Yazılar okunmaz, `width: 600px` içerik ekranı patlatır. | Mobilde dikey kart akışı (`flex-direction: column`, `height: auto`, `width: 100%`); her kart 160-200px yükseklikte bağımsız şık bir kart olarak sunulur. |
| **6** | **SSS (FAQ) Akordiyonu** | 4 adet soru kartı, `+ / x` rotasyonu ile açılır-kapanır. | Yazı boyutları ve paddingler küçük ekranlarda fazla boşluk bırakabilir. | Mobilde ergonomik padding (`16px 20px`), dokunma alanını genişletme ve font boyutlarının optimize edilmesi. |
| **7** | **Footer (Alt Bilgi)** | E-posta bülteni, 3 sütunlu linkler, telif ve dil seçici. | Mobilde sütunlar daralır, bülten input ve butonu taşabilir. | Mobilde sütunlar alt alta düzenlenir, bülten formu `width: 100%` olur, sosyal linkler ve telif ortalanır. |
| **8** | **Floating Dock & Back-to-Top** | Ekranın sağında dikey asılı dock ve sağ altta yukarı çık butonu. | Mobilde dock alta geçer (`bottom: 15px`); `back-to-top` butonu ile üst üste binebilir. | `back-to-top` mobilde `bottom: 85px` seviyesine çekilir; dock ortalanır ve z-index hiyerarşisi netleştirilir. |

---

## 3. Detaylı Teknik Eylem Planı (Adım Adım)

### 📌 Adım 1: Dinamik Ada & Mobil Menü Mimarisi
- **HTML:** `anasayfa.html` içerisindeki `.floating-header` yapısına mobil hamburger butonu ve mobil menü katmanı eklenecek.
- **CSS:** Masaüstünde 3'lü hap görünümü korunurken, `@media (max-width: 768px)` altında:
  - Header tek bir kompakt hap haline getirilecek.
  - Tıklanınca açılan cam efektli (Glassmorphism) mobil navigasyon çekmecesi tasarlanacak.
- **JS:** Hamburger butonuna tıklandığında menüyü açıp-kapatan, linke tıklandığında menüyü otomatik gizleyen mantık `app.js`'e eklenecek.

---

### 📌 Adım 2: Hero & Arama Çubuğu & Markalar Optimizasyonu
- **Hero Başlığı:** `h1` etiketindeki `white-space: nowrap` kuralı mobil medya sorgusunda `white-space: normal` yapılacak; `font-size: clamp(2rem, 7vw, 4rem)` ile fluid tipografi sağlanacak.
- **Daktilo İmleci:** Daktilo metninin kelime değişiminde yükseklik zıplamalarını önlemek için `min-height` tanımlanacak.
- **Arama Çubuğu:** Mobilde `width: 100%; max-width: 100%;` yapılacak, `box-shadow` mobilde taşmayacak şekilde küçültülecek (3px).
- **Hero Butonları:** Mobilde parmakla rahat basılabilir `width: 100%` veya yan yana esnek flex butonlar haline getirilecek.
- **Markalar (Brands):** Mobilde 2x2 grid (`grid-template-columns: 1fr 1fr`) yapılarak taşma engellenecek.

---

### 📌 Adım 3: 3D Cüzdan (Wallet) Dokunmatik ve Responsive Uyumu
- **Ölçülendirme:** `.wallet`, `.wallet-back`, `.wallet-card`, `.pocket` elemanları `max-width: 100%` ve mobil için orantılı genişlik/yükseklik (`width: 330px; height: 300px;`) ile yeniden ölçeklenecek.
- **Dokunmatik Desteği (Touch/Click):** 
  - `app.js` içerisine `.wallet` tıklandığında `.active` sınıfı ekleyen kod yazılacak.
  - CSS'te hem `.wallet:hover` hem de `.wallet.active` durumunda kartların dışarı fırlaması ve bakiye yıldızlarının kalkması sağlanacak.

---

### 📌 Adım 4: Hesaplayıcılar Akordiyonu (Masaüstü & Mobil Düzen Ayrımı)
- **Masaüstü:** Mevcut lüks yatay akordiyon (`height: 500px`, `flex: 1` -> `flex: 5`) korunacak.
- **Tablet / Mobil (`max-width: 992px`):**
  - `.calc-accordion-container`: `flex-direction: column; height: auto; gap: 16px;` yapılacak.
  - Her kart `height: 180px; width: 100%;` olacak, üzerine tıklandığında veya mobilde her zaman başlık + açıklama + buton görünür halde ferah bir dikey kart listesi oluşturulacak.
  - `width: 600px` sabit genişlik mobilde `width: 100%; max-width: 100%;` ile değiştirilecek.

---

### 📌 Adım 5: SSS (FAQ), Footer, Floating Dock & Back-To-Top
- **FAQ:** Mobilde soru metinlerinin satır aralıkları ve `+` ikonunun hizası optimize edilecek.
- **Footer:** Sütunlar mobil ekranlarda `flex-direction: column; gap: 32px;` ile alt alta dizilecek; bülten inputu tam genişliğe oturacak.
- **Floating Dock:** Mobilde ekranın altında yatayda ortalanacak, `back-to-top` butonu dock'un hemen üzerinde (`bottom: 85px`) konumlandırılacak.

---

## 4. Test ve Kalite Kontrol (QC) Kontrol Listesi

- [ ] **Yatay Kaydırma Testi:** Sayfa hiçbir ekran genişliğinde (320px, 375px, 390px, 414px, 768px, 1024px, 1920px) sağa-sola taşmayacak (`overflow-x: hidden` hilesi olmadan doğal olarak sığacak).
- [ ] **Dinamik Ada & Menü Testi:** Mobilde menü açılıp kapanacak, linke basınca hedef bölüme pürüzsüz kayacak ve menü kapanacak.
- [ ] **Daktilo ve Arama Testi:** Mobilde daktilo yazısı satır taşması yapmayacak, arama motoru çalışacak.
- [ ] **Dokunmatik Cüzdan Testi:** Mobilde cüzdana dokunulduğunda kartlar yukarı açılacak, göz ikonuna basılınca bakiye görünecek.
- [ ] **Hesaplayıcı Kartları Testi:** Mobilde 5 kart dikey olarak rahatça okunacak ve hesapla butonlarına kolayca tıklanabilecek.
- [ ] **Çoklu Dil (i18n) Testi:** TR ve EN modlarında hiçbir metin taşmayacak veya eksik çeviri kalmayacak.
- [ ] **Lenis Smooth Scroll Testi:** Mobil dokunmatik kaydırma doğal akıcılıkta, masaüstü tekerlek kaydırması ipeksi yumuşaklıkta çalışacak.

---

## 5. Sıradaki Adım

Bu plan onaylandığı anda **Adım 1 (Dinamik Ada & Mobil Menü)** ve **Adım 2 (Hero & Arama & Markalar)** ile kodlamaya başlanacaktır.
