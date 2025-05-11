"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, X } from "lucide-react";
import { navItems } from "@/utils/content";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <aside className="mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative bg-transparent"
          id="nav"
        >
          <div
            className={`flex flex-col sm:flex-row sm:space-x-1 w-full sm:w-auto transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 sm:opacity-100 sm:translate-y-0 hidden sm:flex"
            }`}
          >
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="text-stone-800 dark:text-stone-200 font-medium transition-all relative p-2 group"
              >
                <span className="relative z-10">
                  {name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 absolute sm:relative right-0 top-3 -translate-y-1/2">
            <button
              aria-label="theme"
              onClick={toggleTheme}
              className="p-1 rounded-full hover:bg-stone-100/50 dark:hover:bg-stone-800/50"
            >
              {isDarkMode ? (
                <Sun className="dark:text-stone-200 w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <button
              className="sm:hidden p-2 text-stone-800 dark:text-stone-200 hover:bg-stone-100/50 dark:hover:bg-stone-800/50 rounded-full transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <div className="w-4 h-4 relative">
                  <span className="absolute w-4 h-0.5 bg-current top-1"></span>
                  <span className="absolute w-4 h-0.5 bg-current top-2"></span>
                  <span className="absolute w-4 h-0.5 bg-current top-3"></span>
                </div>
              )}
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;
