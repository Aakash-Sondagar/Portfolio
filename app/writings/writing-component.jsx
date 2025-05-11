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
      <h2 className="text-stone-800 dark:text-stone-200 font-medium mt-8">
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
            className={`px-3 py-1 text-sm rounded-lg transition-all duration-300 ${
              activeFilter === tag
                ? "bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200"
                : "text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800/50"
            }`}
            onClick={() => setActiveFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <ul className="list-disc pl-5 space-y-4 marker:text-gray-700 dark:marker:text-gray-300">
        {blogs.map((blog) => (
          <li
            key={blog.slug}
            className="transition-all duration-300 hover:translate-x-1"
          >
            <Link
              href={`/writings/${blog.slug}`}
              className="no-underline block mb-1"
            >
              <div>
                <h6 className="pl-1 text-gray-700 dark:text-gray-300 font-medium">
                  {blog.title}
                </h6>
                {blog.description && (
                  <div className="space-y-2">
                    <p className="text-gray-700 dark:text-gray-300 font-light m-0 text-sm pl-1">
                      {blog.description}
                    </p>
                    <div className="flex items-center space-x-2 pl-1">
                      <Small>{blog.date}</Small>
                      <span className="text-sm text-indigo-500 dark:text-indigo-300 font-medium hover:underline">
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
