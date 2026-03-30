import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata = {
  title: "Services | Amble & Fox Media",
  description: "End-to-end performance marketing systems.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding bg-brand-background">
        <div className="container-main text-center">
          <SectionHeading
            title="Our Services"
            subtitle="Everything you need to turn attention into revenue."
            className="mb-0"
          />
        </div>
      </section>

      <section className="section-padding bg-white pt-12">
        <div className="container-main">
          <div className="mx-auto max-w-4xl space-y-12">
            {[
              {
                title: "Lead Generation",
                description: "Meta ads that bring real inquiries. We don't care about clicks or impressions. We care about setting up campaigns that predictably fill your WhatsApp with qualified leads.",
              },
              {
                title: "Ad Creatives",
                description: "High-performing creatives designed to convert. We script, design, and edit image and video ads that stop the scroll and hook your ideal customers.",
              },
              {
                title: "Conversion System",
                description: "WhatsApp-based funnel that captures and converts leads. We set up automated welcome messages, quick replies, and lead tracking so no inquiry falls through the cracks.",
              },
            ].map((service, idx) => (
              <Card key={idx} highlighted>
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 text-brand-black">
                  <div className="shrink-0 flex items-center justify-center p-6 rounded-full bg-brand-background">
                    <span className="font-heading text-4xl font-bold text-brand-primary">0{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="mb-4 font-heading text-3xl font-medium">
                      {service.title}
                    </h3>
                    <p className="font-body text-lg leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="mb-8 font-heading text-3xl font-medium tracking-tight text-brand-black">Ready to scale your leads?</h3>
            <Button href="/pricing" variant="primary">
              View Pricing Packages
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
