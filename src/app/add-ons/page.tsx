import BrutalistCard from "@/components/BrutalistCard";
import BrutalistButton from "@/components/BrutalistButton";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Add-Ons — Amble & Fox",
  description: "Product photography and catalog design services.",
};

export default function AddOnsPage() {
  return (
    <div>
      <section className="section-padding bg-brand-black text-brand-yellow">
        <div className="container-main text-center">
          <SectionHeading
            title="Creative Add-Ons"
            subtitle="Everything you need to make your products shine online."
            className="mb-0"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <BrutalistCard>
              <div className="mb-4 text-5xl">📸</div>
              <h3 className="mb-2 font-heading text-2xl font-bold uppercase">
                Product Photography
              </h3>
              <p className="mb-6 font-body text-gray-600">
                Professional white-background or lifestyle photography ensuring your
                items look premium. Perfect for web catalogs.
              </p>
              <div className="mb-6">
                <span className="font-heading text-3xl font-bold">₹100</span>
                <span className="ml-2 font-body text-gray-500">per product</span>
              </div>
              <ul className="mb-8 space-y-2 font-body text-sm text-gray-700">
                <li>• High-resolution editing</li>
                <li>• White background cutoff</li>
                <li>• Web-optimized formats</li>
              </ul>
              <BrutalistButton href="/contact" className="w-full text-center">
                Book Shoot
              </BrutalistButton>
            </BrutalistCard>

            <BrutalistCard>
              <div className="mb-4 text-5xl">🎨</div>
              <h3 className="mb-2 font-heading text-2xl font-bold uppercase">
                PDF Catalog Design
              </h3>
              <p className="mb-6 font-body text-gray-600">
                A stunning, downloadable PDF company profile and product catalog
                for email sharing and WhatsApp broadcasts.
              </p>
              <div className="mb-6">
                <span className="font-heading text-3xl font-bold">₹10,000</span>
                <span className="ml-2 font-body text-gray-500">one off</span>
              </div>
              <ul className="mb-8 space-y-2 font-body text-sm text-gray-700">
                <li>• Up to 20 pages</li>
                <li>• Custom branded layout</li>
                <li>• Print & Digital ready versions</li>
              </ul>
              <BrutalistButton href="/contact" className="w-full text-center">
                Request Design
              </BrutalistButton>
            </BrutalistCard>
          </div>
        </div>
      </section>
    </div>
  );
}
