import { TimelineViewerData } from '@/types/TimelineViewer.types';
import { websiteData } from './website-data';

export const experiences: TimelineViewerData[] = websiteData.experience.map(
  (item) => ({
    title: `${item.title} · ${item.company}`,
    date: item.period,
    description: item.responsibilities.join(' '),
    latest: item.current,
  })
);
