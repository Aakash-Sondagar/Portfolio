"use client";
import { useEffect } from "react";
import { redirect, notFound } from "next/navigation";
import { getCookie, setViewAndCookie } from "@/utils/commonFunction";

export default function ViewPage({ params }) {
  const { view } = params;

  useEffect(() => {
    const validViews = ["sde", "frontend", "backend"];
    const viewCookie = getCookie("portfolio_view");

    if (!validViews.includes(view)) {
      return notFound();
    }

    if (!viewCookie || !validViews.includes(viewCookie)) {
      setViewAndCookie(view);
    }

    redirect("/");
  }, [view]);

  return null;
}