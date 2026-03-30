"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { FocusCards } from "@/components/ui/focus-cards";

// Note: Cloudinary urls would be used here in a production environment
const adTemplates = [
  { title: "Luxury Villa Tour", industry: "Real Estate", type: "Image", src: "https://i.ibb.co/v4tGgPZY/bf0ce20467d65de0b2f80aa42f6d0c80.jpg" },
  { title: "Valley of life", industry: "Coaching", type: "Image", src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=800&auto=format&fit=crop" },
  { title: "Modern Apartment Sale", industry: "Real Estate", type: "Image", src: "https://i.ibb.co/LzLGvttV/dfdd3eebfbad6b8aa27ada4d95ae83ab.jpg" },
  { title: "Camping is for pros", industry: "Solar", type: "Video", src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=800&auto=format&fit=crop" },
  { title: "The road not taken", industry: "Coaching", type: "Image", src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=800&auto=format&fit=crop" },
  { title: "Premium Home Direct Hook", industry: "Real Estate", type: "Image", src: "https://i.ibb.co/bgQV2Ggj/9771bb4d7ad852ed3f2cad3344cf6cf3.jpg" },
  { title: "Before/After Logic", industry: "Interior Design", type: "Image", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
  { title: "Social Proof Carousel", industry: "Clinics", type: "Carousel", src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop" },
  { title: "Founder Story Video", industry: "Coaching", type: "Video", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" },
  { title: "Dream House Showcase", industry: "Real Estate", type: "Image", src: "https://i.ibb.co/vvC8ymNc/808721cb2d855d177e6b1baa21f8f919.jpg" },
  { title: "Offer Heavy Detail", industry: "Clinics", type: "Image", src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" },
  { title: "Process Breakdown", industry: "Solar", type: "Carousel", src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" },
  { title: "Fast Delivery Angle", industry: "Interior Design", type: "Video", src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop" },
  { title: "Affordable Real Estate", industry: "Real Estate", type: "Image", src: "https://i.ibb.co/FqsnYRgd/8658c5116924a4bc734d43424b8907aa.jpg" },
].map(item => ({
  ...item,
  url: `https://wa.me/917866955638?text=Hi%20Amble%20%26%20Fox%20Media%2C%20I%20want%20the%20${item.title}%20creative%20for%20my%20business`,
  ctaText: "Chat on WhatsApp"
}));

const industries = ["All", "Real Estate", "Clinics", "Interior Design", "Solar", "Coaching"];
const types = ["All", "Image", "Video", "Carousel"];

export default function AdLibraryPage() {
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [activeType, setActiveType] = useState("All");

  const filteredCards = adTemplates.filter(card => {
    const matchesIndustry = activeIndustry === "All" || card.industry === activeIndustry;
    const matchesType = activeType === "All" || card.type === activeType;
    return matchesIndustry && matchesType;
  });

  return (
    <>
      <section className="section-padding bg-brand-background min-h-[80vh]">
        <div className="container-main">
          <SectionHeading
            title="Ad Library"
            subtitle="Browse high-performing ad creatives filtered by your niche."
          />

          <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mr-2">Industry:</span>
              {industries.map(ind => (
                <button
                  key={ind}
                  onClick={() => setActiveIndustry(ind)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeIndustry === ind
                      ? "bg-brand-primary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {ind}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mr-2">Format:</span>
              {types.map(t => (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeType === t
                      ? "bg-brand-black text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <FocusCards cards={filteredCards} />

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
              href="https://wa.me/917866955638?text=Hi%20Amble%20%26%20Fox%20Media%2C%20I%20want%20creatives%20like%20the%20ones%20in%20your%20Ad%20Library"
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
