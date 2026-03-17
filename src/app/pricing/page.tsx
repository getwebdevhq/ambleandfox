import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata = {
  title: "Pricing | Amble & Fox",
  description: "Transparent pricing for lead generation systems.",
};

const setupItems = [
  "Website / Landing System – ₹12,000",
  "Campaign Setup – ₹8,000",
];

const plans = [
  {
    name: "Basic",
    price: "₹5,000/month",
    features: ["3 creatives/month", "2 copies"],
  },
  {
    name: "Growth",
    price: "₹8,000/month",
    features: ["6 creatives/month", "4 copies", "Variations"],
    highlight: true,
  },
  {
    name: "Dominate",
    price: "₹12,000/month",
    features: ["10–12 creatives", "Multiple hooks", "A/B testing"],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="section-padding bg-brand-background text-brand-black">
        <div className="container-main">
          <SectionHeading
            title="Pricing"
            subtitle="Transparent and results-driven. We build the engine once, and fuel it monthly."
          />

          {/* Setup Fee Section */}
          <div className="mx-auto mb-20 max-w-3xl">
            <Card highlighted className="text-center relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-brand-primary"></div>
              <h3 className="mb-6 font-heading text-3xl font-medium">One-Time Setup</h3>
              <ul className="mb-8 space-y-3 font-body text-lg text-gray-600">
                {setupItems.map((item, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 text-brand-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-6">
                <p className="font-heading text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Total</p>
                <p className="font-heading text-5xl font-bold">₹20,000</p>
              </div>
            </Card>
          </div>

          {/* Monthly Plans */}
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto items-start">
            {plans.map((plan) => (
              <Card key={plan.name} highlighted={plan.highlight} className={`${plan.highlight ? 'md:-translate-y-4' : ''}`}>
                <h3 className="font-heading text-2xl font-medium mb-4">{plan.name}</h3>
                <div className="mb-8">
                  <p className="font-heading text-4xl font-bold">{plan.price}</p>
                </div>
                <ul className="mb-8 space-y-4 font-body text-gray-600">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <svg className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={plan.highlight ? "primary" : "outline"}
                  className="w-full"
                >
                  Choose {plan.name}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
