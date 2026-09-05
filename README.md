# 📐 MaterialCalc - Akıllı ve Kesin Malzeme Hesaplama Platformu

![MaterialCalc Banner](Images/livingroom_2.png)

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
- 📱 **Sıfır `!important` & %100 Duyarlı (Responsive):** iPhone SE'den 4K masaüstü ekranlara kadar kusursuz piksel uyumu (Desktop > 1200px, Tablet 768px - 1200px, Mobil ≤ 767px).
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
│   ├── variables.css           # Tasarım sistemi, renkler ve tasarım token'ları
│   ├── style.css               # Temel sayfa stilleri, tipografi ve masaüstü düzeni
│   ├── components.css          # Dinamik Ada, butonlar ve dock bileşenleri
│   ├── calculator.css          # Hesaplayıcı SPA panelleri ve kartları
│   ├── usta-hesabi.css         # Usta hesabı formül kartları
│   ├── tablet.css              # Tablet ekranları (768px - 1200px) stilleri
│   └── mobile.css              # Mobil ekranlar (≤ 767px) medya sorguları
│
├── js/                         # Modüler JavaScript Dosyaları
│   ├── translations.js         # TR / EN dil sözlüğü
│   ├── lang.js                 # Çoklu dil değiştirici motor
│   ├── calculator.js           # Hesaplama algoritmaları ve anlık sonuç motoru
│   └── app.js                  # Menü, Lenis scroll, arama ve animasyonlar
│
└── Images/                     # Arka Plan ve Proje Görselleri
    ├── livingroom_2.png        # Hero ve ana arka plan görseli
    └── livingroom_4.png        # Alternatif iç mekan görseli
```

---

## 🛠️ Kullanılan Teknolojiler

- **HTML5 & Vanilla CSS3** (CSS Değişkenleri, Flexbox, CSS Grid, Glassmorphism)
- **Vanilla JavaScript (ES6+)** (Hafif, bağımsız ve modüler)
- **Lenis Smooth Scroll** (Akıcı kaydırma)
- **AOS.js** (Scroll animasyonları)
- **Google Fonts (Poppins)**

---

## 📄 Lisans

© 2026 MaterialCalc. Tüm hakları saklıdır.
