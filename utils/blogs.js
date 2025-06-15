import { formatDate } from "@/utils/formatDate";

import SystemDesign from "@/app/blog/blogs/SystemDesign.mdx";
import IntroductionSystemDesign from "@/app/blog/blogs/IntroductionSystemDesign.mdx";

export const allBlogs = [
  {
    slug: "introduction_system_design",
    title: "Introduction to System Design",
    date: formatDate("2025-01-19"),
    description:
      "Understanding the basics of system design by breaking down the process into architecture, components, and modules",
    tags: ["System Design"],
    content: <IntroductionSystemDesign />,
  },
  {
    slug: "journey_system_design",
    title: "My Journey into System Design",
    date: formatDate("2025-01-19"),
    description: "Documenting my learning journey of System Design.",
    tags: ["System Design"],
    content: <SystemDesign />,
  },
];