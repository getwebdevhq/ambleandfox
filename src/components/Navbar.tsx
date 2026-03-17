"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/trade-fair-tools", label: "Trade Fair Tools" },
  { href: "/add-ons", label: "Add-Ons" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b-3 border-brand-black bg-brand-white">
      <div className="container-main flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-xl font-bold uppercase tracking-tight md:text-2xl"
        >
          Amble{" "}
          <span className="inline-block bg-brand-yellow px-1">&amp;</span> Fox
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-2 border-transparent px-4 py-2 font-heading text-sm font-bold uppercase tracking-wide transition-all duration-150 hover:border-brand-black hover:bg-brand-yellow hover:shadow-brutal-hover"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="border-3 border-brand-black p-2 font-heading text-sm font-bold uppercase md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t-3 border-brand-black bg-brand-white md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block border-b-2 border-brand-black px-6 py-4 font-heading text-base font-bold uppercase tracking-wide transition-colors duration-150 hover:bg-brand-yellow"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
