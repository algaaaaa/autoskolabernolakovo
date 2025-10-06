import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AUTOŠKOLA SENEC - Profesionálna príprava vodičov",
  description: "Autoškola v Senci a Bernolákove. Profesionálny prístup, moderné vozidlá PEUGEOT, HYUNDAI, MERCEDES, SUZUKI. Kurzy skupiny B, A, AM. 95% úspešnosť.",
  keywords: "autoškola, Senec, Bernolákovo, vodičský preukaz, kurz B, kurz A, motocykel, vodičák, autoškola Senec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <body className={`${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
