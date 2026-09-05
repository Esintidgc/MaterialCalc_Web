# 💻 MaterialCalc - Tablet (768px - 1200px) Bölüm Mesafeleri ve Ölçü Kılavuzu

> Bu belge, **MaterialCalc** projesinin `index.html` ve tablet stil sistemi (`tablet.css` - iPad, Tablet ve Küçük Dizüstü Ekranları 768px - 1200px) için tüm bölümlerin dikey/yatay mesafelerini, iç boşluklarını (padding), dış boşluklarını (margin), etkileşim ölçülerini ve eleman boyutlarını içeren tam başvuru kılavuzudur.

---

## 🧭 1. GENEL DÜZEN VE ÇERÇEVE MİMARİSİ

* **Tablet Görünüm Aralığı:** `min-width: 768px` ve `max-width: 1200px`
* **Maksimum Tablet İçerik Genişliği:** `640px` (Orta ada dikey sütunu)
* **Sayfa Dış Kenar Boşluğu (Ada Kenarları):** `12px` üst, `14px` sağ/sol, `0px` alt (`margin: var(--spacing-3) var(--spacing-3-5) 0 var(--spacing-3-5)`)
* **Tablet Ada Köşe Yuvarlaklığı (`--card-radius`):** `24px`
* **Kapsül / Hap Buton Yuvarlaklığı (`--pill-radius`):** `100px`
* **Temel Yazı Tipi:** `Poppins, sans-serif`

---

## 📏 2. BÖLÜMLER ARASI DİKEY MESAFELER VE ÖLÇÜLER

### 1️⃣ YÜZEN ÜST DİNAMİK ADA (DYNAMIC ISLAND HEADER)
* **Konumlandırma:** `position: fixed; z-index: 1000`
* **Üstten Boşluk (Varsayılan - Şeffaf Ada):** `40px` (`top: var(--spacing-10)`)
* **Üstten Boşluk (Sayfa Kaydırılınca - Beyaz Ada):** `20px` (`top: var(--spacing-5)`)
* **Yatay İç Boşluk:** `0 32px` (`padding: 0 var(--spacing-8)`)
* **Sol Logo Kapsülü (`.logo-pill`):**
  * Yükseklik: `48px`
  * İç Boşluk: `0 24px` (`padding: 0 var(--spacing-6)`)
  * Genişlik: `auto` (`min-width: max-content; white-space: nowrap`)
  * Yazı Boyutu: `1.42rem` (22.7px) - `letter-spacing: -0.6px`
  * Şeffaf Mod Rengi: `Material` (Beyaz `#ffffff`), `Calc` (Sıcak Altın `#dfcaa8`)
  * Kaydırılmış Mod Rengi: `Material` (Siyah `#141113`), `Calc` (Bronz `#7E7160`)
* **Sağ Hamburger Kapsülü (`.action-pill`):**
  * Boyut: `48px × 48px` (Kare/Yuvarlak simetrik hap)
  * Hamburger Çizgileri (`.hamburger-bar`): `20px Genişlik × 2.2px Yükseklik`, Çizgiler arası dikey boşluk `4px`
  * Şeffaf Mod Rengi: Beyaz (`#ffffff`)
  * Kaydırılmış Mod Rengi: Siyah (`#141113`)

---

### 1️⃣.1 TAM EKRAN TABLET MENÜ ÇEKMECESİ (DRAWER MENU OVERLAY)
* **Konumlandırma:** `position: fixed; top: 0; left: 0; z-index: 999`
* **Boyut:** `100vw × 100vh / 100dvh` (Tam ekran koyu cam perde)
* **Arka Plan:** `var(--color-dark)` (#141113) + `backdrop-filter: blur(30px)`
* **İç Kapsayıcı Genişliği:** `max-width: 480px`
* **Dikey Eleman Boşluğu (`gap`):** `40px` (`var(--spacing-10)`)
* **Menü Bağlantıları (`.overlay-link`):**
  * Font Boyutu: `2.35rem` (37.6px) - Bold (700)
  * Bağlantılar Arası Boşluk (`gap`): `24px` (`var(--spacing-6)`)
  * Dokunma/Hover Efekti: `scale(1.06)` büyüme ve `%100` beyaz parlama
* **"Hemen Başla" Butonu (`.overlay-cta`):**
  * **Genişlik:** **`292px`** *(Tablet Yüzen Dock çubuğu ile birebir milimetrik eşit genişlikte!)*
  * Yükseklik: `56px`
  * Font: `1.18rem` / Bold (700)
  * Renk: Beyaz zemin (`#ffffff`), Siyah metin (`#141113`)
* **Tablet Dil Seçici:** `TR / EN` yatay hap buton kapsülü (`scale(1.18)`)

---

### 2️⃣ BİRLEŞİK ADA: KARŞILAMA (HERO) VE KATEGORİLER (BRANDS)
* **Dış Ada Çerçevesi (`.hero-brands-container`):** 
  * Arka Plan: `var(--color-white)` (#ffffff)
  * Dış Boşluk (Margin): `12px 14px 0 14px`
  * Köşe Yuvarlaklığı: `24px`
  * Gölge: `0 20px 40px rgba(0,0,0,0.15)`

#### A. Tablet Hero Bölümü (`.hero-section`):
* **Yükseklik:** `min-height: calc(100vh - 24px)` (Tam ekran tablet ada)
* **İç Boşluk (Padding):** `90px 24px 75px 24px`
* **Akıllı Canlı Arama Çubuğu (`.hero-search-wrapper` / `.hero-search-bar`):**
  * Arama Çubuğu Genişliği: `460px` (Tablet ergonomisine tam uyumlu)
  * Arama Çubuğu Yüksekliği: `52px`
  * Katman Önceliği (`z-index`): `200`
  * İç Boşluk: `6px 8px 6px 22px` (`6px var(--spacing-2) 6px 22px`)
  * Kenarlık & Köşe: `1px solid rgba(255,255,255,0.3)`, `border-radius: 100px`
  * Özel 3D Gölge: `3px 3px 0 0 #ffffff`
  * Büyüteç İkonu: `20px × 20px` (Beyaz)
  * Arama Butonu (`.search-btn`): `38px × 38px` (Beyaz yuvarlak buton, içinde `18px` siyah ok)
  * **Açılır Menü Genişliği (`.hero-search-dropdown`):** **`%100`** (`460px` ile eşit)
  * Açılır Menü Konumu & Katmanı: `top: calc(100% + 10px)`, `z-index: 99999`
  * Açılır Menü Köşe & Gölge: `20px`, `box-shadow: 0 24px 60px rgba(0,0,0,0.3)`
  * Maksimum Menü Yüksekliği: `340px` (`max-height: 340px; overflow-y: auto`)
* ⬇️ **Arama Çubuğu ile Başlık Arası Dikey Mesafe (`gap`):** **`32px`** (`var(--spacing-8)`)
* **Başlık (H1) & Daktilo Animasyonu:**
  * Font Boyutu: `2.75rem` (44px) - `letter-spacing: -0.8px` - `line-height: 1.18`
  * Sabit Başlık (`.text-muted-hero`): `2.75rem` / Semibold (600)
  * Daktilo Metni (`.text-white-hero`): `2.75rem` / Extrabold (800)
  * Daktilo İmleci (`.typewriter-cursor`): `3px` genişlik, `0.9em` yükseklik
  * Daktilo Kelime Döngüsü: 
    * TR: *"Saniyeler içinde."* ➔ *"Tam ölçüsüyle."* ➔ *"Net verilerle."*
    * EN: *"In seconds."* ➔ *"With precision."* ➔ *"With accuracy."*
* ⬇️ **Başlık ile Açıklama Paragrafı Arası Dikey Mesafe (`gap`):** **`26px`**
* **Açıklama Paragrafı:**
  * Font Boyutu: `1.12rem` (17.9px) / `line-height: 1.55`
  * Maksimum Genişlik: `510px`
  * Renk: `%90 Beyaz` (`var(--text-white-dim)`)
* ⬇️ **Açıklama Paragrafı ile Butonlar Arası Dikey Mesafe (`gap`):** **`26px`**
* **Hero Eylem Butonları (`.hero-buttons`):**
  * Toplam Kapsayıcı Genişliği: `440px`
  * Butonlar Arası Yatay Boşluk (`gap`): `16px` (`var(--spacing-4)`)
  * Her Bir Buton Boyutu: `210px Genişlik × 52px Yükseklik`
  * Buton Yazı Boyutu: `1.05rem` (16.8px) / Bold (700)
  * Sol Buton: Beyaz zemin (`#ffffff`), Siyah metin (`#141113`)
  * Sağ Buton: Şeffaf cam zemin (`rgba(255,255,255,0.15)`), Beyaz metin

#### B. Tablet Markalar / Kategoriler Bölümü (`.brands-section`):
* **Hero ile Markalar Arası Dikey Mesafe:** `0px` (Aynı ada içinde kesintisiz akış)
* **İç Boşluk (Padding):** Üst ve alttan `56px 24px`
* **Başlık:** `1.55rem` (24.8px) / Bold (700) - `margin-bottom: 32px`
* **4'lü Yatay Kategori Izgarası (`.brands-logo-grid`):**
  * Izgara Yapısı: `grid-template-columns: repeat(4, 1fr)` (4 Sütun Yatay Dizilim)
  * Rozetler Arası Boşluk (`gap`): `14px`
  * Her Bir Rozet Boyutu: `100% Genişlik × 48px Yükseklik`
  * Rozet İç Boşluğu: `0 16px`
  * Rozet Fontu: `0.98rem` / Semibold (600)
  * İkon Boyutları: `22px × 22px`

---

### ⬇️ GEÇİŞ 1: Hero/Markalar Adası ➔ Nasıl Çalışır (HIW)
* **Dikey Mesafe (Margin-Top):** **`96px`** (`var(--spacing-24)`)
* *Açıklama: Tablet ekranında tüm bölümler arası standart sabit geçiş mesafesi.*

---

### 3️⃣ TABLET NASIL ÇALIŞIR VE 3D İNTERAKTİF CÜZDAN (`.how-it-works`)
* **Üst Boşluk (Margin-Top):** `96px` (`var(--spacing-24)`)
* **Alt Boşluk (Margin-Bottom):** `0px` (Bir sonraki bölümün margin-top'u ile yönetilir)
* **Yatay İç Boşluk (Padding):** `0 24px`
* **Başlık Alanı Genişliği (`max-width`):** `620px`
* **Başlık Alanı Alt Boşluğu (`margin-bottom`):** `36px`

#### 📌 Başlık Alanı İçi Mikro Boşluklar:
1. **[ Kolay Kullanım ] Rozeti:**
   * İç Boşluk (Padding): `5px 16px`
   * Font: `0.90rem` (14.4px) / Semibold (600)
   * Köşe Yuvarlaklığı: `100px`
   * ⬇️ **Rozet ile H2 Başlık Arası:** **`12px`** (`var(--spacing-3)`)
2. **"Sadece 3 Adımda Hesaplayın" (H2 Başlığı):**
   * Font: `2.35rem` (37.6px) / Bold (700) - `line-height: 1.25`
   * Renk: `var(--color-dark)` (#141113)
   * ⬇️ **H2 Başlık ile Açıklama Arası:** **`12px`** (`var(--spacing-3)`)
3. **"Karmaşık hesaplamalarla vakit kaybetmeyin..." (Açıklama Paragrafı):**
   * Font: `1.12rem` (17.9px) / Line-height: `1.55`
   * Renk: `%60 Siyah` (`var(--overlay-black-60)`)
   * ⬇️ **Açıklama ile 3D Cüzdan Arası Net Boşluk:** **`56px`** (`hiw-header margin-bottom: 36px` + `wallet-app-container margin-top: 20px`)

#### 👝 Tablet 3D Cüzdan Boyutları & Etkileşim Kuralları:
* **3D Cüzdan Kapsayıcısı:** `450px Genişlik × 365px Yükseklik`
* **Arka Deri Gövde (`.wallet-back`):** `450px × 315px`, `border-radius: 28px 28px 80px 80px`
* **Cam Kart Katmanları (`.wallet-card`):** `420px Genişlik × 220px Yükseklik`, `left: 15px`, `border-radius: 20px`
* **Ön Deri Cep (`.pocket`):** `450px Genişlik × 255px Yükseklik`
* **Kart Katmanları Arasındaki Dikey Basamaklar:**
  * 3. Adım Kartı: Alttan `138px` (Açıldığında: `translateY(-90px) rotate(-3.5deg)`)
  * 2. Adım Kartı: Alttan `95px` (Açıldığında: `translateY(-55px) rotate(3deg)`)
  * 1. Adım Kartı: Alttan `50px` (Açıldığında: `translateY(-20px) rotate(-1deg)`)
* **Bakiye & Yıldızlar Göstergesi:**
  * Yıldızlar (`.balance-stars`): `40px` yazı boyutu, `5px` harf aralığı
  * Gerçek Bakiye (`.balance-real`): `28px` yazı boyutu, bold
* **Tablet Etkileşim:**
  * Cüzdana dokunulduğunda veya fareyle gelindiğinde `.active` sınıfı tetiklenir, kartlar yukarı fırlar ve gizli bakiye açılır.
  * Ekranda başka bir yere dokunulduğunda cüzdan otomatik olarak geri kapanır.
* **Cüzdan Bölümü Alt Boşluğu (`margin-bottom`):** `60px`

---

### ⬇️ GEÇİŞ 2: Nasıl Çalışır ➔ Hesaplayıcılar (Calculators)
* **Dikey Mesafe (Margin-Top):** **`96px`** (`var(--spacing-24)`)

---

### 4️⃣ TABLET HESAPLAYICILAR VE YATAY AKORDİYON KARTLARI (`.calculators-section`)
* **Üst Boşluk (Margin-Top):** `96px` (`var(--spacing-24)`)
* **Alt Boşluk (Margin-Bottom):** `0px`
* **Yatay İç Boşluk (Padding):** `0 24px`
* **Başlık ile Kartlar Arası:** `32px` (`margin-bottom: var(--spacing-8)`)
* **Başlık Fontu:** `2.25rem` (36px) / Bold (700)
* **Açıklama Fontu:** `1.08rem` / `line-height: 1.5`
* **Tablet Yatay Akordiyon Kart Boyutları:**
  * Kart Düzeni: `flex-direction: row` (Yatay lüks kart akışı)
  * Kartlar Arası Yatay Boşluk (`gap`): `10px`
  * Toplam Akordiyon Yüksekliği: `480px` (`var(--accordion-tablet-height)`)
  * Kapalı Kart Esneme Oranı (`flex`): `1` (Dikey saydam numara: `2.8rem; font-weight: 800`)
  * Açık / Aktif Kart Esneme Oranı (`flex`): `3.5` (Yumuşak `0.75s` geçiş)
  * Kart İçi Buton (`.btn-pill-primary`): `height: 38px`, `padding: 8px 20px`, `font-size: 0.90rem`

---

### ⬇️ GEÇİŞ 3: Hesaplayıcılar ➔ Sıkça Sorulan Sorular (FAQ)
* **Dikey Mesafe (Margin-Top):** **`96px`** (`var(--spacing-24)`)

---

### 5️⃣ TABLET SIKÇA SORULAN SORULAR BÖLÜMÜ (`.faq-section`)
* **Üst Boşluk (Margin-Top):** `96px` (`var(--spacing-24)`)
* **Alt Boşluk (Margin-Bottom):** `0px`
* **Yatay İç Boşluk (Padding):** `0 24px`
* **Başlık ile SSS Kutusu Arası:** `28px` (`margin-bottom: var(--spacing-7)`)
* **Başlık Fontu:** `2.25rem` (36px) / Bold (700)
* **SSS Kutusu Köşe Yuvarlaklığı:** `20px`, `border: 1px solid var(--overlay-black-08)`
* **Her Soru Satırı:**
  * Minimum Yükseklik: `72px` (`min-height: 72px`)
  * İç Boşluk (Padding): `22px 28px`
  * Soru İkonu: `20px × 20px`
  * Soru Metni: `1.05rem` (16.8px) / Semibold (600)
  * Artı İkonu (`.faq-icon-plus`): `1.5rem` (Açıldığında 45° döner ve siyaha geçer)
* **Açılan Cevap Metni:**
  * İç Boşluk: `12px 28px 26px 68px`
  * Font Boyutu: `0.98rem` (15.6px) / `line-height: 1.6`
  * Renk: `var(--text-secondary)` (#58575A)

---

### ⬇️ GEÇİŞ 4: S.S.S ➔ Tablet Mega Footer
* **Dikey Mesafe (Padding-Top):** **`96px`** (`var(--spacing-24)`)

---

### 6️⃣ TABLET MEGA FOOTER (APPLE AKORDEON) (`.site-footer`)
* **İç Boşluk (Padding):** Üst: `96px`, Yanlar: `24px`, Alt: `105px` (`padding: var(--spacing-24) var(--spacing-6) 105px var(--spacing-6)`)
* *Not: Alttaki `105px` boşluk, yüzen alt dock çubuğunun içerikleri kapatmasını engeller.*

#### 📌 Tablet Footer Bölümleri ve Ölçüleri:
1. **Marka ve E-Bülten Alanı:**
   * Logo Fontu: `2.1rem` (33.6px) / Extrabold (800)
   * Logo Alt Boşluğu (`margin-bottom`): `16px` (`var(--spacing-4)`)
   * Slogan Fontu: `1.05rem`, `max-width: 440px`, `line-height: 1.5`
   * Slogan Alt Boşluğu (`margin-bottom`): `28px` (`var(--spacing-7)`)
   * E-Bülten Arama Kutusu: `max-width: 500px`, `height: 58px`, `border-radius: 50px`
   * E-Bülten İç Boşluğu: `4px 6px 4px 24px`
   * "Katıl" Butonu (`.join-btn`): `height: 46px`, `padding: 0 28px`, `font-size: 1.00rem`
   * Marka Alanı ile Bağlantılar Arası Boşluk: `48px` (`var(--spacing-12)`)

2. **Apple Tarzı Dikey Açılır Link Akordeonu (`.footer-links`):**
   * Toplam Genişlik: `100%` (`max-width: 540px`)
   * Akordeon Başlıkları (3 Kolon: Keşfet, Hesaplayıcılar, İletişim):
     * Başlık İç Boşluğu: `18px 8px`
     * Font: `1.06rem` (17px) / Semibold (600)
     * Artı İkonu: `1.45rem` (Açılınca 45° döner ve çarpı olur)
   * Açılan Linkler Listesi:
     * Dikey Boşluk (`gap`): `12px`
     * Link Fontu: `0.95rem` / `line-height: 1.6`
     * Renk: `%50 Siyah` (`var(--overlay-black-50)`)

3. **Alt Telif ve Yasal Bilgiler Alanı:**
   * Ayırıcı Çizgi Üst Boşluğu (`padding-top`): `28px`
   * Telif Metni: `font-size: 0.88rem`, `color: var(--overlay-black-40)`
   * Yasal Linkler (Gizlilik, Şartlar): `gap: 24px`, `font-size: 0.88rem`

---

## 📌 3. SABİT ELEMANLARIN (FIXED) TABLET KONUMLARI

| Sabit Eleman | Yatay Konum | Alttan Mesafe | Boyut / Ölçüler |
| :--- | :---: | :---: | :---: |
| **Yüzen Menü (Floating Dock)** | Yatayda Tam Ortada (`left: 50%`) | `24px` (`bottom: 24px`) | **Genişlik: `292px`**, `padding: 7px 16px`, `gap: 10px`, İkonlar: `44px × 44px` (İkon SVG: `22px`) |
| **Yukarı Çık Butonu (Back to Top)**| Sağdan `24px` (`right: 24px`) | `82px` (`bottom: 82px`) | `48px × 48px` (İkon: `26px`, Çizgi kalınlığı: `2.8px`, `box-shadow: 0 6px 20px rgba(0,0,0,0.25)`) |

---

## 📑 4. TABLET CSS DEĞİŞKENLERİ (SPACING TOKEN) TABLOSU

| Değişken Adı | Piksel Değeri | Tablet Kullanım Alanları |
| :--- | :---: | :--- |
| `--spacing-1` | `4px` | Hamburger çizgileri arası, e-bülten dikey padding |
| `--spacing-2` | `8px` | Arama kutusu iç dolguları |
| `--spacing-2-5` | `10px` | Dock ikonları arası `gap: 10px`, akordiyon kartlar arası `gap` |
| `--spacing-3` | `12px` | Tablet rozet alt boşlukları (`margin-bottom: 12px`) |
| `--spacing-3-5` | `14px` | Sayfa ada yan kenar boşlukları (`margin: 0 14px`), kategori rozetleri `gap` |
| `--spacing-4` | `16px` | Hero eylem butonları arası yatay `gap: 16px`, rozet yatay padding |
| `--spacing-6` | `24px` | Tablet sayfa yan dolguları (`padding: 0 24px`), menü çekmecesi `gap` |
| `--spacing-7` | `28px` | SSS soru padding, bülten butonu yatay dolgusu |
| `--spacing-8` | `32px` | **Arama çubuğu ile başlık arası ferah dikey boşluk (`32px`)**, akordiyon başlık altı |
| `--spacing-9` | `36px` | HIW başlık alt boşluğu (`margin-bottom: 36px`) |
| `--spacing-10` | `40px` | Menü çekmecesi dikey `gap: 40px`, footer blok arası boşluk |
| `--spacing-14` | `56px` | Kategori bölümü dikey padding |
| `--spacing-24` | `96px` | **Tablet ana bölümler arası standart lüks dikey mesafe (`96px`)** |
