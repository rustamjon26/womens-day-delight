# 8-Mart Tabrigi

Xalqaro Ayollar Kuni uchun maxsus yaratilgan interaktiv tabrik sayti.

## Haqida

Bu loyiha 8-Mart bayramini nishonlash uchun yaratilgan zamonaviy, interaktiv veb-ilovasi. Sayt foydalanuvchilarga shaxsiylashtirilgan tabriklar, iliq so'zlar va kutilmagan sovg'alar orqali bayram kayfiyatini his qilish imkoniyatini beradi.

## Xususiyatlar

- **Shaxsiylashtirilgan Tabrik** - Ismingizni kiritib, o'zingiz uchun maxsus tabrik oling
- **Iliq So'zlar Generatori** - Tasodifiy kompliment va iliq so'zlar olish
- **Kutilmagan Sovg'a** - Interaktiv sovg'a qutisi konfetti effekti bilan
- **Ayollarning Fazilatlar Tarmog'i** - Ayollarning eng muhim sifatlarini ko'rsatuvchi grid
- **Musiqa Pleyer** - Fon musiqasi bilan kayfiyatni yaratish
- **Gul Barglari Animatsiyasi** - Sahifada uchib yuradigan gul barglari
- **To'liq Responsiv Dizayn** - Barcha ekran o'lchamlarida mukammal ko'rinish

## Texnologiyalar

- **React 18** - UI kutubxonasi
- **TypeScript** - Type-safe development
- **Vite** - Build tool va development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animatsiya kutubxonasi
- **Lucide React** - Icon kutubxonasi
- **Canvas Confetti** - Konfetti effektlari

## O'rnatish

```bash
# Bog'liqliklarni o'rnatish
npm install

# Development serverni ishga tushirish
npm run dev

# Production build yaratish
npm run build

# Production buildni preview qilish
npm run preview
```

## Loyiha Strukturasi

```
src/
├── components/
│   ├── Hero.tsx                    # Asosiy hero section
│   ├── PersonalizedGreeting.tsx    # Shaxsiylashtirilgan tabrik
│   ├── ComplimentGenerator.tsx     # Kompliment generatori
│   ├── GiftBox.tsx                 # Interaktiv sovg'a qutisi
│   ├── QualitiesGrid.tsx          # Fazilatlar grid
│   ├── FinalSection.tsx           # Footer section
│   ├── MusicPlayer.tsx            # Musiqa pleyer
│   └── FlowerPetals.tsx           # Gul barglari animatsiyasi
├── App.tsx                         # Asosiy app komponenti
├── main.tsx                        # Entry point
└── index.css                       # Global styles
```

## Litsenziya

MIT

## Muallif

8-Mart bayramingiz muborak bo'lsin!
