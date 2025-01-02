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

export const metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Aakash Sondagar - Software Engineer",
    template: "%s | Aakash Sondagar - Software Engineer",
  },
  description:
    "Software Engineer specializing in full-stack development with expertise in frontend, backend, and cloud infrastructure.",
  keywords:
    "Aakash, Aakash Sondagar, portfolio, Software Engineer, Full Stack Developer, B.Tech, Mumbai",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  authors: [{ name: "Aakash Sondagar" }],
  openGraph: {
    title: "Aakash Sondagar - Software Engineer",
    description:
      "Software Engineer specializing in full-stack development with expertise in frontend, backend, and cloud infrastructure.",
    url: baseUrl,
    siteName: "Aakash Sondagar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakash Sondagar",
    description:
      "Professional portfolio of Aakash Sondagar, curious about Software Engineering, technology and AI",
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
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} antialiased tracking-tight relative`}
      >
        <ThemeProvider />
        <main className="mx-auto mb-14 w-full max-w-screen-sm flex-1 px-4 pt-8 pb-0 sm:py-14">
          <ViewTransitions>
            <Navbar />
            <div className="prose">{children}</div>
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
