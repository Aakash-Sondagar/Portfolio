import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Aakash's Portfolio",
  description:
    "Welcome to Aakash's professional portfolio website. Explore projects, skills, and get in touch.",
  keywords:
    "Aakash, Aakash Sondagar, Aakash portfolio, Aakash Sondagar portfolio, portfolio, portfolio website, software engineer, software development engineer, full-stack developer, projects, contact",
  author: "Aakash Sondagar",
  url: "https://aakashsondagar.vercel.app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:url" content={metadata.url} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
