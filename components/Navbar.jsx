"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/utils/content";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.body.classList.add("dark");
      document.body.classList.add("animation-ready");
    } else {
      document.body.classList.add("animation-ready");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.add("animation-ready");
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("animation-ready");
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <motion.aside 
      className="mb-16 tracking-tight"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-col sm:flex-row items-start sm:items-center justify-between relative px-0 pb-0 md:overflow-auto scroll-pr-6 md:relative bg-transparent">
          <AnimatePresence>
            <motion.div
              className={`flex flex-col sm:flex-row sm:space-x-2 w-full sm:w-auto transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "opacity-100 translate-y-0 mt-6 sm:mt-0"
                  : "opacity-0 -translate-y-4 sm:opacity-100 sm:translate-y-0 hidden sm:flex"
              }`}
              initial={false}
              animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
            >
              {Object.entries(navItems).map(([path, { name }], index) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={path}
                    className="relative px-4 py-2.5 text-neutral-700 dark:text-neutral-300 font-medium transition-all duration-300 hover:text-neutral-900 dark:hover:text-neutral-100 group rounded-xl hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 block sm:inline-block"
                  >
                    <span className="relative z-10">
                      {name}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-in-out rounded-full"></span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center space-x-3 absolute sm:relative right-0 top-1 sm:top-0">
            <motion.button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="p-3 rounded-xl hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-all duration-300 group glass"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="text-neutral-300 w-5 h-5 group-hover:text-yellow-400 transition-colors duration-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="text-neutral-700 w-5 h-5 group-hover:text-indigo-600 transition-colors duration-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              className="sm:hidden p-3 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 rounded-xl transition-all duration-300 glass"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </div>
    </motion.aside>
  );
};

export default Navbar;