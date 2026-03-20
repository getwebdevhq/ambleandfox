import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'Anthropic-ai', 'Claude-Web', 'OAI-SearchBot'],
        allow: ['/', '/llms.txt'],
      }
    ],
    sitemap: 'https://www.ambleandfox.com/sitemap.xml',
  };
}
