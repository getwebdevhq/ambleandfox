import { Metadata } from 'next';
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import { notFound } from "next/navigation";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const industries = [
  "real-estate-lead-generation",
  "clinic-lead-generation",
  "interior-designer-leads",
  "solar-lead-generation",
  "coaching-leads"
];

const locations = [
  "mumbai", "delhi", "bangalore", "hyderabad", "chennai", 
  "pune", "ahmedabad", "kolkata", "jaipur", "lucknow"
];

const formatString = (str: string) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace('Lead Generation', '')
    .replace('Leads', '')
    .trim();
};

export async function generateStaticParams() {
  const params: { industry: string; location: string }[] = [];
  
  for (const industry of industries) {
    for (const location of locations) {
      params.push({ industry, location });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: { params: { industry: string; location: string } }): Promise<Metadata> {
  const { industry, location } = params;
  
  if (!industries.includes(industry) || !locations.includes(location)) {
    return {};
  }

  const formattedIndustry = formatString(industry) || 'Business';
  const formattedCity = location.charAt(0).toUpperCase() + location.slice(1);

  return {
    title: `Get More ${formattedIndustry} Leads in ${formattedCity} | Amble & Fox Media`,
    description: `Generate high-quality ${formattedIndustry} leads in ${formattedCity} using Meta Ads and WhatsApp funnels. Start getting real inquiries today.`,
  };
}

export default function SeoLandingPage({ params }: { params: { industry: string; location: string } }) {
  const { industry, location } = params;

  if (!industries.includes(industry) || !locations.includes(location)) {
    notFound();
  }

  const formattedIndustry = formatString(industry) || 'Business';
  const formattedCity = location.charAt(0).toUpperCase() + location.slice(1);

  // Schema.org LocalBusiness
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Amble & Fox Media - ${formattedIndustry} Leads in ${formattedCity}`,
    "description": `Generate high-quality ${formattedIndustry} leads in ${formattedCity} using Meta Ads and WhatsApp funnels.`,
    "areaServed": formattedCity,
    "serviceArea": {
      "@type": "City",
      "name": formattedCity
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden section-padding bg-brand-background">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <h1 className="font-heading text-5xl font-medium leading-tight tracking-tight text-brand-black md:text-6xl">
                Get more <span className="text-brand-primary font-serif italic">{formattedIndustry}</span> leads in {formattedCity}
              </h1>
              <p className="mt-8 font-body text-lg leading-relaxed text-gray-600 md:text-xl">
                We run hyper-targeted Meta Ads and optimize WhatsApp funnels to bring high-quality {formattedIndustry.toLowerCase()} customers directly to your inbox in {formattedCity}.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="#lead-form" variant="primary">
                  Start Getting Real Inquiries Today
                </Button>
                <Button href="/ad-library" variant="outline">
                  See Our Ad Library
                </Button>
              </div>
            </div>
            
            {/* Form Component directly in Hero instead of Image for better conversion */}
            <div className="relative w-full rounded-2xl bg-white p-6 md:p-10 shadow-soft-lg border border-gray-100" id="lead-form">
              <h3 className="font-heading text-2xl font-bold mb-2">Claim Your Market Share in {formattedCity}</h3>
              <p className="text-gray-500 mb-6 text-sm">Tell us about your business to get a free growth gap analysis.</p>
              <LeadCaptureForm industry={industry} location={location} />
            </div>
          </div>
        </div>
      </section>

      {/* ───── THE PROBLEM ───── */}
      <section className="border-y border-gray-200 bg-white py-20 section-padding">
        <div className="container-main text-center max-w-4xl mx-auto">
          <SectionHeading
            title={`Tired of Buying Bad ${formattedIndustry} Leads?`}
            subtitle="Most agencies focus on cheap clicks. The result? You waste money talking to people who can't afford your services or are just 'looking around'."
            centered
          />
          <div className="grid gap-8 md:grid-cols-3 mt-12">
            {[
              { title: "Low Intent", desc: "Leads not answering calls or replying to messages." },
              { title: "High Cost", desc: "Acquisition costs going up while quality drops." },
              { title: "Agency Excuses", desc: "\"We need more time for the algorithm to learn.\"" }
            ].map(item => (
              <Card key={item.title} className="bg-red-50/50 border-red-100 shadow-none">
                <h4 className="font-heading font-medium text-lg text-red-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── HOW IT WORKS - REUSING HOME PAGE STYLE ───── */}
      <section className="section-padding bg-brand-background text-brand-black">
        <div className="container-main">
          <SectionHeading
            title={`How We Dominate ${formattedCity}`}
            subtitle="A transparent, aggressive approach to taking over your local market."
          />
          <div className="grid gap-8 md:grid-cols-3 relative mt-16">
            <div className="hidden md:block absolute top-[3rem] left-[16.6%] right-[16.6%] h-[2px] bg-gray-200 -z-10"></div>
            {[
              { step: "01", title: "Hyper-Local Targeting", desc: `We build Meta Ads targeting specifically designed for high-net-worth individuals in ${formattedCity}.` },
              { step: "02", title: "Direct to WhatsApp", desc: "No long forms. Leads click an ad and immediately message your sales team on WhatsApp." },
              { step: "03", title: "Continuous Optimization", desc: "We track which ads generate closed deals, not just clicks, and double down on winners." }
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-brand-background text-brand-black shadow-soft ring-4 ring-white">
                  <span className="font-heading text-3xl font-bold">{item.step}</span>
                </div>
                <h3 className="mb-4 font-heading text-xl font-medium text-brand-black">{item.title}</h3>
                <p className="font-body text-gray-600 leading-relaxed max-w-sm mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PRICING PREVIEW ───── */}
      <section className="section-padding bg-white border-y border-gray-100">
        <div className="container-main text-center max-w-4xl mx-auto">
          <SectionHeading title="Simple, ROI-Focused Pricing" subtitle="We don't get paid well unless you get paid well." centered />
          <div className="mt-12 bg-brand-background rounded-2xl p-8 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div>
              <h4 className="font-heading text-2xl font-bold mb-2">The Growth Engine</h4>
              <p className="text-gray-600 max-w-md">Everything you need to launch a high-converting {formattedIndustry.toLowerCase()} campaign in {formattedCity}, from creatives to WhatsApp automation.</p>
            </div>
            <div className="shrink-0 text-center md:text-right">
              <p className="font-heading text-3xl font-bold text-brand-primary mb-4">From ₹5,000<span className="text-lg text-gray-500 font-normal">/mo</span></p>
              <Button href="/pricing" variant="outline">View All Plans</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ───── CTA BLOCK ───── */}
      <section className="section-padding bg-brand-black text-brand-white">
        <div className="container-main text-center mx-auto max-w-3xl">
          <SectionHeading
            title="Ready to Scale?"
            subtitle={`Stop waiting for referrals in ${formattedCity}. Let us build a predictable lead engine.`}
            centered
          />
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Button href="#lead-form" variant="primary">
              Get Started Now
            </Button>
            <Button
              href="https://wa.me/917866955638?text=Hi%20Amble%20%26%20Fox%20Media%2C%20I%27m%20interested%20in%20your%20services"
              variant="outline"
              external
              className="border-gray-600 text-brand-white hover:border-brand-white hover:text-brand-black hover:bg-white"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
