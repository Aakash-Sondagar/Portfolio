import { promises as fs } from "fs";
import path from "path";
import { baseUrl } from "@/utils/content";
import { getAllBlogSlugs } from "@/utils/blogs";
import { resourcesMetadata } from "@/utils/content";

const getNoteSlugs = async (dir) => {
  try {
    const entries = await fs.readdir(dir, {
      recursive: true,
      withFileTypes: true,
    });
    return entries
      .filter((entry) => entry.isFile() && entry.name === "page.mdx")
      .map((entry) => {
        const relativePath = path.relative(
          dir,
          path.join(entry.parentPath, entry.name)
        );
        return path.dirname(relativePath);
      })
      .map((slug) => slug.replace(/\\/g, "/"));
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
};

const sitemap = async () => {
  const notesDirectory = path.join(process.cwd(), "app");
  const slugs = await getNoteSlugs(notesDirectory);

  // Static routes
  const routes = ["", "/work", "/writings", "/resources"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic blog routes
  const blogSlugs = getAllBlogSlugs();
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/writings/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Resource routes
  const resourceRoutes = resourcesMetadata.map((resource) => ({
    url: `${baseUrl}/writings/${resource.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Other page routes
  const notes = slugs
    .filter(slug => !slug.includes('writings') && !slug.includes('blog'))
    .map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.5,
    }));

  return [...routes, ...blogRoutes, ...resourceRoutes, ...notes];
};

export default sitemap;