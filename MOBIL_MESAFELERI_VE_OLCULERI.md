# 📱 MaterialCalc - Mobil (Mobile) Bölüm Mesafeleri ve Ölçü Kılavuzu

> Bu belge, **MaterialCalc** projesinin `index.html` ve mobil stil sistemi (`mobile.css` - Akıllı Telefonlar <= 767px) için tüm bölümlerin dikey/yatay mesafelerini, iç boşluklarını (padding), dış boşluklarını (margin), etkileşim ölçülerini ve eleman boyutlarını Word ve teknik dokümantasyon için içeren tam başvuru kılavuzudur.

---

## 🧭 1. GENEL DÜZEN VE ÇERÇEVE MİMARİSİ

* **Maksimum Mobil İçerik Genişliği:** `380px` (Ekran kenarlarından taşmayan ideal tek elle kullanım ergonomisi)
* **Sayfa Dış Kenar Boşluğu (Ada Kenarları):** `8px` üst, `10px` sağ/sol, `24px` alt (`margin: var(--spacing-2) var(--spacing-2-5) var(--spacing-6) var(--spacing-2-5)`)
* **Mobil Ada Köşe Yuvarlaklığı:** `20px`
* **Kapsül / Hap Buton Yuvarlaklığı (`--pill-radius`):** `100px`
* **Temel Yazı Tipi:** `Poppins, sans-serif`

---

## 📏 2. BÖLÜMLER ARASI DİKEY MESAFELER VE ÖLÇÜLER

### 1️⃣ YÜZEN ÜST DİNAMİK ADA (DYNAMIC ISLAND HEADER)
* **Konumlandırma:** `position: fixed; z-index: 1000`
* **Üstten Boşluk (Varsayılan - Şeffaf Ada):** `32px` (`top: var(--spacing-8)`) *(<=480px ekranlarda `28px`)*
* **Üstten Boşluk (Sayfa Kaydırılınca - Beyaz Ada):** `20px` (`top: var(--spacing-5)`) *(<=480px ekranlarda `18px`)*
* **Yatay İç Boşluk:** `0 24px` (`padding: 0 var(--spacing-6)`)
* **Sol Logo Kapsülü (`.logo-pill`):**
  * Yükseklik: `42px`
  * İç Boşluk: `0 20px` (`padding: 0 var(--spacing-5)`)
  * Genişlik: `auto` (`min-width: max-content`)
  * Yazı Boyutu: `1.15rem` (18.4px) - `letter-spacing: -0.5px`
  * Şeffaf Mod Rengi: `Material` (Beyaz `#ffffff`), `Calc` (Sıcak Altın `#dfcaa8`)
  * Kaydırılmış Mod Rengi: `Material` (Siyah `#141113`), `Calc` (Bronz `#7E7160`)
* **Sağ Hamburger Kapsülü (`.action-pill`):**
  * Boyut: `42px × 42px` (Kare/Yuvarlak simetrik hap)
  * Hamburger Çizgileri (`.hamburger-bar`): `18px Genişlik × 2px Yükseklik`, Çizgiler arası dikey boşluk `4px`
  * Şeffaf Mod Rengi: Beyaz (`#ffffff`)
  * Kaydırılmış Mod Rengi: Siyah (`#141113`)

---

### 1️⃣.1 TAM EKRAN MOBİL MENÜ ÇEKMECESİ (DRAWER MENU OVERLAY)
* **Konumlandırma:** `position: fixed; top: 0; left: 0; z-index: 999`
* **Boyut:** `100vw × 100vh / 100dvh` (Tam ekran koyu cam perde)
* **Arka Plan:** `var(--color-dark)` (#141113) + `backdrop-filter: blur(30px)`
* **İç Kapsayıcı Genişliği:** `max-width: 320px`
* **Dikey Eleman Boşluğu (`gap`):** `36px` (`var(--spacing-9)`)
* **Menü Bağlantıları (`.overlay-link`):**
  * Font Boyutu: `1.55rem` (24.8px) - Bold (700)
  * Bağlantılar Arası Boşluk (`gap`): `22px` (`var(--spacing-5-5)`)
  * Dokunma/Hover Efekti: `scale(1.05)` büyüme ve `%100` beyaz parlama
* **"Hemen Başla" Butonu (`.overlay-cta`):**
  * **Genişlik:** **`210px`** *(Yüzen Dock çubuğu ile birebir milimetrik eşit genişlikte!)*
  * Yükseklik: `48px`
  * Font: `0.98rem` / Bold (700)
  * Renk: Beyaz zemin (`#ffffff`), Siyah metin (`#141113`)
* **Mobil Dil Seçici:** `TR / EN` yatay hap buton kapsülü

---

### 2️⃣ BİRLEŞİK ADA: KARŞILAMA (HERO) VE KATEGORİLER (BRANDS)
* **Dış Ada Çerçevesi (`.hero-brands-container`):** 
  * Arka Plan: `var(--color-white)` (#ffffff)
  * Dış Boşluk (Margin): `8px 10px 24px 10px`
  * Köşe Yuvarlaklığı: `20px`
  * Gölge: `0 20px 40px rgba(0,0,0,0.15)`

#### A. Mobil Hero Bölümü (`.hero-section`):
* **Yükseklik:** `min-height: calc(100vh - 16px)` (Tam ekran mobil ada)
* **İç Boşluk (Padding):** `82px 16px 64px 16px`
* **Akıllı Canlı Arama Çubuğu (`.hero-search-wrapper` / `.hero-search-bar`):**
  * Arama Çubuğu Genişliği: `320px` (Maksimum ergonomik genişlik)
  * Arama Çubuğu Yüksekliği: `44px`
  * Katman Önceliği (`z-index`): `100`
  * İç Boşluk: `4px 6px 4px 16px` (`var(--spacing-1) var(--spacing-1-5) var(--spacing-1) var(--spacing-4)`)
  * Kenarlık & Köşe: `1px solid rgba(255,255,255,0.3)`, `border-radius: 100px`
  * Özel 3D Gölge: `2px 2px 0 0 #ffffff`
  * Büyüteç İkonu: `16px × 16px` (Beyaz)
  * Arama Butonu (`.search-btn`): `32px × 32px` (Beyaz yuvarlak buton, içinde `14px` siyah ok)
  * **Açılır Menü Genişliği (`.hero-search-dropdown`):** **`%100`** (`320px` ile eşit)
  * Açılır Menü Konumu & Katmanı: `top: calc(100% + 10px)`, `z-index: 99999`
  * Açılır Menü Köşe & Gölge: `18px`, `box-shadow: 0 24px 60px rgba(0,0,0,0.3)`
  * Maksimum Menü Yüksekliği: `280px` (`max-height: 280px; overflow-y: auto`)
* ⬇️ **Arama Çubuğu ile Başlık Arası Dikey Mesafe (`gap`):** **`32px`** (`var(--spacing-8)`)
* **Başlık (H1) & Daktilo Animasyonu:**
  * Font Boyutu: `1.85rem` (29.6px) - `letter-spacing: -0.5px` - `line-height: 1.22`
  * Sabit Başlık (`.text-muted-hero`): `1.70rem` (27.2px) / Medium (500)
  * Daktilo Metni (`.text-white-hero`): `1.70rem` (27.2px) / Extrabold (800)
  * Daktilo İmleci (`.typewriter-cursor`): `2px` genişlik, `0.85em` yükseklik
  * Daktilo Kelime Döngüsü: 
    * TR: *"Saniyeler içinde."* ➔ *"Tam ölçüsüyle."* ➔ *"Net verilerle."*
    * EN: *"In seconds."* ➔ *"With precision."* ➔ *"With accuracy."*
* ⬇️ **Başlık ile Açıklama Paragrafı Arası Dikey Mesafe (`gap`):** **`24px`** (`var(--spacing-6)`)
* **Açıklama Paragrafı:**
  * Font Boyutu: `0.94rem` (15px) / `line-height: 1.5`
  * Maksimum Genişlik: `330px`
  * Renk: `%90 Beyaz` (`var(--text-white-dim)`)
* ⬇️ **Açıklama Paragrafı ile Butonlar Arası Dikey Mesafe (`gap`):** **`24px`** (`var(--spacing-6)`)
* **Hero Eylem Butonları (`.hero-buttons`):**
  * Toplam Kapsayıcı Genişliği: `320px`
  * Butonlar Arası Yatay Boşluk (`gap`): `14px` (`var(--spacing-3-5)`)
  * Her Bir Buton Boyutu: `155px Genişlik × 44px Yükseklik`
  * Buton Yazı Boyutu: `0.90rem` (14.4px) / Bold (700)
  * Sol Buton: Beyaz zemin (`#ffffff`), Siyah metin (`#141113`)
  * Sağ Buton: Şeffaf cam zemin (`rgba(255,255,255,0.15)`), Beyaz metin

#### B. Mobil Markalar / Kategoriler Bölümü (`.brands-section`):
* **Hero ile Markalar Arası Dikey Mesafe:** `0px` (Aynı ada içinde kesintisiz akış)
* **İç Boşluk (Padding):** Üst ve alttan `40px 16px`
* **Başlık:** `1.25rem` (20px) / Bold (700) - `margin-bottom: 24px`
* **2x2 Kategori Izgarası (`.brands-logo-grid`):**
  * Izgara Yapısı: `grid-template-columns: repeat(2, 1fr)` (2 Sütun × 2 Satır)
  * Rozetler Arası Boşluk (`gap`): `10px`
  * Her Bir Rozet Boyutu: `100% Genişlik × 44px Yükseklik`
  * Rozet İç Boşluğu: `0 12px`
  * Rozet Fontu: `0.88rem` / Semibold (600)
  * İkon Boyutları: `18px × 18px`

---

### ⬇️ GEÇİŞ 1: Hero/Markalar Adası ➔ Nasıl Çalışır (HIW)
* **Dikey Mesafe (Margin-Top):** **`64px`** (`var(--spacing-16)`)
* *Açıklama: Mobil ekranda tüm bölümler arası standart sabit geçiş mesafesi.*

---

### 3️⃣ MOBİL NASIL ÇALIŞIR VE 3D İNTERAKTİF CÜZDAN (`.how-it-works`)
* **Üst Boşluk (Margin-Top):** `64px` (`var(--spacing-16)`)
* **Alt Boşluk (Margin-Bottom):** `0px` (Bir sonraki bölümün margin-top'u ile yönetilir)
* **Yatay İç Boşluk (Padding):** `0 16px`
* **Başlık Alanı Genişliği (`max-width`):** `340px`
* **Başlık Alanı Alt Boşluğu (`margin-bottom`):** `32px`

#### 📌 Başlık Alanı İçi Mikro Boşluklar:
1. **[ Kolay Kullanım ] Rozeti:**
   * İç Boşluk (Padding): `4px 14px`
   * Font: `0.82rem` (13px) / Semibold (600)
   * Köşe Yuvarlaklığı: `100px`
   * ⬇️ **Rozet ile H2 Başlık Arası:** **`10px`** (`var(--spacing-2-5)`)
2. **"Sadece 3 Adımda Hesaplayın" (H2 Başlığı):**
   * Font: `1.85rem` (29.6px) / Bold (700) - `line-height: 1.25`
   * Renk: `var(--color-dark)` (#141113)
   * ⬇️ **H2 Başlık ile Açıklama Arası:** **`10px`** (`var(--spacing-2-5)`)
3. **"Karmaşık hesaplamalarla vakit kaybetmeyin..." (Açıklama Paragrafı):**
   * Font: `0.95rem` (15.2px) / Line-height: `1.5`
   * Renk: `%60 Siyah` (`var(--overlay-black-60)`)
   * ⬇️ **Açıklama ile 3D Cüzdan Arası Net Boşluk:** **`44px`** (`hiw-header margin-bottom: 32px` + `wallet-app-container margin-top: 12px`)

#### 👝 Mobil 3D Cüzdan Boyutları & Etkileşim Kuralları:
* **3D Cüzdan Kapsayıcısı:** `310px Genişlik × 300px Yükseklik`
* **Arka Deri Gövde (`.wallet-back`):** `310px × 260px`, `border-radius: 24px 24px 60px 60px`
* **Cam Kart Katmanları (`.wallet-card`):** `290px Genişlik × 185px Yükseklik`, `left: 10px`, `border-radius: 18px`
* **Ön Deri Cep (`.pocket`):** `310px Genişlik × 210px Yükseklik`
* **Kart Katmanları Arasındaki Dikey Basamaklar:**
  * 3. Adım Kartı: Alttan `110px` (Açıldığında: `translateY(-65px) rotate(-3.5deg)`)
  * 2. Adım Kartı: Alttan `75px` (Açıldığında: `translateY(-40px) rotate(3deg)`)
  * 1. Adım Kartı: Alttan `40px` (Açıldığında: `translateY(-15px) rotate(-1deg)`)
* **Bakiye & Yıldızlar Göstergesi:**
  * Yıldızlar (`.balance-stars`): `32px` yazı boyutu, `4px` harf aralığı
  * Gerçek Bakiye (`.balance-real`): `22px` yazı boyutu, bold
* **Mobil Etkileşim:**
  * Cüzdana dokunulduğunda (`tap/click`) `.active` sınıfı tetiklenir, kartlar yukarı fırlar ve gizli bakiye açılır.
  * Ekranda başka bir yere dokunulduğunda cüzdan otomatik olarak geri kapanır.
* **Cüzdan Bölümü Alt Boşluğu (`margin-bottom`):** `44px`

---

### ⬇️ GEÇİŞ 2: Nasıl Çalışır ➔ Hesaplayıcılar (Calculators)
* **Dikey Mesafe (Margin-Top):** **`64px`** (`var(--spacing-16)`)

---

### 4️⃣ MOBİL HESAPLAYICI ÖNİZLEME KARTLARI (`.calculators-section`)
* **Üst Boşluk (Margin-Top):** `64px` (`var(--spacing-16)`)
* **Alt Boşluk (Margin-Bottom):** `0px`
* **Yatay İç Boşluk (Padding):** `0 16px`
* **Başlık ile Kartlar Arası:** `24px` (`margin-bottom: var(--spacing-6)`)
* **Başlık Fontu:** `1.85rem` (29.6px) / Bold (700)
* **Açıklama Fontu:** `0.95rem` / `line-height: 1.45`
* **Mobil Dikey Akordiyon Kart Boyutları:**
  * Kart Düzeni: `flex-direction: column` (Alt alta dikey akış)
  * Kartlar Arası Dikey Boşluk (`gap`): `12px`
  * Kapalı Kart Yüksekliği: `140px` (`height: 140px; border-radius: 18px`)
  * Açık / Aktif Kart Yüksekliği: `200px` (`height: 200px`)
  * Dikey Numaralandırma: `01`, `02`, `03`, `04`, `05` (`font-size: 1.8rem; font-weight: 800`)
  * Kart İçi Buton (`.btn-pill-primary`): `height: 34px`, `padding: 6px 16px`, `font-size: 0.84rem`

---

### ⬇️ GEÇİŞ 3: Hesaplayıcılar ➔ Sıkça Sorulan Sorular (FAQ)
* **Dikey Mesafe (Margin-Top):** **`64px`** (`var(--spacing-16)`)

---

### 5️⃣ MOBİL SIKÇA SORULAN SORULAR BÖLÜMÜ (`.faq-section`)
* **Üst Boşluk (Margin-Top):** `64px` (`var(--spacing-16)`)
* **Alt Boşluk (Margin-Bottom):** `0px`
* **Yatay İç Boşluk (Padding):** `0 16px`
* **Başlık ile SSS Kutusu Arası:** `24px` (`margin-bottom: var(--spacing-6)`)
* **Başlık Fontu:** `1.85rem` (29.6px) / Bold (700)
* **SSS Kutusu Köşe Yuvarlaklığı:** `18px`, `border: 1px solid var(--overlay-black-08)`
* **Her Soru Satırı:**
  * Minimum Yükseklik: `60px` (`min-height: 60px`)
  * İç Boşluk (Padding): `16px 18px`
  * Soru İkonu: `18px × 18px`
  * Soru Metni: `0.95rem` (15.2px) / Semibold (600)
  * Artı İkonu (`.faq-icon-plus`): `1.4rem` (Açıldığında 45° döner ve siyaha geçer)
* **Açılan Cevap Metni:**
  * İç Boşluk: `10px 18px 18px 50px`
  * Font Boyutu: `0.88rem` (14px) / `line-height: 1.55`
  * Renk: `var(--text-secondary)` (#58575A)

---

### ⬇️ GEÇİŞ 4: S.S.S ➔ Mobil Mega Footer
* **Dikey Mesafe (Padding-Top):** **`64px`** (`var(--spacing-16)`)

---

### 6️⃣ MOBİL MEGA FOOTER (APPLE AKORDEON) (`.site-footer`)
* **İç Boşluk (Padding):** Üst: `64px`, Yanlar: `16px`, Alt: `95px` (`padding: var(--spacing-16) var(--spacing-4) 95px var(--spacing-4)`)
* *Not: Alttaki `95px` boşluk, yüzen alt dock çubuğunun içerikleri kapatmasını engeller.*

#### 📌 Mobil Footer Bölümleri ve Ölçüleri:
1. **Marka ve E-Bülten Alanı:**
   * Logo Fontu: `1.85rem` (29.6px) / Extrabold (800)
   * Logo Alt Boşluğu (`margin-bottom`): `14px` (`var(--spacing-3-5)`)
   * Slogan Fontu: `0.92rem`, `max-width: 290px`, `line-height: 1.45`
   * Slogan Alt Boşluğu (`margin-bottom`): `24px` (`var(--spacing-6)`)
   * E-Bülten Arama Kutusu: `max-width: 330px`, `height: 50px`, `border-radius: 40px`
   * E-Bülten İç Boşluğu: `4px 5px 4px 18px`
   * "Katıl" Butonu (`.join-btn`): `height: 40px`, `padding: 0 20px`, `font-size: 0.90rem`
   * Marka Alanı ile Bağlantılar Arası Boşluk: `40px` (`var(--spacing-10)`)

2. **Apple Tarzı Dikey Açılır Link Akordeonu (`.footer-links`):**
   * Toplam Genişlik: `100%` (`max-width: 340px`)
   * Akordeon Başlıkları (3 Kolon: Keşfet, Hesaplayıcılar, İletişim):
     * Başlık İç Boşluğu: `16px 4px`
     * Font: `0.98rem` (15.6px) / Semibold (600)
     * Artı İkonu: `1.35rem` (Açılınca 45° döner ve çarpı olur)
   * Açılan Linkler Listesi:
     * Dikey Boşluk (`gap`): `10px`
     * Link Fontu: `0.86rem` / `line-height: 1.6`
     * Renk: `%50 Siyah` (`var(--overlay-black-50)`)

3. **Alt Telif ve Yasal Bilgiler Alanı:**
   * Ayırıcı Çizgi Üst Boşluğu (`padding-top`): `24px`
   * Telif Metni: `font-size: 0.82rem`, `color: var(--overlay-black-40)`
   * Yasal Linkler (Gizlilik, Şartlar): `gap: 20px`, `font-size: 0.82rem`

---

## 📌 3. SABİT ELEMANLARIN (FIXED) MOBİL KONUMLARI

| Sabit Eleman | Yatay Konum | Alttan Mesafe | Boyut / Ölçüler |
| :--- | :---: | :---: | :---: |
| **Yüzen Menü (Floating Dock)** | Yatayda Tam Ortada (`left: 50%`) | `22px` (`bottom: 22px`) | **Genişlik: `210px`**, `padding: 4px 10px`, `gap: 6px`, İkonlar: `32px × 32px` (İkon SVG: `15px`) |
| **Yukarı Çık Butonu (Back to Top)**| Sağdan `18px` (`right: 18px`) | `74px` (`bottom: 74px`) | `42px × 42px` (İkon: `20px`, Çizgi kalınlığı: `2.5px`, `box-shadow: 0 6px 20px rgba(0,0,0,0.25)`) |

---

## 📑 4. MOBİL CSS DEĞİŞKENLERİ (SPACING TOKEN) TABLOSU

| Değişken Adı | Piksel Değeri | Mobil Kullanım Alanları |
| :--- | :---: | :--- |
| `--spacing-1` | `4px` | Hamburger çizgileri arası, e-bülten dikey padding, başlık altı daktilo aralığı |
| `--spacing-1-5` | `6px` | Dock ikonları arası (`gap: 6px`), arama kutusu dikey padding |
| `--spacing-2` | `8px` | Sayfa ada üst kenar boşluğu (`margin-top: 8px`), arama ikon-metin aralığı |
| `--spacing-2-5` | `10px` | Sayfa ada yan kenar boşlukları (`margin: 0 10px`), kategori rozetleri `gap` |
| `--spacing-3` | `12px` | Mobil hesaplayıcı kartları arası `gap`, SSS iç aralıkları |
| `--spacing-3-5` | `14px` | Hero eylem butonları arası yatay `gap: 14px` |
| `--spacing-4` | `16px` | Mobil sayfa yan dolguları (`padding: 0 16px`), SSS soru padding |
| `--spacing-5` | `20px` | Logo kapsülü yatay padding, marka başlığı alt boşluğu |
| `--spacing-5-5` | `22px` | Menü çekmecesi bağlantıları arası `gap: 22px` |
| `--spacing-6` | `24px` | **Hero başlık-metin-buton arası standart dikey boşluk (`24px`)**, ada alt margin |
| `--spacing-7` | `28px` | <=480px ekranlarda header üst boşluğu (`top: 28px`) |
| `--spacing-8` | `32px` | **Arama çubuğu ile başlık arası ferah dikey boşluk (`32px`)**, header üst boşluğu |
| `--spacing-9` | `36px` | Menü çekmecesi ana bloklar arası `gap: 36px` |
| `--spacing-10` | `40px` | Markalar bölümü dikey padding, buton yükseklikleri |
| `--spacing-14` | `56px` | **Mobil ana bölümler arası standart lüks dikey mesafe (`56px`)** |
| `--spacing-16` | `64px` | Hero bölümü alt padding |
| `--spacing-20` | `80px` | Hero bölümü üst padding |
