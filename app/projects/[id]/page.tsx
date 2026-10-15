import { projects } from '@/constants/projects';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { ArrowLeftIcon, ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';

const getProject = async (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const project = await getProject(id);

  // await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!project) {
    return (
      <>
        <h2 className="text-destructive">Project not found</h2>
        <Link
          href="/projects"
          className="text-muted-foreground flex items-center gap-2"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to projects
        </Link>
      </>
    );
  }

  return (
    <div>
      <div className="navigation">
        <Link
          href="/projects"
          className="flex items-center gap-2 mb-4 text-muted-foreground cursor-pointer w-fit"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to projects
        </Link>
      </div>

      <PageHeader>
        <PageHeaderHeading>{project.title}</PageHeaderHeading>
        <PageHeaderDescription>{project.category}</PageHeaderDescription>
        <PageHeaderDescription>{project.status}</PageHeaderDescription>
        <PageHeaderDescription>{project.overview}</PageHeaderDescription>
      </PageHeader>

      <div id="badges" className="my-4">
        <h2 className="text-lg font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap items-center gap-2">
          {project.technologies.map((tech) => (
            <Badge
              variant="outline"
              className="px-4 text-base shadow-md"
              key={tech}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-light">
        <div id="features" className="my-4">
          <h2 className="text-lg font-semibold">Highlights</h2>
          <ul className="list-disc list-outside">
            {project.description.map((feature) => (
              <li className="ml-4 pl-2" key={feature}>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {project.links.github && (
          <div id="links" className="my-4">
            <h2 className="text-lg font-semibold">Links</h2>

            <div className="flex flex-wrap items-center gap-2">
              <Link href={project.links.github} target="_blank">
                <Badge variant="default" className="px-4 text-base">
                  GitHub <ExternalLinkIcon className="w-4 h-4 -mt-2" />
                </Badge>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
