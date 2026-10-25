import type { Metadata, Viewport } from "next";
import { INSTITUTE_INFO, FAQS } from "@/lib/constants";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a162e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://niell.in"),
  title: "NIELL Spoken English Classes | Join and Feel the Changes | Best English Coaching in Indore | By Ranjan Singh",
  description:
    "Join and Feel the Changes with NIELL Spoken English Classes in Vijay Nagar, Indore (Behind Radisson Hotel). Mentored by Ranjan Singh. Master spoken English fluency, hesitation removal, grammar, public speaking & interview preparation. Book a free demo class today!",
  keywords: [
    "NIELL spoken english classes",
    "NIELL English Indore",
    "Best spoken English classes in Indore",
    "Spoken English institute Vijay Nagar Indore",
    "Ranjan Singh English classes Indore",
    "English speaking course Indore",
    "Spoken English near Radisson Hotel Indore",
    "English fluency coaching Indore",
    "Personality development classes Indore",
    "Interview preparation institute Indore",
    "Spoken English for Hindi medium students Indore",
    "IELTS speaking coaching Indore",
  ],
  authors: [{ name: "Ranjan Singh", url: "https://niell.in" }],
  creator: "Ranjan Singh",
  publisher: "NIELL Spoken English Classes",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "NIELL Spoken English Classes Indore | Mentored by Ranjan Singh",
    description:
      "Speak fluent English with complete confidence in 60 days. Small batches, daily stage practice, and interview prep in Vijay Nagar, Indore. Call +91 6266394121.",
    url: "https://niell.in",
    siteName: "NIELL Spoken English Classes",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 447,
        height: 447,
        alt: "NIELL Spoken English Classes Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NIELL Spoken English Classes | Vijay Nagar, Indore",
    description:
      "Master English fluency & personality development under expert mentor Ranjan Singh. Behind Radisson Hotel, Vijay Nagar, Indore.",
    images: ["/logo.png"],
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
  // Rich Structured Data (JSON-LD) for Google Knowledge Graph & Local Pack SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": "https://niell.in/#organization",
        "name": "NIELL Spoken English Classes",
        "alternateName": "NIELL English Classes Indore",
        "slogan": "Join and Feel the Changes",
        "logo": "https://niell.in/logo.png",
        "image": "https://niell.in/logo.png",
        "description":
          "Premier English speaking and communication training institute in Indore founded by Ranjan Singh.",
        "url": "https://niell.in",
        "telephone": "+91-6266394121",
        "email": "worldniell@gmail.com",
        "priceRange": "₹₹",
        "founder": {
          "@type": "Person",
          "name": "Ranjan Singh",
          "jobTitle": "Founder & Master English Trainer",
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Behind Radisson Hotel, near H.P. Petrol Pump, Vijay Nagar",
          "addressLocality": "Indore",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "452010",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 22.7503657,
          "longitude": 75.9000074,
        },
        "hasMap": "https://maps.app.goo.gl/EFe2FCNhxMoi4CM36",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "07:00",
            "closes": "20:30",
          },
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "ratingCount": "350",
          "reviewCount": "320",
        },
        "areaServed": {
          "@type": "City",
          "name": "Indore",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://niell.in/#faq",
        "mainEntity": FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Indore" />
        <meta name="geo.position" content="22.7503657;75.9000074" />
        <meta name="ICBM" content="22.7503657, 75.9000074" />
      </head>
      <body className="antialiased min-h-screen selection:bg-blue-600 selection:text-white pb-20 md:pb-0">
        {children}
      </body>
    </html>
  );
}
