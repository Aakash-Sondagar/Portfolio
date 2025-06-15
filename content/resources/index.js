// Resource management - Add resources easily here
export const resourceCategories = {
  FRONTEND: "Frontend Development",
  BACKEND: "Backend Development", 
  DEVOPS: "DevOps & Cloud",
  DESIGN: "Design & UI/UX",
  TOOLS: "Development Tools",
  LEARNING: "Learning Resources",
  CAREER: "Career & Interview",
  INSPIRATION: "Inspiration",
  PRODUCTIVITY: "Productivity",
  NEWSLETTERS: "Newsletters",
  DSA: "Data Structures & Algorithms",
  SYSTEM_DESIGN: "System Design",
  BOOKS: "Books & Documentation"
};

// Resources collection - Add new resources here
export const allResources = [
  // Frontend Development
  {
    title: "Patterns.dev",
    url: "https://www.patterns.dev/",
    description: "All JavaScript and React patterns in one place",
    category: resourceCategories.FRONTEND,
    tags: ["React", "JavaScript", "Patterns"],
    date: "2024-12-31",
    featured: true
  },
  {
    title: "shadcn/ui",
    url: "https://ui.shadcn.com/",
    description: "Beautiful component library for React and Next.js",
    category: resourceCategories.FRONTEND,
    tags: ["React", "Components", "UI"],
    date: "2024-12-31",
    featured: true
  },
  {
    title: "Motion Primitives",
    url: "https://motion-primitives.com/docs",
    description: "shadcn-like components with animation",
    category: resourceCategories.FRONTEND,
    tags: ["Animation", "Components", "React"],
    date: "2024-12-31"
  },
  {
    title: "Aceternity UI",
    url: "https://ui.aceternity.com/components",
    description: "Components with beautiful animations",
    category: resourceCategories.FRONTEND,
    tags: ["Animation", "Components", "UI"],
    date: "2024-12-31"
  },
  {
    title: "Magic UI",
    url: "https://magicui.design/docs",
    description: "Components, text effects, and templates",
    category: resourceCategories.FRONTEND,
    tags: ["Components", "Effects", "Templates"],
    date: "2024-12-31"
  },

  // Tools
  {
    title: "Lucide Icons",
    url: "https://lucide.dev/",
    description: "Beautiful & consistent icon pack",
    category: resourceCategories.TOOLS,
    tags: ["Icons", "Design"],
    date: "2024-12-29",
    featured: true
  },
  {
    title: "React Icons",
    url: "https://react-icons.github.io/react-icons/",
    description: "Package containing almost all icon packs",
    category: resourceCategories.TOOLS,
    tags: ["Icons", "React"],
    date: "2024-12-29"
  },

  // Learning Resources
  {
    title: "NeetCode",
    url: "https://neetcode.io/",
    description: "Best platform for coding interview preparation",
    category: resourceCategories.LEARNING,
    tags: ["DSA", "Interview", "Coding"],
    date: "2024-12-30",
    featured: true
  },
  {
    title: "System Design Primer",
    url: "https://github.com/donnemartin/system-design-primer",
    description: "Learn how to design large-scale systems",
    category: resourceCategories.SYSTEM_DESIGN,
    tags: ["System Design", "Architecture"],
    date: "2024-12-30",
    featured: true
  },
  {
    title: "Tech Interview Handbook",
    url: "https://www.techinterviewhandbook.org/",
    description: "Complete guide for technical interviews",
    category: resourceCategories.CAREER,
    tags: ["Interview", "Career", "Guide"],
    date: "2024-12-28",
    featured: true
  },

  // Newsletters
  {
    title: "TLDR",
    url: "https://tldr.tech/",
    description: "Interesting stories in startups, tech and programming",
    category: resourceCategories.NEWSLETTERS,
    tags: ["Newsletter", "Tech", "Startups"],
    date: "2024-12-27"
  },
  {
    title: "ByteByteGo",
    url: "https://blog.bytebytego.com/",
    description: "Explain complex systems with simple terms",
    category: resourceCategories.NEWSLETTERS,
    tags: ["Newsletter", "System Design"],
    date: "2024-12-27"
  },
  {
    title: "Filter Coffee",
    url: "https://filtercoffee.substack.com/",
    description: "Trends, startup signals and tech news",
    category: resourceCategories.NEWSLETTERS,
    tags: ["Newsletter", "Startups", "Trends"],
    date: "2024-12-27"
  },

  // DSA Resources
  {
    title: "Blind 75",
    url: "https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-100-LeetCode-Questions-to-Save-Your-Time-OaM1orEU",
    description: "Curated list of top LeetCode questions",
    category: resourceCategories.DSA,
    tags: ["LeetCode", "Interview", "DSA"],
    date: "2024-12-26"
  },
  {
    title: "Grokking Algorithms",
    url: "https://github.com/judylime/grokking",
    description: "Coding interview and system design patterns",
    category: resourceCategories.DSA,
    tags: ["Algorithms", "Interview", "Patterns"],
    date: "2024-12-26"
  },

  // Career Resources
  {
    title: "CareerFlow",
    url: "https://www.careerflow.ai/still-hiring",
    description: "Hiring updates and recruiter's mail",
    category: resourceCategories.CAREER,
    tags: ["Jobs", "Hiring", "Career"],
    date: "2024-12-25"
  },
  {
    title: "Wonsulting",
    url: "https://www.wonsulting.ai/",
    description: "Career coaching and job search assistance",
    category: resourceCategories.CAREER,
    tags: ["Career", "Coaching", "Jobs"],
    date: "2024-12-25"
  },

  // Add new resources here following the same structure
];

// Utility functions for resources
export const getResourcesByCategory = (category) => {
  return allResources.filter(resource => resource.category === category);
};

export const getFeaturedResources = () => {
  return allResources.filter(resource => resource.featured);
};

export const getRecentResources = (limit = 10) => {
  return allResources
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

export const searchResources = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return allResources.filter(resource => 
    resource.title.toLowerCase().includes(lowercaseQuery) ||
    resource.description.toLowerCase().includes(lowercaseQuery) ||
    resource.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getResourcesByTag = (tag) => {
  return allResources.filter(resource => resource.tags.includes(tag));
};

export const getAllResourceTags = () => {
  const allTags = allResources.flatMap(resource => resource.tags);
  return [...new Set(allTags)].sort();
};