import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { experiences } from '@/constants/experience';
import { websiteData } from '@/constants/website-data';

const ExperiencePage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Experience</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Where I am learning, teaching, and growing as a developer.
        </PageHeaderHeading>
        <PageHeaderDescription>
          {websiteData.personal.summary}
        </PageHeaderDescription>
      </PageHeader>

      <div className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">Work</h2>
        <TimelineViewer data={experiences} />
      </div>

      <Pager
        prevHref="/skills-tools"
        nextHref="/education"
        prevTitle="Skills & Tools"
        nextTitle="Education"
      />
    </>
  );
};
export default ExperiencePage;
