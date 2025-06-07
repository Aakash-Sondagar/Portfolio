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

  const toggleTheme = (event) => {
    setIsTransitioning(true);
    
    // Create a smooth transition overlay effect
    const overlay = document.createElement('div');
    overlay.className = 'theme-transition-overlay active';
    document.body.appendChild(overlay);
    
    // Add a subtle ripple effect from the button
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
    
    // Trigger the ripple animation
    requestAnimationFrame(() => {
      ripple.style.width = '200vmax';
      ripple.style.height = '200vmax';
      ripple.style.transform = 'translate(-50%, -50%)';
    });
    
    // Toggle theme after a short delay for smooth transition
    setTimeout(() => {
      setIsDarkMode((prevMode) => !prevMode);
    }, 150);
    
    // Clean up overlay and ripple
    setTimeout(() => {
      overlay.remove();
      ripple.remove();
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <aside className="mb-6 md:mb-12 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex justify-end">
          {/* Navigation links */}
          <div
            className={`flex flex-col sm:flex-row sm:space-x-1 w-full transition-all duration-500 ease-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0 space-y-2 sm:space-y-0"
                : "opacity-0 -translate-y-4 sm:opacity-100 sm:translate-y-0 hidden sm:flex"
            }`}
          >
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 relative px-3 py-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group block"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">
                  {name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-400 ease-out"></span>
                </span>
              </Link>
            ))}
          </div>

          {/* Top bar with theme toggle and mobile menu button */}
          <div className="flex items-center justify-end mb-6 sm:mb-0">
            {/* Theme toggle */}
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              disabled={isTransitioning}
              className="p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 mr-2 relative overflow-hidden group"
            >
              <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {isDarkMode ? (
                  <Sun className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                ) : (
                  <Moon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </button>

            {/* Mobile menu button */}
            <button
              className="sm:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-300 group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {isMenuOpen ? (
                  <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
                ) : (
                  <Menu className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </div>
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;