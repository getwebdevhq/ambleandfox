import { ArrowDown, Zap, LayoutTemplate, Smartphone, PenTool, Database } from "lucide-react";
import FunnelLeadCaptureForm from "@/components/FunnelLeadCaptureForm";

export default function WebsitesHookOffer() {
  const features = [
    { icon: <LayoutTemplate size={24} />, text: "Conversion-focused design" },
    { icon: <Smartphone size={24} />, text: "Mobile optimized" },
    { icon: <Zap size={24} />, text: "Fast loading" },
  ];
  
  const bonuses = [
    { icon: <PenTool size={20} />, text: "Copywriting included" },
    { icon: <Database size={20} />, text: "Lead capture setup" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-black px-6 py-20 text-center sm:py-32">
        <div className="container-main relative">
          <h1 className="mx-auto max-w-4xl font-heading text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Websites that <span className="text-brand-primary font-serif italic">hook</span> customers.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-xl text-gray-300 sm:text-2xl">
            We design sites that turn clicks into clients.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a href="#offer-form" className="btn-primary">
              Get My Website
            </a>
          </div>
          <div className="mt-16 flex justify-center text-brand-primary animate-bounce">
            <ArrowDown size={32} />
          </div>
        </div>
      </section>

      {/* Features & Bonus Section */}
      <section className="bg-brand-background px-6 py-20 sm:py-32">
        <div className="container-main">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            {/* Features */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10 shadow-soft">
              <h3 className="mb-6 font-heading text-2xl font-bold text-gray-900">
                Core Features
              </h3>
              <ul className="space-y-6">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-black">
                      {feature.icon}
                    </div>
                    <span className="font-body text-lg font-medium text-gray-900">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bonus */}
            <div className="rounded-3xl border border-brand-primary/30 bg-brand-primary/5 p-8 sm:p-10 shadow-soft">
              <div className="inline-flex items-center rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold text-brand-black mb-6 uppercase tracking-wider">
                🎁 Bonus Included
              </div>
              <h3 className="mb-6 font-heading text-2xl font-bold text-gray-900">
                What else you get
              </h3>
              <ul className="space-y-4">
                {bonuses.map((bonus, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex text-brand-black shrink-0">
                      {bonus.icon}
                    </div>
                    <span className="font-body text-lg text-gray-800">{bonus.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-white rounded-xl border border-brand-primary/20 shadow-sm text-sm font-body text-gray-600">
                <span className="font-bold text-gray-900">Value addition:</span> Both bonuses are built-in at no extra charge, ensuring your website actually converts from day one.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer & Form Section */}
      <section id="offer-form" className="px-6 py-20 sm:py-32 bg-white">
        <div className="container-main">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
            {/* Offer Details */}
            <div>
               <h2 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                Launch Your Machine
              </h2>
              <div className="mt-8">
                <span className="text-xl text-gray-500 font-body mb-2 block">From</span>
                <span className="text-6xl font-bold text-gray-900 tracking-tight block">£799</span>
              </div>
              
              <div className="mt-8 flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-body font-medium text-gray-700">Built in 7 days</span>
              </div>
              
              <p className="mt-6 font-body text-lg text-gray-600 max-w-md">
                Don&apos;t wait months for an agency to design a digital brochure. Get a high-converting website built fast.
              </p>
            </div>

            {/* Form */}
            <div>
              <FunnelLeadCaptureForm defaultService="New Website" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
