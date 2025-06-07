"use client";
import { useState, useMemo, Suspense } from "react";
import { Link } from "next-view-transitions";
import { blogMetadata, getAllTags, getBlogsByTag } from "@/utils/blogs";
import { AnimatedName, Small } from "@/components/common";

const BlogSkeleton = () => (
  <div className="animate-pulse space-y-4">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3 w-3/4"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
      </div>
    ))}
  </div>
);

const WritingComponent = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Memoize expensive computations
  const uniqueTags = useMemo(() => getAllTags(), []);
  
  const filteredBlogs = useMemo(() => {
    return getBlogsByTag(activeFilter).sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }, [activeFilter]);

  return (
    <div>
      <h2 className="text-gray-900 dark:text-gray-100 font-semibold text-2xl sm:text-3xl mb-4 tracking-tight">
        Writings
      </h2>
      <AnimatedName />
      <p className="text-gray-700 dark:text-gray-300 font-normal mb-8 leading-relaxed text-base">
        A collection of thoughts, learnings, and discoveries from my journey in
        software engineering. Each piece captures insights that shape my
        understanding of technology and development.
      </p>
      
      <div className="flex flex-wrap gap-2 mb-10">
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              activeFilter === tag
                ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
            }`}
            onClick={() => setActiveFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <Suspense fallback={<BlogSkeleton />}>
        <div className="space-y-4">
          {filteredBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/writings/${blog.slug}`}
              className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-sm dark:hover:shadow-none bg-white/50 dark:bg-gray-900/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 group no-underline card-hover"
            >
              <div>
                <h6 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {blog.title}
                </h6>
                {blog.description && (
                  <p className="text-gray-600 dark:text-gray-400 font-normal mb-3 leading-relaxed text-sm">
                    {blog.description}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <Small>{blog.date}</Small>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 dark:text-gray-500">
                      {blog.readTime}
                    </span>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-1 transition-transform duration-200">
                      Read more →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default WritingComponent;