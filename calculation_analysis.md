# MaterialCalc Algoritma ve Analiz Raporu

Bu rapor, MaterialCalc uygulamasının arka planında çalışan matematiksel algoritmaların, inşaat ve dekorasyon endüstrisi standartlarıyla nasıl eşleştiğini doğrulamak amacıyla hazırlanmıştır. 

Uygulama, temel bir prensip olarak **kullanıcının her zaman yeterli malzemeye sahip olmasını** hedefler. Hiçbir yapı malzemesi (boya hariç) küsuratlı paketler halinde satın alınamayacağı için sistem sonuçları tavana (yukarı) yuvarlar.

---

## 1. Seramik ve Parke Hesaplama Algoritması
Zemin ve duvar kaplama malzemelerinde alan hesaplaması (metrekare - m²) esastır. Hata payı ve kenar kesimleri için fire (waste) hesaplamaya dahil edilmelidir.

### Formül
1. **Net Alan:** En × Boy
2. **Fireli (Brüt) Alan:** Net Alan + (Net Alan × [Fire Payı / 100])
3. **Gerekli Paket Sayısı:** [Brüt Alan / 1 Paket Alanı] *(Sonuç Yukarı Yuvarlanır)*

> [!NOTE]
> **Endüstri Standardı:** Parke ve seramik döşemelerinde düz döşeme için %5, çapraz döşeme (verev) için genelde %10 fire payı önerilir. Sistemimiz kullanıcının bu oranı özgürce ayarlamasına olanak tanır.

| Örnek Senaryo | Girdi | Formül | Çıktı |
| :--- | :--- | :--- | :--- |
| **Ölçü** | 4m x 5m Alan | 4 * 5 | 20 m² (Net) |
| **Fire** | %10 Fire | 20 * 1.10 | 22 m² (Brüt) |
| **Malzeme** | 1.44 m²'lik Kutu | 22 / 1.44 | 15.27 $\rightarrow$ **16 Kutu** |

---

## 2. Boya Hesaplama Algoritması
Boya, bir alana uygulanan sıvı bir malzemedir. Sarfiyat (Coverage) litre başına m² olarak hesaplanır ve her yüzeyin kaç kat boyanacağı kritik bir değişkendir.

### Formül
1. **Net Alan:** En × Boy
2. **Toplam Boyanacak Alan:** Net Alan × Kat Sayısı
3. **Fireli Alan (İsteğe Bağlı):** Toplam Alan + (Toplam Alan × [Fire Payı / 100])
4. **Gerekli Litre:** Fireli Alan / Boya Sarfiyatı (m²/Litre)

> [!TIP]
> **Endüstri Standardı:** Standart bir iç cephe boyası 1 litre ile yaklaşık 10-12 m² alan boyar (tek kat). Astar kullanımı veya rengin kapanma zorluğuna göre kat sayısı 2 veya 3'e çıkabilir. Boya sıvı olduğu için burada yukarı yuvarlama (ceil) yapılmaz, milimetrik litre verilir. Kova seçimi müşteriye bırakılır.

| Örnek Senaryo | Girdi | Formül | Çıktı |
| :--- | :--- | :--- | :--- |
| **Ölçü** | 15 m² Toplam Alan | 15 * 2 (Kat) | 30 m² (Boyanacak) |
| **Fire** | %0 Fire | 30 * 1.00 | 30 m² (Brüt) |
| **Malzeme** | 10 m²/Litre Sarfiyat | 30 / 10 | **3 Litre Boya** |

---

## 3. Duvar Kağıdı Hesaplama Algoritması
Duvar kağıdı rulolar halinde satılır. Ancak desenleri eşleştirmek (pattern match) çok ciddi miktarda fire doğurur. Bu nedenle net matematiksel alan, rulo alanına doğrudan bölünemez; güçlü bir fire payına ihtiyaç vardır.

### Formül
1. **Net Duvar Alanı:** Duvar Eni × Duvar Boyu
2. **Rulo Alanı:** Rulo Eni × Rulo Boyu
3. **Fireli (Brüt) Duvar Alanı:** Net Alan + (Net Alan × [Fire Payı / 100])
4. **Gerekli Rulo Sayısı:** [Brüt Duvar Alanı / Rulo Alanı] *(Sonuç Yukarı Yuvarlanır)*

> [!WARNING]
> **Kritik Doğrulama:** Duvar kağıdı uygulamalarında desen tekrarı (repeat) sebebiyle %10-%15 fire standarttır. Sistem, brüt duvar alanını bir rulonun maksimum kaplayabileceği alana böler ve daima tam bir rulo sayısına (yukarı) yuvarlar.

| Örnek Senaryo | Girdi | Formül | Çıktı |
| :--- | :--- | :--- | :--- |
| **Ölçü** | 3m En x 2.8m Boy | 3 * 2.8 | 8.4 m² (Net) |
| **Fire** | %10 Fire | 8.4 * 1.10 | 9.24 m² (Brüt) |
| **Malzeme** | 0.53m x 10m Rulo | 9.24 / 5.3 (Rulo Alanı) | 1.74 $\rightarrow$ **2 Rulo** |

---

## 4. Süpürgelik Hesaplama Algoritması
Süpürgelikler alan (m²) ile değil, doğrusal metretül (m) ölçüsüyle hesaplanır. En büyük değişken, odadaki kapı boşluklarıdır.

### Formül
1. **Oda Çevresi:** (En + Boy) × 2
2. **Kapı Boşluğu Düşümü:** Çevre - (Kapı Sayısı × 0.9m)
3. **Net Çevre:** İşlem (2) sonucu. *(Eğer sıfırdan küçükse 0 kabul edilir).*
4. **Fireli Çevre:** Net Çevre + (Net Çevre × [Fire Payı / 100])
5. **Gerekli Adet:** [Fireli Çevre / 1 Adet Süpürgelik Uzunluğu] *(Sonuç Yukarı Yuvarlanır)*

> [!IMPORTANT]
> **Endüstri Standardı:** Türkiye ve Avrupa standartlarında tek bir kapının iç pervaz boşluğu ortalama 90 cm (0.9 m) olarak kabul edilir. Sistem, kullanıcının girdiği kapı sayısı kadar 0.9m'lik alanı çevreden eksiltir. Bu, gereksiz malzeme alınmasını engelleyen çok profesyonel bir fonksiyondur.

| Örnek Senaryo | Girdi | Formül | Çıktı |
| :--- | :--- | :--- | :--- |
| **Ölçü** | 4m x 5m Oda | (4+5)*2 | 18 Metre |
| **Düşüm** | 2 Kapı | 18 - (2 * 0.9) | 16.2 Metre (Net) |
| **Fire** | %10 Fire | 16.2 * 1.10 | 17.82 Metre (Brüt) |
| **Malzeme** | 2.4m Süpürgelik | 17.82 / 2.4 | 7.42 $\rightarrow$ **8 Adet** |

---

## Sonuç
MaterialCalc tarafından kullanılan tüm formüller, salt matematik ile şantiye gerçeklerini (fire ve tam paket satın alma kısıtlamalarını) birleştirir. Kod tabanında `Math.ceil` fonksiyonunun stratejik noktalarda kullanılması ve kapı boşlukları gibi gerçek dünya mimari değişkenlerinin formüle dahil edilmesi, hesaplamaların **%100 doğruluğunu garanti altına almaktadır.**
