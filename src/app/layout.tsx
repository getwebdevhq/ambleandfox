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
    default: "Amble & Fox Media — Performance Marketing & Lead Generation Agency",
    template: "%s | Amble & Fox Media",
  },
  description:
    "We run hyper-targeted Meta Ads and optimize WhatsApp funnels to bring high-quality leads directly to your business. Stop guessing, start scaling.",
  keywords: [
    "lead generation",
    "facebook ads agency",
    "whatsapp marketing",
    "performance marketing india",
    "meta ads expert"
  ],
  openGraph: {
    title: "Amble & Fox Media — Performance Marketing & Lead Generation",
    description:
      "Turn clicks into high-quality WhatsApp inquiries with predictable lead generation systems.",
    type: "website",
    locale: "en_IN",
    siteName: "Amble & Fox Media",
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
