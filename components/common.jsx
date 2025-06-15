"use client";
import { Link } from "next-view-transitions";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export const Name = () => {
  return (
    <motion.div 
      className="mb-16 fade-in relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1 
        className="text-display text-neutral-900 dark:text-neutral-100 mb-3 gradient-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Aakash Sondagar
      </motion.h1>
      <motion.p 
        className="text-xl text-neutral-600 dark:text-neutral-400 font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Software Engineer
      </motion.p>
      <motion.div
        className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export const AnimatedName = ({ href }) => {
  if (!href) href = "/";
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={href}
        className="inline-flex items-center mb-10 font-medium text-neutral-600 dark:text-neutral-400 no-underline hover:text-neutral-800 dark:hover:text-neutral-200 transition-all duration-300 group"
      >
        <motion.div
          className="mr-2"
          whileHover={{ x: -4 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronLeft className="h-4 w-4" />
        </motion.div>
        <span className="relative">
          Aakash Sondagar
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neutral-400 group-hover:w-full transition-all duration-300"></span>
        </span>
      </Link>
    </motion.div>
  );
};

export const Small = ({ children }) => {
  return (
    <div className="text-caption">
      {children}
    </div>
  );
};

export const getMetaData = (title, canonical) => {
  return {
    title: title,
    alternates: {
      canonical: canonical,
    },
  };
};