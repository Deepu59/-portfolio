import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Badge } from '@/components/ui/badge';
import { groupedSkills } from '@/constants';
import { websiteData } from '@/constants/website-data';

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          The tools I use to build and ship full-stack projects.
        </PageHeaderHeading>
        <PageHeaderDescription>
          {websiteData.personal.summary}
        </PageHeaderDescription>
      </PageHeader>

      <div className="my-6 grid gap-4">
        {groupedSkills.map((group) => (
          <section
            key={group.group}
            className="rounded-2xl border border-border/60 bg-card/60 p-4 shadow-sm backdrop-blur-sm"
          >
            <div className="mb-3 flex items-center gap-2">
              <Badge className="rounded-full border border-border/60 bg-background px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {group.group}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge
                  key={item.title}
                  className="inline-flex items-center rounded-full border border-border/60 bg-secondary/10 px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-secondary/20"
                >
                  {item.title}
                </Badge>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Pager
        prevHref="/projects"
        nextHref="/experience"
        prevTitle="Projects"
        nextTitle="Experience"
      />
    </>
  );
};
export default SkillsToolsPage;
