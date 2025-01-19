import { formatDate } from "@/components/common";

import OtherResources from "@/app/blog/resourcesList/OtherResources.mdx";
import FrontendResources from "@/app/blog/resourcesList/FrontendResources.mdx";

export const baseUrl = "https://aakashsondagar.vercel.app";

export const navItems = {
  "/work": {
    name: "Work",
  },
  "/writing": {
    name: "Writing",
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

export const resourcesList = [
  {
    slug: "other_resources",
    title: "Other Resources",
    date: formatDate("2024-12-31"),
    description:
      "A list of resources that help in building a strong social profile and cracking interviews.",
    tags: ["resources"],
    content: <OtherResources />,
  },
  {
    slug: "frontend_resources",
    title: "Frontend Resources",
    date: formatDate("2024-12-31"),
    description:
      "A curated collection of treasures from the web that are useful for creating frontends.",
    tags: ["resources"],
    content: <FrontendResources />,
  },
];
