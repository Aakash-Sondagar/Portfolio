// Bookmark management - Add bookmarks easily here
export const bookmarkCategories = {
  FRONTEND: "Frontend Development",
  BACKEND: "Backend Development", 
  DEVOPS: "DevOps & Cloud",
  DESIGN: "Design & UI/UX",
  TOOLS: "Development Tools",
  LEARNING: "Learning Resources",
  CAREER: "Career & Interview",
  INSPIRATION: "Inspiration",
  PRODUCTIVITY: "Productivity"
};

// Bookmarks collection - Add new bookmarks here
export const bookmarks = [
  // Frontend Development
  {
    title: "Patterns.dev",
    url: "https://www.patterns.dev/",
    description: "All JavaScript and React patterns in one place",
    category: bookmarkCategories.FRONTEND,
    tags: ["React", "JavaScript", "Patterns"],
    date: "2024-12-31",
    featured: true
  },
  {
    title: "shadcn/ui",
    url: "https://ui.shadcn.com/",
    description: "Beautiful component library for React and Next.js",
    category: bookmarkCategories.FRONTEND,
    tags: ["React", "Components", "UI"],
    date: "2024-12-31",
    featured: true
  },
  {
    title: "Motion Primitives",
    url: "https://motion-primitives.com/docs",
    description: "shadcn-like components with animation",
    category: bookmarkCategories.FRONTEND,
    tags: ["Animation", "Components", "React"],
    date: "2024-12-31"
  },
  
  // Learning Resources
  {
    title: "NeetCode",
    url: "https://neetcode.io/",
    description: "Best platform for coding interview preparation",
    category: bookmarkCategories.LEARNING,
    tags: ["DSA", "Interview", "Coding"],
    date: "2024-12-30",
    featured: true
  },
  {
    title: "System Design Primer",
    url: "https://github.com/donnemartin/system-design-primer",
    description: "Learn how to design large-scale systems",
    category: bookmarkCategories.LEARNING,
    tags: ["System Design", "Architecture"],
    date: "2024-12-30"
  },
  
  // Tools
  {
    title: "Lucide Icons",
    url: "https://lucide.dev/",
    description: "Beautiful & consistent icon pack",
    category: bookmarkCategories.TOOLS,
    tags: ["Icons", "Design"],
    date: "2024-12-29"
  },
  
  // Career
  {
    title: "Tech Interview Handbook",
    url: "https://www.techinterviewhandbook.org/",
    description: "Complete guide for technical interviews",
    category: bookmarkCategories.CAREER,
    tags: ["Interview", "Career", "Guide"],
    date: "2024-12-28"
  },
  
  // Add new bookmarks here following the same structure
  // {
  //   title: "Your Bookmark Title",
  //   url: "https://example.com",
  //   description: "Description of the bookmark",
  //   category: bookmarkCategories.CATEGORY_NAME,
  //   tags: ["Tag1", "Tag2"],
  //   date: "2025-01-20",
  //   featured: false // optional
  // }
];

// Utility functions for bookmarks
export const getBookmarksByCategory = (category) => {
  return bookmarks.filter(bookmark => bookmark.category === category);
};

export const getFeaturedBookmarks = () => {
  return bookmarks.filter(bookmark => bookmark.featured);
};

export const getRecentBookmarks = (limit = 10) => {
  return bookmarks
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

export const searchBookmarks = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return bookmarks.filter(bookmark => 
    bookmark.title.toLowerCase().includes(lowercaseQuery) ||
    bookmark.description.toLowerCase().includes(lowercaseQuery) ||
    bookmark.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getBookmarksByTag = (tag) => {
  return bookmarks.filter(bookmark => bookmark.tags.includes(tag));
};

export const getAllBookmarkTags = () => {
  const allTags = bookmarks.flatMap(bookmark => bookmark.tags);
  return [...new Set(allTags)].sort();
};