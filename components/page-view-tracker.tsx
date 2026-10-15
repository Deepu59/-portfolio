'use client';

import { setViewsServerAction } from '@/app/actions/getAndSetViewsServerAction';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

interface PageViewTrackerProps {
  enabled: boolean;
}

export function PageViewTracker({ enabled }: PageViewTrackerProps) {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!enabled || !pathname || lastTrackedPath.current === pathname) {
      return;
    }

    lastTrackedPath.current = pathname;
    void setViewsServerAction()
      .then((result) => {
        if (!result.success) {
          console.error('Failed to record page view:', result.message);
        }
      })
      .catch((error: unknown) => {
        console.error('Failed to record page view:', error);
      });
  }, [enabled, pathname]);

  return null;
}
