"use client";
import { useState } from "react";
import { Link } from "next-view-transitions";
import { motion, AnimatePresence } from "framer-motion";
import { allBlogs } from "@/utils/blogs";
import { AnimatedName, Small } from "@/components/common";

const WritingComponent = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const uniqueTags = ["All", ...new Set(allBlogs.flatMap((blog) => blog.tags))];

  const filteredBlogs =
    activeFilter === "All"
      ? allBlogs
      : allBlogs.filter((blog) => blog.tags.includes(activeFilter));

  const blogs = filteredBlogs.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="space-content">
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-headline text-neutral-900 dark:text-neutral-100 mb-6">
          Writings
        </h2>
        <AnimatedName />
        <p className="text-body text-neutral-700 dark:text-neutral-300 leading-relaxed">
          A collection of thoughts, learnings, and discoveries from my journey in
          software engineering. Each piece captures insights that shape my
          understanding of technology and development.
        </p>
      </motion.div>

      <motion.div 
        className="flex flex-wrap gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {uniqueTags.map((tag, index) => (
          <motion.button
            key={tag}
            className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 border ${
              activeFilter === tag
                ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-600 shadow-sm"
                : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-200"
            }`}
            onClick={() => setActiveFilter(tag)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.button>
        ))}
      </motion.div>

      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <AnimatePresence mode="wait">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              layout
            >
              <Link
                href={`/writings/${blog.slug}`}
                className="block group no-underline"
              >
                <motion.article 
                  className="p-6 rounded-xl hover:bg-neutral-50/50 dark:hover:bg-neutral-900/50 transition-all duration-300 border border-transparent hover:border-neutral-200/50 dark:hover:border-neutral-800/50 hover:shadow-sm card-interactive"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="space-y-3">
                    <h3 className="text-title text-neutral-800 dark:text-neutral-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 m-0">
                      {blog.title}
                    </h3>
                    {blog.description && (
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed m-0">
                        {blog.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <Small>{blog.date}</Small>
                      <motion.span 
                        className="text-sm text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        Read more →
                      </motion.span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default WritingComponent;