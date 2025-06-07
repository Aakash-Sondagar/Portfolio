import { Suspense } from "react";
import { getMetaData, AnimatedName, Small } from "@/components/common";
import { getBlogBySlug, blogMetadata } from "@/utils/blogs";
import { resourcesList, resourcesMetadata } from "@/utils/content";

// Loading component for better UX
const BlogLoading = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-1/3"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-8 w-1/4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
    </div>
  </div>
);

export function generateMetadata({ params }) {
  if (!params.slug) return getMetaData("Blog not found", "/blog");
  
  // Check blog metadata first (faster)
  const blogMeta = blogMetadata.find((blog) => blog.slug === params.slug);
  if (blogMeta) return getMetaData(blogMeta.title, `/writings/${blogMeta.slug}`);
  
  // Check resource metadata
  const resourceMeta = resourcesMetadata.find((resource) => resource.slug === params.slug);
  if (resourceMeta) return getMetaData(resourceMeta.title, `/writings/${resourceMeta.slug}`);
  
  return getMetaData("Blog not found", "/writings");
}

export async function generateStaticParams() {
  // Generate static params for better performance
  const allSlugs = [
    ...blogMetadata.map((blog) => ({ slug: blog.slug })),
    ...resourcesMetadata.map((resource) => ({ slug: resource.slug }))
  ];
  
  return allSlugs;
}

const BlogPage = ({ params }) => {
  const blog = getBlogBySlug(params.slug);
  const resource = resourcesList.find(
    (resource) => resource.slug === params.slug
  );

  const render = blog ? blog : resource;
  const sourcePath = blog ? "/writings" : "/resources";

  if (!blog && !resource) {
    return (
      <div className="text-center py-16">
        <h2 className="text-stone-800 dark:text-stone-200 font-medium text-2xl mb-4">
          404 - Blog not found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <AnimatedName href="/writings" />
      </div>
    );
  }

  return (
    <article className="max-w-none">
      <header className="mb-8">
        <h1 className="text-stone-800 dark:text-stone-200 font-medium text-3xl sm:text-4xl mb-4">
          {render.title}
        </h1>
        <AnimatedName href={sourcePath} />
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
          <Small>{render.date}</Small>
          {render.readTime && (
            <span className="text-gray-400 dark:text-gray-500">
              {render.readTime}
            </span>
          )}
        </div>
      </header>
      
      <Suspense fallback={<BlogLoading />}>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {render.content}
        </div>
      </Suspense>
    </article>
  );
};

export default BlogPage;