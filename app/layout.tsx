import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Shri Khatu Shyam Transport Co. | Best Transport Company in Noida, India',
  description: 'Shri Khatu Shyam Transport Company – Trusted road freight & logistics across India. Full load, part load, door-to-door delivery. 24x7 service. Call 9410461549.',
  keywords: 'transport company Noida, truck booking Noida, goods transport India, road freight, logistics company UP, best transport company, full truck load, part load transport',
  openGraph: {
    title: 'Shri Khatu Shyam Transport Co. | Best Transport Company in Noida',
    description: 'Reliable road freight & logistics solutions all over India. Full load, part load, 24x7 service from Noida.',
    url: 'https://www.shrikhatushyamtransportcompany.com',
    siteName: 'Shri Khatu Shyam Transport Co.',
    locale: 'en_IN',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.shrikhatushyamtransportcompany.com' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TransportService',
  name: 'Shri Khatu Shyam Transport Co.',
  url: 'https://www.shrikhatushyamtransportcompany.com',
  telephone: '+91-9410461549',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-239, IInd Floor, T.P. Nagar, Sector-69',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201307',
    addressCountry: 'IN',
  },
  founder: { '@type': 'Person', name: 'Satendra Verma' },
  foundingDate: '2023-10-29',
  description: 'Trusted road freight and logistics company providing full load, part load, and door-to-door transport across India.',
  areaServed: 'India',
  openingHours: 'Mo-Su 00:00-24:00',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ margin: 0, background: '#f5f6fa' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
