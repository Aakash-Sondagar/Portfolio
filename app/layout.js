import { Inter, Manrope } from "next/font/google";
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
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon.png", type: "image/png" }
    ],
    shortcut: "/favicon.svg",
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
        className={`${inter.variable} ${manrope.variable} antialiased tracking-tight relative min-h-screen`}
      >
        <ThemeProvider />
        <main className="mx-auto mb-6 w-full max-w-2xl flex-1 px-4 pt-6 pb-0 sm:px-8 sm:pt-16 lg:max-w-3xl">
          <ViewTransitions>
            <Navbar />
            <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-a:font-medium prose-a:no-underline prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-700 dark:hover:prose-a:text-blue-300 prose-code:font-medium prose-code:text-sm prose-pre:bg-gray-50 dark:prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-800">
              {children}
            </div>
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