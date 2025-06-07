import { formatDate } from "@/components/common";
import { lazy } from "react";

// Lazy load blog components for better performance
const SystemDesign = lazy(() => import("@/app/blog/blogs/SystemDesign.mdx"));
const IntroductionSystemDesign = lazy(() => import("@/app/blog/blogs/IntroductionSystemDesign.mdx"));

// Blog metadata without content for listing pages
export const blogMetadata = [
  {
    slug: "introduction_system_design",
    title: "Introduction to System Design",
    date: "2025-01-19",
    description: "Understanding the basics of system design by breaking down the process into architecture, components, and modules",
    tags: ["System Design"],
    readTime: "5 min read",
    priority: 1,
  },
  {
    slug: "journey_system_design",
    title: "My Journey into System Design",
    date: "2025-01-19",
    description: "Documenting my learning journey of System Design.",
    tags: ["System Design"],
    readTime: "3 min read",
    priority: 2,
  },
];

// Full blog data with content (only loaded when needed)
export const allBlogs = [
  {
    ...blogMetadata[0],
    date: formatDate("2025-01-19"),
    content: <IntroductionSystemDesign />,
  },
  {
    ...blogMetadata[1],
    date: formatDate("2025-01-19"),
    content: <SystemDesign />,
  },
];

// Utility functions for blog operations
export const getBlogBySlug = (slug) => {
  return allBlogs.find(blog => blog.slug === slug);
};

export const getBlogMetadataBySlug = (slug) => {
  return blogMetadata.find(blog => blog.slug === slug);
};

export const getAllBlogSlugs = () => {
  return blogMetadata.map(blog => blog.slug);
};

export const getBlogsByTag = (tag) => {
  if (tag === "All") return blogMetadata;
  return blogMetadata.filter(blog => blog.tags.includes(tag));
};

export const getRecentBlogs = (limit = 3) => {
  return blogMetadata
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

export const getAllTags = () => {
  const tags = new Set();
  blogMetadata.forEach(blog => {
    blog.tags.forEach(tag => tags.add(tag));
  });
  return ["All", ...Array.from(tags)];
};

// Search functionality for future use
export const searchBlogs = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return blogMetadata.filter(blog => 
    blog.title.toLowerCase().includes(lowercaseQuery) ||
    blog.description.toLowerCase().includes(lowercaseQuery) ||
    blog.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};