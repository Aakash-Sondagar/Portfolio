#!/usr/bin/env node

// Script to easily add new bookmarks
// Usage: node scripts/add-bookmark.js "Title" "URL" "Description" "Category" "tag1,tag2"

const fs = require('fs');
const path = require('path');

function addBookmark(title, url, description, category, tags, featured = false) {
  const date = new Date().toISOString().split('T')[0];
  const tagsArray = tags.split(',').map(tag => tag.trim());
  
  const bookmarkEntry = `  {
    title: "${title}",
    url: "${url}",
    description: "${description}",
    category: bookmarkCategories.${category.toUpperCase().replace(/\s+/g, '_')},
    tags: [${tagsArray.map(tag => `"${tag}"`).join(', ')}],
    date: "${date}"${featured ? ',\n    featured: true' : ''}
  },`;
  
  // Update bookmarks index
  const bookmarksIndexPath = path.join(__dirname, '..', 'content', 'bookmarks', 'index.js');
  let bookmarksIndex = fs.readFileSync(bookmarksIndexPath, 'utf8');
  
  bookmarksIndex = bookmarksIndex.replace(
    '  // Add new bookmarks here following the same structure',
    `${bookmarkEntry}\n  // Add new bookmarks here following the same structure`
  );
  
  fs.writeFileSync(bookmarksIndexPath, bookmarksIndex);
  
  console.log(`✅ Bookmark "${title}" added successfully!`);
  console.log(`🔗 URL: ${url}`);
  console.log(`📂 Category: ${category}`);
  console.log(`🏷️  Tags: ${tagsArray.join(', ')}`);
}

// Get command line arguments
const args = process.argv.slice(2);
if (args.length < 5) {
  console.log('Usage: node scripts/add-bookmark.js "Title" "URL" "Description" "Category" "tag1,tag2" [featured]');
  console.log('\nAvailable categories: Frontend, Backend, DevOps, Design, Tools, Learning, Career, Inspiration, Productivity');
  process.exit(1);
}

const [title, url, description, category, tags, featured] = args;
addBookmark(title, url, description, category, tags, featured === 'true');