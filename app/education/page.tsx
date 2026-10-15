import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';
import { websiteData } from '@/constants/website-data';

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Formal study, hands-on practice, and building real projects.
        </PageHeaderHeading>
        <PageHeaderDescription>
          {websiteData.personal.summary}
        </PageHeaderDescription>

        <PageHeaderDescription>
          I am pursuing my BCA at Nepalgunj Campus of Management and Technology
          under Tribhuvan University, and I keep learning by building full-stack
          projects and teaching robotics.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={education} />

      <Pager
        prevHref="/experience"
        nextHref="/contact"
        prevTitle="Experience"
        nextTitle="Contact"
      />
    </>
  );
};
export default EducationPage;
