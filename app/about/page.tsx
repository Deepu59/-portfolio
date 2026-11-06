import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { websiteData } from '@/constants/website-data';
import { Icons } from '@/components/icons';
import { ArrowRight, ExternalLink, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <Image
          src="/dipak.jpg"
          alt={websiteData.personal.name}
          width={160}
          height={160}
          priority
          className="mb-4 size-32 rounded-full border-4 border-primary/20 object-cover shadow-md sm:size-40"
        />
        <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          Open to internships
        </span>
        <PageHeaderHeading>{websiteData.personal.name}</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          {websiteData.personal.headline}
        </PageHeaderHeading>
        <PageHeaderDescription>
          {websiteData.personal.summary}
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href="/projects">
              View Projects
              <ArrowRight className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="rounded-md">
            <Link href="/contact">
              <Mail className="size-4" />
              Contact Me
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <Icons.gitHub className="size-4" />
              GitHub
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              <ExternalLink className="size-4" />
              LinkedIn
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;