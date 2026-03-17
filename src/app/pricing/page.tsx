import BrutalistButton from "@/components/BrutalistButton";
import BrutalistCard from "@/components/BrutalistCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Pricing — Export Websites",
  description: "Transparent pricing for export-ready digital showrooms.",
};

const plans = [
  {
    name: "Basic",
    price: "₹9,000",
    monthly: "₹499/mo",
    description: "Perfect for getting your catalog online quickly.",
    features: [
      "Up to 5 Pages",
      "Product Gallery (20 items)",
      "WhatsApp Chat Button",
      "Inquiry Form",
      "Mobile Responsive",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "₹19,000",
    monthly: "₹999/mo",
    description: "The sweet spot for most growing exporters.",
    features: [
      "Up to 10 Pages",
      "100 Products Catalog",
      "Product Categories",
      "Downloadable PDF Catalog",
      "WhatsApp Automation",
      "Fast SSD Hosting",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "₹29,000",
    monthly: "₹1,499/mo",
    description: "For established exporters needing scale.",
    features: [
      "Unlimited Products",
      "Advanced Search/Filters",
      "Basic Inquiry CRM",
      "Google Analytics Setup",
      "Priority Support",
      "Custom Domain Included",
    ],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-gray-50 pb-24">
      <section className="section-padding bg-brand-yellow">
        <div className="container-main text-center">
          <SectionHeading
            title="Simple, Transparent Pricing"
            subtitle="No hidden costs. Pay a one-time setup fee, then a small monthly maintenance."
            className="mb-0"
          />
        </div>
      </section>

      <section className="container-main mt-[-3rem] px-4 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <BrutalistCard
              key={plan.name}
              highlighted={plan.highlighted}
              className="flex flex-col relative"
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block border-3 border-brand-black bg-brand-red px-4 py-1 font-heading text-sm font-bold uppercase tracking-wide text-brand-white">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="mb-2 font-heading text-2xl font-bold uppercase">
                {plan.name}
              </h3>
              <p className="mb-6 font-body text-sm text-gray-600 h-10">
                {plan.description}
              </p>
              <div className="mb-2">
                <span className="font-heading text-4xl font-bold">
                  {plan.price}
                </span>
                <span className="ml-2 font-body text-sm text-gray-500">
                  setup
                </span>
              </div>
              <p className="mb-8 font-heading text-xl font-bold text-gray-700">
                + {plan.monthly}{" "}
                <span className="font-body text-sm font-normal text-gray-500">
                  maintenance
                </span>
              </p>

              <ul className="mb-8 flex-1 space-y-3 font-body text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-0.5 text-brand-red">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <BrutalistButton
                href="/contact"
                variant={plan.highlighted ? "primary" : "secondary"}
                className="w-full text-center"
              >
                Choose {plan.name}
              </BrutalistButton>
            </BrutalistCard>
          ))}
        </div>
      </section>

      <section className="section-padding container-main mt-16 text-center">
        <h3 className="mb-4 font-heading text-2xl font-bold uppercase">
          Frequently Asked Questions
        </h3>
        <div className="mx-auto max-w-2xl text-left font-body text-gray-600">
          <div className="mb-6 border-l-4 border-brand-yellow pl-4">
            <h4 className="font-heading text-lg font-bold text-brand-black">
              What does the monthly fee cover?
            </h4>
            <p className="mt-1 text-sm">
              Hosting, server maintenance, SSL certificate, daily backups, and minor text/image updates.
            </p>
          </div>
          <div className="mb-6 border-l-4 border-brand-red pl-4">
            <h4 className="font-heading text-lg font-bold text-brand-black">
              Can I upgrade later?
            </h4>
            <p className="mt-1 text-sm">
              Yes, you can move from Basic to Standard or Pro at any time. You only pay the difference in setup fees.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
