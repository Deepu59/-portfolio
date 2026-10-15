import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import Pager from '@/components/pager';
import { Button } from '@/components/ui/button';
import { websiteData } from '@/constants/website-data';
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import ContactForm from './ContactForm';

const ContactPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Contact</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Open to internships and collaboration. Say hello!
        </PageHeaderHeading>
        <div className="grid gap-3 mt-6 sm:grid-cols-2 xl:grid-cols-4">
          <Button
            asChild
            variant="outline"
            className="justify-start h-auto py-4"
          >
            <Link href={`mailto:${websiteData.personal.email}`}>
              <Mail className="size-4" />
              {websiteData.personal.email}
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="justify-start h-auto py-4"
          >
            <Link href={`tel:${websiteData.personal.phone}`}>
              <Phone className="size-4" />
              {websiteData.personal.phone}
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="justify-start h-auto py-4"
          >
            <Link
              href={websiteData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="size-4" />
              LinkedIn
            </Link>
          </Button>
          <div className="flex items-center gap-2 rounded-md border border-input bg-background px-4 py-4 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            {websiteData.personal.location}
          </div>
        </div>
      </PageHeader>

      <div className="mt-4">
        <ContactForm />
      </div>

      <Pager
        prevHref="/education"
        nextHref="/stats"
        prevTitle="Education"
        nextTitle="Stats"
      />
    </>
  );
};
export default ContactPage;
