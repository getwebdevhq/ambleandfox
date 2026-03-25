import SectionHeading from "@/components/SectionHeading";
import { ProductCard } from "@/components/ui/cards-1";

const PORTFOLIO_SITES = [
  {
    name: "Same",
    category: "Technology",
    url: "https://same-nhxffwzdkj8-latest.netlify.app/",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80"
  },
  {
    name: "The Hawk Cap",
    category: "Finance",
    url: "https://thehawkcap.com/",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80"
  },
  {
    name: "Taupe Lokum",
    category: "Food & Beverage",
    url: "https://taupe-lokum-79d990.netlify.app/",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80"
  },
  {
    name: "Luxury Begonia",
    category: "Fashion & Beauty",
    url: "https://luxury-begonia-6122af.netlify.app/",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?w=500&q=80"
  },
  {
    name: "Microwax",
    category: "Industrial",
    url: "https://microwax.in/",
    imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80"
  },
  {
    name: "Apex Roofers",
    category: "Construction",
    url: "https://apexroofers.netlify.app/",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&q=80"
  },
  {
    name: "Shekhawati Cargo",
    category: "Logistics",
    url: "https://shekhawati-cargo.netlify.app/",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590e?w=500&q=80"
  },
];

export const metadata = {
  title: "Portfolio | Amble & Fox Media",
  description: "Browse some of our latest website projects.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="section-padding bg-brand-background text-center">
        <div className="container-main max-w-3xl">
          <SectionHeading
            title="Our Digital Footprint"
            subtitle="Explore some of our recent website launches that are driving real business growth."
            centered
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PORTFOLIO_SITES.map((site) => (
              <ProductCard
                key={site.url}
                title={site.name}
                category={site.category}
                imageUrl={site.imageUrl}
                href={site.url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
