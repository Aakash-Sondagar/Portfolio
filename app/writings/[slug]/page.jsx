import { Suspense } from "react";
import { getMetaData, AnimatedName, Small } from "@/components/common";
import { getBlogBySlug, getBlogMetadataBySlug, getAllBlogSlugs } from "@/utils/blogs";
import { getResourceBySlug, getResourceMetadataBySlug, resourcesMetadata } from "@/utils/content";

export function generateMetadata({ params }) {
  if (!params.slug) return getMetaData("Blog not found", "/blog");
  
  const blogMeta = getBlogMetadataBySlug(params.slug);
  const resourceMeta = getResourceMetadataBySlug(params.slug);
  const meta = blogMeta || resourceMeta;
  
  if (!meta) return getMetaData("Blog not found", "/writings");
  return getMetaData(meta.title, `/writings/${meta.slug}`);
}

export async function generateStaticParams() {
  // Combine slugs from both blogs and resources for static generation
  const blogSlugs = getAllBlogSlugs();
  const resourceSlugs = resourcesMetadata.map(resource => resource.slug);
  
  return [
    ...blogSlugs.map(slug => ({ slug })),
    ...resourceSlugs.map(slug => ({ slug }))
  ];
}

const ContentSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-1/4"></div>
    <div className="space-y-3 mt-8">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      ))}
    </div>
  </div>
);

const BlogPage = ({ params }) => {
  // First try to get metadata (lightweight)
  const blogMeta = getBlogMetadataBySlug(params.slug);
  const resourceMeta = getResourceMetadataBySlug(params.slug);
  const meta = blogMeta || resourceMeta;
  
  if (!meta) {
    return (
      <h2 className="text-stone-800 dark:text-stone-200 font-medium mt-8">
        404 - Blog not found
      </h2>
    );
  }

  // Determine source path for navigation
  const sourcePath = blogMeta ? "/writings" : "/resources";

  // Lazy load the full content
  const loadContent = () => {
    const blog = getBlogBySlug(params.slug);
    const resource = getResourceBySlug(params.slug);
    return blog || resource;
  };

  return (
    <div>
      <h2 className="text-stone-800 dark:text-stone-200 font-medium mt-8">
        {meta.title}
      </h2>
      <AnimatedName href={sourcePath} />
      <div className="flex items-center gap-4 mb-6">
        <Small>{meta.date}</Small>
        {meta.readTime && (
          <span className="text-sm text-gray-500 dark:text-gray-500">
            {meta.readTime}
          </span>
        )}
      </div>
      
      <Suspense fallback={<ContentSkeleton />}>
        <div className="prose">
          {(() => {
            const content = loadContent();
            return content?.content || <div>Content not found</div>;
          })()}
        </div>
      </Suspense>
    </div>
  );
};

export default BlogPage;