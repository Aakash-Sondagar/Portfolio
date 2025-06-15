#!/usr/bin/env node

// Script to easily add new blog posts
// Usage: node scripts/add-blog.js "Blog Title" "Description" "tag1,tag2"

const fs = require('fs');
const path = require('path');

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function addBlogPost(title, description, tags) {
  const slug = generateSlug(title);
  const date = new Date().toISOString().split('T')[0];
  const tagsArray = tags.split(',').map(tag => tag.trim());
  
  // Create MDX file
  const mdxContent = `# ${title}

Write your blog content here...

## Introduction

Start writing your blog post content.

## Conclusion

Wrap up your thoughts here.
`;

  const mdxPath = path.join(__dirname, '..', 'app', 'blog', 'blogs', `${slug}.mdx`);
  fs.writeFileSync(mdxPath, mdxContent);

  // Update blogs index
  const blogsIndexPath = path.join(__dirname, '..', 'content', 'blogs', 'index.js');
  let blogsIndex = fs.readFileSync(blogsIndexPath, 'utf8');
  
  // Add import
  const importStatement = `import ${slug.replace(/-/g, '')} from "@/app/blog/blogs/${slug}.mdx";`;
  blogsIndex = blogsIndex.replace(
    '// Import your MDX files',
    `// Import your MDX files\n${importStatement}`
  );
  
  // Add blog entry
  const blogEntry = `  {
    slug: "${slug}",
    title: "${title}",
    date: "${date}",
    description: "${description}",
    tags: [${tagsArray.map(tag => `"${tag}"`).join(', ')}],
    content: <${slug.replace(/-/g, '')} />,
    readTime: "X min read",
    featured: false
  },`;
  
  blogsIndex = blogsIndex.replace(
    '  // Add new blog posts here following the same structure',
    `${blogEntry}\n  // Add new blog posts here following the same structure`
  );
  
  fs.writeFileSync(blogsIndexPath, blogsIndex);
  
  console.log(`✅ Blog post "${title}" created successfully!`);
  console.log(`📝 MDX file: ${mdxPath}`);
  console.log(`🔗 URL: /writings/${slug}`);
  console.log(`\n📋 Next steps:`);
  console.log(`1. Edit the MDX file to add your content`);
  console.log(`2. Update the readTime in content/blogs/index.js`);
  console.log(`3. Set featured: true if you want it featured`);
}

// Get command line arguments
const args = process.argv.slice(2);
if (args.length < 3) {
  console.log('Usage: node scripts/add-blog.js "Blog Title" "Description" "tag1,tag2"');
  process.exit(1);
}

const [title, description, tags] = args;
addBlogPost(title, description, tags);