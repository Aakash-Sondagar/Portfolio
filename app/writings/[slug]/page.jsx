import { getMetaData, AnimatedName, Small } from "@/components/common";
import { allBlogs } from "@/utils/blogs";
import { resourcesList } from "@/utils/content";

export function generateMetadata({ params }) {
  if (!params.slug) return getMetaData("Blog not found", "/blog");
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  if (!blog) return getMetaData("Blog not found", "/writings");
  return getMetaData(blog.title, `/writings/${blog.slug}`);
}

export async function generateStaticParams() {
  // Combine slugs from both blogs and resources
  const allSlugs = [
    ...allBlogs.map((blog) => ({ slug: blog.slug })),
    ...resourcesList.map((resource) => ({ slug: resource.slug }))
  ];
  
  return allSlugs;
}

const BlogPage = ({ params }) => {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  const resource = resourcesList.find(
    (resource) => resource.slug === params.slug
  );

  const render = blog ? blog : resource;
  const sourcePath = blog ? "/writings" : "/resources";

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