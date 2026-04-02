import Navbar from "@/components/Navbar";
import MinimalFooter from "@/components/MinimalFooter";
import WhatsAppLeadFloatingButton from "@/components/WhatsAppLeadFloatingButton";
import MetaPixel from "@/components/MetaPixel";
import { Inter, Playfair_Display } from "next/font/google";
import "@/app/globals.css";

export const metadata = {
  title: "Special Offer | Amble & Fox Media",
  description: "Get started with our high-converting services today.",
};

export default function FunnelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-background text-brand-black selection:bg-brand-primary selection:text-brand-white">
      <MetaPixel />
      <Navbar />
      <main className="flex-1">{children}</main>
      <MinimalFooter />
      <WhatsAppLeadFloatingButton />
    </div>
  );
}
