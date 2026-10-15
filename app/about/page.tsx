import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { websiteData } from '@/constants/website-data';

const AboutMePage = () => {
  const currentRole = websiteData.experience[0];

  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About {websiteData.personal.name}</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Learning fast, building carefully, and explaining clearly.
        </PageHeaderHeading>
        <PageHeaderDescription>
          {websiteData.personal.summary}
        </PageHeaderDescription>

        <PageHeaderDescription>
          I currently work as {currentRole.title} at {currentRole.company},
          where I teach robotics, and I am studying BCA at Tribhuvan University.
          On the software side I build full-stack apps with React, Spring Boot,
          and PostgreSQL.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I am actively looking for an internship. I like simple systems, clean
          code, and learning from teammates who are better than me.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
