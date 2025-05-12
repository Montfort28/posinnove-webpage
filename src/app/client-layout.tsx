"use client";
import React from 'react';
import Script from 'next/script';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { GlobalStateProvider } from '@/contexts/GlobalStateContext';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { generateOrganizationSchema, generateEducationalServiceSchema } from '@/utils/structuredData';
import { NextFont } from 'next/dist/compiled/@next/font';

interface ClientLayoutProps {
  children: React.ReactNode;
  inter: NextFont;
}

export default function ClientLayout({ children, inter }: ClientLayoutProps) {
  const organizationSchema = generateOrganizationSchema();
  const educationalServiceSchema = generateEducationalServiceSchema();

  return (
    <div className={`${inter.className} antialiased`}>
      <Script id="schema-org" type="application/ld+json">
        {JSON.stringify([organizationSchema, educationalServiceSchema])}
      </Script>

      <ErrorBoundary>
        <GlobalStateProvider>
          <ScrollProgress />
          {children}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
        </GlobalStateProvider>
      </ErrorBoundary>
    </div>
  );
}