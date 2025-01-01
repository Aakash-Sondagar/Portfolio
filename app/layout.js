import { Inter, Manrope } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

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
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://aakashsondagar.vercel.app/sitemap.xml',
  };
}

export const metadata = {
  metadataBase: new URL("https://aakashsondagar.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Aakash Sondagar - Software Engineer",
    template: "%s | Aakash Sondagar - Software Engineer",
  },
  description:
    "Software Engineer specializing in full-stack development with expertise in frontend, backend, and cloud infrastructure. Currently working at Wohlig Transformations.",
  openGraph: {
    title: "Aakash Sondagar - Software Engineer",
    description:
      "Software Engineer specializing in full-stack development with expertise in frontend, backend, and cloud infrastructure.",
    url: "https://aakashsondagar.vercel.app",
    siteName: "Aakash Sondagar",
    type: "website",
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

const RootLayout = ({ children }) => {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.variable} ${manrope.variable} antialiased tracking-tight relative flex flex-col`}
        >
          <ThemeProvider />
          <main className="mx-auto mb-14 w-full max-w-screen-sm flex-1 px-4 pt-8 pb-0 sm:py-14">
            <Navbar />
            <div className="prose">{children}</div>
            <Footer />
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
};

export default RootLayout;

// important -> Page
// code required