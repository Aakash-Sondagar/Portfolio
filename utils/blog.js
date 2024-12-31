import { formatDate } from "@/components/common";

import OtherResources from "@/app/blog/OtherResources.mdx";
import FrontendResources from "@/app/blog/FrontendResources.mdx";

const allBlogs = [
  {
    slug: "other_resources",
    title: "Other Resources",
    date: formatDate("2024-12-31"),
    description:
      "A list of resources which help to build a good social profile and crake interviews",
    tags: ["frontend", "resources", "important"],
    content: <OtherResources />,
  },
  {
    slug: "frontend_resources",
    title: "Frontend Resources",
    date: formatDate("2024-12-31"),
    description:
      "A curated collection of treasures from the web—libraries, tools, and documents",
    tags: ["frontend", "resources", "important"],
    content: <FrontendResources />,
  },
];

export default allBlogs;
