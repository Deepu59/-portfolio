import { websiteData } from './website-data';

const buildSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const projects = websiteData.projects.map((project) => ({
  title: project.name,
  slug: buildSlug(project.name),
  category: project.category,
  status: project.status,
  overview: project.description[0],
  description: project.description,
  technologies: project.technologies,
  links: {
    github: project.github,
  },
}));
