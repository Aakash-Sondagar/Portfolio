"use client";
import Main from "./components/Main";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const Page = () => {
  return (
    <div>
      <SpeedInsights route="/" />
      <Analytics />
      <Main />
    </div>
  );
};

export default Page;
