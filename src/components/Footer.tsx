import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="container-main section-padding border-t border-gray-800">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-6 font-heading text-3xl font-bold tracking-tight">
              Amble <span className="text-brand-primary font-serif italic">&amp;</span> Fox Media
            </h3>
            <p className="font-body text-sm leading-relaxed text-gray-400 max-w-sm">
              We bring you customers, not clicks. We run ads, optimize funnels, and bring customers directly to your WhatsApp.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-heading text-lg font-medium">
              Navigation
            </h4>
            <ul className="space-y-3 font-body text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/pricing", label: "Pricing" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/ad-library", label: "Ad Library" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors duration-200 hover:text-brand-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-heading text-lg font-medium">
              Get in Touch
            </h4>
            <ul className="space-y-3 font-body text-sm text-gray-400">
              <li>
                <a
                  href="mailto:hello@ambleandfox.com"
                  className="transition-colors duration-200 hover:text-brand-primary"
                >
                  hello@ambleandfox.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917866955638?text=Hi%20Amble%20%26%20Fox%20Media%2C%20I%27m%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-brand-primary"
                >
                  WhatsApp Us →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between font-body text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Amble &amp; Fox Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
