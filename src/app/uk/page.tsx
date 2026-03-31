import Link from 'next/link';

export default function UKLandingPage() {
  const whatsappNumber = "441234567890"; // TODO: Replace with actual UK number
  const defaultMessage = "Hi, I want a free audit of my website/ads";
  const whatappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Minimal Header for Branding */}
      <header className="w-full py-6 px-6 border-b border-[#222] flex justify-center md:justify-start">
        <div className="max-w-5xl mx-auto w-full flex justify-center md:justify-start">
          <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-white md:text-3xl">
            Amble <span className="text-uk-primary font-serif italic">&amp;</span> Fox Media
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-5xl px-6 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="text-uk-text">We Fix Broken Websites & Ads </span>
          <span className="text-uk-primary block mt-2">That Are Losing You Customers</span>
        </h1>
        <p className="text-lg md:text-xl text-uk-subtext max-w-3xl mb-10">
          Get more enquiries in 7 days with a conversion-focused website or high-performing ad creatives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
          <Link href={whatappLink} target="_blank" className="bg-uk-primary hover:bg-[#E65A00] text-white font-semibold py-4 px-8 rounded-md transition-colors text-lg text-center w-full sm:w-auto shadow-[0_0_20px_rgba(255,106,0,0.3)]">
            Get Free 2-Minute Audit
          </Link>
           <a href="#pricing" className="bg-transparent border border-uk-subtext hover:border-uk-text text-uk-text font-medium py-4 px-8 rounded-md transition-colors text-lg text-center w-full sm:w-auto">
            View Pricing
          </a>
        </div>
        <p className="text-sm text-uk-subtext font-medium flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-uk-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
          Built for UK businesses. No contracts. No fluff.
        </p>
      </section>

      {/* Problem Section */}
      <section className="w-full bg-[#111111] py-20 px-6 border-y border-[#222]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            You don&apos;t have a traffic problem. <br className="hidden md:block"/><span className="text-uk-primary mt-2 block">You have a conversion problem.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#0B0B0B] p-8 rounded-xl border border-[#222]">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="bg-[#FF3B30] text-white w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold">X</span>
                The Ads Problem
              </h3>
              <ul className="space-y-4">
                {["Spending on ads but getting poor results", "Low CTR and weak creatives", "Wasting money on Meta/Google"].map((pt, i) => (
                  <li key={i} className="flex gap-3 text-uk-subtext">
                     <span className="text-[#FF3B30] mt-1 shrink-0">→</span>
                     {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0B0B0B] p-8 rounded-xl border border-[#222]">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="bg-[#FF3B30] text-white w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold">X</span>
                The Website Problem
              </h3>
              <ul className="space-y-4">
                {["Visitors not converting into enquiries", "No clear call-to-action", "Outdated design killing trust"].map((pt, i) => (
                  <li key={i} className="flex gap-3 text-uk-subtext">
                     <span className="text-[#FF3B30] mt-1 shrink-0">→</span>
                     {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Section */}
       <section className="w-full py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-uk-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
            We don&apos;t design websites. <br/><span className="text-uk-accent block mt-2">We build lead systems.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              "No unnecessary design fluff",
              "No long strategy decks",
              "No endless revisions",
              "Focused purely on generating enquiries"
            ].map((pt, i) => (
              <div key={i} className="bg-[#111] p-6 rounded-lg border border-[#222] flex flex-col items-center text-center">
                 <div className="text-uk-accent mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <p className="text-sm text-uk-subtext font-medium">{pt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer / Pricing Section */}
      <section id="pricing" className="w-full bg-[#111111] py-24 px-6 border-y border-[#222]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose What You Need Fixed</h2>
            <p className="text-uk-subtext text-lg">One-off projects. No recurring retainers required.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Offer 1 */}
            <div className="bg-[#0B0B0B] border border-[#222] rounded-2xl p-8 flex flex-col hover:border-[#444] transition-colors relative z-0">
              <div className="mb-2 text-sm text-uk-subtext font-semibold uppercase tracking-wider">Best for ad performance</div>
              <h3 className="text-2xl font-bold mb-2">Ad Creative Pack</h3>
              <div className="text-3xl font-bold text-uk-primary mb-6">£249</div>
              <p className="text-uk-text mb-8 min-h-[48px]">20 High-Converting Ad Creatives</p>
              <ul className="space-y-4 mb-10 flex-1">
                 {["Scroll-stopping designs", "Direct-response copy", "Built for conversions", "Ready to run ads"].map((f, i) => (
                    <li key={i} className="flex gap-3 text-sm text-uk-subtext">
                      <svg className="w-5 h-5 text-uk-primary shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      {f}
                    </li>
                 ))}
              </ul>
              <Link href={whatappLink} target="_blank" className="w-full block text-center bg-[#111] hover:bg-[#222] border border-[#333] text-white font-medium py-3 rounded-md transition-colors">
                Get Creatives
              </Link>
            </div>

            {/* Offer 3 (Highlighted) */}
             <div className="bg-[#151515] border border-uk-primary rounded-2xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(255,106,0,0.15)] z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-uk-primary text-black font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <div className="mb-2 text-sm text-uk-accent font-semibold uppercase tracking-wider">Best for overall growth</div>
              <h3 className="text-2xl font-bold mb-2">7-Day Lead Engine</h3>
              <div className="text-3xl font-bold text-uk-primary mb-6">£799</div>
              <p className="text-uk-text mb-8 min-h-[48px]">Full website + integrated lead system</p>
              <ul className="space-y-4 mb-10 flex-1">
                 {["Multi-page website", "WhatsApp + form funnel", "Mobile optimisation", "Conversion copywriting", "Ready to generate enquiries"].map((f, i) => (
                    <li key={i} className="flex gap-3 text-sm text-uk-text">
                      <svg className="w-5 h-5 text-uk-accent shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      {f}
                    </li>
                 ))}
              </ul>
              <Link href={whatappLink} target="_blank" className="w-full block text-center bg-uk-primary hover:bg-[#E65A00] text-white font-bold py-4 rounded-md transition-colors text-lg">
                Build My Lead Engine
              </Link>
            </div>

            {/* Offer 2 */}
            <div className="bg-[#0B0B0B] border border-[#222] rounded-2xl p-8 flex flex-col hover:border-[#444] transition-colors relative z-0">
              <div className="mb-2 text-sm text-uk-subtext font-semibold uppercase tracking-wider">Best for low-converting websites</div>
              <h3 className="text-2xl font-bold mb-2">Landing Page Fix</h3>
              <div className="text-3xl font-bold text-uk-primary mb-6">From £499</div>
              <p className="text-uk-text mb-8 min-h-[48px]">Conversion-focused landing page</p>
              <ul className="space-y-4 mb-10 flex-1">
                 {["Redesign for conversions", "Clear CTA structure", "Lead capture setup", "Fast delivery"].map((f, i) => (
                    <li key={i} className="flex gap-3 text-sm text-uk-subtext">
                      <svg className="w-5 h-5 text-uk-primary shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      {f}
                    </li>
                 ))}
              </ul>
              <Link href={whatappLink} target="_blank" className="w-full block text-center bg-[#111] hover:bg-[#222] border border-[#333] text-white font-medium py-3 rounded-md transition-colors">
                Fix My Website
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-uk-primary/10 via-uk-primary/50 to-uk-primary/10 -z-10"></div>
            
            {[
              { step: "1", title: "Send Your Website or Ads", desc: "We analyse where you're losing leads" },
              { step: "2", title: "We Identify Leaks", desc: "Quick audit with actionable fixes" },
              { step: "3", title: "We Fix & Launch", desc: "You start getting enquiries" }
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-uk-primary text-black font-bold text-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,106,0,0.4)]">
                   {s.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-uk-subtext">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full bg-uk-primary text-black py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Changes After Working With Us</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Higher conversion rates",
              "More inbound enquiries",
              "Better ROI on ads",
              "Less wasted spend"
            ].map((pt, i) => (
               <div key={i} className="bg-black/10 backdrop-blur-sm p-6 rounded-lg flex items-center gap-4 text-black font-semibold text-lg border border-black/5">
                 <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                 {pt}
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="w-full py-32 px-6 flex flex-col items-center text-center pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
          You&apos;re already getting traffic. <br className="hidden md:block"/><span className="text-uk-primary mt-2 block">You&apos;re just not converting it.</span>
        </h2>
        <p className="text-xl text-uk-subtext mb-10">We&apos;ll show you exactly what&apos;s broken.</p>
        <Link href={whatappLink} target="_blank" className="bg-uk-primary hover:bg-[#E65A00] text-white font-bold py-5 px-10 rounded-md transition-colors text-xl shadow-[0_0_30px_rgba(255,106,0,0.4)] hover:shadow-[0_0_40px_rgba(255,106,0,0.6)]">
          Get Free 2-Minute Audit on WhatsApp
        </Link>
      </section>

      {/* Simple Footer */}
      <footer className="w-full bg-[#050505] py-12 px-6 border-t border-[#222] flex flex-col items-center pb-24 md:pb-12">
        <Link href="/" className="font-heading text-xl font-bold tracking-tight text-uk-subtext mb-4">
          Amble <span className="text-uk-primary font-serif italic">&amp;</span> Fox Media
        </Link>
        <p className="text-sm text-[#555]">&copy; {new Date().getFullYear()} Amble & Fox. All rights reserved.</p>
      </footer>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0B0B0B]/90 backdrop-blur-md border-t border-[#222] z-50 flex items-center justify-between gap-4 md:hidden">
         <div className="text-sm text-uk-text font-bold w-1/3">Need more leads?</div>
         <Link href={whatappLink} target="_blank" className="bg-uk-primary text-white text-center font-bold py-3 px-4 rounded-md w-2/3 shadow-lg">
           Get Free Audit
         </Link>
      </div>

    </div>
  );
}
