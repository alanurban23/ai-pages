import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avatar - Centrum Zdrowia | Dietetyka, Terapia, Rehabilitacja | Rzeszów",
  description: "Centrum Zdrowia Avatar w Rzeszowie - kompleksowa opieka zdrowotna: dietetyka, terapia holistyczna, rehabilitacja. Łączymy medycynę konwencjonalną z ajurwedyjską i chińską. Zadbaj o swoje zdrowie!",
  keywords: "dietetyk rzeszów, centrum zdrowia, terapia holistyczna, rehabilitacja, medycyna ajurwedyjska, medycyna chińska, odchudzanie, profilaktyka zdrowotna",
  openGraph: {
    title: "Avatar - Centrum Zdrowia | Rzeszów",
    description: "Kompleksowa opieka zdrowotna - dietetyka, terapia, rehabilitacja. Holistyczne podejście do zdrowia.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
