# MaterialCalc - Kapsamlı Kod, Mimari ve Dosya Analiz Raporu

**Tarih:** 2026-08-23  
**Proje Adı:** MaterialCalc Web  
**Teknoloji Yığını:** HTML5, CSS3 (Vanilla / Custom Properties / Glassmorphism), JavaScript (Vanilla ES6+ / Zero-Dependency), AOS (Animate on Scroll)

---

## 1. Genel Proje Özeti ve Amacı

**MaterialCalc**, iç mimarlar, şantiye şefleri, ustalar ve ev tadilatı yapan son kullanıcılar için geliştirilmiş yeni nesil bir **yapı malzemesi hesaplama platformudur**.

Platformun temel felsefesi:
- Karmaşık hesaplama araçlarının yerine **şık, modern, dinamik ve cam efektli (Glassmorphism & Dark/Light hibrit)** bir arayüz sunmak.
- Yalnızca teorik alan hesabı yapmakla kalmayıp, şantiyenin gerçek matematiğini (**fire oranları, kapı düşümleri, kat sayıları, koli/paket yukarı yuvarlama standartları**) hesaplamaya dahil etmek.
- Hiçbir ağır framework (React, Vue vb.) kullanmadan, **Vanilla JavaScript** ile yüksek performanslı, SEO uyumlu ve çok dilli bir deneyim sağlamak.

---

## 2. Dizin ve Dosya Yapısı (File Tree)

```text
MaterialCalc_Web/
│
├── Images/                                 # Görsel Varlıklar
│   ├── livingroom_2.png                   # Hero, Parke & Süpürgelik arka plan görseli
│   └── livingroom_4.png                   # Seramik, Boya & Duvar Kağıdı arka plan görseli
│
├── pages/                                  # HTML Sayfaları
│   ├── anasayfa.html                      # Ana Karşılama ve Tanıtım Sayfası (Landing Page)
│   ├── hesapla.html                       # Etkileşimli Hesaplayıcı Uygulaması (SPA Modeli)
│   └── usta-hesabi.html                   # Algoritmalar & Şantiye Matematiği Dökümantasyonu
│
├── css/                                    # Stil Mimarisi & Tasarım Sistemi
│   ├── variables.css                      # Design Tokens (Renkler, Boşluklar, Gölgeler)
│   ├── components.css                     # Global Bileşenler (Header, Footer, Dock, Switch)
│   ├── style.css                          # Ana Sayfa Düzeni, Butonlar, Cüzdan Animasyonu, FAQ
│   ├── calculator.css                     # Hesaplayıcı Sayfası (SPA Menü, Formlar, Sonuç Kartları)
│   └── usta-hesabi.css                    # Usta Hesabı Sayfası Tablo ve Grid Stilleri
│
├── js/                                     # İş Mantığı & Etkileşim Motoru
│   ├── translations.js                    # TR / EN Çoklu Dil Sözlüğü (i18n Sözlük Dosyası)
│   ├── lang.js                            # Dinamik Dil Değiştirici Motoru (LocalStorage & CustomEvent)
│   ├── app.js                             # Scroll Dinleyicileri, Arama Motoru, Daktilo, FAQ Akordiyonu
│   └── calculator.js                      # Matematiksel Hesaplama Motorları & Tab Yöneticisi
│
├── MaterialCalc_Sistem_Analizi.md         # Özet Sistem Analiz Belgesi
├── calculation_analysis.md                # Formül ve Endüstri Standartları Analiz Belgesi
└── DETAYLI_PROJE_ANALIZ_RAPORU.md          # Bu Kapsamlı Teknik Rapor
```

---

## 3. Görsel Klasörü İncelemesi (`Images/`)

Projede harici kütüphanelere veya placeholder resimlere ihtiyaç duyulmadan optimize edilmiş yüksek çözünürlüklü 2 ana görsel bulunmaktadır:

1. **`Images/livingroom_2.png`**:
   - **Boyut:** ~7.6 MB
   - **Kullanım Alanı:** `anasayfa.html` Hero bölümünün arka plan görseli, Hesaplayıcılar bölümündeki **Parke** ve **Süpürgelik** akordiyon kartlarının arka planı.
   - **İşlevi:** Sıcak tonlu, modern mobilyalı ve ahşap zeminli bir salon tasarımı sergileyerek kullanıcıya doğrudan zemin ve süpürgelik uygulamalarını çağrıştırır.

2. **`Images/livingroom_4.png`**:
   - **Boyut:** ~6.9 MB
   - **Kullanım Alanı:** `anasayfa.html` Hesaplayıcılar bölümündeki **Seramik**, **Boya** ve **Duvar Kağıdı** kartlarının arka planı.
   - **İşlevi:** Açık renkli duvarlar ve geniş seramik zemin detayları barındırarak boya, duvar kağıdı ve seramik hesaplama kartlarında estetik bir arka plan sağlar.

---

## 4. HTML Sayfalarının Detaylı Analizi (`pages/`)

### 4.1. `pages/anasayfa.html` (Landing Page)
Platformun vitrin sayfasıdır. Kullanıcıyı karşılar, değer önerisini sunar ve etkileşimli hesaplayıcılara yönlendirir.

- **Head & SEO Yapısı:**
  - `viewport`, `charset`, `title`, `meta description` eksiksiz tanımlanmıştır.
  - **Open Graph (OG)** etiketleri (`og:type`, `og:url`, `og:title`, `og:description`, `og:image`) ve `canonical link` eklenerek arama motorları ve sosyal paylaşımlar için optimize edilmiştir.
  - Google Fonts üzerinden `Poppins` yazı tipi (400-800 kalınlıklar) ve AOS (Animate on Scroll) kütüphanesi bağlanmıştır.
- **Bölüm 1: Floating Header (Dinamik Ada Menü):**
  - Ekranın üstünde yüzen 3 parçalı hap (pill) kapsayıcı: Logo Pili, Navigasyon Linkleri Pili ve Aksiyon/Dil Seçici Pili.
  - `langToggleCheckbox` ile TR/EN hızlı geçiş anahtarı.
- **Bölüm 2: Hero & Brands Birleşik Adası (`hero-brands-container`):**
  - **Dinamik Arama Çubuğu:** Sitedeki hesaplayıcıları anahtar kelimelere göre arayan form.
  - **Daktilo (Typewriter) Başlık:** `Malzemeni hesapla.` sabit kalırken, altındaki satırda `"Saniyeler içinde."`, `"Tam ölçüsüyle."`, `"Net verilerle."` ifadeleri sırayla yazılıp silinir. Ekran okuyucular için gizli bir `.sr-only` etiketi bulunur.
  - **Brands Gridi:** Parke, Boya, Duvar Kağıdı ve Alçıpan ikonlarıyla platformun hitap ettiği alanlar gösterilir.
- **Bölüm 3: Nasıl Çalışır? (`how-it-works`):**
  - Özel CSS 3D perspektifiyle hazırlanmış **interaktif cüzdan (Wallet)** arayüzü.
  - Cüzdanın içine yerleştirilmiş 3 basamaklı kart: *1. Adım: Malzemeni Seç*, *2. Adım: Ölçüleri Gir*, *3. Adım: Anında Sonuç Al*.
  - Cüzdan cebi üzerindeki göz butonuna basıldığında veya üzerine gelindiğinde gizli bakiye yıldızları `"HIZLI HESAP"` yazısına dönüşür.
- **Bölüm 4: Hesaplayıcılar Akordiyonu (`calculatorGrid`):**
  - 5 ana malzeme için tasarlanmış, yan yana duran ve üzerine gelindiğinde `flex: 5` ile genişleyen yatay akordiyon kartları (Seramik, Parke, Boya, Duvar Kağıdı, Süpürgelik).
  - Tıklandığında URL parametresiyle `hesapla.html?type=...` sayfasına yönlendirir.
- **Bölüm 5: SSS (FAQ) Akordiyonu (`#faq`):**
  - Ücretsiz kullanım, doğruluk oranı, fire oranı özelleştirme ve sonuç kaydetme konularında 4 adet açılır-kapanır soru kartı.
- **Bölüm 6: Footer & Sabit Araçlar:**
  - E-posta bülteni aboneliği, site haritası, yasal bağlantılar.
  - Sağ tarafta dikey olarak asılı duran **Yüzen Dock Menüsü (`floating-dock`)** ve sayfa aşağı kaydırıldığında çıkan **Yukarı Çık Butonu (`backToTop`)**.

---

### 4.2. `pages/hesapla.html` (Ana Hesaplayıcı SPA)
Malzeme hesaplamalarının gerçekleştirildiği çalışma alanıdır. Sayfa yenilenmesine gerek kalmadan çalışan bir SPA (Single Page Application) mimarisine sahiptir.

- **Sidebar Kategori Menüsü (`calc-sidebar`):**
  - 5 malzeme kategorisi dikey sekme butonları halinde yer alır.
  - Tıklanan butona göre aktif panel değiştirilir ve URL'deki `?type=...` sorgu parametresi sayfa yenilenmeden güncellenir.
- **5 Ayrı Hesaplama Paneli (`calc-panel`):**
  1. **Seramik Paneli (`#panel-ceramic`):**
     - Mod Seçici Switch: *En × Boy* veya *Toplam Alan (m²)* modu.
     - Girdiler: En, Boy / Toplam Alan, 1 Kutu Seramik Alanı (varsayılan: 1.44 m²), Fire Oranı Slider'ı (%0 - %20).
     - Sonuçlar: Toplam Net Alan, Fireli Toplam Alan ve İhtiyaç Duyulan Kutu Sayısı (yukarı yuvarlanmış).
  2. **Parke Paneli (`#panel-parquet`):**
     - Girdiler: En, Boy / Toplam Alan, 1 Paket Parke Alanı (varsayılan: 1.84 m²), Fire Slider'ı (%0 - %20).
     - Sonuçlar: Net Alan, Brüt Alan ve İhtiyaç Duyulan Paket Sayısı.
  3. **Boya Paneli (`#panel-paint`):**
     - Girdiler: En, Boy / Toplam Alan, Boya Sarfiyatı (m²/Litre - varsayılan: 10), Kat Sayısı (varsayılan: 2), Fire Slider'ı.
     - Sonuçlar: Net Alan, Brüt Alan ve İhtiyaç Duyulan Boya Miktarı (Litre cinsinden küsuratlı).
  4. **Duvar Kağıdı Paneli (`#panel-wallpaper`):**
     - Girdiler: Toplam Duvar Genişliği, Duvar Yüksekliği, Rulo Eni (varsayılan: 0.53 m), Rulo Boyu (varsayılan: 10 m), Fire Slider'ı.
     - Sonuçlar: Net Alan, Brüt Alan ve İhtiyaç Duyulan Rulo Sayısı.
  5. **Süpürgelik Paneli (`#panel-baseboard`):**
     - Mod Seçici Switch: *En × Boy* veya *Toplam Çevre (m)* modu.
     - Girdiler: Oda Eni, Oda Boyu / Toplam Çevre, Kapı Sayısı (adet), 1 Adet Süpürgelik Boyu (varsayılan: 2.4 m), Fire Slider'ı.
     - Sonuçlar: Net Çevre, Fireli Çevre ve İhtiyaç Duyulan Adet.

---

### 4.3. `pages/usta-hesabi.html` (Dökümantasyon ve Algoritma Şeffaflığı)
Platformun arka planında çalışan matematiğin güvenilirliğini kullanıcılara kanıtlayan rehber sayfadır.

- **Şantiyenin Gerçek Matematiği Kartları (`math-cards-grid`):**
  - **Seramik / Parke Kartı:** Net Alan, Fire Ekleme, Kutu Bölümü ve Tavana Yuvarlama (`Math.ceil`) formülü. Örnek tablo: 4m x 5m alan, %10 fire = 22 m² brüt $\rightarrow$ 1.44 m² kutu ile **16 Kutu**.
  - **Boya Kartı:** Net Alan x Kat Sayısı + Fire / Sarfiyat formülü. Sıvı ürün olduğu için yuvarlanmadığı, milimetrik litre verildiği notu. Örnek tablo: 15 m² x 2 kat, 10 m²/L sarfiyat = **3 Litre Boya**.
  - **Duvar Kağıdı Kartı:** Desen tekrarı (pattern match) kaynaklı %10-%15 standart fire payı formülü. Örnek tablo: 3m x 2.8m duvar, %10 fire = 9.24 m² brüt $\rightarrow$ 0.53x10m rulo ile **2 Rulo**.
  - **Süpürgelik Kartı:** `(En + Boy) * 2` çevre hesabı, köşeler için önce fire eklenip ardından her kapı için 0.9m net boşluk düşülmesi kuralı. Örnek tablo: 4m x 5m oda, %10 fire, 3 kapı $\rightarrow$ 19.8m - 2.7m = 17.1m $\rightarrow$ 2.4m süpürgelik ile **8 Adet**.

---

## 5. CSS Mimarisi ve Stil Dosyaları Analizi (`css/`)

### 5.1. `css/variables.css`
Tüm projenin merkezi stil değişkenlerini (Design Tokens) barındırır:
- **Renk Paleti:**
  - Temel: `--color-white: #ffffff`, `--color-dark: #141113`, `--color-dark-muted: #1c1c1e`, gri tonları (`--color-gray-100` ... `700`).
  - Metin Renkleri: `--text-primary`, `--text-secondary` (`#58575A`), `--text-muted` (`#6F7075`), opak beyazlar.
  - Vurgular (Brand & Accent): `--accent-solid: #7E7160` (Toprak/Bronz tonu), `--accent-purple: #D946EF` (Vurgulu Fuşya).
  - Geçişler (Gradients): `--accent-gradient: linear-gradient(135deg, #7E7160, #5D523F)`, `--gradient-hero`, `--gradient-glass`.
- **Boşluk Sistemi:** `--spacing-1` (4px)'den `--spacing-50` (200px)'ye kadar ölçekli boşluk değişkenleri.
- **Efektler:** Cam gölgeleri (`--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-inset-*`), yuvarlaklıklar (`--pill-radius: 100px`, `--card-radius: 24px`), geçiş eğrileri (`--transition-fast`, `--transition-smooth: cubic-bezier(0.16, 1, 0.3, 1)`).

### 5.2. `css/components.css`
Birden fazla sayfada tekrar eden yapısal bileşenleri yönetir:
- **`.floating-header`:** `position: fixed`, sayfa kaydırılınca (`.scrolled`) küçülen ve beyaz opak arka plana geçen dinamik ada menü.
- **`.lang-switch-wrapper` & `.lang-slider`:** iOS tarzı pürüzsüz kayan (bouncy cubic-bezier) iki yönlü TR/EN dil anahtarı.
- **`.site-footer`:** Bülten abonelik kutusu, link sütunları, dil butonu ve telif hakları alanı.
- **`.floating-dock` & `.dock-item`:** Ekranın sağında sabit duran, üzerine gelindiğinde zıplayarak büyüyen (scale 1.1) ve sola doğru baloncuk (Tooltip) açan hızlı hesaplayıcı menüsü. Mobilde ekranın altına yatay olarak yerleşir.
- **`.back-to-top`:** Sayfa 400px aşağı kaydırıldığında yumuşakça beliren yuvarlak yukarı çıkma butonu.

### 5.3. `css/style.css`
Ana sayfa dinamikleri, tipografi ve karmaşık animasyonları içerir:
- **Buton Sistemleri:** `.btn-solid-white`, `.btn-glass-outline`, `.btn-pill-primary`. Üzerine gelindiğinde 3D basma efekti (`translateY(-4px)` ve dinamik kutu gölgesi).
- **Hero Arama Kutusu:** Cam efektli arka plan, odaklanıldığında titreme (`searchShake`) animasyonu.
- **Daktilo İmleci:** `blink` animasyonuyla yanıp sönen 2px dikey çizgi.
- **3D Cüzdan (Wallet) Animasyonu:**
  - `perspective: 1000px` ile 3D derinlik.
  - Cüzdan üzerine gelindiğinde kartların basamaklı olarak yukarı fırlaması (`.step-3` -110px dönerken, `.step-2` -70px, `.step-1` -20px yükselir).
  - Tek tek kartların üzerine gelindiğinde `z-index: 100` alıp öne çıkması.
- **Yatay Hesaplayıcı Akordiyonu (`.calc-accordion-container`):**
  - 5 kart varsayılan olarak eşit yer kaplar (`flex: 1`).
  - Üzerine gelinen kart `flex: 5` değerine yumuşakça genişler, arka plan resmi yakınlaşır (`scale(1.05)`), dikey başlık kaybolur ve gizli detay paneli aşağıdan yukarı kayar (`translateY(0)`). Reflow/Jank oluşmaması için GPU donanım hızlandırması (`will-change`, `translateZ(0)`) kullanılmıştır.
- **SSS (FAQ) Akordiyonu:** Soru tıklandığında `+` ikonunun `45deg` dönerek `x` olması ve cevabın pürüzsüzce açılması (`max-height: scrollHeight`).

### 5.4. `css/calculator.css`
`hesapla.html` sayfasının arayüz kurallarını barındırır:
- **Sidebar & Tab Düzeni:** Sol tarafta dikey liste, aktif olan sekmeye koyu arka plan ve gölge atanması.
- **Minimal Form Elemanları:** Odaklanıldığında bronz kenarlık ve yumuşak parlama efekti veren `input[type="number"]` stilleri.
- **Özelleştirilmiş Range Slider (`.min-waste-selector`):** Tarayıcı varsayılanı gizlenmiş, bronz renkli thumb ve ince arka plan rayı.
- **Cam Bilgi Kartları & Vurgulu Sonuç:** Şeffaf beyaz cam görünümlü ara sonuç kutuları (`.min-info-card`) ve bronz zeminli büyük nihai sonuç kartı (`.min-final-card`).

### 5.5. `css/usta-hesabi.css`
`usta-hesabi.html` sayfasına özel 2 sütunlu grid, kod/formül blokları (`.formula-box`), turuncu/bronz uyarı notları (`.std-note`) ve şeffaf hesaplama tabloları (`.math-table`).

---

## 6. JavaScript Mantığı ve Kod Analizi (`js/`)

### 6.1. `js/translations.js` (Çoklu Dil Sözlüğü)
- `translations` isimli küresel bir JavaScript objesi barındırır.
- `tr` ve `en` ana dalları altında 80'den fazla metin anahtarı (`nav.*`, `hero.*`, `typewriter.*`, `brands.*`, `hiw.*`, `calc.*`, `dock.*`, `usta.*`, `faq.*`, `footer.*`) yer alır.
- HTML etiketleri içeren metinler (örn: `<br>`, `<strong>`) sözlük içerisinde doğrudan güvenli HTML olarak saklanır.

### 6.2. `js/lang.js` (Dil Değiştirme Motoru)
- **Başlangıç:** `localStorage.getItem('materialcalc_lang')` kontrol edilir. Kayıtlı dil yoksa varsayılan `'tr'` atanır.
- **DOM Güncelleme:**
  - `[data-i18n]` etiketine sahip tüm metin elemanları bulunur; sözlükte karşılığı `<` içeriyorsa `innerHTML`, içermiyorsa `textContent` olarak güncellenir.
  - `[data-i18n-placeholder]` ile form girişlerindeki ipucu yazıları güncellenir.
  - `[data-i18n-tooltip]` ile yüzen dock üzerindeki balon ipuçları güncellenir.
- **Olay Dağıtımı (Event Dispatching):** Dil değiştiğinde `document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }))` tetiklenir. Bu sayede daktilo efekti veya aktif hesaplayıcı sonuç etiketleri anında yeni dile uyum sağlar.

### 6.3. `js/app.js` (Arayüz Etkileşimleri ve Dinamikler)
- **AOS Başlatma:** Sayfa içi kaydırma animasyonları (`duration: 800`, `easing: 'ease-out-cubic'`, `once: true`) aktive edilir.
- **Header & Dock Scroll Tetikleyicisi:** Hero bölümünün yüksekliği hesaplanır. Sayfa aşağı kaydırıldığında menü ve dock `.scrolled` sınıfını alarak arka planlarını opaklaştırır.
- **Yukarı Çık Butonu:** Scroll 400px'i aştığında `.visible` sınıfı eklenir; tıklandığında `window.scrollTo({ top: 0, behavior: 'smooth' })` çalışır.
- **Hero Akıllı Arama Motoru:**
  - `searchIndex` dizisi içerisinde kelime eşleme yapar (`['seramik', 'fayans', 'tile'] -> 'hesapla.html?type=ceramic'`).
  - Eşleşme bulursa sayfaya yönlendirir; bulamazsa arama kutusuna CSS `searchShake` animasyonu verip `"Sonuç bulunamadı..."` uyarısı gösterir.
- **Daktilo (Typewriter) Efekti:**
  - `setTimeout` döngüsü ile harf harf yazma (60ms) ve silme (30ms) hızları simüle edilir.
  - Kelime bitince 2 saniye bekler, silinince 500ms bekleyip sıradaki kelimeye geçer.
  - `languageChanged` olayını dinleyerek dil değiştiğinde kelime listesini anında günceller.
- **FAQ Akordiyonu:** Açık olan diğer soruların `maxHeight` değerini sıfırlayıp, tıklanan sorunun cevabını dinamik `scrollHeight` pikseliyle pürüzsüz açar.

### 6.4. `js/calculator.js` (Hesaplama Algoritmaları ve SPA Yöneticisi)
- **Tab & URL Senkronizasyonu (`switchTab`):**
  - Sol sidebar butonlarına tıklandığında ilgili `#panel-[target]` aktif edilir ve giriş animasyonu yeniden tetiklenir (`panel.offsetHeight` reflow hilesi).
  - Sayfa yenilenmeden `window.history.pushState` ile URL güncellenir (`hesapla.html?type=paint`).
  - Sayfa ilk açıldığında URL'deki `?type=...` sorgusu okunarak ilgili sekme otomatik açılır.
- **Mod Değişimi (En-Boy vs Toplam Alan):**
  - Toggle switch tıklandığında `dim-input` ve `area-input` grupları arasında `display` geçişi yapılır ve hesaplama fonksiyonu anında yeniden çağrılır.
- **Gerçek Zamanlı (Real-Time) Matematik Motorları:**
  - Tüm inputlara `input` event listener atanmıştır; kullanıcı klavyeden yazdığı an sonuçlar güncellenir.
  - **Seramik & Parke:** $NetAlan = En \times Boy$, $BrutAlan = NetAlan \times (1 + Fire/100)$, $Kutu = \lceil BrutAlan / KutuAlani \rceil$
  - **Boya:** $BrutAlan = (NetAlan \times (1 + Fire/100)) \times KatSayisi$, $Litre = BrutAlan / Sarfiyat$ (2 ondalık basamakla gösterilir).
  - **Duvar Kağıdı:** $RuloAlani = RuloEn \times RuloBoy$, $Rulo = \lceil (NetAlan \times (1 + Fire/100)) / RuloAlani \rceil$
  - **Süpürgelik:** $Cevre = (En + Boy) \times 2$, $BrutCevre = (Cevre \times (1 + Fire/100)) - (Kapi \times 0.9m)$, $Adet = \lceil BrutCevre / SupurgelikBoyu \rceil$
  - Çoklu dil sözlüğünden o an seçili dile ait birim etiketlerini (`Kutu/Boxes`, `Paket/Pack`, `Litre/Liters`, `Rulo/Rolls`, `Adet/Pcs`) dinamik olarak çeker.

---

## 7. Güçlü Yönler ve Gelecek Geliştirme Önerileri

### Projenin Güçlü Yönleri (Best Practices)
1. **Sıfır Dış Bağımlılık (Zero-Dependency):** React/Vue veya jQuery gibi harici kütüphaneler olmadan saf JS ile inanılmaz hızlı ve hafif çalışması.
2. **Kusursuz Tasarım Dili (Glassmorphism & Micro-Interactions):** Cam efektleri, 3D cüzdan animasyonu, yatay akordiyon kartları ve dinamik ada menüsü ile son derece lüks ve modern bir görünüm.
3. **Şantiye Gerçekçiliği:** Kapı payı düşümü, koli yukarı yuvarlaması ve ayarlanabilir fire oranı ile piyasadaki standart hesap makinelerinden çok daha profesyonel olması.
4. **Modüler ve Genişletilebilir Mimari:** CSS değişkenleri ve bağımsız JS modülleri sayesinde yeni bir malzeme (örn: Alçıpan, Yalıtım) eklemek yalnızca dakikalar sürer.

### Gelecek İçin Önerilen Geliştirmeler (Roadmap)
1. **Görsel Optimizasyonu:** `livingroom_2.png` ve `livingroom_4.png` dosyaları (~7 MB) web için ağırdır. WebP/AVIF formatına dönüştürülerek dosya boyutları ~300 KB seviyesine düşürülebilir.
2. **PDF İndirme / Teklif Alma:** Hesaplanan malzeme listesini doğrudan şantiye için PDF çıktısı veya WhatsApp paylaşım linki olarak dışa aktarma özelliği eklenebilir.
3. **Maliyet / Fiyat Hesaplayıcı:** Kullanıcının koli/paket birim fiyatı girerek toplam bütçeyi de hesaplayabileceği opsiyonel bir fiyat katmanı entegre edilebilir.

---

## 8. Sonuç

MaterialCalc Web projesi; temiz kod mimarisi, yüksek performanslı DOM etkileşimleri, şık görsel tasarımı ve endüstri standardı hesaplama formülleriyle **eksiksiz, profesyonel ve üretime hazır** bir web uygulamasıdır.
