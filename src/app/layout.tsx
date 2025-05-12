import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { SITE_CONFIG } from '@/utils/constants';
import ClientLayout from '@/app/client-layout';

// Optimize font loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: true,
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: true,
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.title}`,
  },
  description: SITE_CONFIG.description,
  keywords: ['education technology', 'project-based learning', 'student employability', 'industry collaboration', 'experiential learning'],
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.defaultImage],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.defaultImage],
    creator: '@posinnove',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#2563eb',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://images.posinnove.com" crossOrigin="" />
        <link rel="preload" href="/images/Hero2.jpg" as="image" type="image/jpeg"/>
      </head>
      <body>
        <ClientLayout inter={inter}>{children}</ClientLayout>
      </body>
    </html>
  );
}