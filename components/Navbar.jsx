"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { navItems } from "@/utils/content";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove("dark");
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = (event) => {
    setIsTransitioning(true);
    
    const overlay = document.createElement('div');
    overlay.className = 'theme-transition-overlay active';
    document.body.appendChild(overlay);
    
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: fixed;
      top: ${rect.top + rect.height / 2}px;
      left: ${rect.left + rect.width / 2}px;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
      pointer-events: none;
      z-index: 10000;
      transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    `;
    document.body.appendChild(ripple);
    
    requestAnimationFrame(() => {
      ripple.style.width = '200vmax';
      ripple.style.height = '200vmax';
      ripple.style.transform = 'translate(-50%, -50%)';
    });
    
    setTimeout(() => {
      setIsDarkMode((prevMode) => !prevMode);
    }, 150);
    
    setTimeout(() => {
      overlay.remove();
      ripple.remove();
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <aside className="mb-8 md:mb-12">
      <div className="lg:sticky lg:top-20">
        <nav className="flex justify-between items-center">
          {/* Navigation links */}
          <div
            className={`flex flex-col sm:flex-row sm:space-x-6 transition-all duration-300 ${
              isMenuOpen
                ? "opacity-100 translate-y-0 space-y-4 sm:space-y-0 absolute top-16 left-0 right-0 bg-white dark:bg-slate-900 p-4 rounded-lg shadow-lg sm:relative sm:top-0 sm:bg-transparent sm:dark:bg-transparent sm:shadow-none sm:p-0"
                : "opacity-0 -translate-y-4 sm:opacity-100 sm:translate-y-0 hidden sm:flex"
            }`}
          >
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Theme toggle */}
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              disabled={isTransitioning}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="sm:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all duration-200"
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
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;