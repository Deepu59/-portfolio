import { websiteData } from '@/constants/website-data';

export const siteConfig = {
  name: websiteData.personal.name,
  url: websiteData.personal.website,
  description: websiteData.personal.summary,
  keywords: [
    websiteData.personal.name,
    websiteData.personal.headline,
    websiteData.personal.location,
    'Portfolio',
    'Projects',
    'Skills',
    'Experience',
    'Education',
    'Contact',
    ...websiteData.skills.languages,
    ...websiteData.skills.frontend,
    ...websiteData.skills.backend,
    ...websiteData.skills.databases,
  ],
  links: {
    github: websiteData.personal.github,
    githubProfile: websiteData.personal.github,
    linkedin: websiteData.personal.linkedin,
    email: `mailto:${websiteData.personal.email}`,
    githubUsername: 'Deepu59',
  },
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: '#fbf6f3',
  dark: '#1f1a1c',
};
