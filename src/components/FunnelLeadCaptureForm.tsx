"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";

interface FunnelLeadCaptureFormProps {
  defaultService?: "Ad Creatives" | "New Website" | "Website Redesign";
}

export default function FunnelLeadCaptureForm({
  defaultService = "Ad Creatives",
}: FunnelLeadCaptureFormProps) {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    service: defaultService,
    budget: "£200-£500",
    ad_spend: "£0-£500",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Fire fbq('track','Lead')
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }

      // Extract UTMs
      const utm_source = searchParams.get("utm_source") || "Direct";
      const utm_campaign = searchParams.get("utm_campaign") || "None";
      const utm_content = searchParams.get("utm_content") || "None";

      // 2. Build Message
      const messageTemplate = `Hi, I'm ${formData.name}. Business: ${formData.business}. I need: ${formData.service}. Budget: ${formData.budget}. Monthly Ad Spend: ${formData.ad_spend}. Source: ${utm_source}. Campaign: ${utm_campaign}. Ad: ${utm_content}.`;

      // 3. Encode Message
      const encodedMessage = encodeURIComponent(messageTemplate);

      // 4. Fire fbq('track','Contact')
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Contact");
      }

      // 5. Redirect to WhatsApp
      const whatsappUrl = `https://wa.me/447445763010?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary disabled:opacity-50 text-black";
  const labelClasses = "mb-2 block text-sm font-medium text-gray-700 font-body";

  return (
    <div className="bg-white shadow-soft rounded-2xl p-6 md:p-8 border border-gray-100">
      <h3 className="mb-6 font-heading text-2xl font-bold text-gray-900">
        Ready to scale? Let's talk.
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="John Doe"
            className={inputClasses}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="business" className={labelClasses}>
            Your Business Name *
          </label>
          <input
            type="text"
            id="business"
            required
            placeholder="Acme Corp"
            className={inputClasses}
            value={formData.business}
            onChange={(e) =>
              setFormData({ ...formData, business: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="service" className={labelClasses}>
            Service Needed
          </label>
          <select
            id="service"
            required
            className={inputClasses}
            value={formData.service}
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value as any })
            }
          >
            <option value="Ad Creatives">Ad Creatives</option>
            <option value="New Website">New Website</option>
            <option value="Website Redesign">Website Redesign</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="budget" className={labelClasses}>
              Project Budget
            </label>
            <select
              id="budget"
              required
              className={inputClasses}
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            >
              <option value="£200-£500">£200 - £500</option>
              <option value="£500-£1000">£500 - £1000</option>
              <option value="£1000+">£1000+</option>
            </select>
          </div>

          <div>
            <label htmlFor="ad_spend" className={labelClasses}>
              Monthly Ad Spend
            </label>
            <select
              id="ad_spend"
              required
              className={inputClasses}
              value={formData.ad_spend}
              onChange={(e) =>
                setFormData({ ...formData, ad_spend: e.target.value })
              }
            >
              <option value="£0-£500">£0 - £500</option>
              <option value="£500-£2000">£500 - £2000</option>
              <option value="£2000+">£2000+</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 bg-brand-primary text-brand-black hover:bg-brand-primary/90 font-medium py-4 px-6 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed tracking-wider text-sm shadow flex justify-center uppercase font-heading"
        >
          {loading ? "Redirecting..." : "Get Started Now"}
        </button>
        <p className="mt-4 text-center text-xs text-gray-500 font-body">
          You'll be redirected to WhatsApp. We promise not to spam.
        </p>
      </form>
    </div>
  );
}
