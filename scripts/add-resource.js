#!/usr/bin/env node

// Script to easily add new resources
// Usage: node scripts/add-resource.js "Title" "URL" "Description" "Category" "tag1,tag2"

const fs = require('fs');
const path = require('path');

function addResource(title, url, description, category, tags, featured = false) {
  const date = new Date().toISOString().split('T')[0];
  const tagsArray = tags.split(',').map(tag => tag.trim());
  
  const resourceEntry = `  {
    title: "${title}",
    url: "${url}",
    description: "${description}",
    category: resourceCategories.${category.toUpperCase().replace(/\s+/g, '_')},
    tags: [${tagsArray.map(tag => `"${tag}"`).join(', ')}],
    date: "${date}"${featured ? ',\n    featured: true' : ''}
  },`;
  
  // Update resources index
  const resourcesIndexPath = path.join(__dirname, '..', 'content', 'resources', 'index.js');
  let resourcesIndex = fs.readFileSync(resourcesIndexPath, 'utf8');
  
  resourcesIndex = resourcesIndex.replace(
    '  // Add new resources here following the same structure',
    `${resourceEntry}\n  // Add new resources here following the same structure`
  );
  
  fs.writeFileSync(resourcesIndexPath, resourcesIndex);
  
  console.log(`✅ Resource "${title}" added successfully!`);
  console.log(`🔗 URL: ${url}`);
  console.log(`📂 Category: ${category}`);
  console.log(`🏷️  Tags: ${tagsArray.join(', ')}`);
}

// Get command line arguments
const args = process.argv.slice(2);
if (args.length < 5) {
  console.log('Usage: node scripts/add-resource.js "Title" "URL" "Description" "Category" "tag1,tag2" [featured]');
  console.log('\nAvailable categories: Frontend, Backend, DevOps, Design, Tools, Learning, Career, Inspiration, Productivity, Newsletters, DSA, System_Design, Books');
  process.exit(1);
}

const [title, url, description, category, tags, featured] = args;
addResource(title, url, description, category, tags, featured === 'true');