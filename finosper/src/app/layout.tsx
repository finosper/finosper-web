import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header, Footer, PageTransition } from "@/components/layout";
import SpeedDial from "@/components/layout/speed-dial";
import NextTopLoader from "nextjs-toploader";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f1b3d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Professional CA Consultancy in Kanpur`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "GST Registration India",
    "Income Tax Filing Kanpur",
    "Chartered Accountant Kanpur",
    "CA Shrish Tiwari",
    "Startup Compliance India",
    "Tax Planning India",
    "Company Incorporation",
  ],
  authors: [{ name: siteConfig.caName }],
  creator: siteConfig.caName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: `${siteConfig.name} — ${siteConfig.caName}`,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.caName}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": siteConfig.name,
    "image": `${siteConfig.url}/logo.png`,
    "@id": siteConfig.url,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kanpur",
      "addressLocality": "Kanpur",
      "addressRegion": "UP",
      "postalCode": "208001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.4474,
      "longitude": 80.3319
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "19:00"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-navy selection:bg-gold/30`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextTopLoader
          color="#c5a55a"
          height={3}
          showSpinner={false}
          shadow="0 0 10px #c5a55a,0 0 5px #c5a55a"
          easing="ease"
          speed={200}
        />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 overflow-hidden">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
        <SpeedDial />
      </body>
    </html>
  );
}
