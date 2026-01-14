import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webinar – Jak zdobywać zlecenia i kontrakty w IT w 2025 | Alan Urban",
  description: "Darmowy webinar na żywo - Jak zdobywać zlecenia i kontrakty IT w 2025. Praktyczny system zdobywania klientów B2B. Czwartek, 19:00.",
  openGraph: {
    title: "Webinar – Jak zdobywać zlecenia i kontrakty w IT w 2025",
    description: "Darmowy webinar na żywo - Praktyczny system zdobywania klientów B2B dla programistów.",
    type: "website",
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
