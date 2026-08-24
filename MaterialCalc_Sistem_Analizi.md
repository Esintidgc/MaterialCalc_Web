# MaterialCalc Projesi Sistem ve Mimari Analiz Raporu

## 1. Proje Genel Bakışı
MaterialCalc, mimarlar, ustalar ve ev geliştirme meraklıları için tasarlanmış profesyonel bir malzeme hesaplama aracıdır. Seramik, parke, boya, duvar kağıdı ve süpürgelik gibi yapı malzemelerinin fire payları dahil edilerek ne kadar gerekeceğini endüstri standartlarına (Usta Hesabı) göre hesaplar. Proje, herhangi bir framework kullanılmadan (Vanilla JS, HTML5, CSS3) son derece modern ve modüler bir mimariyle geliştirilmiştir.

## 2. Mimari Yapı (Klasör ve Dosya Organizasyonu)
Sistem, "Separation of Concerns" (Sorumlulukların Ayrılması) prensibine sadık kalarak, kodların okunabilirliğini ve yönetilebilirliğini artıracak şekilde yapılandırılmıştır:

- **/pages (Sayfalar)**: Projenin HTML iskeletleri modüler şekilde ayrılmıştır.
  - `anasayfa.html`: Karşılama, tanıtım ve genel yönlendirme.
  - `hesapla.html`: Tüm hesaplama araçlarının bulunduğu, SPA (Single Page Application) hissi veren ana uygulama sayfası.
  - `usta-hesabi.html`: Hesaplama formüllerinin ve algoritmaların kullanıcılara şeffafça açıklandığı dökümantasyon niteliğinde sayfa.
- **/css (Stil Mimarisi)**: Modern web geliştirme standartlarına uygun, modüler ve değişken tabanlı bir yapı.
  - `variables.css`: Tema renkleri, boşluklar, font boyutları gibi tüm tasarım token'ları (Design Tokens) CSS değişkenleri (root) olarak tutulur.
  - `style.css`: Genel sayfa iskeleti, layout ve tipografi ayarları.
  - `components.css`: Butonlar, kartlar, navigasyon çubukları gibi tekrar kullanılabilir UI (Arayüz) bileşenlerini barındırır.
  - `calculator.css` & `usta-hesabi.css`: Yalnızca ilgili sayfalara özel spesifik stil tanımlamalarını içerir.
- **/js (İş Mantığı)**: Uygulamanın mantıksal bölümleri görevlerine göre ayrı dosyalara bölünmüştür. (Detaylar aşağıdadır).

## 3. JavaScript Kod Analizi ve Sistematik Yapı
Projede React veya Vue gibi bir framework kullanılmamış olup, tamamen Vanilla JS ile doğrudan DOM manipülasyonu yapılmıştır. JavaScript mimarisi 3 ana eksende çalışır:

### A. Core UI Logic (`app.js`)
Sitenin görsel etkileşimlerini, animasyonlarını ve arayüz dinamiklerini yönetir.
- **AOS Entegrasyonu**: Sayfa aşağı kaydırıldıkça beliren animasyonlar (`AOS.init()`) burada tetiklenir.
- **Floating Header & Dock**: Kaydırma (scroll) pozisyonunu sürekli dinleyerek, belirli bir pikselden sonra menünün arka planını şeffaflıktan çıkarıp belirgin hale getiren (CSS'te `scrolled` class'ı tetiklenerek) mantık çalışır.
- **Dinamik Arama Motoru**: `heroSearchInput` üzerinden girilen anahtar kelimeleri, kod içerisine gömülü statik bir sözlükte (`searchIndex` dizisi) arar. Eşleşme bulursa URL yönlendirmesi yapar (`hesapla.html?type=ceramic` gibi), bulamazsa hata verdiğini hissettirmek için arama kutusuna CSS animasyonu ile titreme (shake) efekti verir.
- **Typewriter (Daktilo) Efekti**: Ana sayfada yer alan yazıp-silme efektini bir `setTimeout` döngüsü ile simüle eder. Ayrıca sistem dili değiştiğinde (`languageChanged` eventi dinlenerek) yazılacak kelimelerin dizisini yeni dile göre dinamik olarak günceller.
- **SSS (FAQ) Akordiyonu**: Sorulara tıklandığında diğer açık olanları kapatıp, tıklanan elemanın max-height değerini scrollHeight'a göre ayarlayarak akıcı bir akordiyon işlevi sunar.

### B. Hesaplama Algoritmaları (`calculator.js`)
Projenin "beyni" konumundaki dosyadır. Her bir malzemenin kendine has matematiksel hesaplamaları ayrı fonksiyonlar altında toplanmıştır.
- **Sekme (Tab) Yönetimi**: `switchTab()` fonksiyonu ile URL parametreleri okunur (`?type=parquet` gibi) ve sayfa yenilenmeden o panelin `active` class'ı alarak görünür olması sağlanır. Ayrıca URL, `window.history.pushState` ile sayfa yenilenmeden sessizce güncellenir (SPA davranışı).
- **Dinamik Mod Değişimi**: "En × Boy" girmek yerine doğrudan "Toplam Alan" girmek isteyenler için toggle (switch) mantığı kurulmuştur.
- **Matematiksel Modeller**:
  - *Seramik ve Parke*: Net alan (En × Boy) hesaplanır. Fire oranı (Örn: %10) doğrudan bu alana eklenir (Brüt Alan). Elde edilen brüt alan, bir kutu/paketin kapladığı alana bölünür ve çıkan sonuç daima en yakın tam sayıya yukarı yuvarlanır (`Math.ceil()`).
  - *Boya*: "Sarfiyat" (1 Litrenin kaç m² boyadığı) ve "Kat sayısı" parametreleri denkleme dahil edilir. Formül: `[(Net Alan × Kat Sayısı) + Fire] / Sarfiyat`. Sonuç litre cinsinden küsuratlı (virgüllü) olarak verilir.
  - *Süpürgelik (Baseboard)*: Oda çevresi toplanır. Fire, kesim boşlukları için kapı dahil tüm çevreye eklenir. Ardından kapı sayısı × 0.9m (standart kapı boşluğu) brüt çevreden düşülür ve gerekli adet hesaplanır.
- **Real-Time Hesaplama**: Tüm input elemanlarında `addEventListener('input')` kullanılarak, kullanıcı klavyeden rakam girdiği anda butona basmasına gerek kalmadan sonuçlar anlık olarak güncellenir.

### C. Çoklu Dil Sistemi - i18n (`lang.js` & `translations.js`)
Profesyonel framework'lerin kullandığı uluslararasılaştırma (i18n) mantığı Vanilla JS ile kurgulanmıştır.
- **`translations.js`**: Uygulamadaki tüm metinlerin İngilizce (`en`) ve Türkçe (`tr`) karşılıklarının JSON benzeri bir obje yapısında, anahtarlar (Örn: `calc.form.width`) üzerinden tutulduğu sözlük dosyasıdır.
- **`lang.js`**: 
  - `DOMContentLoaded` anında kullanıcının `localStorage` geçmişine bakar, bir dil seçmişse onu yükler, seçmemişse varsayılan olarak Türkçe (`tr`) başlatır.
  - DOM üzerinde `data-i18n` (metinler için), `data-i18n-placeholder` (input içleri için) ve `data-i18n-tooltip` (üzerine gelince çıkan yazılar için) niteliklerine (attribute) sahip tüm HTML elemanlarını seçer ve `translations.js`'den karşılıklarını bularak DOM'u anlık olarak günceller.
  - İşlem bittiğinde `languageChanged` adlı özel bir olay (CustomEvent) fırlatarak, sayfa genelindeki diğer scriptlerin (Örn. Daktilo efekti) metinlerini yeni dile adapte etmesini sağlar.

## 4. Sayfa İncelemeleri (HTML Mimarisi)

### `anasayfa.html` (Landing Page)
- **SEO & Meta Yapısı**: Sayfa, OG (Open Graph) etiketleri ve canonical link tanımlamaları ile arama motorlarına ve sosyal medya paylaşımlarına (rich preview) tam uyumlu hazırlanmıştır.
- **Hero Section**: Kullanıcıyı karşılayan ana bölüm. Sektör spesifik arama motoru bu alandadır.
- **Pazarlama ve Güven Unsurları**: Markalar (Brands) gridi ve uygulamanın pratikliğini gösteren "Nasıl Çalışır" (Cüzdan/Kart animasyonlu) kısımları yer alır.

### `hesapla.html` (Ana Araç Sayfası)
- Sayfa mizanpajı (layout), sol tarafta sabit bir Menü (Sidebar Kategoriler) ve sağ tarafta değişken İçerik Panelleri (Calculator Panels) şeklindedir.
- Formlarda UX (Kullanıcı Deneyimi) gözetilmiş; kullanıcıya ne gireceğini anlatan placeholder değerleri eklenmiş ve alanlar "minimalist" tasarım diliyle oluşturulmuştur.
- Sonuç kartları, hem net alanı hem de fireli alanı alt alta göstererek, kullanıcıya hesaplamanın sadece formül sonucu olmadığını, gerçeğe uygun yapıldığını şeffaflıkla hissettirir.

### `usta-hesabi.html` (Dökümantasyon)
- Projenin hesaplama motorunda yatan sırların paylaşıldığı eğitim/bilgi sayfasıdır. "Şeffaf Algoritmalar" prensibi ile her malzemenin standardı ve Fire formülleri örneklerle listelenmiştir.

## Sonuç Özeti
MaterialCalc; temiz (clean code), yüksek performanslı (sıfır bağımlılık / zero-dependency) ve bakımı çok kolay modüler bir mimariye sahiptir. Real-time DOM güncellemeleri, özel i18n dil entegrasyonu ve URL parametreleriyle yönetilen sekme sistemi, projenin teknik kalitesini ön plana çıkarmakta olup, daha büyük bir ölçeğe (Örn. bir backend API ile entegrasyon) kolaylıkla taşınabilecek sağlam bir temele sahiptir.
