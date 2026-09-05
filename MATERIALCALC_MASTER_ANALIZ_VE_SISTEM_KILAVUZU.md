# 📐 MaterialCalc - Kapsamlı Master Analiz, Mimari ve Sistem Kılavuzu

**Belge Adı:** `MATERIALCALC_MASTER_ANALIZ_VE_SISTEM_KILAVUZU.md`  
**Sürüm:** 143.0 (Güncel Tam Konsolide Sürüm)  
**Tarih:** 2026-09-04  
**Teknoloji Yığını:** HTML5, CSS3 (Vanilla / Custom Properties / Glassmorphism), JavaScript (ES6+ / Zero-Dependency), Lenis.js (Smooth Scroll), AOS.js (Scroll Animations), Google Fonts (Poppins)

---

## 📑 İÇİNDEKİLER

1. [Proje Genel Bakışı, Vizyonu ve Teknoloji Yığını](#1-proje-genel-bakışı-vizyonu-ve-teknoloji-yığını)
2. [Dizin ve Dosya Ağacı (Tam Görev Dağılımı)](#2-dizin-ve-dosya-ağacı-tam-görev-dağılımı)
3. [Sayfa Sayfa HTML Mimarisi ve Bölüm Rehberi](#3-sayfa-sayfa-html-mimarisi-ve-bölüm-rehberi)
   - 3.1. `index.html` (Ana Karşılama ve Vitrin Sayfası)
   - 3.2. `hesapla.html` (5'i 1 Arada SPA Hesaplayıcı Uygulaması)
   - 3.3. `usta-hesabi.html` (Şantiyenin Gerçek Matematiği ve Algoritma Şeffaflığı)
   - 3.4. `pages/` Dizini Analizi ve Farklar
4. [Matematiksel Hesaplama Motorları ve Şantiye Algoritmaları (`calculator.js`)](#4-matematiksel-hesaplama-motorları-ve-şantiye-algoritmaları)
   - 4.1. Seramik Hesaplama Algoritması
   - 4.2. Parke Hesaplama Algoritması
   - 4.3. Boya Hesaplama Algoritması
   - 4.4. Duvar Kağıdı Hesaplama Algoritması
   - 4.5. Süpürgelik Hesaplama Algoritması
   - 4.6. Matematiksel Doğrulama ve Karşılaştırma Matrisi
5. [JavaScript Etkileşim ve Motor Sistemleri](#5-javascript-etkileşim-ve-motor-sistemleri)
   - 5.1. Akıllı Canlı Arama Motoru (Smart Live Autocomplete)
   - 5.2. Reaktif Daktilo (Typewriter) Efekti
   - 5.3. Lenis Smooth Scroll & AOS Animasyonları
   - 5.4. Floating Header & Dock Scroll State Mantığı
   - 5.5. 3D Cüzdan (Wallet) & Mobil Çekmece Etkileşimi
   - 5.6. Sıkça Sorulan Sorular (FAQ) Akordiyon Mantığı
   - 5.7. Çoklu Dil Motoru (i18n - `lang.js` & `translations.js`)
6. [CSS Tasarım Sistemi, Design Tokens ve Değişkenler (`variables.css`)](#6-css-tasarım-sistemi-design-tokens-ve-değişkenler)
   - 6.1. Boşluk (Spacing) Ölçeği
   - 6.2. Renk ve Tipografi Paleti
   - 6.3. Cam (Glassmorphism), Gölgeler ve Yuvarlaklıklar
7. [Responsive Hiyerarşisi ve Ölçü Kılavuzu: Masaüstü vs Tablet vs Mobil](#7-responsive-hiyerarşisi-ve-ölçü-kılavuzu)
   - 7.1. Masaüstü (> 1200px) Ölçü ve Mesafe Kuralları
   - 7.2. Tablet (768px - 1200px) Ölçü ve Mesafe Kuralları
   - 7.3. Mobil (<= 767px) Ölçü ve Mesafe Kuralları
   - 7.4. Üçlü Ekran Karşılaştırmalı Piksel Matrisi
8. [Statik Yayınlama (Deployment) ve Geliştirme Yol Haritası](#8-statik-yayınlama-ve-geliştirme-yol-haritası)

---

## 1. PROJE GENEL BAKIŞI, VİZYONU VE TEKNOLOJİ YIĞINI

**MaterialCalc**, iç mimarlar, mimarlar, inşaat/dekorasyon ustaları, şantiye şefleri ve evinde tadilat yapan son kullanıcılar için geliştirilmiş **Apple estetiğinde (Glassmorphism & Dynamic Island)**, ultra-hassas bir inşaat ve dekorasyon malzeme hesaplama platformudur.

### 🎯 Temel Prensipler
1. **Şantiye Gerçekçiliği ve Sıfır Eksik Malzeme:** Standart hesaplayıcıların aksine, sahada ustaların uyguladığı pratik kuralları (**fire oranları, kapı boşluğu düşümleri, kat sayıları, koli/paket yukarı yuvarlama**) hesaplamaya dahil eder.
2. **Pure Static Web & Sıfır Bağımlılık (Zero-Dependency):** React, Vue veya Angular gibi ağır kütüphaneler olmadan, tarayıcının doğal motorunu kullanan saf HTML5, Vanilla CSS3 (CSS Variables) ve Vanilla JavaScript (ES6+) ile ultra hızlı çalışır.
3. **Akıcı ve Canlı Mikro-Etkileşimler:**
   * **Floating Dynamic Island Header:** Sayfa kaydırıldıkça şeffaf camdan opak beyaz adaya dönüşen menü.
   * **3D İnteraktif Cüzdan (Wallet):** Gerçek CSS 3D perspektifiyle açılan 3 basamaklı kartlar.
   * **5'li Genişleyen Akordiyon Kartları:** Masaüstünde hover ile `flex: 1`den `flex: 5`e genişleyen lüks kartlar.
   * **Akıllı Canlı Arama:** Çok dilli, Türkçe karakter normalizasyonlu, klavye yön tuşları destekli ve harf vurgulamalı (`search-highlight`) arama motoru.
   * **Lenis Smooth Scroll:** GPU hızlandırmalı pürüzsüz kaydırma.
4. **Çoklu Dil (i18n):** Türkçe (TR) ve İngilizce (EN) arasında sayfa yenilenmeden, anında reaktif dil değişimi.

---

## 2. DİZİN VE DOSYA AĞACI (TAM GÖREV DAĞILIMI)

```text
MaterialCalc  Web/
│
├── index.html                                  # [KÖK] Ana Karşılama ve Vitrin Sayfası
├── hesapla.html                                # [KÖK] 5'i 1 Arada SPA Hesaplayıcı Uygulaması
├── usta-hesabi.html                            # [KÖK] Şantiye Matematiği ve Algoritma Şeffaflığı Sayfası
│
├── css/                                        # MODÜLER CSS MİMARİSİ
│   ├── variables.css                           # Design Tokens (Renkler, Boşluklar, Gölgeler, Radius)
│   ├── components.css                          # Dinamik Ada, Dil Switch, Footer, Dock, Back-to-Top
│   ├── style.css                               # Ana Sayfa Düzeni, Butonlar, Hero, Cüzdan, Akordiyon, FAQ
│   ├── calculator.css                          # Hesaplayıcı SPA Panelleri, Inputlar, Sonuç Kartları
│   ├── usta-hesabi.css                         # Usta Hesabı Grid, Formül Kutuları ve Tabloları
│   ├── tablet.css                              # 768px - 1200px Tablet ve Kompakt Ekran Tasarım Sistemi
│   └── mobile.css                              # <= 767px Mobil Tasarım Sistemi ve Altın Oran Hiyerarşisi
│
├── js/                                         # MODÜLER JAVASCRIPT MİMARİSİ
│   ├── translations.js                         # TR / EN Çok Dilli Sözlük Veritabanı ve Arama İndeksi
│   ├── lang.js                                 # LocalStorage Destekli Dil Motoru ve Event Dağıtımı
│   ├── calculator.js                           # 5 Malzeme İçin Matematiksel Hesaplama ve SPA Tab Motoru
│   └── app.js                                  # Smooth Scroll, AOS, Navbar State, Canlı Arama, Daktilo, FAQ
│
├── Images/                                     # GÖRSEL VARLIKLAR
│   ├── livingroom_2.png                        # Hero Arka Planı, Parke & Süpürgelik Kart Görseli (7.6 MB)
│   └── livingroom_4.png                        # Seramik, Boya & Duvar Kağıdı Kart Görseli (6.9 MB)
│
└── pages/                                      # İkincil / Önceki Sürüm Sayfa Varyantları
    ├── anasayfa.html                           # index.html'in pages içi kopyası
    ├── hesapla.html                            # hesapla.html'in pages içi kopyası
    └── usta-hesabi.html                        # usta-hesabi.html'in pages içi kopyası
```

---

## 3. SAYFA SAYFA HTML MİMARİSİ VE BÖLÜM REHBERİ

### 3.1. `index.html` (Ana Sayfa)

Sayfa, modern tek sayfa deneyimi sunan 8 ana yapısal bloktan meydana gelir:

1. **Floating Header (Dinamik Ada - `.floating-header`):**
   * `.logo-pill`: [MaterialCalc](file:///c:/Users/Dgcnural/Desktop/Container/MaterialCalc%20%20Web/index.html#L43-L46) tam logosu (`.logo-full`) ve mobilde kullanılan kısaltma (`.logo-short`).
   * `.nav-pill`: 5 navigasyon bağlantısı (*Hesaplayıcılar*, *Nasıl Çalışır?*, *Usta Hesabı*, *S.S.S*, *İletişim*).
   * `.action-pill`: iOS tarzı kayan dil anahtarı (`.lang-slider`), *"Hemen Başla"* CTA butonu ve mobil için 3 çizgili hamburger butonu (`.mobile-menu-toggle`).
2. **Tam Ekran Mobil Menü Çekmecesi (`.mobile-menu-overlay`):**
   * Hamburger tıklandığında açılan `backdrop-filter: blur(30px)` cam panel. Menü açıkken sayfa kaydırmasını (`Lenis`) durdurur.
3. **Birleşik Ada: Hero & Markalar (`.hero-brands-container`):**
   * **Hero Arka Planı:** `livingroom_2.png` görseli ve koyu degrade filtre (`.hero-overlay`).
   * **Akıllı Canlı Arama (`.hero-search-bar`):** Çok dilli, normalizasyonlu, klavye yön tuşlarıyla gezilebilen ve harf vurgulamalı canlı arama.
   * **Daktilo Başlığı (`h1`):** Üstte sabit `Malzemeni hesapla.`, altta daktilo animasyonlu `Saniyeler içinde.`, `Tam ölçüsüyle.`, `Net verilerle.` metinleri.
   * **Kategoriler / Markalar (`.brands-section`):** 4 SVG ikonlu kategori rozeti: *Parke*, *Boya*, *Duvar Kağıdı*, *Alçıpan*.
4. **Nasıl Çalışır? & 3D İnteraktif Cüzdan (`.how-it-works`):**
   * `perspective: 1000px` ile yerleştirilmiş 3D cüzdan.
   * 3 basamaklı kart: `step-1` (MALZEMENİ SEÇ), `step-2` (ÖLÇÜLERİ GİR), `step-3` (ANINDA SONUÇ AL).
   * Bakiye yıldızları (`******`), gerçek bakiye (`HIZLI HESAP`) ve göz ikonu etkileşimi.
5. **5'li Hesaplayıcı Akordiyon Kartları (`#calculatorGrid`):**
   * 5 ana malzeme kartı (*Seramik*, *Parke*, *Boya*, *Duvar Kağıdı*, *Süpürgelik*).
   * Masaüstünde hover ile `flex: 1`den `flex: 5`e genişler; mobilde dikey kart listesine dönüşür.
6. **Sıkça Sorulan Sorular (`#faq`):**
   * 4 adet akordiyon soru-cevap. Biri açıldığında diğerleri otomatik kapanır.
7. **Mega Footer (`.site-footer`):**
   * E-bülten kayıt formu, 3 sütunlu site haritası linkleri (*Keşfet*, *Hesaplayıcılar*, *İletişim*) ve alt telif alanı.
8. **Yüzen Dock & Yukarı Çık Butonu:**
   * Ekranın sağında sabit asılı 5 hızlı hesaplayıcı ikonu (`.floating-dock`) ve 400px scroll sonrası beliren `.back-to-top` butonu.

---

### 3.2. `hesapla.html` (Çoklu Hesaplayıcı SPA)

Sayfa yenilenmeden çalışan 5'i 1 arada hesaplama çalışma alanıdır:
* **Sidebar (`.calc-sidebar`):** 5 malzeme sekmesi. Tıklanan sekme URL'deki `?type=...` sorgusunu günceller (`history.pushState`).
* **URL Parametresi ile Doğrudan Açılış:** Sayfaya `hesapla.html?type=parquet` ile gelindiğinde Parke sekmesi doğrudan aktif açılır.
* **Giriş Modu Anahtarı:** *En × Boy* veya *Toplam m²* (Süpürgelikte *Toplam Çevre*) arasında geçiş sağlar.
* **Canlı Fire Slider'ı:** Kullanıcının fire oranını %0-%25 arasında anlık değiştirebilmesini sağlar.
* **Sonuç Kartları:** Net Alan/Çevre, Fireli Alan/Çevre ve büyük vurgulu Nihai Sonuç Kartı.

---

### 3.3. `usta-hesabi.html` (Şantiyenin Gerçek Matematiği)

Platformda kullanılan algoritmaların endüstriyel doğruluğunu kanıtlayan şeffaf rehberdir:
* **Seramik:** Düz döşemede %10, çaprazda %15 fire; 1 m² seramik için ~4-5 kg Kalekim / yapıştırıcı kuralı (1 torba 25kg = ~5-6 m²).
* **Boya:** 1L kaliteli boyanın 2 katta ~6-7 m² boyaması; 15L (1 teneke) boyanın 95-105 m² duvarı 2 kat boyaması kuralı.
* **Parke:** Düz alanda %5-7, koridorda %10 fire; paket sayısının yukarı yuvarlanması; altına serilecek şiltenin net alan + %5 olması kuralı.
* **Duvar Kağıdı:** Standart rulo (0.53m × 10.05m = 5.3 m²); 2.80m tavan yüksekliğinde 1 rulodan 3 tam boy (şerit) çıkması kuralı.

---

## 4. MATEMATİKSEL HESAPLAMA MOTORLARI VE ŞANTİYE ALGORİTMALARI

MaterialCalc, boya dışındaki tüm fiziksel paketli malzemelerde **tavan değere yuvarlama (`Math.ceil`)** kuralını uygular.

```mermaid
graph TD
    A[Kullanıcı Ölçü Girişi] --> B{Giriş Modu}
    B -->|En x Boy| C[Net Alan = En * Boy]
    B -->|Toplam m²| D[Net Alan = Girdi Değeri]
    C --> E[Brüt Alan = Net Alan * (1 + Fire / 100)]
    D --> E
    E --> F{Malzeme Türü}
    F -->|Seramik / Parke| G[Kutu/Paket = Ceil(Brüt Alan / Kutu Alanı)]
    F -->|Duvar Kağıdı| H[Rulo = Ceil(Brüt Alan / Rulo Alanı)]
    F -->|Boya| I[Litre = (Brüt Alan * Kat) / Sarfiyat (Milimetrik)]
    F -->|Süpürgelik| J[Adet = Ceil(Brüt Çevre / Profil Boyu)]
```

### 4.1. Seramik Hesaplama Algoritması
$$\text{Net Alan} = \text{En (m)} \times \text{Boy (m)} \quad (\text{veya doğrudan Toplam } m^2)$$
$$\text{Brüt (Fireli) Alan} = \text{Net Alan} + \left(\text{Net Alan} \times \frac{\text{Fire } \%}{100}\right)$$
$$\text{Gerekli Kutu Sayısı} = \left\lceil \frac{\text{Brüt Alan}}{\text{1 Kutu Alanı (Varsayılan: 1.44 } m^2)} \right\rceil$$

### 4.2. Parke Hesaplama Algoritması
$$\text{Net Alan} = \text{En (m)} \times \text{Boy (m)} \quad (\text{veya doğrudan Toplam } m^2)$$
$$\text{Brüt (Fireli) Alan} = \text{Net Alan} + \left(\text{Net Alan} \times \frac{\text{Fire } \%}{100}\right)$$
$$\text{Gerekli Paket Sayısı} = \left\lceil \frac{\text{Brüt Alan}}{\text{1 Paket Alanı (Varsayılan: 1.84 } m^2)} \right\rceil$$

### 4.3. Boya Hesaplama Algoritması
$$\text{Net Alan} = \text{Oda Eni (m)} \times \text{Oda Boyu (m)} \quad (\text{veya Toplam Duvar Alanı } m^2)$$
$$\text{Brüt Alan} = \text{Net Alan} + \left(\text{Net Alan} \times \frac{\text{Fire / Emicilik } \%}{100}\right)$$
$$\text{Gerekli Boya Miktarı (Litre)} = \frac{\text{Brüt Alan} \times \text{Kat Sayısı (Varsayılan: 2)}}{\text{1 Litre Kapsama Alanı (Varsayılan: 10 } m^2/\text{L})}$$
*(Boya sıvı bir malzeme olduğundan yukarı yuvarlama yapılmaz; 2 ondalık basamakla milimetrik litre verilir).*

### 4.4. Duvar Kağıdı Hesaplama Algoritması
$$\text{Net Duvar Alanı} = \text{Duvar Genişliği (m)} \times \text{Duvar Yüksekliği (m)}$$
$$\text{1 Rulo Alanı} = \text{Rulo Eni (0.53m)} \times \text{Rulo Boyu (10.0m)} = 5.30 \, m^2$$
$$\text{Brüt Duvar Alanı} = \text{Net Duvar Alanı} + \left(\text{Net Duvar Alanı} \times \frac{\text{Desen Eşleme Fire } \%}{100}\right)$$
$$\text{Gerekli Rulo Sayısı} = \left\lceil \frac{\text{Brüt Duvar Alanı}}{\text{1 Rulo Alanı (5.30 } m^2)} \right\rceil$$

### 4.5. Süpürgelik Hesaplama Algoritması
$$\text{Toplam Çevre} = (\text{Oda Eni} + \text{Oda Boyu}) \times 2 \quad (\text{veya doğrudan Toplam Çevre})$$
$$\text{Kapı Boşluğu Düşümü} = \text{Kapı Sayısı} \times 0.90 \, \text{m}$$
$$\text{Net Çevre} = \max(0, \, \text{Toplam Çevre} - \text{Kapı Boşluğu Düşümü})$$
$$\text{Brüt (Fireli) Çevre} = \max\left(0, \, \left(\text{Toplam Çevre} \times \left(1 + \frac{\text{Fire } \%}{100}\right)\right) - \text{Kapı Boşluğu Düşümü}\right)$$
$$\text{Gerekli Boy Profil (Adet)} = \left\lceil \frac{\text{Brüt Çevre}}{\text{1 Profil Boyu (Varsayılan: 2.40m)}} \right\rceil$$
*(Şantiye Kuralı: Fire, köşe kesim payları için kapısız tüm çevreye eklenir; kapı boşlukları daha sonra net düşülür).*

### 4.6. Matematiksel Doğrulama ve Karşılaştırma Matrisi

| Malzeme | Örnek Girdi | Fire (%) | Teori / Net | Şantiye Brüt | Birim Boyut | Nihai Çıktı |
| :--- | :--- | :---: | :--- | :--- | :--- | :--- |
| **Seramik** | 4.0m × 5.0m | %10 | 20.00 m² | 22.00 m² | 1.44 m²/kutu | **16 Kutu** |
| **Parke** | 4.0m × 5.0m | %7 | 20.00 m² | 21.40 m² | 1.84 m²/paket | **12 Paket** |
| **Boya** | 4.0m × 5.0m (2 Kat) | %5 | 20.00 m² | 21.00 m² | 10 m²/Litre | **4.20 Litre** |
| **Duvar Kağıdı** | 5.0m × 2.8m | %10 | 14.00 m² | 15.40 m² | 5.30 m²/rulo | **3 Rulo** |
| **Süpürgelik** | 4.0m × 5.0m (1 Kapı) | %5 | 17.10 m | 18.00 m | 2.40 m/boy | **8 Adet** |

---

## 5. JAVASCRIPT ETKİLEŞİM VE MOTOR SİSTEMLERİ

### 5.1. Akıllı Canlı Arama Motoru (Smart Live Autocomplete)
* **Normalizasyon:** `normalizeText()` fonksiyonu Türkçe karakterleri (`İ/ı`, `Ğ/g`, `Ü/u`, `Ş/s`, `Ö/o`, `Ç/c`) hatasız dönüştürür.
* **Çok Dilli İndeks:** `searchIndex` nesnesi 10 ana modül içerir (*Parke*, *Boya*, *Seramik*, *Duvar Kağıdı*, *Süpürgelik*, *Alçıpan*, *Usta Hesabı*, *Nasıl Çalışır*, *SSS*, *İletişim*).
* **Katı Dil İzolasyonu:** TR modunda sadece Türkçe anahtar kelimeleri, EN modunda sadece İngilizce anahtar kelimeleri tarar.
* **Puanlama (Scoring):** Kelime başı eşleşmesine 100-120 puan, içerik eşleşmesine 40-50 puan vererek en alakalı sonucu en üste çıkarır.
* **Harf Vurgulama (`highlightMatch`):** Eşleşen harfleri sarı/vurgulu arka plan (`.search-highlight`) içine alır.
* **Klavye Navigasyonu:** `ArrowDown`, `ArrowUp`, `Enter`, `Escape` tuşlarıyla menü içinde tam klavye kontrolü sağlar.

### 5.2. Reaktif Daktilo (Typewriter) Efekti
* `setTimeout` döngüsüyle yazma (90ms) ve silme (40ms) hızında daktilo efekti simüle edilir.
* Kelime bittiğinde 2200ms bekler.
* `languageChanged` eventi fırlatıldığında daktilo mevcut kelimeyi sıfırlar ve seçilen dilin kelimeleriyle kesintisiz baştan başlar.

### 5.3. Lenis Smooth Scroll & AOS Animasyonları
* `Lenis` kütüphanesi ile 1.2s süreli ipeksi fare kaydırması sağlanır.
* Sayfa içi çapa linklerine (`a[href^="#"]`) tıklandığında menü yüksekliği hesaba katılarak `-90px` ofset ile pürüzsüz kayma yapılır.
* `AOS` ile elemanlar ekrana girdikçe 800ms yumuşak giriş animasyonları tetiklenir.

### 5.4. Floating Header & Dock Scroll State Mantığı
* `window.scrollY > 50px` olduğunda header ve dock `.scrolled` sınıfı alır.
* Sayfa başında şeffaf cam blur olan menü, kaydırıldığında opak beyaz ada moduna geçer.

### 5.5. 3D Cüzdan (Wallet) & Mobil Çekmece Etkileşimi
* Masaüstünde hover ile kartlar yukarı fırlar.
* Mobilde tıklama/dokunma ile `.active` sınıfı atanır.
* Cüzdan dışına tıklandığında cüzdan otomatik olarak kapanır.

### 5.6. Sıkça Sorulan Sorular (FAQ) Akordiyon Mantığı
* Soru butonuna basıldığında cevabın `maxHeight` değeri `scrollHeight + 'px'` yapılarak tam pürüzsüzlük sağlanır.
* Başka bir soru tıklandığında açık olan diğer soru otomatik olarak kapanır (`maxHeight = 0px`).

### 5.7. Çoklu Dil Motoru (i18n - `lang.js` & `translations.js`)
* Dil tercihi `localStorage` içerisinde `materialcalc_lang` anahtarıyla tutulur.
* `setLanguage(lang)` çalıştığında:
  1. `[data-i18n]` etiketli tüm metinler güncellenir.
  2. `[data-i18n-placeholder]` form ipuçları güncellenir.
  3. `[data-i18n-tooltip]` dock ipucu metinleri güncellenir.
  4. `document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }))` tetiklenir.

---

## 6. CSS TASARIM SİSTEMİ, DESIGN TOKENS VE DEĞİŞKENLER

### 6.1. Boşluk (Spacing) Ölçeği (`variables.css`)

| Belirteç (Token) | Piksel Değeri | Standart Kullanım Alanı |
| :--- | :---: | :--- |
| `--spacing-1` | `4px` | Mikro boşluklar, hamburger çizgileri arası |
| `--spacing-1-5`| `6px` | Dock ikon boşlukları, rozet dikey padding |
| `--spacing-2` | `8px` | Küçük aralıklar, input içi dikey dolgular |
| `--spacing-2-5`| `10px`| Kategori rozetleri `gap`, buton küçük padding |
| `--spacing-3` | `12px` | İkon-metin arası boşluklar |
| `--spacing-3-5`| `14px`| Butonlar arası yatay `gap` |
| `--spacing-4` | `16px` | Standart ızgara boşlukları (`gap`), rozet dolgusu |
| `--spacing-5` | `20px` | Buton yan padding'leri, logo kapsülü içi |
| `--spacing-6` | `24px` | **Masaüstü sayfa ada kenar boşluğu (`margin: 24px`)** |
| `--spacing-8` | `32px` | Arama çubuğu ile başlık arası boşluk |
| `--spacing-10` | `40px` | Bölüm başlık alt boşlukları |
| `--spacing-12` | `48px` | Header üst boşluğu (`top: 48px`) |
| `--spacing-15` | `60px` | Hero ve markalar arası kolon aralıkları |
| `--spacing-16` | `64px` | **Mobil ana bölümler arası standart lüks dikey mesafe** |
| `--spacing-20` | `80px` | Footer üst boşluğu |
| `--spacing-24` | `96px` | **Tablet ana bölümler arası standart lüks dikey mesafe** |
| `--spacing-25` | `100px`| Hero üst padding |
| `--spacing-35` | `140px`| **Masaüstü ana bölümler arası standart lüks dikey mesafe** |

---

### 6.2. Renk ve Tipografi Paleti

* **Temel Renkler:**
  * `--color-white: #ffffff` (Saf Beyaz zemin ve kartlar)
  * `--color-black: #000000` (Saf Siyah zeminler ve derin gölgeler)
  * `--color-dark: #141113` (Ana Marka Koyu Rengi, başlıklar ve butonlar)
  * `--color-gray-100: #fafafa` $\rightarrow$ `--color-gray-700: #D1D1D1` (Gri Skalası)
* **Vurgu ve Marka Rengi:**
  * `--accent-solid: #7E7160` (Sıcak Bronz/Altın Marka Rengi)
  * `--accent-gradient: linear-gradient(135deg, #7E7160, #5D523F)`
* **Tipografi:**
  * Yazı Tipi: `'Poppins', -apple-system, BlinkMacSystemFont, sans-serif`
  * Satır Yükseklikleri: `--line-height-base: 1.6`, `--line-height-heading: 1.1`

---

### 6.3. Cam (Glassmorphism), Gölgeler ve Yuvarlaklıklar

* **Cam Kaplama Katmanları:** `--overlay-white-05` (Header camı), `--overlay-white-15` (Hero cam butonları ve dock), `--overlay-black-10` (Cam kenarlıkları).
* **Köşe Yuvarlaklıkları:** `--pill-radius: 100px` (Hap butonlar), `--card-radius: 24px` (Ada ve kartlar).
* **Gölgeler:** `--shadow-sm` (`0 4px 15px`), `--shadow-md` (`0 10px 20px`), `--shadow-lg` (`0 18px 36px`), `--shadow-inset-lg` (`inset 0 30px 45px` - Cüzdan iç cep gölgesi).

---

## 7. RESPONSIVE HİYERARŞİSİ VE ÖLÇÜ KILAVUZU

### 7.1. Masaüstü (> 1200px) Ölçü Kuralları
* **Maksimum Konteyner Genişliği:** `1200px`
* **Sayfa Dış Kenar Boşluğu (Ada Kenarları):** `24px` (`margin: var(--spacing-6)`)
* **Ana Bölümler Arası Standart Dikey Ritim:** **`140px`** (`var(--spacing-35)`)
  * Hero/Markalar Adası $\rightarrow$ HIW Cüzdan: `140px`
  * HIW Cüzdan $\rightarrow$ Hesaplayıcılar Akordiyonu: `140px`
  * Hesaplayıcılar $\rightarrow$ SSS (FAQ): `140px`
  * SSS (FAQ) $\rightarrow$ Mega Footer: `140px`
* **Dinamik Ada Header:** 3 ayrı hap (`logo-pill`, `nav-pill`, `action-pill`).
* **Hero Başlık Fontu:** `4.0rem` (64px). Arama çubuğu genişliği: `360px`.
* **3D Cüzdan:** `440px × 360px`.
* **Hesaplayıcılar Akordiyonu:** `500px` yükseklik, yatay 5 kart (`flex: 1` $\rightarrow$ `flex: 5`).
* **Footer Kolonları:** Sol marka kolonu (300px) ile sağ link sütunları (~480px) arasında **`~420px` net boşluk**.

---

### 7.2. Tablet (768px - 1200px) Ölçü Kuralları
* **Sayfa Dış Kenar Boşluğu (Ada Kenarları):** `12px` üst, `14px` yanlar.
* **Ana Bölümler Arası Standart Dikey Ritim:** **`96px`** (`var(--spacing-24)`).
* **Dinamik Ada Header:** `nav-pill` gizlenir; sol logo pilli (48px yükseklik) ve sağ 48x48px hamburger pilli kalır.
* **Hero Başlık Fontu:** `2.75rem` (44px). Arama çubuğu genişliği: `460px`.
* **Markalar Gridi:** 4 sütunlu tek sıra yatay ızgara (`repeat(4, 1fr)`).
* **3D Cüzdan:** `450px × 365px`.
* **Hesaplayıcılar Akordiyonu:** **Yatay akordiyon korunur** (`height: 480px`, `flex: 1` $\rightarrow$ `flex: 3.5`).
* **Footer:** Dikey açılır Apple tarzı akordeon sistemine geçer (`+ / x` ikonlu).
* **Sabit Elemanlar:** Yüzen dock altta yatay ortalanır (**`292px` genişlik**, `bottom: 24px`); Back to top butonu `bottom: 82px` seviyesinde konumlanır.

---

### 7.3. Mobil (<= 767px) Ölçü Kuralları
* **Maksimum Mobil İçerik Genişliği:** `380px`.
* **Sayfa Dış Kenar Boşluğu (Ada Kenarları):** `8px` üst, `10px` yanlar, `24px` alt.
* **Ana Bölümler Arası Standart Dikey Ritim:** **`64px` / `56px`** (`var(--spacing-16)` / `var(--spacing-14)`).
* **Dinamik Ada Header:** Sol logo pilli (42px yükseklik) ve sağ 42x42px cam hamburger pilli.
* **Hero Başlık Fontu:** `1.85rem` (29.6px) / `white-space: normal`. Arama çubuğu: `320px`.
* **Markalar Gridi:** 2x2 ızgara (`repeat(2, 1fr)`).
* **3D Cüzdan:** `310px × 300px`.
* **Hesaplayıcılar Akordiyonu:** **Dikey Kart Listesine dönüşür** (`flex-direction: column; height: auto`). Her kart 140px/200px yükseklikte bağımsız sunulur.
* **Footer:** Tek sütunlu dikey akordeon.
* **Sabit Elemanlar:** Yüzen dock altta yatay ortalanır (**`210px` genişlik**, `bottom: 22px`); Back to top butonu `bottom: 74px` seviyesinde konumlanır.

---

### 7.4. Üçlü Ekran Karşılaştırmalı Piksel Matrisi

| Parametre / Eleman | Masaüstü (> 1200px) | Tablet (768px - 1200px) | Mobil (<= 767px) |
| :--- | :---: | :---: | :---: |
| **Bölümler Arası Dikey Mesafe** | **`140px`** | **`96px`** | **`64px` / `56px`** |
| **Ada Kenar Boşlukları (Margin)**| `24px` | `12px 14px 0 14px` | `8px 10px 24px 10px` |
| **Header Üst Boşluk (Şeffaf / Beyaz)**| `48px` / `24px` | `40px` / `20px` | `32px` / `20px` |
| **Header Düzeni** | 3 Ayrı Kapsül | Logo + Hamburger | Logo + Hamburger |
| **Hero Başlık (H1) Fontu** | `4.0rem` (64px) | `2.75rem` (44px) | `1.85rem` (29.6px) |
| **Arama Çubuğu Boyutu** | `360px × 48px` | `460px × 52px` | `320px × 44px` |
| **Markalar (Brands) Düzeni** | 4'lü Yan Yana Flex | 4'lü 1 Satır Grid | 2×2 Grid (`repeat(2, 1fr)`) |
| **3D Cüzdan Boyutu** | `440px × 360px` | `450px × 365px` | `310px × 300px` |
| **Hesaplayıcılar Akordiyonu** | Yatay (`500px`, `flex: 5`) | Yatay (`480px`, `flex: 3.5`) | Dikey Liste (`140px` - `200px`) |
| **Footer Link Düzeni** | 3 Kolon Yatay Yan Yana | Açılır Apple Akordeon | Açılır Apple Akordeon |
| **Yüzen Dock Konumu & Boyutu** | Sağ Ortada / Dikey `48px` | Altta Ortada / **`292px` Genişlik** | Altta Ortada / **`210px` Genişlik** |
| **Yukarı Çık Butonu (Konum)** | Sağ: `30px`, Alt: `30px` | Sağ: `24px`, Alt: `82px` | Sağ: `18px`, Alt: `74px` |

---

## 8. STATİK YAYINLAMA VE GELİŞTİRME YOL HARİTASI

### 🚀 Cloudflare Pages / Vercel / Netlify Yayınlama
Bu proje **sıfır derleme gerektiren (Pure Static)** bir mimariye sahiptir:
1. Depoyu GitHub'a `push` edin.
2. Cloudflare Dashboard $\rightarrow$ **Workers & Pages** $\rightarrow$ **Create application** $\rightarrow$ **Pages** $\rightarrow$ **Connect to Git**.
3. Dağıtım Ayarları:
   - **Framework preset:** `None`
   - **Build command:** *(Boş bırakın)*
   - **Build output directory:** `/` *(veya boş bırakın)*
4. **Save and Deploy** butonuna tıklayın.

### 🔮 Gelecek Geliştirme Önerileri
1. **Görsel Formatı Optimizasyonu:** `livingroom_2.png` ve `livingroom_4.png` dosyaları (~7 MB) web için WebP formatına çevrilerek dosya boyutları ~300 KB seviyesine indirilebilir.
2. **PDF Dışa Aktarma / Şantiye Listesi:** Hesaplanan malzeme listesini doğrudan şantiye için PDF çıktısı alma veya WhatsApp paylaşım linki oluşturma özelliği.
3. **Maliyet & Bütçe Hesaplayıcı:** Koli/paket/litre başına birim fiyat girilerek toplam proje maliyetinin anlık hesaplanması.
4. **Yeni Malzeme Modülleri:** Alçıpan/bölme duvar profil-vida hesabı, mantolama/yalıtım paketi hesabı.

---

> **Özet:** Bu doküman, MaterialCalc web tabanının tüm HTML, CSS, JavaScript, matematiksel hesaplama ve tasarım token detaylarını tek çatı altında eksiksiz olarak belgeleyen ana kaynak metnidir.
