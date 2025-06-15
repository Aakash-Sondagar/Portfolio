"use client";
import { useState } from "react";
import { Link } from "next-view-transitions";
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
      <div className="mb-8">
        <h2 className="text-headline text-gray-900 dark:text-gray-100 mb-4">
          Writings
        </h2>
        <AnimatedName />
        <p className="text-body text-gray-700 dark:text-gray-300 leading-relaxed">
          A collection of thoughts, learnings, and discoveries from my journey in
          software engineering. Each piece captures insights that shape my
          understanding of technology and development.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 border ${
              activeFilter === tag
                ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-600 shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
            onClick={() => setActiveFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/writings/${blog.slug}`}
            className="block group no-underline"
          >
            <article className="p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-800 hover:shadow-sm">
              <div className="space-y-2">
                <h3 className="text-title text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 m-0">
                  {blog.title}
                </h3>
                {blog.description && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed m-0">
                    {blog.description}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <Small>{blog.date}</Small>
                  <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium group-hover:translate-x-1 transition-transform duration-200">
                    Read more →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WritingComponent;