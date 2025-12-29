import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LyfeStore - Jual Aplikasi Premium Murah & Bergaransi",
    template: "%s | LyfeStore"
  },
  description: "Dapatkan aplikasi premium seperti Netflix, Spotify, Canva, CapCut Pro dengan harga termurah dan bergaransi penuh di LyfeStore. Solusi hemat untuk kebutuhan digitalmu.",
  keywords: ["jual aplikasi premium", "netflix murah", "canva pro murah", "capcut pro murah", "spotify premium", "youtube premium murah", "lyfestore", "aplikasi legal"],
  authors: [{ name: "LyfeStore Team" }],
  creator: "LyfeStore",
  publisher: "LyfeStore",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://lyfestore.id",
    title: "LyfeStore - Jual Aplikasi Premium Murah & Bergaransi",
    description: "Pusat aplikasi premium termurah dan terpercaya. Upgrade akunmu sekarang dengan harga pelajar!",
    siteName: "LyfeStore",
  },
  twitter: {
    card: "summary_large_image",
    title: "LyfeStore - Jual Aplikasi Premium Murah",
    description: "Upgrade lifestyle digitalmu dengan aplikasi premium harga terjangkau. Bergaransi dan Proses Cepat.",
    creator: "@lyfestore",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
