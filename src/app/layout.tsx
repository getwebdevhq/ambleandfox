import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
