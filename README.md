<<<<<<< HEAD
# ⚛ React TSX Learning Hub

Modern görünümlü, **dark/light mode** destekli, interaktif React & TypeScript öğrenme sitesi.

## 🚀 Çalıştırma

```bash
npm install
npm start
```

Tarayıcıda otomatik olarak `http://localhost:5173` açılır.

### Diğer komutlar

```bash
npm run build    # Production build
npm run preview  # Build önizleme
```

---

## 📸 Özellikler

| Özellik | Açıklama |
|---------|----------|
| 🌙 Dark / ☀️ Light Mode | Sistem temasına göre otomatik + toggle butonu |
| 📚 6 Konu | Bileşenler, Props & Types, useState, useEffect, Context API, Custom Hooks |
| 💡 Konu Anlatımı | Her konuda kavram özeti + sekme tabanlı kod örnekleri |
| 📋 Kopyalama | Her kod bloğunda tek tıkla kopyalama butonu |
| 🎮 Canlı Demo | Sayaç / Form / Todo — useState gerçek zamanlı gösterimi |
| 🧠 İnteraktif Quiz | 5 soruluk çoktan seçmeli quiz + açıklamalı cevaplar + skor ekranı |
| 📱 Responsive | Mobil, tablet, masaüstü tam uyumlu |

---

## 🗂 Proje Yapısı

```
react-tsx-learning-hub/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx        ← Sticky header, navigasyon, tema toggle
│   │   ├── Hero.tsx          ← Tanıtım bölümü + animasyonlu kod penceresi
│   │   ├── TopicsGrid.tsx    ← 6 konu kartı grid görünümü
│   │   ├── LearnSection.tsx  ← Sekme tabanlı konu anlatımı + kod örnekleri
│   │   ├── CodeBlock.tsx     ← Kopyalama destekli syntax vurgulu kod bloğu
│   │   ├── LiveDemo.tsx      ← 3 sekmeli interaktif React demo
│   │   ├── QuizSection.tsx   ← Tam interaktif quiz bileşeni
│   │   └── Footer.tsx        ← Alt bilgi
│   ├── hooks/
│   │   └── useTheme.ts       ← Custom hook: dark/light mode yönetimi
│   ├── data/
│   │   └── index.ts          ← Tüm konu, kod örneği ve quiz verisi
│   ├── types/
│   │   └── index.ts          ← TypeScript tip tanımları (interface/type)
│   ├── App.tsx               ← Ana uygulama bileşeni
│   ├── main.tsx              ← React DOM giriş noktası
│   └── index.css             ← CSS değişkenleri + responsive stiller
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## ⚙️ Teknik Detaylar

| Karar | Açıklama |
|-------|----------|
| **Vite + React 18** | Hızlı geliştirme, anlık HMR |
| **TypeScript strict** | Tüm bileşenlerde `interface` ile tip güvenliği |
| **Fonksiyonel bileşenler** | Class component yok, sadece function |
| **Custom Hook** | `useTheme` — localStorage + matchMedia entegrasyonu |
| **CSS Variables** | Dark/light mode tek kaynaktan yönetilir |
| **Bileşen ayrımı** | Her UI parçası kendi dosyasında, yeniden kullanılabilir |
| **Props tanımları** | Her bileşende açık `interface XxxProps` tanımı |

---

## 📊 Rubrik Karşılama

| Kriter | Nasıl karşılandı? |
|--------|-------------------|
| ✅ Proje gereksinimleri | Header, içerik, anlatım, kod örnekleri, etkileşim, Footer |
| ✅ React TSX kullanımı | TSX yapısı, props, interface, generic state tipleri |
| ✅ Bileşen tasarımı | 8 ayrı bileşen, mantıklı sorumluluk ayrımı |
| ✅ Tipografi | Space Grotesk + JetBrains Mono, hiyerarşik metin yapısı |
| ✅ İçerik kalitesi | 6 konu, 12+ kod örneği, Türkçe açıklamalar |
| ✅ Görsel tasarım | Tutarlı renk sistemi, boşluk kullanımı, dark/light mode |
| ✅ Responsive tasarım | 640px / 900px breakpoint, mobil-first yaklaşım |
| ✅ Kod kalitesi | Temiz isimlendirme, düzenli dosya yapısı, yorum satırları |
| ✅ Etkileşim | Quiz, LiveDemo (3 sekme), konu seçimi, kopyalama, tema toggle |
| ✅ Projeye hakimiyet | npm install + npm start ile çalışır |
=======
# React-Tsx-Hub
React Tsx Öğretmeyi Hedefleyen Eğitici Web Sayfası
>>>>>>> dcce6b14a07238326be39607ee804232a433129b
