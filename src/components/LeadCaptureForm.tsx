"use client";

import { useState } from "react";

export default function LeadCaptureForm({ industry, location }: { industry?: string, location?: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      industry: formData.get("industry") || industry || "General",
      location: formData.get("location") || location || "Online",
    };

    try {
      const message = `Hi Amble & Fox Media,\n\nI'm interested in a free growth strategy.\n\nName: ${data.name}\nEmail: ${data.email}\nWhatsApp: ${data.whatsapp}\nIndustry: ${data.industry}\nLocation: ${data.location}`;
      const whatsappUrl = `https://wa.me/917866955638?text=${encodeURIComponent(message)}`;
      
      // Redirect or open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try messaging us on WhatsApp directly.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center">
        <h4 className="font-heading text-xl font-bold mb-2">Request Received!</h4>
        <p className="text-sm">We&apos;ll reach out to your WhatsApp shortly to discuss your growth strategy.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full text-left">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all outline-none text-black" 
          placeholder="John Doe"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all outline-none text-black" 
          placeholder="john@company.com"
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
        <input 
          type="tel" 
          id="whatsapp" 
          name="whatsapp" 
          required 
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all outline-none text-black" 
          placeholder="+91 98765 43210"
        />
      </div>

      <input type="hidden" name="industry" value={industry || "General"} />
      <input type="hidden" name="location" value={location || "Online"} />

      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
      
      <button 
        type="submit" 
        disabled={loading}
        className="w-full mt-2 bg-brand-primary text-white font-medium py-4 px-6 rounded-lg hover:bg-brand-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider text-sm shadow-md"
      >
        {loading ? "Submitting..." : "Get Free Growth Strategy"}
      </button>
    </form>
  );
}
