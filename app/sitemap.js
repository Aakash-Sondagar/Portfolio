import { promises as fs } from "fs";
import path from "path";

const getNoteSlugs = async (dir) => {
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
};

const sitemap = async () => {
  const notesDirectory = path.join(process.cwd(), "app");
  const slugs = await getNoteSlugs(notesDirectory);

  const notes = slugs.map((slug) => ({
    url: `https://aakashsondagar.vercel.app/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/work"].map((route) => ({
    url: `https://aakashsondagar.vercel.app${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...notes];
};

export default sitemap;
