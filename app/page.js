"use client";
import { NextSeo, SocialProfileJsonLd } from "next-seo";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Main from "./components/Main";

const Page = () => {
  return (
    <div>
      <NextSeo
        title="Aakash's Portfolio"
        description="Aakash Sondagar - Software Development Engineer"
        canonical="https://aakashsondagar.vercel.app"
        openGraph={{
          url: "https://aakashsondagar.vercel.app/",
          title: "Aakash's Portfolio",
          description:
            "Sarang Yogi - Student at Sardar Patel Institute of Technology, portfolio",
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
        url="https://aakashsondagar.vercel.app/"
        sameAs={[
          "https://www.linkedin.com/in/aakash-sondagar/",
          "https://leetcode.com/u/Aakash_Sondagar/",
          "https://github.com/Aakash-Sondagar",
          "https://x.com/AakashSondagar",
        ]}
      />

      <SpeedInsights route="/" />
      <Analytics />
      <Main />
    </div>
  );
};

export default Page;
