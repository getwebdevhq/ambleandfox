import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Image from "next/image";

export const metadata = {
  title: "Ad Library | Amble & Fox",
  description: "Browse high-performing ad creatives.",
};

const templates = [
  { id: 1, title: "The Direct Hook", type: "Image", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Before/After Logic", type: "Image", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Social Proof Carousel", type: "Carousel", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Founder Story Video", type: "Video", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Offer Heavy Detail", type: "Image", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Process Breakdown", type: "Video", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" },
];

export default function AdLibraryPage() {
  return (
    <>
      <section className="section-padding bg-brand-background">
        <div className="container-main">
          <SectionHeading
            title="Ad Library"
            subtitle="Browse high-performing ad creatives. No fluff, just structure that converts."
          />

          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="opacity-50">Filter by Niche</Button>
            <Button variant="outline" className="opacity-50">Real Estate</Button>
            <Button variant="outline" className="opacity-50">E-Commerce</Button>
            <Button variant="outline" className="opacity-50">B2B Services</Button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((t) => (
              <Card key={t.id} className="p-4 md:p-6 overflow-hidden group cursor-pointer hover:-translate-y-2">
                <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6 bg-gray-100">
                  <Image
                    src={t.img}
                    alt={t.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-brand-white/90 backdrop-blur px-3 py-1 rounded-full font-body text-xs font-bold uppercase tracking-wide">
                    {t.type}
                  </div>
                </div>
                <h3 className="font-heading text-xl font-medium tracking-tight mb-2 group-hover:text-brand-primary transition-colors">
                  {t.title}
                </h3>
                <p className="font-body text-sm text-gray-500 flex items-center gap-2">
                  Click to view full creative
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-black text-brand-white text-center">
        <div className="container-main">
          <SectionHeading
            title="Want creatives like this?"
            subtitle="Let us design and launch campaigns tailored to your offer."
            centered
          />
          <div className="mt-8 flex justify-center">
            <Button
              href="https://wa.me/917866955638?text=Hi%20Amble%20%26%20Fox%2C%20I%20want%20creatives%20like%20the%20ones%20in%20your%20Ad%20Library"
              variant="outline"
              external
              className="border-gray-600 text-brand-white hover:border-brand-white hover:text-brand-black hover:bg-white"
            >
              Message us on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
