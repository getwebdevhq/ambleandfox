import { AlertCircle, ArrowDown, ShieldCheck, Zap } from "lucide-react";
import FunnelLeadCaptureForm from "@/components/FunnelLeadCaptureForm";

export default function WebsiteRedesignOffer() {
  const problems = [
    "Outdated design",
    "Low conversions",
    "No clear funnel"
  ];

  const solutions = [
    "Modern redesign",
    "Conversion-first layout",
    "Clear CTA structure"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-6 py-20 text-center sm:py-32">
        <div className="container-main relative">
          <h1 className="mx-auto max-w-4xl font-heading text-5xl font-bold tracking-tight text-brand-black sm:text-7xl">
            Your website isn&apos;t broken.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-xl text-gray-600 sm:text-2xl">
            It&apos;s just <span className="text-brand-primary underline decoration-brand-black underline-offset-4 decoration-4 font-bold">outdated</span>.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a href="#offer-form" className="btn-primary">
              Redesign Now
            </a>
          </div>
          <div className="mt-16 flex justify-center text-gray-300 animate-bounce">
            <ArrowDown size={32} />
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="bg-brand-background px-6 py-20 sm:py-32">
        <div className="container-main">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
             {/* Problem */}
            <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-soft">
              <h3 className="mb-6 font-heading text-2xl font-bold text-gray-900 border-b pb-4">
                The Reality
              </h3>
              <ul className="space-y-4 pt-2">
                {problems.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <AlertCircle className="mt-1 h-5 w-5 shrink-0 text-red-400" />
                    <span className="font-body text-gray-700 text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="rounded-3xl bg-brand-black p-8 sm:p-10 shadow-soft">
              <h3 className="mb-6 font-heading text-2xl font-bold text-white border-b border-gray-800 pb-4">
                The Redesign
              </h3>
              <ul className="space-y-4 pt-2">
                {solutions.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />
                    <span className="font-body text-gray-200 text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You Actually Get Section */}
      <section className="bg-white px-6 py-20 sm:py-32">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              WHAT YOU ACTUALLY GET
            </h2>
            <p className="font-body text-2xl text-gray-600 font-medium leading-relaxed">
              This is not <span className="text-brand-black">"just a redesign."</span><br />
              This is a <span className="font-bold underline decoration-brand-primary underline-offset-4 decoration-4">custom-built, performance-focused website system.</span>
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-8">
            {[
              {
                number: "01",
                title: "Industry Research",
                items: [
                  "Competitor breakdown (design + positioning)",
                  "Market trends analysis",
                  "Customer behaviour insights",
                ],
                outcome: "We don't design blindly. We reverse-engineer what already works."
              },
              {
                number: "02",
                title: "Brand Direction",
                items: [
                  "Clear positioning & USP",
                  "Messaging that actually converts",
                  "Offer structuring (hero services/products)",
                  "Visual direction (premium, modern, relevant)",
                ],
                outcome: "Your website finally says the right thing."
              },
              {
                number: "03",
                title: "Custom-Built Website (No Templates)",
                items: [
                  "Fully custom design — no generic themes",
                  "Built using modern development tools (faster, cleaner, more flexible)",
                  "Optimised for speed, mobile & conversions",
                  "Clean UI with premium feel",
                ],
                outcome: "You don't get a “Shopify-looking site.” You get a brand asset."
              },
              {
                number: "04",
                title: "Smart Systems & Automation",
                items: [
                  "Custom forms & lead capture",
                  "Automated responses (no manual chasing)",
                  "CRM-ready integrations",
                  "Payment integration (if needed)",
                ],
                outcome: "Your website works like a system, not a brochure."
              },
              {
                number: "05",
                title: "Launch + Content Kit",
                items: [
                  "Fully live, ready-to-sell website",
                  "Social media templates",
                  "1-week launch content plan",
                  "Simple usage guide",
                ],
                outcome: "You launch with clarity and momentum."
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-soft transition-all duration-300">
                <div className="absolute top-0 right-0 p-8 text-8xl font-black text-gray-200 opacity-30 group-hover:text-brand-primary group-hover:opacity-10 transition-colors duration-500 pointer-events-none select-none">
                  {step.number}
                </div>
                <div className="relative z-10 w-full">
                  <h3 className="flex items-center gap-4 font-heading text-2xl font-bold text-gray-900 mb-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-black text-brand-primary font-bold text-sm">
                      {step.number}
                    </span>
                    {step.title}
                  </h3>
                  <div className="grid md:grid-cols-5 gap-8 items-center">
                    <ul className="space-y-3 md:col-span-3">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                           <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />
                           <span className="font-body text-gray-700 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="md:col-span-2 bg-white rounded-2xl p-6 border-l-4 border-l-brand-primary shadow-sm h-full flex items-center min-h-[100px]">
                      <p className="font-body font-medium text-brand-black text-lg flex gap-3">
                        <span className="text-xl shrink-0">👉</span> <span>{step.outcome}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer & Form Section */}
      <section id="offer-form" className="px-6 py-20 sm:py-32 bg-gray-50 border-t border-gray-200">
        <div className="container-main">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
            {/* Offer Details */}
            <div>
              <div className="inline-flex items-center rounded-full bg-brand-black px-3 py-1 text-sm font-semibold text-brand-primary mb-6">
                 🌟 LIMITED TIME OFFER
              </div>
              <h2 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                Modernize Your Brand
              </h2>
              <div className="mt-8 flex items-end gap-2">
                <span className="text-xl text-gray-500 font-body mb-2 block">From</span>
                <span className="text-6xl font-bold text-brand-black tracking-tight block">£499</span>
              </div>
              
              <p className="mt-8 font-body text-lg text-gray-600 max-w-md">
                Bring your digital presence into the modern era. Better conversions, faster load times, and a funnel that makes sense.
              </p>
              
              <div className="mt-8">
                 <div className="flex items-center gap-2 text-sm font-semibold text-brand-primary uppercase tracking-wider bg-black/5 w-max px-4 py-2 rounded-lg">
                    <Zap size={16} /> Fast Turnaround
                 </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <FunnelLeadCaptureForm defaultService="Website Redesign" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
