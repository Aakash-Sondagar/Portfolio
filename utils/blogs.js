import { formatDate } from "@/components/common";

import SystemDesign from "@/app/blog/blogs/SystemDesign.mdx";
import IntroductionSystemDesign from "@/app/blog/blogs/IntroductionSystemDesign.mdx";

export const allBlogs = [
  {
    slug: "introduction_system_design",
    title: "Introduction to System Design",
    date: formatDate("2025-01-19"),
    description:
      "Understanding the basics of system design by breaking down the process into architecture, components, and modules. A comprehensive guide for beginners.",
    tags: ["System Design"],
    content: <IntroductionSystemDesign />,
  },
  {
    slug: "journey_system_design",
    title: "My Journey into System Design",
    date: formatDate("2025-01-19"),
    description: "Documenting my learning journey of System Design with practical insights and real-world applications.",
    tags: ["System Design"],
    content: <SystemDesign />,
  },
];