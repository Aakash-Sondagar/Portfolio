"use client";
import { useState } from "react";
import { Link } from "next-view-transitions";
import { allBlogs } from "@/utils/blog";
import { AnimatedName } from "@/components/common";

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
        Writing
      </h2>
      <AnimatedName />
      <p className="text-gray-700 dark:text-gray-300 font-normal mb-3 leading-snug">
        On my journey to learn and grow, I dive into countless articles, blogs,
        and tutorials. This is my way of capturing those learnings so that I can
        easily revisit them without the hassle of searching the web all over
        again.
      </p>
      {uniqueTags.map((tag) => (
        <button
          key={tag}
          className={`px-4 py-2 text-base ${
            activeFilter === tag
              ? "text-gray-800 dark:text-gray-200 underline"
              : "text-gray-400 dark:text-gray-600"
          }`}
          onClick={() => setActiveFilter(tag)}
        >
          <span>{tag}</span>
        </button>
      ))}
      <ul className="list-disc pl-5 space-y-1 marker:text-gray-700 dark:marker:dark:text-gray-300">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`} className="no-underline">
              <div>
                <h6 className="pl-1 text-gray-700 dark:text-gray-300 font-medium">
                  {blog.title}
                </h6>
                {blog.description && (
                  <p className="text-gray-700 dark:text-gray-300 font-light m-0">
                    {blog.description}
                  </p>
                )}
              </div>
            </Link>
            <h5 className="text-zinc-500 dark:text-zinc-400 font-light text-sm">
              {blog.date}
            </h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WritingComponent;
