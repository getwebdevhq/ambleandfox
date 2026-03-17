import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-3 border-brand-black bg-brand-black text-brand-white">
      <div className="container-main section-padding">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-heading text-2xl font-bold uppercase">
              Amble{" "}
              <span className="inline-block bg-brand-yellow px-1 text-brand-black">
                &amp;
              </span>{" "}
              Fox
            </h3>
            <p className="font-body text-sm leading-relaxed text-gray-400">
              We build export-ready websites for Indian manufacturers and
              artisans. Turn trade fair visitors into international buyers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 font-body text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/pricing", label: "Pricing" },
                { href: "/trade-fair-tools", label: "Trade Fair Tools" },
                { href: "/add-ons", label: "Add-Ons" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors duration-150 hover:text-brand-yellow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold uppercase">
              Get in Touch
            </h4>
            <ul className="space-y-2 font-body text-sm text-gray-400">
              <li>
                <a
                  href="mailto:hello@ambleandfox.com"
                  className="transition-colors duration-150 hover:text-brand-yellow"
                >
                  hello@ambleandfox.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917866955638?text=Hi%20Amble%20%26%20Fox%2C%20I%27m%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:text-brand-yellow"
                >
                  WhatsApp Us →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center font-body text-xs text-gray-500">
          © {new Date().getFullYear()} Amble &amp; Fox. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
