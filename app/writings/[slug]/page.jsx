'use client';

import { getMetaData, AnimatedName, Small } from "@/components/common";
import { allBlogs } from "@/utils/blogs";
import { resourcesList } from "@/utils/content";
import { motion } from "framer-motion";

export function generateMetadata({ params }) {
  if (!params.slug) return getMetaData("Blog not found", "/blog");
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  if (!blog) return getMetaData("Blog not found", "/writings");
  return getMetaData(blog.title, `/writings/${blog.slug}`);
}

export async function generateStaticParams() {
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
      <motion.div 
        className="space-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-headline text-neutral-900 dark:text-neutral-100">
          404 - Blog not found
        </h2>
        <p className="text-body text-neutral-700 dark:text-neutral-300">
          The blog post you're looking for doesn't exist.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-content">
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-headline text-neutral-900 dark:text-neutral-100 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {render.title}
        </motion.h1>
        <AnimatedName href={sourcePath} />
        <Small>{render.date}</Small>
      </motion.div>
      
      <motion.article 
        className="prose max-w-none"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {render.content}
      </motion.article>
    </div>
  );
};

export default BlogPage;