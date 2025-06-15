// Resource management - Add resources easily here
export const resourceCategories = {
  FRONTEND: "Frontend",
  BACKEND: "Backend", 
  DEVOPS: "DevOps",
  DESIGN: "Design",
  TOOLS: "Tools",
  LEARNING: "Learning",
  CAREER: "Career",
  INSPIRATION: "Inspiration",
  PRODUCTIVITY: "Productivity",
  NEWSLETTERS: "Newsletters",
  DSA: "DSA",
  SYSTEM_DESIGN: "System Design",
  BOOKS: "Books"
};

// Resources collection - Add new resources here
export const allResources = [
  // Frontend Development
  {
    title: "Patterns.dev",
    url: "https://www.patterns.dev/",
    description: "All JavaScript and React patterns in one place. Comprehensive guide to modern web development patterns.",
    category: resourceCategories.FRONTEND,
    tags: ["React", "JavaScript", "Patterns"],
    date: "2024-12-31",
    featured: true
  },
  {
    title: "shadcn/ui",
    url: "https://ui.shadcn.com/",
    description: "Beautiful component library for React and Next.js. Copy-paste components that you can customize.",
    category: resourceCategories.FRONTEND,
    tags: ["React", "Components", "UI"],
    date: "2024-12-31",
    featured: true
  },
  {
    title: "Motion Primitives",
    url: "https://motion-primitives.com/docs",
    description: "shadcn-like components with beautiful animations built on Framer Motion.",
    category: resourceCategories.FRONTEND,
    tags: ["Animation", "Components", "React"],
    date: "2024-12-31",
    featured: true
  },
  {
    title: "Aceternity UI",
    url: "https://ui.aceternity.com/components",
    description: "Components with stunning animations and modern design patterns.",
    category: resourceCategories.FRONTEND,
    tags: ["Animation", "Components", "UI"],
    date: "2024-12-31"
  },
  {
    title: "Magic UI",
    url: "https://magicui.design/docs",
    description: "Components, text effects, and templates for modern web applications.",
    category: resourceCategories.FRONTEND,
    tags: ["Components", "Effects", "Templates"],
    date: "2024-12-31"
  },
  {
    title: "React Bits",
    url: "https://www.reactbits.dev/",
    description: "Collection of text effects and components for React applications.",
    category: resourceCategories.FRONTEND,
    tags: ["React", "Effects", "Components"],
    date: "2024-12-31"
  },
  {
    title: "21st.dev",
    url: "https://21st.dev/",
    description: "Cleanest collection of UI libraries aggregated in one site.",
    category: resourceCategories.FRONTEND,
    tags: ["UI", "Libraries", "Collection"],
    date: "2024-12-30"
  },

  // Tools
  {
    title: "Lucide Icons",
    url: "https://lucide.dev/",
    description: "Beautiful & consistent icon pack with over 1000+ icons.",
    category: resourceCategories.TOOLS,
    tags: ["Icons", "Design"],
    date: "2024-12-29",
    featured: true
  },
  {
    title: "React Icons",
    url: "https://react-icons.github.io/react-icons/",
    description: "Package containing almost all popular icon packs for React.",
    category: resourceCategories.TOOLS,
    tags: ["Icons", "React"],
    date: "2024-12-29"
  },
  {
    title: "Animated Icons",
    url: "https://icons.pqoqubbw.dev/",
    description: "Lucide icons with beautiful animations for enhanced UX.",
    category: resourceCategories.TOOLS,
    tags: ["Icons", "Animation"],
    date: "2024-12-29"
  },
  {
    title: "Framer Motion",
    url: "https://motion.dev/",
    description: "Production-ready motion library for React applications.",
    category: resourceCategories.TOOLS,
    tags: ["Animation", "React", "Motion"],
    date: "2024-12-28"
  },
  {
    title: "Tailwind Motion",
    url: "https://rombo.co/tailwind/",
    description: "Generate motion Tailwind classes with ease.",
    category: resourceCategories.TOOLS,
    tags: ["Tailwind", "Animation", "CSS"],
    date: "2024-12-28"
  },

  // Learning Resources
  {
    title: "NeetCode",
    url: "https://neetcode.io/",
    description: "Best platform for coding interview preparation with clear explanations.",
    category: resourceCategories.LEARNING,
    tags: ["DSA", "Interview", "Coding"],
    date: "2024-12-30",
    featured: true
  },
  {
    title: "System Design Primer",
    url: "https://github.com/donnemartin/system-design-primer",
    description: "Learn how to design large-scale systems with practical examples.",
    category: resourceCategories.SYSTEM_DESIGN,
    tags: ["System Design", "Architecture"],
    date: "2024-12-30",
    featured: true
  },
  {
    title: "Tech Interview Handbook",
    url: "https://www.techinterviewhandbook.org/",
    description: "Complete guide for technical interviews covering algorithms to system design.",
    category: resourceCategories.CAREER,
    tags: ["Interview", "Career", "Guide"],
    date: "2024-12-28",
    featured: true
  },
  {
    title: "Coding Interview University",
    url: "https://github.com/jwasham/coding-interview-university",
    description: "Complete computer science study plan to become a software engineer.",
    category: resourceCategories.LEARNING,
    tags: ["Computer Science", "Study Plan"],
    date: "2024-12-27"
  },

  // Newsletters
  {
    title: "TLDR",
    url: "https://tldr.tech/",
    description: "Daily digest of interesting stories in startups, tech and programming.",
    category: resourceCategories.NEWSLETTERS,
    tags: ["Newsletter", "Tech", "Startups"],
    date: "2024-12-27",
    featured: true
  },
  {
    title: "ByteByteGo",
    url: "https://blog.bytebytego.com/",
    description: "Explain complex systems with simple terms and visual diagrams.",
    category: resourceCategories.NEWSLETTERS,
    tags: ["Newsletter", "System Design"],
    date: "2024-12-27"
  },
  {
    title: "Filter Coffee",
    url: "https://filtercoffee.substack.com/",
    description: "Weekly trends, startup signals and tech news from India.",
    category: resourceCategories.NEWSLETTERS,
    tags: ["Newsletter", "Startups", "Trends"],
    date: "2024-12-27"
  },
  {
    title: "SystemDesign.one",
    url: "https://newsletter.systemdesign.one/",
    description: "System design newsletter with practical insights and case studies.",
    category: resourceCategories.NEWSLETTERS,
    tags: ["Newsletter", "System Design"],
    date: "2024-12-26"
  },
  {
    title: "AlgoMaster",
    url: "https://blog.algomaster.io/",
    description: "Blogs about data structures, algorithms and system design.",
    category: resourceCategories.NEWSLETTERS,
    tags: ["Newsletter", "DSA", "System Design"],
    date: "2024-12-26"
  },
  {
    title: "Developing Dev",
    url: "https://www.developing.dev/",
    description: "Weekly newsletter with practical tips for developers.",
    category: resourceCategories.NEWSLETTERS,
    tags: ["Newsletter", "Development"],
    date: "2024-12-26"
  },

  // DSA Resources
  {
    title: "Blind 75",
    url: "https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-100-LeetCode-Questions-to-Save-Your-Time-OaM1orEU",
    description: "Curated list of top 75 LeetCode questions for interview preparation.",
    category: resourceCategories.DSA,
    tags: ["LeetCode", "Interview", "DSA"],
    date: "2024-12-26",
    featured: true
  },
  {
    title: "Grokking Algorithms",
    url: "https://github.com/judylime/grokking",
    description: "Coding interview and system design patterns with detailed explanations.",
    category: resourceCategories.DSA,
    tags: ["Algorithms", "Interview", "Patterns"],
    date: "2024-12-26"
  },
  {
    title: "SDE Sheet GFG",
    url: "https://www.geeksforgeeks.org/sde-sheet-a-complete-guide-for-sde-preparation/",
    description: "Complete guide for software development engineer preparation.",
    category: resourceCategories.DSA,
    tags: ["DSA", "Interview", "Guide"],
    date: "2024-12-25"
  },
  {
    title: "AlgoExpert Questions",
    url: "https://github.com/lee-hen/Algoexpert",
    description: "All AlgoExpert data structure and algorithm questions with solutions.",
    category: resourceCategories.DSA,
    tags: ["DSA", "AlgoExpert", "Solutions"],
    date: "2024-12-25"
  },

  // System Design
  {
    title: "System Design Practice",
    url: "https://tianpan.co/notes/2016-02-13-crack-the-system-design-interview",
    description: "System design interview preparation with real-world examples.",
    category: resourceCategories.SYSTEM_DESIGN,
    tags: ["System Design", "Interview"],
    date: "2024-12-24"
  },
  {
    title: "Grokking System Design",
    url: "https://github.com/tssovi/grokking-the-object-oriented-design-interview",
    description: "Object-oriented design interview questions and solutions.",
    category: resourceCategories.SYSTEM_DESIGN,
    tags: ["OOP", "Design", "Interview"],
    date: "2024-12-24"
  },

  // Career Resources
  {
    title: "CareerFlow",
    url: "https://www.careerflow.ai/still-hiring",
    description: "Real-time hiring updates and recruiter contact information.",
    category: resourceCategories.CAREER,
    tags: ["Jobs", "Hiring", "Career"],
    date: "2024-12-25"
  },
  {
    title: "Wonsulting",
    url: "https://www.wonsulting.ai/",
    description: "Career coaching and job search assistance platform.",
    category: resourceCategories.CAREER,
    tags: ["Career", "Coaching", "Jobs"],
    date: "2024-12-25"
  },

  // Design Resources
  {
    title: "Buttons Collection",
    url: "https://buttons.ibelick.com/",
    description: "Beautiful Tailwind CSS button collection ready to copy-paste.",
    category: resourceCategories.DESIGN,
    tags: ["Buttons", "Tailwind", "UI"],
    date: "2024-12-23"
  },
  {
    title: "Background Snippets",
    url: "https://bg.ibelick.com/",
    description: "Background snippets: copy, paste, ready-to-use for your projects.",
    category: resourceCategories.DESIGN,
    tags: ["Backgrounds", "CSS", "Snippets"],
    date: "2024-12-23"
  },
  {
    title: "Animation Library",
    url: "https://animation.ibelick.com/",
    description: "Copy-paste ready Tailwind CSS animations for modern web apps.",
    category: resourceCategories.DESIGN,
    tags: ["Animation", "Tailwind", "CSS"],
    date: "2024-12-23"
  },
  {
    title: "UI Land",
    url: "https://ui.land/",
    description: "Digital library for designers and engineers with curated resources.",
    category: resourceCategories.DESIGN,
    tags: ["Design", "UI", "Library"],
    date: "2024-12-22"
  },

  // Books & Documentation
  {
    title: "Technical Books Collection",
    url: "https://github.com/andresetevejob/books-5",
    description: "Comprehensive collection of technical books for software engineers.",
    category: resourceCategories.BOOKS,
    tags: ["Books", "Technical", "Learning"],
    date: "2024-12-21"
  },
  {
    title: "Database Tutorial",
    url: "https://cstack.github.io/db_tutorial/",
    description: "Writing a SQLite clone from scratch in C - comprehensive tutorial.",
    category: resourceCategories.BOOKS,
    tags: ["Database", "C", "Tutorial"],
    date: "2024-12-21"
  },
  {
    title: "Coding Books Catalogue",
    url: "https://github.com/Henrywu573/Catalogue",
    description: "Curated collection of essential coding and computer science books.",
    category: resourceCategories.BOOKS,
    tags: ["Books", "Programming", "CS"],
    date: "2024-12-20"
  },

  // DevOps
  {
    title: "DevOps Exercises",
    url: "https://github.com/bregman-arie/devops-exercises",
    description: "DevOps interview questions and practical exercises.",
    category: resourceCategories.DEVOPS,
    tags: ["DevOps", "Interview", "Exercises"],
    date: "2024-12-19"
  },

  // Productivity
  {
    title: "GitHub Profile Guide",
    url: "https://github.com/rzashakeri/beautify-github-profile",
    description: "Complete guide to create an impressive GitHub profile.",
    category: resourceCategories.PRODUCTIVITY,
    tags: ["GitHub", "Profile", "Guide"],
    date: "2024-12-18"
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