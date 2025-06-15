// Central blog management - Add new blogs here easily
import { formatDate } from "@/components/common";

// Import your MDX files
import SystemDesign from "@/app/blog/blogs/SystemDesign.mdx";
import IntroductionSystemDesign from "@/app/blog/blogs/IntroductionSystemDesign.mdx";

// Blog posts configuration - Add new blogs here
export const blogPosts = [
  {
    slug: "introduction_system_design",
    title: "Introduction to System Design",
    date: "2025-01-19",
    description: "Understanding the basics of system design by breaking down the process into architecture, components, and modules. A comprehensive guide for beginners.",
    tags: ["System Design", "Architecture", "Beginner"],
    content: <IntroductionSystemDesign />,
    readTime: "8 min read",
    featured: true
  },
  {
    slug: "journey_system_design", 
    title: "My Journey into System Design",
    date: "2025-01-19",
    description: "Documenting my learning journey of System Design with practical insights and real-world applications.",
    tags: ["System Design", "Learning", "Personal"],
    content: <SystemDesign />,
    readTime: "5 min read",
    featured: false
  },
  // Add new blog posts here following the same structure
  // {
  //   slug: "your-new-blog-slug",
  //   title: "Your New Blog Title",
  //   date: "2025-01-20",
  //   description: "Description of your new blog post",
  //   tags: ["Tag1", "Tag2"],
  //   content: <YourNewBlogComponent />,
  //   readTime: "X min read",
  //   featured: false
  // }
];

// Process blogs with formatted dates
export const allBlogs = blogPosts.map(blog => ({
  ...blog,
  date: formatDate(blog.date),
  formattedDate: formatDate(blog.date, false)
}));

// Get featured blogs
export const getFeaturedBlogs = () => {
  return allBlogs.filter(blog => blog.featured);
};

// Get recent blogs
export const getRecentBlogs = (limit = 5) => {
  return allBlogs
    .sort((a, b) => new Date(b.formattedDate) - new Date(a.formattedDate))
    .slice(0, limit);
};

// Get blogs by tag
export const getBlogsByTag = (tag) => {
  return allBlogs.filter(blog => blog.tags.includes(tag));
};