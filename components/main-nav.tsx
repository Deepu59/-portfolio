import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from './icons';

export function MainNav() {
  return (
    <div className="hidden mr-4 md:flex">
      <Link href="/" className="flex items-center gap-2 mr-4 lg:mr-6">
        <Icons.logo />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link href="/">Home</Link>

        <Link href="/projects" className={cn('flex gap-1')}>
          Projects
        </Link>
        <Link href="/contact" className={cn('flex gap-1')}>
          Contact
        </Link>
      </nav>
    </div>
  );
}
