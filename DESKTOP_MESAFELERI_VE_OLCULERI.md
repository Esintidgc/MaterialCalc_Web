# 📐 MaterialCalc - Masaüstü (Desktop) Bölüm Mesafeleri ve Ölçü Kılavuzu

> Bu belge, **MaterialCalc** projesinin `index.html` (Masaüstü > 1200px) sayfasında yer alan tüm bölümlerin dikey/yatay mesafelerini, iç boşluklarını (padding), dış boşluklarını (margin) ve eleman boyutlarını Word/dokümantasyon için derlenmiş tam kılavuzudur.

---

## 🧭 1. GENEL DÜZEN VE ÇERÇEVE MİMARİSİ

* **Maksimum Konteyner Genişliği (`--container-width`):** `1200px`
* **Sayfa Dış Kenar Boşluğu (Ada Kenarları):** `24px` (`margin: var(--spacing-6)`)
* **Temel Yazı Tipi:** `Poppins, sans-serif`
* **Kalıcı Kart Yuvarlaklığı (`--card-radius`):** `24px`
* **Kapsül/Hap Buton Yuvarlaklığı (`--pill-radius`):** `100px`

---

## 📏 2. BÖLÜMLER ARASI DİKEY MESAFELER VE ÖLÇÜLER

### 1️⃣ YÜZEN ÜST GEZİNME ÇUBUĞU (FLOATING NAVBAR)
* **Konumlandırma:** `position: fixed`
* **Üstten Boşluk (Varsayılan):** `48px` (`top: var(--spacing-12)`)
* **Üstten Boşluk (Sayfa Kaydırılınca):** `24px` (`top: var(--spacing-6)`)
* **Yükseklik:** `56px` (Sabit kilitli yükseklik)
* **Kapsüller Arası Boşluk:** Logo, Menü ve İşlem hapları arasında `flex: space-between`

---

### 2️⃣ BİRLEŞİK ADA: KARŞILAMA (HERO) VE MARKALAR (BRANDS)
* **Dış Ada Çerçevesi (`.hero-brands-container`):** 
  * Arka Plan: `#F3F3F3`
  * Dış Boşluk (Margin): Her yönden `24px`
  * Köşe Yuvarlaklığı: `24px`

#### A. Hero Bölümü (`.hero-section`):
* **Yükseklik:** `min-height: calc(100vh - 48px)` (Tam ekran ada)
* **İç Boşluk (Padding):** 
  * Üst: `100px`
  * Sağ: `60px`
  * Alt: `60px`
  * Sol: `60px`
* **Akıllı Canlı Arama Çubuğu (`.hero-search-wrapper` / `.hero-search-bar`):**
  * Arama Çubuğu Genişliği: `360px`
  * Katman Önceliği (`z-index`): `200` (Metinlerin ve animasyonların en üstünde)
  * Alt Boşluk (`margin-bottom`): `60px` (`var(--spacing-15)`)
  * İç Boşluk: `8px 12px 8px 20px` (`var(--spacing-2) var(--spacing-3) var(--spacing-2) var(--spacing-5)`)
  * Kenarlık & Köşe: `1px solid #ffffff`, `border-radius: 100px`
  * Özel 3D Gölge: `6px 6px 0 0 #ffffff`
  * **Açılır Menü Genişliği (`.hero-search-dropdown`):** **`%100`** (Arama çubuğu ile milimetrik `360px` eşit)
  * Açılır Menü Konumu & Katmanı: `top: calc(100% + 10px)`, `z-index: 99999`
  * Açılır Menü Arka Planı: `#ffffff` (Opak kristal beyaz, arkadaki yazıları sızdırmaz)
  * Açılır Menü Köşe & Gölge: `18px`, `box-shadow: 0 24px 60px rgba(0,0,0,0.3)`
  * Dil Ayrımı: Katı izolasyon (TR seçiliyken sadece Türkçe, EN seçiliyken sadece İngilizce sonuçlar)
* **Başlık (H1) & Daktilo Animasyonu:**
  * Font Boyutu: `4.0rem` (64px) - `letter-spacing: -1.5px` - `line-height: 1.1`
  * Daktilo İmleci (`.typewriter-cursor`): `2px` genişlik, `1.1em` yükseklik, beyaz, yanıp sönen (`blink 1s infinite step-end`)
  * Daktilo Kelime Döngüsü: 
    * TR: *"Saniyeler içinde."* ➔ *"Tam ölçüsüyle."* ➔ *"Net verilerle."*
    * EN: *"In seconds."* ➔ *"With precision."* ➔ *"With accuracy."*
* **Sol ve Sağ Kolon Arası Boşluk (`gap`):** `60px` (`var(--spacing-15)`)
* **Hero Butonları Arası Boşluk (`gap`):** `16px` (`var(--spacing-md)`)

#### B. Markalar Bölümü (`.brands-section`):
* **Hero ile Markalar Arası Dikey Mesafe:** `0px` (Aynı ada içinde kesintisiz geçiş)
* **İç Boşluk (Padding):** Üstten ve alttan `80px` (`padding: 80px 0`)
* **Başlık ile 4'lü Kategori Izgarası Arası:** `50px` (`margin-bottom: var(--spacing-12-5)`)
* **4 Kategori Rozeti Arasındaki Yatay Boşluk (`gap`):** `60px` (`var(--spacing-15)`)
* **İkon Boyutları:** `28px × 28px`

---

### ⬇️ GEÇİŞ 1: Hero/Markalar Adası ➔ Nasıl Çalışır (HIW)
* **Dikey Mesafe (Margin-Top):** **`140px`** (`var(--spacing-35)`)
* *Açıklama: Apple tarzı ferah, nefes alan beyaz boşluk.*

---

### 3️⃣ NASIL ÇALIŞIR VE 3D İNTERAKTİF CÜZDAN (`.how-it-works`)
* **Üst Boşluk (Margin-Top):** `140px` (`var(--spacing-35)`)
* **Başlık Alanı Genişliği (`max-width`):** `600px`

#### 📌 Başlık Alanı İçi Mikro Boşluklar (Header Elements Spacing):
1. **[ Kolay Kullanım ] Rozeti:**
   * İç Boşluk (Padding): `6px` dikey, `16px` yatay (`var(--spacing-1-5) var(--spacing-4)`)
   * Font: `0.85rem` (13.6px) / Semibold (600)
   * Köşe Yuvarlaklığı: `20px`
   * ⬇️ **Rozet ile H2 Başlık Arası Dikey Boşluk (`margin-bottom`):** **`16px`** (`var(--spacing-md)`)

2. **"Sadece 3 Adımda Hesaplayın" (H2 Başlığı):**
   * Font: `2.5rem` (40px) / Bold (700)
   * Renk: `var(--color-dark)` (#141113)
   * ⬇️ **H2 Başlık ile Açıklama Paragrafı Arası Dikey Boşluk (`margin-bottom`):** **`16px`** (`var(--spacing-md)`)

3. **"Karmaşık hesaplamalarla vakit kaybetmeyin..." (Açıklama Paragrafı):**
   * Font: `1.1rem` (17.6px) / Line-height: `1.6`
   * Renk: `%60 Siyah` (`var(--overlay-black-60)`)
   * ⬇️ **Açıklama Paragrafı ile 3D Cüzdan Arası Net Boşluk:** **`80px`** (`hiw-header margin-bottom: 60px` + `wallet-app-container margin-top: 20px`)

#### 👝 3D Cüzdan Boyutları & Etkileşim Kuralları:
* **3D Cüzdan Kapsayıcısı:** `440px Genişlik × 360px Yükseklik`
* **3D Kart Katmanları Arasındaki Dikey Basamaklar:**
  * 3. Adım Kartı: Alttan `140px` (Açıldığında: `translateY(-110px) rotate(-3deg)`)
  * 2. Adım Kartı: Alttan `100px` (Açıldığında: `translateY(-70px) rotate(2deg)`)
  * 1. Adım Kartı: Alttan `60px` (Açıldığında: `translateY(-20px)`)
  * Ön Beyaz Cep (Pocket): `440px × 250px`
* **Etkileşim Davranışı:**
  * **Masaüstü:** Fare ile üzerine gelindiğinde (`:hover`) kartlar yukarı açılır, `******` gizlenir, `HIZLI HESAP` görünür, göz ikonu kaybolur.
  * **Mobil & Tablet:** Dokunulduğunda (`click/tap`) `.active` sınıfı alır ve aynı efektle açılır.
  * **Dışarı Tıklama ile Kapatma:** Sayfada herhangi bir boş alana dokunulduğunda cüzdan otomatik olarak cebe geri kapanır.
* **Cüzdan Bölümü Alt Boşluğu (`margin-bottom`):** `60px` (`var(--spacing-15)`)

---

### ⬇️ GEÇİŞ 2: Nasıl Çalışır ➔ Hesaplayıcılar (Calculators)
* **Dikey Mesafe (Margin-Top):** **`140px`** (`var(--spacing-35)`)

---

### 4️⃣ HESAPLAYICILAR VE 5'Lİ AKORDİYON KARTLARI (`.calculators-section`)
* **Üst Boşluk (Margin-Top):** `140px` (`var(--spacing-35)`)
* **Başlık ile 5'li Akordiyon Arası:** `80px` (`margin-bottom: var(--spacing-20)`)
* **Akordiyon Kart Boyutları:**
  * Toplam Yükseklik: `500px`
  * Kartlar Arası Yatay Boşluk (`gap`): `16px`
  * Kapalı Kart Esneme Oranı (`flex`): `1` (3.5rem dikey numara ve dikey başlık)
  * Açık/Hover Kart Esneme Oranı (`flex`): `5` (Genişleyen lüks kart)

---

### ⬇️ GEÇİŞ 3: Hesaplayıcılar ➔ Sıkça Sorulan Sorular (FAQ)
* **Dikey Mesafe (Padding-Top):** **`140px`** (`var(--spacing-35)`)
* *Açıklama: Sitedeki tüm ana bölümler (Hero ➔ HIW, HIW ➔ Calc, Calc ➔ FAQ) gibi standart 140 piksellik lüks ve ferah geçiş boşluğuna sahiptir.*

---

### 5️⃣ SIKÇA SORULAN SORULAR BÖLÜMÜ (`.faq-section`)
* **İç Boşluk (Padding):** Üst: `140px` / Alt: `140px` (`padding: var(--spacing-35) 0 var(--spacing-35) 0`)
* **Başlık ile SSS Kutusu Arası:** `40px` (`margin-bottom: var(--spacing-10)`)
* **SSS Kutusu Köşe Yuvarlaklığı:** `16px`
* **Her Soru Satırının İç Boşluğu:** `24px 28px` (`padding: var(--spacing-6) var(--spacing-7)`)
* **Açılan Cevap Metni İç Boşluğu:** `16px 28px 24px 62px`
* **SSS Bölümü Alt Boşluğu (`padding-bottom`):** `140px` (`var(--spacing-35)`)

---

### ⬇️ GEÇİŞ 4: S.S.S ➔ Mega Footer
* **Dikey Mesafe (Padding-Bottom):** **`140px`** (`var(--spacing-35)`)
* *Açıklama: Tüm sitedeki bölümler arası 140 piksellik ritim bu geçişte de birebir korunmuştur.*

---

### 6️⃣ MEGA FOOTER (ALT BİLGİ ALANI) (`.site-footer`)
* **İç Boşluk (Padding):** Üst: `80px` / Alt: `40px` (`padding: var(--spacing-20) 0 var(--spacing-10)`)
* **Üst Bölüm ile Alt Telif Çizgisi Arası Dikey Boşluk:** `60px` (`margin-bottom: 60px`)

#### 📌 Footer İçi Kolon Dağılımı ve Gerçek Mesafeler:
1. **Sol Marka Kolonu ➔ Sağ Link Kolonları Arasındaki GERÇEK Yatay Boşluk:** **`~420px`**
   * **Mekanizma (`justify-content: space-between`):** Sol bloğu en sola (0px), sağ linkleri en sağa (1200px) yaslar.
   * **Matematiksel Dağılım:**
     * Toplam Konteyner Genişliği: `1200px`
     * Sol Marka Kolonu (Logo + Slogan + Email Kutusu): `300px`
     * Sağ Link Kolonları (3 Sütun: Keşfet, Hesaplayıcılar, İletişim): `~480px`
     * **Ortada Kalan Net Görsel Boşluk:** `1200px - 300px - 480px =` **`~420px`**
   * *Not: Koddaki `gap: 40px`, ekran daraldığında iki bloğun birbirine çarpmasını engelleyen emniyet sınırıdır.*

2. **Sağdaki 3 Link Sütununun Kendi Arasındaki Yatay Boşluk (`gap`):** **`80px`** (`var(--spacing-20)`)
   * Keşfet ➔ `80px gap` ➔ Hesaplayıcılar ➔ `80px gap` ➔ İletişim

3. **Alt Telif ve Yasal Linkler Alanı:**
   * Ayırıcı İnce Çizgi Üst Boşluğu (`padding-top`): `32px`
   * Sol Telif Metni ile Sağ Gizlilik Linkleri Arası: `justify-content: space-between` (İki uca yaslı)

---

## 📌 3. SABİT ELEMANLARIN (FIXED) DESKTOP KONUMLARI

| Sabit Eleman | Sağdan Mesafe | Alttan / Dikey Konum | Boyut |
| :--- | :---: | :---: | :---: |
| **Yüzen Menü (Floating Dock)** | `40px` (`right: var(--spacing-10)`) | Dikeyde Tam Ortada (`top: 50%`) | İkonlar: `48px × 48px` |
| **Yukarı Çık Butonu (Back to Top)**| `30px` (`right: 30px`) | `30px` (`bottom: 30px`) | `50px × 50px` (İkon: `26px`) |

---

## 📑 4. TAM CSS DEĞİŞKENLERİ VE TASARIM SİSTEMİ (DESIGN TOKENS)

### 📐 A. Boşluk ve Düzen Değişkenleri (Spacing & Layout Tokens)

| Değişken Adı | Değer | Kullanım Alanı ve Amacı |
| :--- | :---: | :--- |
| `--spacing-1` | `4px` | Mikro aralıklar, daktilo alt boşluğu |
| `--spacing-1-5` | `6px` | Dock ikon boşlukları, rozet dikey padding |
| `--spacing-2` | `8px` | Küçük boşluklar, ikon padding, rozet içi |
| `--spacing-2-5` | `10px` | Kategori rozetleri `gap`, küçük buton dolgusu |
| `--spacing-3` | `12px` | Küçük buton ve rozet içi, arama ikon aralığı |
| `--spacing-3-5` | `14px` | Hero eylem butonları arası yatay `gap` |
| `--spacing-4` | `16px` | Standart grid boşlukları (`gap`), rozet yatay padding |
| `--spacing-4-5` | `18px` | SSS soru satırı dikey padding |
| `--spacing-5` | `20px` | Buton yan padding'leri, logo kapsülü içi |
| `--spacing-5-5` | `22px` | Menü çekmecesi bağlantı aralıkları |
| `--spacing-6` | `24px` | **Masaüstü sayfa ada kenar boşluğu (`margin: 24px`)** |
| `--spacing-6-5` | `26px` | Başlık-metin tablet aralığı |
| `--spacing-7` | `28px` | Kart iç padding, SSS cevap iç dolguları |
| `--spacing-7-5` | `30px` | Yukarı çık butonu sağ/alt boşluğu |
| `--spacing-8` | `32px` | Arama çubuğu ile başlık arası dikey boşluk |
| `--spacing-9` | `36px` | HIW başlık alt boşluğu |
| `--spacing-10` | `40px` | Dock sağ boşluğu, başlık altları |
| `--spacing-12` | `48px` | Header üst boşluğu (`top: 48px`), footer blok aralığı |
| `--spacing-15` | `60px` | Hero ve markalar arası kolon aralıkları |
| `--spacing-16` | `64px` | **Mobil ana bölümler arası standart lüks dikey mesafe** |
| `--spacing-20` | `80px` | Bölüm başlığı ile içerik arası, footer üst boşluğu |
| `--spacing-24` | `96px` | **Tablet ana bölümler arası standart lüks dikey mesafe** |
| `--spacing-25` | `100px` | Hero üst padding |
| `--spacing-30` | `120px` | Akordiyon alt padding |
| `--spacing-35` | `140px` | **Masaüstü ana bölümler arası standart lüks dikey mesafe** |
| `--container-width` | `1200px` | Maksimum masaüstü ızgara konteyner genişliği |
| `--pill-radius` | `100px` | Kapsül ve hap buton köşe yuvarlaklığı |
| `--card-radius` | `24px` | Kalıcı kart ve ada çerçevesi köşe yuvarlaklığı |

---

### 🎨 B. Temel Renkler ve Tipografi Token'ları (Colors & Typography)

| Değişken Adı | Değer / Hex | Kullanım Alanı ve Anlamı |
| :--- | :---: | :--- |
| `--color-white` | `#ffffff` | Saf beyaz arka plan, kartlar ve butonlar |
| `--color-black` | `#000000` | Saf siyah zeminler ve derin gölgeler |
| `--color-dark` | `#141113` | Ana marka koyu rengi, başlıklar ve birincil butonlar |
| `--color-dark-muted` | `#1c1c1e` | İkincil koyu yüzey rengi |
| `--color-dark-alt` | `#2c2c2e` | Alternatif koyu metin ve buton bordürü |
| `--color-gray-100` | `#fafafa` | Çok açık gri arka plan dolgusu |
| `--color-gray-200` | `#f8f9fa` | Hesaplama sayfası arka planı |
| `--color-gray-300` | `#f5f5f7` | Apple tarzı açık gri kart ve buton zeminleri |
| `--color-gray-600` | `#eaeaea` | İnce ayırıcı çizgiler ve tablo kenarlıkları |
| `--text-primary` | `var(--color-dark)` | Birincil başlık ve ana metin rengi |
| `--text-secondary` | `#58575A` | İkincil açıklama ve paragraf rengi |
| `--text-muted` | `#6F7075` | Pasif metinler ve ipucu etiketleri |
| `--text-white-dim` | `rgba(255, 255, 255, 0.9)` | Koyu ve cam zeminler üzerindeki parlak beyaz metin |
| `--text-white-muted`| `rgba(255, 255, 255, 0.6)` | Koyu zemin üzerindeki soluk metinler |

---

### 🪟 C. Cam ve Kaplama Token'ları (Overlay & Glassmorphism)

| Değişken Adı | Değer / Opaklık | Kullanım Alanı |
| :--- | :---: | :--- |
| `--overlay-black-05` | `rgba(0, 0, 0, 0.05)` | Çok hafif kart kenarlıkları ve hover zeminleri |
| `--overlay-black-08` | `rgba(0, 0, 0, 0.08)` | Kategori rozet kenarlıkları ve SSS kutu bordürü |
| `--overlay-black-10` | `rgba(0, 0, 0, 0.10)` | Standart açık tema cam kenarlıkları |
| `--overlay-black-20` | `rgba(0, 0, 0, 0.20)` | Buton gölgeleri ve kontrast bordürler |
| `--overlay-black-50` | `rgba(0, 0, 0, 0.50)` | Alt bilgi sloganı ve koyu tema gölgeleri |
| `--overlay-black-60` | `rgba(0, 0, 0, 0.60)` | Açıklama paragrafları ve koyu degrade geçişleri |
| `--overlay-black-85` | `rgba(0, 0, 0, 0.85)` | Hero görseli üzeri karanlık okuma katmanı |
| `--overlay-white-05` | `rgba(255, 255, 255, 0.05)`| Şeffaf header kapsülleri cam arka planı |
| `--overlay-white-15` | `rgba(255, 255, 255, 0.15)`| Hero cam butonları ve yüzen dock arka planı |
| `--overlay-white-20` | `rgba(255, 255, 255, 0.20)`| Şeffaf ada cam kenarlıkları (`border-glass`) |
| `--overlay-white-30` | `rgba(255, 255, 255, 0.30)`| Arama çubuğu cam kenarlığı ve aktif butonlar |

---

### 🌟 D. Vurgular, Marka ve Gradyanlar (Accents & Gradients)

| Değişken Adı | Değer | Kullanım Alanı |
| :--- | :---: | :--- |
| `--accent-solid` | `#7E7160` | Sıcak bronz/altın marka vurgusu (Logo Calc eki, rozetler) |
| `--accent-solid-light` | `rgba(126, 113, 96, 0.2)` | Bronz vurgulu rozet arka plan dolgusu |
| `--accent-solid-shadow`| `rgba(126, 113, 96, 0.4)` | Vurgulu buton ışıma gölgesi |
| `--accent-gradient` | `linear-gradient(135deg, #7E7160, #5D523F)` | Özel vurgulu buton ve kart gradyanı |
| `--gradient-hero` | `linear-gradient(to top, rgba(0,0,0,0.85), ...)` | Hero ve kart içi okunabilirlik gradyanı |
| `--gradient-glass` | `linear-gradient(135deg, rgba(255,255,255,0.2), ...)`| Lüks buzlu cam yüzey yansıması |

---

### 🌑 E. Gölgeler ve Derinlik Token'ları (Shadows & Depth)

| Değişken Adı | Değer | Kullanım Alanı |
| :--- | :---: | :--- |
| `--shadow-sm` | `0 4px 15px rgba(0, 0, 0, 0.10)` | Küçük butonlar, rozetler ve e-bülten kutusu |
| `--shadow-md` | `0 10px 20px rgba(0, 0, 0, 0.20)` | Açılan kartlar, hover durumları ve açılır menüler |
| `--shadow-lg` | `0 18px 36px rgba(0, 0, 0, 0.08)` | Ana ada çerçeveleri ve büyük modal pencereler |
| `--shadow-inset-lg` | `inset 0 30px 45px rgba(0, 0, 0, 0.05)` | 3D cüzdan iç cep derinlik gölgesi |
| `--shadow-inset-sm` | `inset 0 6px 18px rgba(0, 0, 0, 0.03)` | Küçük form kutuları iç gölgesi |

---

### 🧩 F. Ortak Bileşen ve Sayfa Token'ları (Components & Pages)

| Değişken Adı | Değer | Kullanım Alanı |
| :--- | :---: | :--- |
| `--navbar-height` | `56px` | Masaüstü yüzen menü kilitli yüksekliği |
| `--navbar-scrolled-bg` | `var(--color-white)` | Kaydırıldığında beyazlaşan menü arka planı |
| `--search-bar-width` | `360px` | Masaüstü akıllı arama çubuğu genişliği |
| `--search-dropdown-max-height` | `320px` | Canlı arama açılır liste maksimum yüksekliği |
| `--wallet-width` | `440px` | Masaüstü 3D interaktif cüzdan genişliği |
| `--wallet-height` | `360px` | Masaüstü 3D interaktif cüzdan yüksekliği |
| `--accordion-height` | `500px` | Masaüstü 5'li hesaplayıcı akordiyon yüksekliği |
| `--dock-bg` | `var(--overlay-white-15)` | Yüzen dock varsayılan cam arka planı |
| `--dock-border` | `var(--overlay-white-20)` | Yüzen dock şeffaf cam kenarlığı |
| `--transition-fast` | `0.2s cubic-bezier(0.4, 0, 0.2, 1)` | Hızlı buton ve link hover animasyonları |
| `--transition-smooth` | `0.4s cubic-bezier(0.16, 1, 0.3, 1)` | Akıcı menü açılma ve cüzdan animasyonları |

