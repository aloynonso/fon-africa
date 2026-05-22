import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://fon.africa'),
  title: {
    default: 'Father of Nations · Pan-African Industrial Group',
    template: '%s · FON',
  },
  description:
    'Father of Nations (FON) develops large-scale infrastructure, energy, agriculture, technology, and industrial ecosystems designed to accelerate economic growth and long-term prosperity across Africa.',
  keywords: [
    'Father of Nations',
    'FON',
    'Pan-African',
    'African investment',
    'African infrastructure',
    'renewable energy Africa',
    'agro-industrial Africa',
    'African technology',
    'sovereign capital Africa',
  ],
  authors: [{ name: 'Father of Nations' }],
  creator: 'Father of Nations',
  publisher: 'Father of Nations Holdings',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://fon.africa',
    siteName: 'Father of Nations',
    title: 'Father of Nations · Pan-African Industrial Group',
    description:
      'Building transformative industries across Africa. Energy, Agro, Technology, Minerals, Infrastructure.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Father of Nations · FON',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Father of Nations',
    description: 'Pan-African Industrial Group',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="grain-overlay">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
