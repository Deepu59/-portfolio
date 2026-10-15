import { Fraunces, Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google';

export const fontSans = Plus_Jakarta_Sans({
  variable: '--font-body',
  subsets: ['latin'],
});

export const fontHeading = Fraunces({
  variable: '--font-heading',
  subsets: ['latin'],
});

export const fontMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
