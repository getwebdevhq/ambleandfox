"use client";

import { useState } from "react";
import BrutalistButton from "@/components/BrutalistButton";
import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const text = `Hi Amble & Fox, I have an inquiry:\n\n*Name:* ${data.name}\n*Company:* ${data.company}\n*Email:* ${data.email}\n*Phone/WhatsApp:* ${data.phone}\n*Message:* ${data.message || 'N/A'}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/917866955638?text=${encodedText}`;

      window.open(whatsappUrl, '_blank');
      
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-gray-50 pb-24">
      <section className="section-padding bg-brand-yellow">
        <div className="container-main text-center">
          <SectionHeading
            title="Let's Talk Business"
            subtitle="Ready to build your export website? Send us a message."
            className="mb-0"
          />
        </div>
      </section>

      <section className="container-main mt-[-3rem] px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-5 bg-brand-white border-3 border-brand-black shadow-brutal p-8 md:p-12">
          
          {/* Form Side */}
          <div className="md:col-span-3">
            <h3 className="mb-6 font-heading text-2xl font-bold uppercase">
              Send an Inquiry
            </h3>
            
            {status === "success" && (
              <div className="mb-6 border-3 border-brand-black bg-green-100 p-4 font-body font-bold text-green-800">
                Message sent successfully! We will get back to you shortly.
              </div>
            )}
            
            {status === "error" && (
              <div className="mb-6 border-3 border-brand-black bg-brand-red p-4 font-body font-bold text-white">
                Something went wrong. Please try again or use WhatsApp.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block font-heading text-sm font-bold uppercase">Name *</label>
                  <input required id="name" name="name" type="text" className="brutal-input w-full" />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1 block font-heading text-sm font-bold uppercase">Company *</label>
                  <input required id="company" name="company" type="text" className="brutal-input w-full" />
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1 block font-heading text-sm font-bold uppercase">Email *</label>
                  <input required id="email" name="email" type="email" className="brutal-input w-full" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block font-heading text-sm font-bold uppercase">Phone / WhatsApp *</label>
                  <input required id="phone" name="phone" type="tel" className="brutal-input w-full" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block font-heading text-sm font-bold uppercase">Message</label>
                <textarea id="message" name="message" rows={4} className="brutal-input w-full resize-none"></textarea>
              </div>

              <div className="pt-2">
                <BrutalistButton type="submit" variant="primary" className="w-full">
                  {status === "loading" ? "Sending..." : "Submit Inquiry"}
                </BrutalistButton>
              </div>
            </form>
          </div>

          {/* Contact Info Side */}
          <div className="md:col-span-2 border-t-3 border-brand-black pt-8 md:border-l-3 md:border-t-0 md:pl-8 md:pt-0">
            <h3 className="mb-6 font-heading text-2xl font-bold uppercase">
              Direct Contact
            </h3>
            
            <div className="space-y-6 font-body">
              <div>
                <h4 className="font-heading text-sm font-bold uppercase text-gray-500">Email</h4>
                <a href="mailto:hello@ambleandfox.com" className="text-lg font-bold hover:text-brand-red">hello@ambleandfox.com</a>
              </div>
              
              <div>
                <h4 className="font-heading text-sm font-bold uppercase text-gray-500">Fastest Response</h4>
                <div className="mt-2">
                  <BrutalistButton 
                    href="https://wa.me/917866955638?text=Hi%20Amble%20%26%20Fox%2C%20I%27m%20interested%20in%20an%20export%20website" 
                    external 
                    variant="secondary" 
                  >
                    Message on WhatsApp
                  </BrutalistButton>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
