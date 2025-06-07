import { formatDate } from "@/components/common";
import { lazy } from "react";

// Lazy load resource components
const OtherResources = lazy(() => import("@/app/blog/resourcesList/OtherResources.mdx"));
const FrontendResources = lazy(() => import("@/app/blog/resourcesList/FrontendResources.mdx"));

export const baseUrl = "https://aakashsondagar.me";

export const navItems = {
  "/work": {
    name: "Work",
  },
  "/writings": {
    name: "Writings",
  },
  "/resources": {
    name: "Resources",
  },
  "https://drive.google.com/file/d/1RcE2GSop7jC7k3zO9j4a2z_Lr667JVZY/view?usp=sharing":
    {
      name: "Resume",
    },
};

export const footerLinks = [
  { name: "@aakashsondagar", url: "https://x.com/AakashSondagar" },
  { name: "Email", url: "mailto:aakashsondar@gmail.com" },
  { name: "Linkedin", url: "https://www.linkedin.com/in/aakash-sondagar" },
  { name: "Github", url: "https://github.com/Aakash-Sondagar" },
];

// Resource metadata without content for better performance
export const resourcesMetadata = [
  {
    slug: "other_resources",
    title: "Other Resources",
    date: "2024-12-31",
    description: "A list of resources that help in building a strong social profile and cracking interviews.",
    tags: ["resources"],
    readTime: "8 min read",
  },
  {
    slug: "frontend_resources",
    title: "Frontend Resources",
    date: "2024-12-31",
    description: "A curated collection of treasures from the web that are useful for creating frontends.",
    tags: ["resources"],
    readTime: "6 min read",
  },
];

// Full resources data with content (only loaded when needed)
export const resourcesList = [
  {
    ...resourcesMetadata[0],
    date: formatDate("2024-12-31"),
    content: <OtherResources />,
  },
  {
    ...resourcesMetadata[1],
    date: formatDate("2024-12-31"),
    content: <FrontendResources />,
  },
];

// Utility functions for resources
export const getResourceBySlug = (slug) => {
  return resourcesList.find(resource => resource.slug === slug);
};

export const getResourceMetadataBySlug = (slug) => {
  return resourcesMetadata.find(resource => resource.slug === slug);
};