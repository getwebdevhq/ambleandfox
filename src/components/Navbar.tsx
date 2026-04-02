"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ads-creative-offer", label: "Ad Creatives" },
  { href: "/websites-hook-offer", label: "New Website" },
  { href: "/website-redesign-offer", label: "Website Redesign" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/ad-library", label: "Ad Library" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-brand-background/90 backdrop-blur-md">
      <div className="container-main flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-2xl font-bold tracking-tight text-brand-black md:text-3xl"
        >
          Amble <span className="text-brand-primary font-serif italic">&amp;</span> Fox Media
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-brand-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button href="https://wa.me/917866955638?text=Hi%20Amble%20%26%20Fox%20Media%2C%20I%27m%20interested%20in%20your%20services" variant="primary" external>
            Chat on WhatsApp
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-brand-black md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-gray-200 bg-brand-background px-4 py-8 shadow-soft md:hidden">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-xl font-medium text-brand-black transition-colors duration-200 hover:text-brand-primary"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4">
               <Button href="https://wa.me/917866955638?text=Hi%20Amble%20%26%20Fox%20Media%2C%20I%27m%20interested%20in%20your%20services" variant="primary" external className="w-full">
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
