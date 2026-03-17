import BrutalistButton from "@/components/BrutalistButton";
import BrutalistCard from "@/components/BrutalistCard";
import SectionHeading from "@/components/SectionHeading";

const features = [
  {
    icon: "🌍",
    title: "Multi-Language Ready",
    desc: "Reach buyers in English, Hindi, and more with built-in language support.",
  },
  {
    icon: "📱",
    title: "Mobile Optimized",
    desc: "Your catalog looks perfect on every device — phone, tablet, or desktop.",
  },
  {
    icon: "📋",
    title: "PDF Catalog Downloads",
    desc: "Let buyers download your product catalog as a professional PDF.",
  },
  {
    icon: "💬",
    title: "WhatsApp Integration",
    desc: "One-tap WhatsApp button lets buyers inquire instantly from anywhere.",
  },
  {
    icon: "📊",
    title: "Inquiry Tracking",
    desc: "See who's interested — track every inquiry, country, and product view.",
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Sub-second load times mean buyers never bounce. Optimized for global access.",
  },
];

const pricingPreview = [
  { name: "Basic", price: "₹9,000", monthly: "₹499/mo" },
  { name: "Standard", price: "₹19,000", monthly: "₹999/mo", popular: true },
  { name: "Pro", price: "₹29,000", monthly: "₹1,499/mo" },
];

export default function HomePage() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="section-padding border-b-3 border-brand-black bg-brand-black text-brand-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl font-bold uppercase leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Websites Built
              <br />
              for Indian{" "}
              <span className="bg-brand-turquoise px-2 text-brand-black">
                Exporters
              </span>
            </h1>
            <div className="mt-4 h-2 w-24 bg-brand-crimson"></div>
            <p className="mt-6 font-body text-lg leading-relaxed md:text-xl">
              Turn trade fair visitors into international buyers. We build
              export-ready digital showrooms for handicraft, furniture, textile,
              and decor manufacturers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <BrutalistButton href="/contact" variant="secondary">
                Get Export Website →
              </BrutalistButton>
              <BrutalistButton href="/pricing" variant="primary">
                See Pricing
              </BrutalistButton>
            </div>
          </div>
        </div>
      </section>

      {/* ───── PROBLEM ───── */}
      <section className="section-padding border-b-3 border-brand-black">
        <div className="container-main">
          <SectionHeading
            title="The Trade Fair Problem"
            subtitle="You spend lakhs on trade fairs. Buyers take your card. Then what?"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                emoji: "🤝",
                title: "You Meet Buyers",
                text: "Great conversations at the booth. They love your products.",
              },
              {
                emoji: "📇",
                title: "They Take Your Card",
                text: "Business cards pile up. No follow-up system. No product catalog online.",
              },
              {
                emoji: "👻",
                title: "They Forget You",
                text: "Within weeks, buyers move on to competitors who have professional websites.",
              },
            ].map((item) => (
              <BrutalistCard key={item.title}>
                <div className="mb-3 text-4xl">{item.emoji}</div>
                <h3 className="mb-2 font-heading text-lg font-bold uppercase">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-gray-600">{item.text}</p>
              </BrutalistCard>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SOLUTION ───── */}
      <section className="section-padding border-b-3 border-brand-black bg-brand-black text-brand-white">
        <div className="container-main">
          <SectionHeading
            title="Your Digital Showroom"
            subtitle="A website that works 24/7, even when you're not at the fair."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: "🖥️",
                title: "Professional Product Catalog",
                text: "Beautiful online catalog with categories, filters, and detail pages. Buyers browse your entire range from anywhere in the world.",
              },
              {
                icon: "📲",
                title: "QR Code Integration",
                text: "Print QR codes on your booth, banners, and product tags. Buyers scan and instantly see your full catalog on their phone.",
              },
              {
                icon: "📧",
                title: "Instant Inquiry Forms",
                text: "Every product page has a WhatsApp button and inquiry form. Convert browsing into real business conversations.",
              },
              {
                icon: "📄",
                title: "Downloadable PDF Catalogs",
                text: "Buyers can download your catalog as a branded PDF. Perfect for sharing with purchasing teams back home.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-3 border-brand-white p-6 transition-all duration-150 hover:bg-gray-900"
              >
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-2 font-heading text-xl font-bold uppercase">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FEATURES GRID ───── */}
      <section className="section-padding border-b-3 border-brand-black">
        <div className="container-main">
          <SectionHeading
            title="Everything You Need"
            subtitle="Built specifically for Indian exporters who sell globally."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <BrutalistCard key={f.title}>
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-heading text-lg font-bold uppercase">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-gray-600">{f.desc}</p>
              </BrutalistCard>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PRICING PREVIEW ───── */}
      <section className="section-padding border-b-3 border-brand-black bg-brand-gray">
        <div className="container-main">
          <SectionHeading
            title="Simple, Transparent Pricing"
            subtitle="One-time setup + affordable monthly. No hidden fees."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPreview.map((p) => (
              <BrutalistCard key={p.name} highlighted={p.popular}>
                {p.popular && (
                  <span className="mb-3 inline-block border-3 border-brand-black bg-brand-crimson px-3 py-1 font-heading text-xs font-bold uppercase text-brand-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold uppercase">
                  {p.name}
                </h3>
                <div className="mt-2">
                  <span className="font-heading text-3xl font-bold">
                    {p.price}
                  </span>
                  <span className="ml-2 font-body text-sm text-gray-500">
                    one-time
                  </span>
                </div>
                <p className="mt-1 font-body text-sm text-gray-500">
                  + {p.monthly} maintenance
                </p>
                <div className="mt-4">
                  <BrutalistButton
                    href="/pricing"
                    variant={p.popular ? "danger" : "primary"}
                    className="w-full text-center"
                  >
                    View Details →
                  </BrutalistButton>
                </div>
              </BrutalistCard>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="section-padding border-t-8 border-brand-crimson bg-brand-white text-brand-black">
        <div className="container-main text-center">
          <h2 className="font-heading text-3xl font-bold uppercase md:text-5xl">
            Ready to Go Global?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg">
            Stop losing buyers after trade fairs. Get a professional export
            website and start converting international leads today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <BrutalistButton href="/contact" variant="secondary">
              Get Started Now →
            </BrutalistButton>
            <BrutalistButton
              href="https://wa.me/917866955638?text=Hi%20Amble%20%26%20Fox%2C%20I%27m%20interested%20in%20your%20services"
              variant="primary"
              external
            >
              WhatsApp Us
            </BrutalistButton>
          </div>
        </div>
      </section>
    </>
  );
}
