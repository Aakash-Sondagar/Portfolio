import { promises as fs } from "fs";
import path from "path";
import { baseUrl } from "@/utils/content";
import { allBlogs } from "@/utils/blogs";
import { resourcesList } from "@/utils/content";

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

  const notes = slugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/writings`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Add blog posts
  const blogUrls = allBlogs.map((blog) => ({
    url: `${baseUrl}/writings/${blog.slug}`,
    lastModified: new Date(blog.date).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Add resource posts
  const resourceUrls = resourcesList.map((resource) => ({
    url: `${baseUrl}/writings/${resource.slug}`,
    lastModified: new Date(resource.date).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...notes, ...blogUrls, ...resourceUrls];
};

export default sitemap;