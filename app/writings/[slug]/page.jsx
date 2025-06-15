import { getMetaData, AnimatedName, Small } from "@/components/common";
import { allBlogs } from "@/utils/blogs";
import { allResources } from "@/content/resources";

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
    ...allResources.map((resource) => ({ slug: resource.slug }))
  ];
  
  return allSlugs;
}

const BlogPage = ({ params }) => {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  const resource = allResources.find(
    (resource) => resource.slug === params.slug
  );

  const render = blog ? blog : resource;
  const sourcePath = blog ? "/writings" : "/resources";

  if (!blog && !resource) {
    return (
      <h2 className="text-gray-900 dark:text-gray-100 font-semibold text-2xl mt-8">
        404 - Blog not found
      </h2>
    );
  }

  return (
    <div className="">
      <h2 className="text-gray-900 dark:text-gray-100 font-semibold text-2xl mt-8 mb-4">
        {render.title}
      </h2>
      <AnimatedName href={sourcePath} />
      <Small>{render.date}</Small>
      <div className="prose max-w-none">{render.content}</div>
    </div>
  );
};

export default BlogPage;