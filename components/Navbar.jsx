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
    
    // Add animation ready class after a short delay
    setTimeout(() => {
      document.body.classList.add("animation-ready");
    }, 100);
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
        <nav className="relative">
          {/* Top bar with theme toggle and mobile menu button */}
          <div className="flex items-center justify-end mb-6 sm:mb-0">
            {/* Theme toggle */}
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 mr-2"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="sm:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Navigation links */}
          <div
            className={`flex flex-col sm:flex-row sm:space-x-1 w-full transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0 space-y-2 sm:space-y-0"
                : "opacity-0 -translate-y-4 sm:opacity-100 sm:translate-y-0 hidden sm:flex"
            }`}
          >
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 relative px-3 py-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group block"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">
                  {name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;