import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden section-padding bg-brand-background">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <h1 className="font-heading text-5xl font-medium leading-tight tracking-tight text-brand-black md:text-7xl">
                Turn your business into a{" "}
                <span className="text-brand-primary font-serif italic">lead-generating</span>{" "}
                machine
              </h1>
              <p className="mt-8 font-body text-lg leading-relaxed text-gray-600 md:text-xl">
                We run ads, optimize funnels, and bring customers directly to your WhatsApp.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary">
                  Get Leads Now
                </Button>
                <Button href="/services" variant="outline">
                  See How It Works
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-soft-lg lg:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1698767008609-f5fa6137b9e6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Business professional working"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── PROOF / STATS ───── */}
      <section className="border-y border-gray-200 bg-white py-12">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 text-center">
            {[
              { stat: "200+", label: "campaigns launched" },
              { stat: "95%", label: "client retention" },
              { stat: "7x", label: "ROI average" },
            ].map((item) => (
              <div key={item.label} className="pt-8 md:pt-0 px-4">
                <p className="font-heading text-5xl font-bold text-brand-black">{item.stat}</p>
                <p className="mt-2 font-body text-sm font-medium uppercase tracking-widest text-gray-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SERVICES PREVIEW ───── */}
      <section className="section-padding bg-brand-background text-brand-black">
        <div className="container-main">
          <SectionHeading
            title="What We Do"
            subtitle="End-to-end performance marketing systems designed for one thing: growth."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Lead Generation",
                desc: "Laser-targeted Meta ads that bring real, qualified inquiries to your business.",
              },
              {
                title: "Ad Creatives",
                desc: "High-performing image and video creatives designed specifically to stop the scroll and convert.",
              },
              {
                title: "Conversion Systems",
                desc: "Seamless WhatsApp-based funnels that capture attention and turn it into conversations.",
              },
            ].map((service) => (
              <Card key={service.title} className="text-center group">
                <h3 className="mb-4 font-heading text-2xl font-medium text-brand-black transition-colors group-hover:text-brand-primary">
                  {service.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* ───── HOW IT WORKS ───── */}
      <section className="section-padding bg-white text-brand-black">
        <div className="container-main">
          <SectionHeading
            title="How It Works"
            subtitle="A simple, transparent process to get you more customers."
          />
          <div className="grid gap-8 md:grid-cols-3 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[3rem] left-[16.6%] right-[16.6%] h-[2px] bg-gray-100 -z-10"></div>

            {[
              {
                step: "01",
                title: "We set up your system",
                desc: "We build your landing pages, ad accounts, and WhatsApp automation.",
              },
              {
                step: "02",
                title: "We run ads",
                desc: "We launch high-converting Meta ads targeted at your ideal customers.",
              },
              {
                step: "03",
                title: "You get customers",
                desc: "Leads message you directly on WhatsApp, ready to buy.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-brand-background text-brand-black shadow-soft ring-4 ring-white">
                  <span className="font-heading text-3xl font-bold">{item.step}</span>
                </div>
                <h3 className="mb-4 font-heading text-xl font-medium text-brand-black">
                  {item.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIAL ───── */}
      <section className="section-padding bg-brand-background text-brand-black">
        <div className="container-main">
          <div className="mx-auto max-w-4xl">
            <Card className="flex flex-col md:flex-row items-center gap-10 md:p-16">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full shadow-md md:h-48 md:w-48">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                  alt="Client"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <svg className="mb-6 h-10 w-10 text-brand-primary" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="font-heading text-xl md:text-2xl text-brand-black leading-relaxed italic">
                  &quot;Amble &amp; Fox completely transformed our client acquisition. Before, we were struggling with expensive clicks that went nowhere. Now, our sales team wakes up to qualified WhatsApp leads every morning.&quot;
                </p>
                <div className="mt-8">
                  <p className="font-heading font-bold text-brand-black">Priya Sharma</p>
                  <p className="font-body text-sm text-gray-500 tracking-wide uppercase mt-1">Founder, Elevate Design</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ───── CTA BLOCK ───── */}
      <section className="section-padding bg-brand-black text-brand-white">
        <div className="container-main text-center mx-auto max-w-3xl">
          <SectionHeading
            title="Start getting customers this week"
            subtitle="Stop waiting for referrals or guessing with your ads. Let us build a system that brings customers to you predictably."
            centered
          />
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Button href="/contact" variant="primary">
              Get Started Now
            </Button>
            <Button
              href="https://wa.me/917866955638?text=Hi%20Amble%20%26%20Fox%2C%20I%27m%20interested%20in%20your%20services"
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
