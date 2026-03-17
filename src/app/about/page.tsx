import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import Image from "next/image";

export const metadata = {
  title: "About Us | Amble & Fox",
  description: "Results over vanity. Our story and values.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-brand-background">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-8 font-heading text-5xl font-medium leading-tight md:text-6xl">
              We help businesses turn <span className="text-brand-primary font-serif italic">attention</span> into customers.
            </h1>
            <p className="font-body text-xl font-medium text-gray-600 leading-relaxed md:text-2xl">
              Using performance marketing.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            title="Our Values"
            subtitle="How we operate, make decisions, and drive growth for our partners."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Results over vanity",
                desc: "Followers don't pay the bills. Clicks don't equate to cash. We focus exclusively on bringing you high-quality inquiries and closed deals.",
              },
              {
                title: "Speed over complexity",
                desc: "We don't build massive, convoluted funnels unless you need them. We launch fast, iterate quickly, and find the shortest path to cash.",
              },
              {
                title: "Systems over effort",
                desc: "We build engines. Instead of relying on manual follow-ups, we implement automated systems that sort leads and deliver them hot to your WhatsApp.",
              },
            ].map((value, idx) => (
              <Card key={idx} className="group">
                <div className="mb-8 h-12 w-12 border-b-2 border-brand-primary"></div>
                <h3 className="mb-4 font-heading text-2xl font-medium tracking-tight text-brand-black transition-colors group-hover:text-brand-primary">
                  {value.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[400px] w-full mt-12 overflow-hidden bg-brand-black lg:h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740&auto=format&fit=crop"
          alt="Team collaborating"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="font-heading text-4xl text-brand-white text-center max-w-2xl px-4 md:text-5xl leading-snug font-medium">
              We build the engine once, and fuel it daily.
            </h2>
        </div>
      </section>
    </>
  );
}
