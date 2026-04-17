import type { Metadata } from "next";
import { Cinzel, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cover Jok Mobil Sidoarjo | Premium Interior",
  description:
    "Layanan bekleed jok mobil premium dengan material terbaik, teknisi berpengalaman, dan proses cepat di Sidoarjo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${sora.variable} ${cinzel.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
