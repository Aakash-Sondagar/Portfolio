import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { baseUrl } from "@/utils/content";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

const description =
  "Crafting elegant solutions at the intersection of cloud architecture and full-stack development. Transforming complex challenges into seamless experiences through innovative engineering.";

export const metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Aakash Sondagar - Software Engineer",
    template: "%s | Aakash Sondagar - Software Engineer",
  },
  description: description,
  keywords:
    "Aakash Sondagar, Software Engineer, Full Stack Developer, Solution Architect, Cloud Architect, Web Development, System Design, Cloud Solutions, Microservices, Software Architecture, Tech Lead, Mumbai, Engineering Leadership, Cloud Migration, Scalable Systems, Backend Development, Frontend Development, AWS, GCP",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  authors: [{ name: "Aakash Sondagar" }],
  openGraph: {
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Aakash Sondagar - Software Engineer",
      },
    ],
    title: "Aakash Sondagar - Software Engineer",
    description: description,
    url: baseUrl,
    siteName: "Aakash Sondagar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    images: ["/favicon.png"],
    card: "summary_large_image",
    title: "Aakash Sondagar",
    description: description,
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

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aakash Sondagar",
              url: baseUrl,
              jobTitle: "Software Engineer",
              description: description,
              sameAs: [
                "https://github.com/Aakash-Sondagar",
                "https://www.linkedin.com/in/aakash-sondagar",
                "https://x.com/AakashSondagar",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased tracking-tight relative`}
      >
        <ThemeProvider />
        <main className="mx-auto mb-14 w-full max-w-screen-sm flex-1 px-4 pt-8 pb-0 sm:py-14">
          <ViewTransitions>
            <Navbar />
            <div className="prose max-w-none">{children}</div>
            <Footer />
          </ViewTransitions>
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;