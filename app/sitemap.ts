import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { projects } from '@/constants/projects';

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
    ...projects.map((project) => `/projects/${project.slug}`),
  ];

  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
  }));
}