import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata = {
  title: "Flexible Pricing | Amble & Fox",
  description: "Modular pricing designed around your specific growth needs.",
};

const setupOptions = [
  {
    name: "Website / Landing System",
    price: "₹12,000",
    billing: "one-time",
    features: [
      "High-converting landing page",
      "Mobile optimized",
      "WhatsApp integration",
      "Lead capture setup",
      "Basic SEO structure",
    ],
  },
  {
    name: "Ads Campaign Setup",
    price: "₹8,000",
    billing: "one-time",
    features: [
      "Meta Ads account setup",
      "Pixel + tracking",
      "Campaign structure",
      "Audience research",
      "Conversion event setup",
    ],
  },
];

const plans = [
  {
    name: "Basic",
    price: "₹5,000/mo",
    tagline: "For testing & small scale",
    features: [
      "3 creatives/month",
      "2 ad copies",
      "Basic audience targeting",
      "Monthly optimization",
      "WhatsApp lead flow setup",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹8,000/mo",
    tagline: "Best balance of cost + results",
    features: [
      "6 creatives/month",
      "4 ad copies",
      "Variations for testing",
      "Weekly optimization",
      "Lead filtering strategy",
      "Basic performance tracking",
    ],
    highlight: true,
  },
  {
    name: "Dominate",
    price: "₹12,000/mo",
    tagline: "For aggressive growth",
    features: [
      "10–12 creatives/month",
      "Multiple hooks & angles",
      "A/B testing",
      "Priority optimization",
      "Conversion improvements",
      "Advanced performance tracking",
    ],
    highlight: false,
  },
];

const addOns = [
  { name: "Extra creatives", price: "₹1,000 each" },
  { name: "Landing page edits", price: "₹2,000" },
  { name: "Advanced WhatsApp automation", price: "₹3,000/month" },
  { name: "Lead tracking dashboard", price: "₹2,000/month" },
];

export default function PricingPage() {
  return (
    <>
      <section className="section-padding bg-brand-background text-brand-black pb-12">
        <div className="container-main">
          <SectionHeading
            title="Flexible Pricing"
            subtitle="Choose your setup. Pick your fuel. Grow at your own pace."
          />

          {/* Setup Fee Section */}
          <div className="mx-auto mb-20 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl font-medium">1. One-Time Setup (Choose what you need)</h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 items-stretch">
              {setupOptions.map((setup) => (
                <Card key={setup.name} className="flex flex-col relative">
                  <h3 className="mb-2 font-heading text-2xl font-bold">{setup.name}</h3>
                  <div className="mb-6 border-b border-gray-100 pb-6">
                    <p className="font-heading text-4xl font-bold text-brand-primary">{setup.price}</p>
                    <p className="font-body text-sm text-gray-500 uppercase tracking-widest mt-1">
                      {setup.billing}
                    </p>
                  </div>
                  <ul className="mb-8 flex-1 space-y-3 font-body text-gray-600">
                    {setup.features.map((feature, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <svg className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center p-6 bg-brand-primary/10 rounded-2xl border border-brand-primary/20">
              <h4 className="font-heading text-xl font-bold text-brand-primary mb-2">Recommended: The Full System</h4>
              <p className="font-body text-gray-700">Get both the Website / Landing System and Ads Campaign Setup together for <strong className="text-xl">₹20,000</strong> one-time.</p>
            </div>
          </div>

          {/* Monthly Plans */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl font-medium">2. Monthly Performance Engine</h2>
              <p className="font-body text-gray-600 mt-2">Creatives are the core recurring lever. Select your fuel.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto items-start">
              {plans.map((plan) => (
                <Card key={plan.name} highlighted={plan.highlight} className={`flex flex-col relative ${plan.highlight ? 'md:-translate-y-4 ring-2 ring-brand-primary shadow-lg' : ''}`}>
                  {plan.highlight && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-brand-primary"></div>
                  )}
                  {plan.highlight && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading text-2xl font-bold uppercase mb-1">{plan.name}</h3>
                  <p className="font-body text-sm text-gray-500 italic mb-4 h-10">{plan.tagline}</p>
                  
                  <div className="mb-6 border-b border-gray-100 pb-6">
                    <p className="font-heading text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-blue-600">{plan.price}</p>
                  </div>
                  
                  <ul className="mb-8 flex-1 space-y-4 font-body text-gray-600">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <svg className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Risk Reversal on Cards */}
                  <div className="mb-6 bg-amber-50 rounded-lg p-3 border border-amber-100 italic text-sm text-amber-800 text-center">
                    “If you don’t receive real inquiries within 14 days, we continue working at no extra cost until you do.”
                  </div>

                  <Button
                    href="/contact"
                    variant={plan.highlight ? "primary" : "outline"}
                    className="w-full justify-center shadow-md hover:shadow-lg transition-all"
                  >
                    Start Getting Leads
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Add-Ons */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-2xl font-medium mb-8">Optional Add-Ons (Scale as you go)</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {addOns.map((addon) => (
                <div key={addon.name} className="border border-gray-200 bg-white rounded-xl p-6 text-center shadow-sm">
                  <p className="font-body font-medium text-gray-800 mb-2">{addon.name}</p>
                  <p className="font-heading text-brand-primary font-bold text-xl">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
