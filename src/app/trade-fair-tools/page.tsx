import BrutalistButton from "@/components/BrutalistButton";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Trade Fair Tools — Amble & Fox",
  description: "Maximize your trade fair ROI with QR codes and digital catalogs.",
};

export default function TradeFairToolsPage() {
  return (
    <div>
      <section className="section-padding bg-brand-black text-brand-white">
        <div className="container-main text-center">
          <SectionHeading
            title="Win The Trade Fair"
            subtitle="Bridge the gap between your physical booth and digital showroom."
            className="mb-8"
          />
          <p className="mx-auto max-w-2xl font-body text-lg text-gray-300">
            Buyers are overwhelmed at fairs. Give them an easy way to save your catalog to their phone instantly with QR integrations.
          </p>
        </div>
      </section>

      <section className="section-padding border-b-3 border-brand-black">
        <div className="container-main">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="mb-4 font-heading text-3xl font-bold uppercase">
                Booth QR Codes
              </h3>
              <p className="mb-6 font-body text-lg leading-relaxed text-gray-600">
                Print a giant QR code on your exhibition backdrop or standee. Buyers scanning
                it are instantly taken to your full Mobile-Optimized Digital Catalog.
              </p>
              <ul className="mb-8 space-y-3 font-body text-gray-700">
                <li className="flex items-center gap-2">✓ No app download needed</li>
                <li className="flex items-center gap-2">✓ Works on iOS and Android</li>
                <li className="flex items-center gap-2">✓ Instantly prompt them to WhatsApp you</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="flex h-64 w-64 items-center justify-center border-3 border-brand-black bg-brand-white shadow-brutal-lg">
                <div className="text-center font-heading text-2xl font-bold text-gray-400">
                  QR PREVIEW
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b-3 border-brand-black bg-brand-yellow">
        <div className="container-main">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 flex justify-center md:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-32 w-24 border-3 border-brand-black bg-brand-white p-2 shadow-brutal"
                  >
                    <div className="h-12 border-2 border-dashed border-gray-300"></div>
                    <div className="mt-2 h-2 w-full bg-gray-200"></div>
                    <div className="mt-1 h-2 w-2/3 bg-gray-200"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="mb-4 font-heading text-3xl font-bold uppercase">
                Product QR Tags
              </h3>
              <p className="mb-6 font-body text-lg leading-relaxed text-gray-800">
                Attach small QR tags to individual display items. When a buyer likes a specific table or vase, they scan it to see dimensions, materials, and variations online.
              </p>
              <BrutalistButton href="/contact" variant="secondary">
                Ask About QR Setup →
              </BrutalistButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main text-center">
          <SectionHeading
            title="Ready for your next fair?"
            subtitle="Get your site up and running in just 14 days."
          />
          <BrutalistButton href="/contact" variant="primary">
            Start Your Project
          </BrutalistButton>
        </div>
      </section>
    </div>
  );
}
