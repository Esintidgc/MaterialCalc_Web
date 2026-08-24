# MaterialCalc Web Sitesi - Bölüm Bölüm İlerleme ve İnceleme Rehberi

**Belge Adı:** `WEB_SITESI_BOLUM_BOLUM_REHBERI.md`  
**Oluşturulma Tarihi:** 2026-08-23  
**Amaç:** Web sitesindeki tüm bölümleri tek tek, bağımsız birer modül olarak ele almak; tasarım, kod, etkileşim ve mobil uyumunu adım adım birlikte mükemmelleştirmek.

---

## 📑 Genel Bölüm İndeksi (`anasayfa.html` ve Site Geneli)

Aşağıda web sitemizde yer alan tüm ana ve yardımcı bölümler listelenmiştir. Sırayla bu bölümleri seçip üzerinde ince ayarlar yapabiliriz:

1. [**Bölüm 1: Dinamik Ada & Mobil Çekmece Menü (`Floating Header`)**](#1-dinamik-ada--mobil-çekmece-menü-floating-header)
2. [**Bölüm 2: Hero & Canlı Daktilo Başlık (`Hero Section`)**](#2-hero--canlı-daktilo-başlık-hero-section)
3. [**Bölüm 3: Akıllı Arama Çubuğu (`Hero Search Bar`)**](#3-akıllı-arama-çubuğu-hero-search-bar)
4. [**Bölüm 4: Markalar & Kapsam Izgarası (`Brands Section`)**](#4-markalar--kapsam-ızgarası-brands-section)
5. [**Bölüm 5: 3D İnteraktif Cüzdan (`How It Works / Wallet`)**](#5-3d-interaktif-cüzdan-how-it-works--wallet)
6. [**Bölüm 6: Hesaplayıcılar Akordiyon Kartları (`Calculators Accordion`)**](#6-hesaplayıcılar-akordiyon-kartları-calculators-accordion)
7. [**Bölüm 7: Sıkça Sorulan Sorular (`FAQ Accordion`)**](#7-sıkça-sorulan-sorular-faq-accordion)
8. [**Bölüm 8: Site Alt Bilgisi & Bülten (`Site Footer`)**](#8-site-alt-bilgisi--bülten-site-footer)
9. [**Bölüm 9: Yüzen Hızlı Menü & Yukarı Çık (`Floating Dock & Back-to-Top`)**](#9-yüzen-hızlı-menü--yukarı-çık-floating-dock--back-to-top)
10. [**Ek Sayfalar: `hesapla.html` (SPA Hesaplayıcı) & `usta-hesabi.html`**](#10-ek-sayfalar-genel-bakış)

---

## 1. Dinamik Ada & Mobil Çekmece Menü (`Floating Header`)

* **HTML Seçici:** `<header class="floating-header">` & `<div class="mobile-menu-drawer">`
* **Bağlı Dosyalar:** [`css/components.css`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/css/components.css), [`js/app.js`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/js/app.js), [`js/lang.js`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/js/lang.js)
* **İşlevi:**
  * Sitenin en üstünde asılı duran küresel navigasyon çubuğudur.
  * Sayfa aşağı kaydırıldığında (`scroll > heroHeight - 80`) otomatik olarak cam efektinden beyaz opak arka plana geçer (`.scrolled`).
  * iOS tarzı kayan buton ile **TR / EN** dil değişimi sağlar.
* **Bileşenleri:**
  1. **Logo Hapı (`.logo-pill`):** `MaterialCalc` marka logosu.
  2. **Menü Hapı (`.nav-pill`):** *Hesaplayıcılar, Nasıl Çalışır?, Usta Hesabı, S.S.S, İletişim* linkleri.
  3. **Aksiyon Hapı (`.action-pill`):** Dil değiştirici switch, *"Hemen Başla"* butonu ve mobil için animasyonlu **Hamburger Butonu**.
  4. **Mobil Menü Çekmecesi (`.mobile-menu-drawer`):** Mobilde hamburger tıklandığında açılan cam efektli menü paneli.
* **Mevcut Durum:** ✅ Masaüstü ve mobil uyumu hazırlandı.

---

## 2. Hero & Canlı Daktilo Başlık (`Hero Section`)

* **HTML Seçici:** `<section class="hero-section">` (İçerisinde `.hero-content`, `.hero-left`, `.hero-right`)
* **Bağlı Dosyalar:** [`css/style.css`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/css/style.css), [`js/app.js`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/js/app.js)
* **İşlevi:**
  * Kullanıcıyı karşılayan ana vitrin alanıdır.
  * Arka planda `livingroom_2.png` görseli ve koyu degrade katman (`.hero-overlay`) yer alır.
* **Bileşenleri:**
  1. **Daktilo Başlığı (`h1`):** `Malzemeni hesapla.` sabit üst satır, altında daktilo efektiyle sırayla yazılıp silinen `Saniyeler içinde.`, `Tam ölçüsüyle.`, `Net verilerle.` metinleri ve yanıp sönen dikey imleç (`.typewriter-cursor`).
  2. **Açıklama Paragrafı:** Net matematiksel verilerle malzeme hesaplama vurgusu.
  3. **Hızlı Butonlar:** Beyaz dolgulu *"Hızlı Hesapla"* (`.btn-solid-white`) ve şeffaf cam efektli *"Neler Var?"* (`.btn-glass-outline`) butonları.
* **Mevcut Durum:** ✅ Akıcı `clamp()` font boyutu ve mobilde sıfır yatay taşma sağlandı.

---

## 3. Akıllı Arama Çubuğu (`Hero Search Bar`)

* **HTML Seçici:** `<form class="hero-search-bar">` (`#heroSearchInput`)
* **Bağlı Dosyalar:** [`css/style.css`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/css/style.css), [`js/app.js`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/js/app.js)
* **İşlevi:**
  * Hero bölümünün en üstünde yer alan akıllı malzeme/uygulama arama motorudur.
  * Kullanıcının yazdığı kelimeyi (`seramik`, `parke`, `boya`, `duvar kağıdı`, `süpürgelik`, `usta`, `iletişim`) algılar ve doğrudan ilgili hesaplama sayfasına yönlendirir.
* **Bileşenleri:**
  1. Büyüteç ikonu ve `data-i18n-placeholder` destekli metin girişi.
  2. Yuvarlak beyaz arama onay butonu (`.search-btn`).
  3. Hatalı/bulunamayan aramalarda arama kutusunun titremesi (`searchShake` animasyonu).
* **Mevcut Durum:** ✅ Mobilde %100 genişlik ve gölge optimizasyonu yapıldı.

---

## 4. Markalar & Kapsam Izgarası (`Brands Section`)

* **HTML Seçici:** `<section class="brands-section">`
* **Bağlı Dosyalar:** [`css/style.css`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/css/style.css)
* **İşlevi:**
  * Hero adasının hemen altında yer alarak platformun profesyonel kapsamını ve desteklenen ana malzeme kategorilerini sergiler.
* **Bileşenleri:**
  1. Başlık: *"Tüm yapı ve dekorasyon projeleriniz için profesyonel hesaplama platformu."*
  2. 4 Adet SVG İkonlu Kategori:
     - 🪵 **Parke**
     - 🎨 **Boya**
     - 📜 **Duvar Kağıdı**
     - 📐 **Alçıpan**
* **Mevcut Durum:** ✅ Masaüstünde yatay ferah sıra, mobilde 2x2 grid düzeni hazır.

---

## 5. 3D İnteraktif Cüzdan (`How It Works / Wallet`)

* **HTML Seçici:** `<section id="howItWorks">` & `<div class="wallet">`
* **Bağlı Dosyalar:** [`css/style.css`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/css/style.css), [`js/app.js`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/js/app.js)
* **İşlevi:**
  * Hesaplama sürecinin 3 kolay adımını anlatmak için tasarlanmış özel bir **3D Cüzdan UI** bileşenidir.
* **Bileşenleri:**
  1. **Başlık & Rozet:** *"Kolay Kullanım"* rozeti ve *"Sadece 3 Adımda Hesaplayın"* başlığı.
  2. **Cüzdan Gövdesi (`.wallet-back` & `.pocket`):** Beyaz dikiş detaylı cep.
  3. **3 Basamaklı Kartlar:**
     - *1. Adım:* **MALZEMENİ SEÇ** (Koyu gri/siyah kart)
     - *2. Adım:* **ÖLÇÜLERİ GİR** (Bej/bronz kart)
     - *3. Adım:* **ANINDA SONUÇ AL** (Açık gri kart)
  4. **Göz İkonu & Bakiye:** Göz ikonuna basıldığında veya cüzdana dokunulduğunda bakiye yıldızları `******` kaybolup `"HIZLI HESAP"` yazısına dönüşür.
* **Mevcut Durum:** ✅ Masaüstünde hover, mobilde ise tıklama/dokunma (`.wallet.active`) etkileşimi devrede.

---

## 6. Hesaplayıcılar Akordiyon Kartları (`Calculators Accordion`)

* **HTML Seçici:** `<section id="calculatorGrid">` & `<div class="calc-accordion-container">`
* **Bağlı Dosyalar:** [`css/style.css`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/css/style.css)
* **İşlevi:**
  * 5 ana hesaplama modülünü (`Seramik`, `Parke`, `Boya`, `Duvar Kağıdı`, `Süpürgelik`) tanıtan ve doğrudan `hesapla.html?type=...` sayfasına yönlendiren etkileşimli kart alanıdır.
* **Bileşenleri:**
  1. **Bölüm Başlığı:** *"Projelerinize yer açın, gerisini bize bırakın."*
  2. **5 Adet Akordiyon Kartı:**
     - **Seramik:** Zemin ve duvar uygulamaları, fire oranları.
     - **Parke:** Laminant/lamine paket hesabı.
     - **Boya:** Litre bazlı net boya hesabı.
     - **Duvar Kağıdı:** Rulo ebatları ve desen fire hesabı.
     - **Süpürgelik:** Metretül ve kapı düşümü hesabı.
* **Masaüstü Davranışı:** 5 kart yan yana durur; üzerine gelinen kart `flex: 5` ile devasa genişler ve detay paneli yukarı kayar.
* **Mobil Davranışı:** 5 kart dikey olarak alt alta sıralanır, 160px yükseklikte doğrudan okunabilir ve tıklanabilir kartlar haline gelir.
* **Mevcut Durum:** ✅ Masaüstü yatay akordiyon ve mobil dikey kart düzeni tamamlandı.

---

## 7. Sıkça Sorulan Sorular (`FAQ Accordion`)

* **HTML Seçici:** `<section id="faq">` & `<div class="faq-container">`
* **Bağlı Dosyalar:** [`css/style.css`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/css/style.css), [`js/app.js`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/js/app.js)
* **İşlevi:**
  * Kullanıcıların kafasındaki soru işaretlerini gidermek için hazırlanmış akıcı akordiyon alanıdır.
* **Bileşenleri:**
  1. *MaterialCalc uygulamasını kullanmak tamamen ücretsiz mi?* (Cevap: Evet, tüm temel özellikler ücretsizdir.)
  2. *Hesaplamalar ne kadar doğru sonuç veriyor?* (Cevap: Endüstri standartlarında net matematiksel doğruluk.)
  3. *Kendi fire oranımı (%) manuel olarak belirleyebilir miyim?* (Cevap: Evet, slider ile istenen orana ayarlanabilir.)
  4. *Hesaplama sonuçlarını kaydedebilir miyim?* (Cevap: Ekran görüntüsü ve yakında PDF indirme.)
* **Mevcut Durum:** ✅ Tıklanan soru açılırken diğerleri otomatik kapanır, `+` ikonu `45deg` dönerek `x` olur.

---

## 8. Site Alt Bilgisi & Bülten (`Site Footer`)

* **HTML Seçici:** `<footer id="contact" class="site-footer">`
* **Bağlı Dosyalar:** [`css/components.css`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/css/components.css)
* **İşlevi:**
  * Sayfanın kapanış alanıdır; bülten aboneliği, site içi hızlı linkler ve yasal metinleri barındırır.
* **Bileşenleri:**
  1. **Sol Sütun (Marka & Bülten):** `MATERIALCALC` logosu, slogan ve *"Join"* butonlu e-posta abonelik kutusu.
  2. **Sağ Sütunlar (Site Haritası):**
     - *Keşfet:* Nasıl Çalışır, Usta Hesabı, Özellikler, Hakkımızda, SSS
     - *Hesaplayıcılar:* Seramik, Parke, Boya, Duvar Kağıdı, Süpürgelik
     - *İletişim:* Destek, Email, Instagram, X
  3. **Alt Çubuk (Footer Bottom):** Telif hakkı bildirimi, Gizlilik ve Şartlar linkleri.
* **Mevcut Durum:** ✅ Masaüstünde çok sütunlu, mobilde dikey akışlı tam uyum sağlandı.

---

## 9. Yüzen Hızlı Menü & Yukarı Çık (`Floating Dock & Back-to-Top`)

* **HTML Seçici:** `<aside class="floating-dock">` & `<button id="backToTop">`
* **Bağlı Dosyalar:** [`css/components.css`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/css/components.css), [`js/app.js`](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc_Web/js/app.js)
* **İşlevi:**
  * Kullanıcının sayfanın neresinde olursa olsun tek tıkla istediği hesaplayıcıya ulaşmasını veya en üste dönmesini sağlar.
* **Bileşenleri:**
  1. **Floating Dock:** Ekranın sağında dikey asılı 5 hesaplayıcı ikonu. Üzerine gelince elastik zıplama ve solunda ipucu balonu (`data-tooltip`). Mobilde ekranın altına yatay olarak yerleşir.
  2. **Back to Top:** 400px scroll sonrası beliren dairesil yukarı çıkma butonu.
* **Mevcut Durum:** ✅ Lenis pürüzsüz kaydırma ile entegre ve mobil çakışmaları çözülmüş durumda.

---

## 10. Ek Sayfalar (Genel Bakış)

* **`pages/hesapla.html`:** Sol sidebar kategorili, gerçek zamanlı çalışan 5 farklı hesaplayıcı paneli (SPA düzeni).
* **`pages/usta-hesabi.html`:** Algoritma şeffaflığı, adım adım formüller ve şantiye matematiği dökümantasyon sayfası.

---

## 🛠️ Sıradaki Adım: Hangi Bölümle Başlıyoruz?

Bu rehberdeki 9 ana bölümden istediğini seçebilirsin. Örneğin:
- **"Bölüm 1 (Dinamik Ada) üzerinden geçelim"**
- **"Bölüm 2 & 3 (Hero & Arama) tasarımını inceleyelim"**
- **"Bölüm 5 (3D Cüzdan) animasyonlarına bakalım"**
- veya **"Bölüm 6 (Hesaplayıcı Akordiyonu) üzerinde duralım"**

Hangisiyle başlamak istersin?
