import { MetadataRoute } from 'next';

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

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ambleandfox.com';
  
  const staticRoutes = [
    '',
    '/services',
    '/pricing',
    '/ad-library',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const dynamicRoutes = industries.flatMap(industry => 
    locations.map(location => ({
      url: `${baseUrl}/${industry}/${location}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return [...staticRoutes, ...dynamicRoutes];
}
