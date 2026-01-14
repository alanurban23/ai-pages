# 📋 Instrukcja obsługi - Strona webinaru Next.js

## 🚀 Uruchomienie projektu

### 1. Instalacja zależności
```bash
cd nextjs-webinar
npm install
```

### 2. Uruchomienie serwera deweloperskiego
```bash
npm run dev
```

Strona będzie dostępna pod adresem: **http://localhost:3000**

### 3. Build produkcyjny
```bash
npm run build
npm start
```

---

## 📂 Struktura projektu

```
nextjs-webinar/
├── app/
│   ├── layout.tsx          # Layout + meta dane (tytuł, description)
│   ├── page.tsx             # Strona główna (składa komponenty)
│   └── globals.css          # Globalne style
├── components/
│   ├── Hero.tsx             # Sekcja hero (nagłówek, data webinaru)
│   ├── Benefits.tsx         # 4 korzyści z webinaru
│   ├── WhoIsThisFor.tsx     # Dla kogo jest webinar + pain points
│   ├── Registration.tsx     # Formularz zapisu
│   ├── About.tsx            # O prowadzącym (Alan Urban)
│   ├── FAQ.tsx              # Często zadawane pytania
│   └── Footer.tsx           # Stopka
└── package.json
```

---

## ✏️ Jak edytować treść?

### 1. Zmiana tytułu i meta description
Edytuj: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Twój nowy tytuł",
  description: "Twój nowy opis",
};
```

### 2. Zmiana hero section (nagłówek, data)
Edytuj: `components/Hero.tsx`

```tsx
<h1>Twój nowy nagłówek</h1>
<h2>Twój podtytuł</h2>
```

### 3. Zmiana korzyści (4 punkty)
Edytuj: `components/Benefits.tsx`

```tsx
const benefits = [
  {
    icon: "🎯",
    title: "Twój tytuł",
    description: "Twój opis"
  },
  // ...
];
```

### 4. Zmiana formularza
Edytuj: `components/Registration.tsx`

- Możesz dodać/usunąć pola
- Zmienić opcje w select
- Dodać logikę wysyłania (obecnie console.log)

### 5. Zmiana sekcji "O mnie"
Edytuj: `components/About.tsx`

```tsx
<h3>Alan Urban</h3>
<p>Twój tekst...</p>
```

### 6. Zmiana FAQ
Edytuj: `components/FAQ.tsx`

```tsx
const faqs = [
  {
    question: "Twoje pytanie?",
    answer: "Twoja odpowiedź"
  },
  // ...
];
```

---

## 🎨 Zmiana kolorów

Kolory są ustawione za pomocą Tailwind CSS:

- **Gradient tła**: `bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`
- **Akcent fioletowy**: `text-purple-400`, `bg-purple-600`
- **Akcent różowy**: `text-pink-600`, `bg-pink-600`

Możesz zmienić kolory w dowolnym komponencie, edytując klasy Tailwind.

### Przykład zmiany koloru przycisku:
```tsx
// Zamiast purple-pink:
className="bg-gradient-to-r from-purple-600 to-pink-600"

// Możesz użyć np. niebieski-zielony:
className="bg-gradient-to-r from-blue-600 to-green-600"
```

---

## 📱 Responsywność

Strona jest w pełni responsywna dzięki Tailwind CSS:
- `sm:` - małe ekrany (640px+)
- `md:` - średnie ekrany (768px+)
- `lg:` - duże ekrany (1024px+)

---

## 🔗 Dodanie logiki formularza

Obecnie formularz tylko loguje dane do konsoli. Aby dodać prawdziwą logikę:

### Opcja 1: Wysyłka do API
Edytuj `components/Registration.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  if (response.ok) {
    setSubmitted(true);
  }
};
```

### Opcja 2: Integracja z narzędziem email
- **EmailJS**: Bezpośrednie wysyłanie emaili
- **Mailchimp**: Lista mailingowa
- **Google Sheets**: Zapis do arkusza
- **Airtable**: Baza danych

---

## 🚀 Deployment

### Vercel (zalecane)
1. Push kod do GitHub
2. Połącz z Vercel (https://vercel.com)
3. Deploy automatyczny

### Inne opcje
- **Netlify**
- **Railway**
- **Własny serwer** (VPS)

---

## ❓ Potrzebujesz pomocy?

1. Sprawdź dokumentację Next.js: https://nextjs.org/docs
2. Dokumentacja Tailwind CSS: https://tailwindcss.com/docs
3. GitHub Issues tego projektu

---

**Powodzenia z webinarem! 🎉**
