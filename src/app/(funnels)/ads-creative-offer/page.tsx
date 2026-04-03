import { XCircle, CheckCircle2, ArrowDown } from "lucide-react";
import FunnelLeadCaptureForm from "@/components/FunnelLeadCaptureForm";

export default function AdsCreativeOffer() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-black px-6 py-20 text-center sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container-main relative">
          <h1 className="mx-auto max-w-4xl font-heading text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Bad ads?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-xl text-gray-300 sm:text-2xl">
            You are just making Zuckerberg <span className="text-brand-primary font-bold italic">RICHER!!</span>
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="#offer-form"
              className="btn-primary"
            >
              Get 20 Creatives
            </a>
          </div>
          <div className="mt-16 flex justify-center text-brand-primary animate-bounce">
            <ArrowDown size={32} />
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="bg-brand-background px-6 py-20 sm:py-32">
        <div className="container-main">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            {/* Problem */}
            <div className="rounded-3xl border border-red-100 bg-red-50/50 p-8 sm:p-10 shadow-soft">
              <h3 className="mb-6 font-heading text-2xl font-bold text-red-900">
                The Problem
              </h3>
              <ul className="space-y-4">
                {[
                  "Spending on ads but no results",
                  "Creatives don’t convert",
                  "No scroll-stopping hooks",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                    <span className="font-body text-red-900">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="rounded-3xl border border-green-100 bg-green-50/50 p-8 sm:p-10 shadow-soft">
              <h3 className="mb-6 font-heading text-2xl font-bold text-green-900">
                The Solution
              </h3>
              <ul className="space-y-4">
                {[
                  "Performance-driven creatives",
                  "Scroll stopping ads",
                  "Built for conversions",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    <span className="font-body text-green-900">{point}</span>
                  </li>
                ))}
              </ul>
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
              <div className="inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-sm font-semibold text-brand-black mb-6">
                ⚡ LIMITED TIME OFFER
              </div>
              <h2 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                20 High-Converting Ad Creatives
              </h2>
              <div className="mt-8">
                <span className="text-5xl font-bold text-gray-900 tracking-tight">£249</span>
                <span className="text-xl text-gray-500 font-body ml-2">one-time</span>
              </div>
              <p className="mt-6 font-body text-lg text-gray-600 max-w-md">
                Stop wasting money on ads that don&apos;t hook. Get an arsenal of profit-generating creatives built specifically for your brand.
              </p>

              <ul className="mt-10 space-y-4">
                {["7-Day Delivery", "Tested Frameworks", "Thumb-Stopping Designs"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/20 text-brand-black">
                      <CheckCircle2 size={16} className="text-brand-black" />
                    </div>
                    <span className="font-body font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div>
              <FunnelLeadCaptureForm defaultService="Ad Creatives" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
