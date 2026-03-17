import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Amble & Fox — Export Websites for Indian Manufacturers",
    template: "%s | Amble & Fox",
  },
  description:
    "We build export-ready websites for Indian handicraft, furniture, textile, and decor exporters. Turn trade fair visitors into international buyers.",
  keywords: [
    "export website",
    "Indian exporter",
    "handicraft website",
    "furniture exporter",
    "textile exporter",
    "trade fair",
    "digital showroom",
    "QR catalog",
  ],
  openGraph: {
    title: "Amble & Fox — Export Websites for Indian Manufacturers",
    description:
      "Turn trade fair visitors into international buyers with a professional export website.",
    type: "website",
    locale: "en_IN",
    siteName: "Amble & Fox",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-brand-background text-brand-black selection:bg-brand-primary selection:text-brand-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
