import { TimelineViewerData } from '@/types/TimelineViewer.types';
import { websiteData } from './website-data';

export const education: TimelineViewerData[] = websiteData.education.map(
  (item) => ({
    title: `${item.degree} · ${item.institution} · ${item.university}`,
    date: `${item.period} · ${item.location}`,
    description: item.description,
  })
);
