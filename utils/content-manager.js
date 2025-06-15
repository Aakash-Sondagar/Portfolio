// Content management utilities for easy blog and bookmark addition

export const createBlogPost = (slug, title, date, description, tags, content) => {
  return {
    slug,
    title,
    date,
    description,
    tags,
    content,
    type: 'blog'
  };
};

export const createBookmark = (title, url, description, category, tags, date) => {
  return {
    title,
    url,
    description,
    category,
    tags,
    date,
    type: 'bookmark'
  };
};

// Auto-generate slug from title
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Format date consistently
export const formatContentDate = (date) => {
  if (typeof date === 'string') {
    return date;
  }
  return new Date(date).toISOString().split('T')[0];
};

// Sort content by date (newest first)
export const sortByDate = (content) => {
  return content.sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Filter content by tags
export const filterByTags = (content, tags) => {
  if (!tags || tags.length === 0) return content;
  return content.filter(item => 
    item.tags && item.tags.some(tag => tags.includes(tag))
  );
};

// Get unique tags from content
export const getUniqueTags = (content) => {
  const allTags = content.flatMap(item => item.tags || []);
  return [...new Set(allTags)].sort();
};