"use client";
import Main from "./components/Main";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { usePathname } from "next/navigation";

const Page = () => {
  const router = usePathname();
  return (
    <div>
      <SpeedInsights route="/" />
      <Main />
    </div>
  );
};

export default Page;
