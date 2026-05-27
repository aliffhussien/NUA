import type { Metadata } from 'next';
import { Syne, Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/ui/Providers';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'N.U.A OS — Healthcare Operating System for Malaysia',
  description:
    'Real-time health monitoring for residents, alerts for staff, FHIR-aligned records. Built for Malaysia.',
  openGraph: {
    title: 'N.U.A OS — Healthcare Operating System',
    description: 'Real-time monitoring. Instant alerts. For every resident, every clinic, every life.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
