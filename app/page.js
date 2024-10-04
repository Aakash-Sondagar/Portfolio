"use client";
import { useEffect, useState, useMemo } from "react";

import SDE from "@/components/views/SDE";
import Frontend from "@/components/views/Frontend";
import Backend from "@/components/views/Backend";

import ViewContext from "@/utils/viewContext";
import { getCookie, setViewAndCookie } from "@/utils/commonFunction";

import AnimatedBackground from "@/components/ui/animated-tabs";
import { Home, Sun, Moon } from "lucide-react";

export default function HomePage({ children }) {
  // Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let darkModePreference = window.localStorage.getItem("darkMode");
    if (!darkModePreference) {
      window.localStorage.darkMode = true;
      darkModePreference = window.localStorage.getItem("darkMode");
    }
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

  const TABS = [
    {
      label: "Home",
      icon: <Home className="h-5 w-5" />,
      action: null,
    },
    {
      label: "DarkMode",
      icon: (
        <div className="relative h-5 w-5">
          <Sun
            className={`absolute h-5 w-5 transform transition-all duration-500 ${
              isDarkMode ? "rotate-0 opacity-0" : "rotate-0 opacity-100"
            }`}
          />
          <Moon
            className={`absolute h-5 w-5 transform transition-all duration-500 ${
              isDarkMode ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
            }`}
          />
        </div>
      ),
      action: toggleDarkMode,
    },
  ];

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
      <div className="fixed bottom-3 left-1/2 max-w-full -translate-x-1/2">
        <div className="flex w-full space-x-2 rounded-xl border dark:border-zinc-950/10 dark:bg-white bg-zinc-900 border-zinc-800 p-2">
          <AnimatedBackground
            defaultValue={["Home", "DarkMode"]}
            className="rounded-lg bg-zinc-800 dark:bg-zinc-100"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.3,
            }}
          >
            {TABS.map((tab) => (
              <button
                key={tab.label}
                data-id={tab.label}
                type="button"
                onClick={() => {
                  tab.action && tab.action();
                }}
                className="inline-flex h-9 w-9 items-center justify-center text-zinc-400 dark:text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-50 dark:data-[checked=true]:text-zinc-950"
              >
                {tab.icon}
              </button>
            ))}
          </AnimatedBackground>
        </div>
      </div>
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
