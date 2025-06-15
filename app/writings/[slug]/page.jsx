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
      <div className="space-content">
        <h2 className="text-headline text-gray-900 dark:text-gray-100">
          404 - Blog not found
        </h2>
        <p className="text-body text-gray-700 dark:text-gray-300">
          The blog post you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <div className="space-content">
      <div className="mb-8">
        <h1 className="text-headline text-gray-900 dark:text-gray-100 mb-4">
          {render.title}
        </h1>
        <AnimatedName href={sourcePath} />
        <Small>{render.date}</Small>
      </div>
      
      <article className="prose max-w-none">
        {render.content}
      </article>
    </div>
  );
};

export default BlogPage;