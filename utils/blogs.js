import { formatDate } from "@/components/common";
import { lazy } from "react";

// Lazy load blog components for better performance
const SystemDesign = lazy(() => import("@/app/blog/blogs/SystemDesign.mdx"));
const IntroductionSystemDesign = lazy(() => import("@/app/blog/blogs/IntroductionSystemDesign.mdx"));

// Blog metadata for faster loading
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

// Full blog data with content (loaded on demand)
export const allBlogs = [
  {
    ...blogMetadata[0],
    date: formatDate(blogMetadata[0].date),
    content: <IntroductionSystemDesign />,
  },
  {
    ...blogMetadata[1],
    date: formatDate(blogMetadata[1].date),
    content: <SystemDesign />,
  },
];

// Function to get blog metadata without content (for listings)
export const getBlogMetadata = () => {
  return blogMetadata.map(blog => ({
    ...blog,
    date: formatDate(blog.date),
  }));
};

// Function to get a single blog with content
export const getBlogBySlug = (slug) => {
  return allBlogs.find(blog => blog.slug === slug);
};

// Function to get recent blogs for homepage
export const getRecentBlogs = (limit = 3) => {
  return getBlogMetadata()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};