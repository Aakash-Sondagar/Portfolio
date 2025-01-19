import { getMetaData, AnimatedName, Small } from "@/components/common";
import { allBlogs } from "@/utils/blog";
import { resourcesList } from "@/utils/content";

export function generateMetadata({ params }) {
  if (!params.slug) return getMetaData("Blog not found", "/blog");
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  if (!blog) return getMetaData("Blog not found", "/blog");
  return getMetaData(blog.title, `/blog/${blog.slug}`);
}

const BlogPage = ({ params }) => {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  const resource = resourcesList.find(
    (resource) => resource.slug === params.slug
  );

  const render = blog ? blog : resource;
  const sourcePath = blog ? "/writing" : "/resources";

  if (!blog && !resource) {
    return (
      <h2 className="text-stone-800 dark:text-stone-200 font-medium mt-8">
        404 - Blog not found
      </h2>
    );
  }

  return (
    <div className="">
      <h2 className="text-stone-800 dark:text-stone-200 font-medium mt-8">
        {render.title}
      </h2>
      <AnimatedName href={sourcePath} />
      <Small>{render.date}</Small>
      <div className="prose">{render.content}</div>
    </div>
  );
};

export default BlogPage;
