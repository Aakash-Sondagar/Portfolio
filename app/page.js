"use client";
import { useEffect, useState, useMemo } from "react";

import SDE from "@/components/views/SDE";
import Frontend from "@/components/views/Frontend";
import Backend from "@/components/views/Backend";

import ViewContext from "@/utils/viewContext";
import { getCookie, setViewAndCookie } from "@/utils/commonFunction";

import { Button } from "@/components/ui/button";

export default function Home({ children }) {
  // Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const darkModePreference = window.localStorage.getItem("darkMode");
    setIsDarkMode(darkModePreference === "true");
    if (darkModePreference === "true") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setIsDarkMode(!isDarkMode);
      document.documentElement.classList.toggle("dark");
      window.localStorage.setItem("darkMode", !isDarkMode);
      setAnimate(false);
    }, 1000);

    return () => clearTimeout(timer);
  };

  // Set View
  const [view, setView] = useState("");

  useEffect(() => {
    const validViews = ["sde", "frontend", "backend"];
    const viewCookie = getCookie("portfolio_view");

    if (!validViews.includes(viewCookie)) {
      setViewAndCookie("sde");
      setView("sde");
    } else {
      setView(viewCookie);
    }
  }, []);

  const ViewComponent = useMemo(() => {
    switch (view) {
      case "frontend":
        return Frontend;
      case "backend":
        return Backend;
      case "sde":
      default:
        return SDE;
    }
  }, [view]);

  const SelectedView = ViewComponent;

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <ViewContext.Provider value={{ view }}>
        <SelectedView className={animate ? "clipPathReveal" : ""}>
          {children}
        </SelectedView>
      </ViewContext.Provider>
      <Button onClick={toggleDarkMode} className="p-2 rounded">
        {isDarkMode ? "Dark" : "Light"} Mode
      </Button>
      {animate && (
        <div
          className={`fixed inset-0 -z-10 ${
            isDarkMode ? " bg-white" : "  bg-black"
          } clipPathReveal`}
        ></div>
      )}
    </div>
  );
}
