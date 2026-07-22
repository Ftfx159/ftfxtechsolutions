import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import CustomCursor from '@/components/ui/CustomCursor';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'FTFx Tech Solutions | Premium Data Recovery & IT Services Gurgaon',
  description: 'Advanced Data Recovery, Computer Repair, Troubleshoot Mac OS Support, Troubleshoot Windows OS Support, OS Installation Windows and Mac, and Website Development in Gurgaon, Haryana.',
  keywords: 'data recovery near me, data recovery gurgaon, computer repair, troubleshoot mac os support, troubleshoot windows os support, OS Installation windows and mac, IT Solutions Haryana, Website Development',
  metadataBase: new URL('https://ftfxtechsolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FTFx Tech Solutions | Premium Data Recovery & IT Services',
    description: 'Advanced Data Recovery, Professional Computer Repair, Troubleshoot Mac OS and Windows OS Support, OS Installation, & Website Development in Gurgaon.',
    url: 'https://ftfxtechsolutions.com',
    siteName: 'FTFx Tech Solutions',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FTFx Tech Solutions | Data Recovery & IT Services',
    description: 'Advanced Data Recovery, Professional Computer Repair, OS Installation Windows and Mac, & Website Development.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "FTFx Tech Solutions",
      "image": "https://ftfxtechsolutions.com/logo.png",
      "description": "Data Recovery, Computer Repair, Troubleshoot Mac OS and Windows OS Support, OS Installation Windows and Mac in Gurgaon, Haryana.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No. 159, Anand Garden, Near Railway Station",
        "addressLocality": "Gurgaon",
        "addressRegion": "Haryana",
        "postalCode": "122001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.4601,
        "longitude": 77.0263
      },
      "url": "https://ftfxtechsolutions.com",
      "telephone": "+918595691335",
      "priceRange": "$$"
    },
    {
      "@type": "WebSite",
      "url": "https://ftfxtechsolutions.com",
      "name": "FTFx Tech Solutions"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
