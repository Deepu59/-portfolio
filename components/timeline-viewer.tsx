import { TimelineViewerData } from '@/types/TimelineViewer.types';

const TimelineViewer = ({ data }: { data: TimelineViewerData[] }) => {
  return (
    <ol className="relative mb-10 border-l border-border/60">
      {data.map((item, index) => {
        return (
          <li className="relative mb-10 ps-6" key={index}>
            <span className="absolute -left-1.25 top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

            <h3 className="mb-1 text-lg font-semibold text-foreground">
              {item.title}
              {item.latest && (
                <span className="ms-3 rounded-sm bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary">
                  Latest
                </span>
              )}
            </h3>

            <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">
              {item.date}
            </time>

            <p className="mb-4 text-base font-normal text-muted-foreground">
              {item.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
};
export default TimelineViewer;
