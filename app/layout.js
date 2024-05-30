"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { NextSeo, SocialProfileJsonLd } from "next-seo";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./globals.css";

export default function RootLayout({ children }) {
  const router = useRouter();
  const metadata = {
    title: "Aakash's Portfolio",
    description:
      "Welcome to Aakash's professional portfolio website. Explore projects, skills, and get in touch.",
    keywords:
      "Aakash, Aakash Sondagar, Aakash portfolio, Aakash Sondagar portfolio, portfolio, portfolio website, software engineer, software development engineer, full-stack developer, projects, contact",
    author: "Aakash Sondagar",
    url: "https://aakashsondagar.vercel.app",
  };

  return (
    <html lang="en">
      <NextSeo
        title="Aakash Sondagar's Portfolio"
        description="Aakash Sondagar - Software Engineer"
        canonical="https://aakashsondagar.vercel.app"
        openGraph={{
          url: "https://aakashsondagar.vercel.app",
          title: "Aakash Sondagar's Portfolio",
          description: "Aakash Sondagar - Software Engineer",
          type: "profile",
          profile: {
            firstName: "Aakash",
            lastName: "Sondagar",
            username: "AakashSondagar",
            gender: "male",
          },
        }}
        noindex={false}
        nofollow={false}
      />
      <SocialProfileJsonLd
        type="Person"
        name="Aakash Sondagar"
        url="https://aakashsondagar.vercel.app"
        sameAs={[
          "https://www.linkedin.com/in/aakash-sondagar/",
          "https://github.com/Aakash-Sondagar",
          "https://leetcode.com/u/Aakash_Sondagar/",
          "https://x.com/AakashSondagar",
        ]}
      />
      <Head>
        <title>{metadata.title}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SpeedInsights route={router.pathname} />
      <body>{children}</body>
    </html>
  );
}
