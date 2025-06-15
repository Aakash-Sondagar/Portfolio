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
    <div>
      <h2 className="text-gray-900 dark:text-gray-100 font-semibold text-2xl mt-8 mb-4">
        Writings
      </h2>
      <AnimatedName />
      <p className="text-gray-700 dark:text-gray-300 font-normal mb-6 leading-relaxed">
        A collection of thoughts, learnings, and discoveries from my journey in
        software engineering. Each piece captures insights that shape my
        understanding of technology and development.
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-300 border ${
              activeFilter === tag
                ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-600"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            }`}
            onClick={() => setActiveFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <ul className="list-disc pl-6 space-y-4 marker:text-gray-600 dark:marker:text-gray-400">
        {blogs.map((blog) => (
          <li
            key={blog.slug}
            className="transition-all duration-300 hover:translate-x-1"
          >
            <Link
              href={`/writings/${blog.slug}`}
              className="no-underline block mb-1 group"
            >
              <div>
                <h6 className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {blog.title}
                </h6>
                {blog.description && (
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-400 font-light m-0 text-sm">
                      {blog.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Small>{blog.date}</Small>
                      <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium group-hover:underline">
                        Read more →
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WritingComponent;