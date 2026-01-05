import { Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://thehook-menu.vercel.app"),
  title: "THE HOOK - مطعم ذا هوك | مينو مطعم ذا هوك | قائمة طعام",
  description:
    "مينو مطعم ذا هوك - قائمة طعام كاملة تشمل ساندويشات، برغر، وجبات دجاج مقرمش. أطلب الآن من ذا هوك واستمتع بألذ الوجبات السريعة في سوريا. منيو ذا هوك، اسعار ذا هوك",
  keywords: [
    "ذا هوك",
    "THE HOOK",
    "مطعم ذا هوك",
    "مينو ذا هوك",
    "منيو ذا هوك",
    "قائمة طعام ذا هوك",
    "مينو مطعم ذا هوك",
    "منيو مطعم ذا هوك",
    "ذا هوك سوريا",
    "مطاعم ذا هوك",
    "اسعار ذا هوك",
    "وجبات ذا هوك",
    "ساندويشات ذا هوك",
    "برغر ذا هوك",
    "دجاج مقرمش ذا هوك",
    "فلافل ذا هوك",
    "مشاوي ذا هوك",
    "طلب اونلاين ذا هوك",
    "توصيل ذا هوك",
    "مطعم وجبات سريعة",
    "مطاعم سورية",
    "برغر سوري",
    "ساندويش دجاج",
    "كرسبي تشيكن",
    "زنجر",
    "the hook menu",
    "the hook restaurant",
    "the hook syria",
  ],
  authors: [{ name: "THE HOOK Restaurant" }],
  creator: "THE HOOK",
  publisher: "THE HOOK",
  category: "restaurant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_SY",
    url: "https://thehook-menu.vercel.app",
    title: "THE HOOK - مطعم ذا هوك | مينو مطعم ذا هوك",
    description:
      "مينو مطعم ذا هوك - قائمة طعام كاملة تشمل ساندويشات، برغر، وجبات دجاج مقرمش. أطلب الآن من ذا هوك",
    siteName: "THE HOOK Restaurant",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "THE HOOK - مطعم ذا هوك",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "THE HOOK - مطعم ذا هوك | مينو مطعم ذا هوك",
    description:
      "مينو مطعم ذا هوك - قائمة طعام كاملة تشمل ساندويشات، برغر، وجبات دجاج مقرمش",
    images: ["/og-image.jpg"],
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

  // Theme color helps mobile browser UI (address bar) look consistent
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E04A1A" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],

  icons: {
    // Better to declare explicit sizes/types. Using the same PNG is OK.
    icon: [
      {
        url: "/the-hook-restaurant-logo.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/the-hook-restaurant-logo.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    apple: [
      {
        url: "/the-hook-restaurant-logo.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    shortcut: ["/the-hook-restaurant-logo.png"],
  },
};

// Next.js App Router uses a separate export for viewport
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#E04A1A",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://thehook-menu.vercel.app/#restaurant",
    name: "THE HOOK - مطعم ذا هوك",
    alternateName: ["ذا هوك", "مطعم ذا هوك", "THE HOOK"],
    url: "https://thehook-menu.vercel.app",
    image: "https://thehook-menu.vercel.app/og-image.jpg",
    description:
      "مطعم ذا هوك للوجبات السريعة - ساندويشات، برغر، دجاج مقرمش، فلافل، مشاوي",
    servesCuisine: ["Fast Food", "Middle Eastern", "وجبات سريعة"],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SY",
      addressLocality: "سوريا",
    },
    hasMenu: {
      "@type": "Menu",
      name: "مينو مطعم ذا هوك",
      description: "قائمة طعام كاملة",
      inLanguage: "ar",
    },
    acceptsReservations: false,
    keywords:
      "مينو ذا هوك، منيو ذا هوك، مطعم ذا هوك، ساندويشات، برغر، دجاج مقرمش",
  };

  return (
    <html dir="rtl" lang="ar" className={cairo.variable}>
      <body className={`${cairo.className} antialiased`}>
        <Script
          id="ld-json-restaurant"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
