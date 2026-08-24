# 📐 MaterialCalc - Akıllı ve Kesin Malzeme Hesaplama Platformu

![MaterialCalc Banner](assets/images/livingroom_2.png)

> **MaterialCalc**, mimarlar, iç mimarlar, ustalar ve evini yenileyenler için geliştirilmiş **Apple estetiğinde, minimalist ve ultra-hassas** bir web tabanlı inşaat/dekorasyon malzeme hesaplama platformudur.

---

## ✨ Temel Özellikler

- 💎 **Apple Glassmorphism & Dinamik Ada Tasarımı:** Üstün kullanıcı deneyimi sunan yüzen ada (floating dynamic island) menüsü ve tam ekran cam blur mobil menü.
- 📐 **5 Temel Malzeme Hesaplama Modülü:**
  - 🏺 **Seramik:** Kutu alanı, fire payı (%) ve milimetrik kutu adedi.
  - 🪵 **Parke:** Paket miktar hesabı ve köşe fire optimizasyonu.
  - 🎨 **Boya:** Metrekare, sarfiyat (m²/L) ve kat sayısına göre net litre hesabı.
  - 📜 **Duvar Kağıdı:** Duvar ölçüsü ve rulo ebatlarına göre tam rulo sayısı.
  - 📏 **Süpürgelik:** Oda çevresi, kapı boşluğu (0.9m düşümü) ve boy adedi.
- 🧮 **Şeffaf "Usta Hesabı" Matematiği:** Şantiyedeki gerçek ustalık standartlarına dayalı formüller ve açık tablolar.
- 🌐 **İki Dilli Yapı (TR / EN):** Akıcı kayar butonla anında dil değiştirme motoru (i18n).
- 📱 **Sıfır `!important` & %100 Duyarlı (Responsive):** iPhone SE'den 4K masaüstü ekranlara kadar kusursuz piksel uyumu.
- 🚀 **Ultra-Akıcı Lenis & AOS Animasyonları:** GPU destekli pürüzsüz kaydırma ve süzülen kartlar.

---

## 📂 Proje ve Dosya Mimarisi

```
MaterialCalc_Web/
│
├── index.html                  # Ana sayfa (Hero, Arama, 3D Cüzdan, Kartlar, SSS)
├── hesapla.html                # Hesaplayıcılar SPA sayfası (Tüm modüller)
├── usta-hesabi.html            # Şeffaf formüller ve usta hesabı kılavuzu
├── README.md                   # Proje dokümantasyonu
│
├── css/                        # Modüler & Bağımsız CSS Dosyaları
│   ├── variables.css           # Tasarım sistemi, renkler ve değişkenler
│   ├── style.css               # Temel sayfa stilleri ve tipografi
│   ├── components.css          # Dinamik Ada, butonlar ve dock bileşenleri
│   ├── calculator.css          # Hesaplayıcı SPA panelleri ve kartları
│   ├── usta-hesabi.css         # Usta hesabı formül kartları
│   └── mobile.css              # Telefon, tablet ve dar ekran medya sorguları
│
├── js/                         # Modüler JavaScript Dosyaları
│   ├── translations.js         # TR / EN dil sözlüğü
│   ├── lang.js                 # Çoklu dil değiştirici motor
│   ├── calculator.js           # Hesaplama algoritmaları ve anlık sonuç motoru
│   └── app.js                  # Menü, Lenis scroll, arama ve animasyonlar
│
└── assets/                     # Medya ve Görsel Varlıklar
    ├── images/                 # Arka plan görselleri (livingroom_2.png vb.)
    ├── icons/                  # SVG ikonlar
    └── fonts/                  # Özel yazı tipleri
```

---

## 🚀 Cloudflare Pages ile Canlıya Alma Rehberi

Bu proje **sıfır derleme gerektiren (Pure Static Web)** bir mimariye sahiptir.

1. Bu depoyu **GitHub** hesabınıza `push` edin.
2. [Cloudflare Dashboard](https://dash.cloudflare.com/)'a giriş yapın.
3. **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git** seçeneğine tıklayın.
4. `MaterialCalc_Web` deponuzu seçin.
5. Dağıtım Ayarları:
   - **Framework preset:** `None`
   - **Build command:** *(Boş bırakın)*
   - **Build output directory:** `/` *(veya boş bırakın)*
6. **Save and Deploy** butonuna tıklayın. Siteniz saniyeler içinde dünya çapında ücretsiz SSL ile yayında! 🌍

---

## 🛠️ Kullanılan Teknolojiler

- **HTML5 & Vanilla CSS3** (CSS Değişkenleri, Flexbox, CSS Grid, Glassmorphism)
- **Vanilla JavaScript (ES6+)** (Hafif ve bağımlılıksız)
- **Lenis Smooth Scroll** (Akıcı kaydırma)
- **AOS.js** (Scroll animasyonları)
- **Google Fonts (Poppins)**

---

## 📄 Lisans

© 2026 MaterialCalc. Tüm hakları saklıdır.
