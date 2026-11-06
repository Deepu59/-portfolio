import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { websiteData } from '@/constants/website-data';

const AboutPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>About Me</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Full-stack development, robotics, and teaching.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am {websiteData.personal.name}, a {websiteData.personal.headline} based in{' '}
          {websiteData.personal.location}. I enjoy turning real problems into clear,
          reliable software and learning by building complete applications.
        </PageHeaderDescription>
      </PageHeader>

      <div className="max-w-3xl space-y-5 text-base leading-7 text-muted-foreground">
        <p>{websiteData.personal.summary}</p>
        <p>
          My current focus is React and Java Spring Boot. I have built REST APIs,
          connected them to relational databases, and designed responsive web
          interfaces with a strong focus on usability and maintainable code.
        </p>
        <p>
          I am also an Education Officer in a robotics division, where I teach
          electronics and guide students through practical projects. This experience
          has made me comfortable explaining technical ideas and collaborating with
          people from different backgrounds.
        </p>
      </div>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};

export default AboutPage;