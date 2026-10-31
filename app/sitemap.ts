import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/projects',
    '/experience',
    '/education',
    '/skills-tools',
    '/contact',
    '/stats',
  ];

  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
  }));
}
