"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Sun, Moon } from "lucide-react";
import { navItems } from "@/utils/content";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="text-stone-800 dark:text-stone-200 font-medium hover:text-indigo-500 dark:hover:text-indigo-300 transition-all flex align-middle relative py-1 px-2 m-1"
                >
                  <h5 className="font-normal">{name}</h5>
                </Link>
              );
            })}
          </div>
          <button onClick={toggleTheme}>
            {isDarkMode ? (
              <Sun className="dark:text-stone-200 w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;
