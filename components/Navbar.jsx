"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { navItems } from "@/utils/content";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <aside className="mb-12 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between relative px-0 pb-0 fade-in md:overflow-auto scroll-pr-6 md:relative bg-transparent"
          id="nav"
        >
          <div
            className={`flex flex-col sm:flex-row sm:space-x-1 w-full sm:w-auto transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0 mt-4 sm:mt-0"
                : "opacity-0 -translate-y-4 sm:opacity-100 sm:translate-y-0 hidden sm:flex"
            }`}
          >
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="relative px-3 py-2 text-gray-700 dark:text-gray-300 font-medium transition-all duration-200 hover:text-gray-900 dark:hover:text-gray-100 group rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              >
                <span className="relative z-10">
                  {name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-500 dark:bg-indigo-400 group-hover:w-full transition-all duration-300 ease-in-out rounded-full"></span>
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2 absolute sm:relative right-0 top-1 sm:top-0">
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
            >
              {isDarkMode ? (
                <Sun className="text-gray-300 w-4 h-4 group-hover:text-yellow-400 transition-colors duration-200" />
              ) : (
                <Moon className="text-gray-700 w-4 h-4 group-hover:text-indigo-600 transition-colors duration-200" />
              )}
            </button>

            <button
              className="sm:hidden p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;