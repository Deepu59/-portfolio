import { websiteData } from './website-data';

export const mySkills = Object.values(websiteData.skills)
  .flat()
  .map((title) => ({ title }));

export const groupedSkills = Object.entries(websiteData.skills).map(
  ([group, items]) => ({
    group,
    items: items.map((title) => ({ title })),
  })
);
