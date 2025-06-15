import { allBlogs, getFeaturedBlogs, getRecentBlogs, getBlogsByTag } from '@/content/blogs';

describe('Blog Content Management', () => {
  describe('allBlogs', () => {
    it('should contain blog posts', () => {
      expect(allBlogs).toBeDefined();
      expect(Array.isArray(allBlogs)).toBe(true);
      expect(allBlogs.length).toBeGreaterThan(0);
    });

    it('should have required properties for each blog', () => {
      allBlogs.forEach(blog => {
        expect(blog).toHaveProperty('slug');
        expect(blog).toHaveProperty('title');
        expect(blog).toHaveProperty('date');
        expect(blog).toHaveProperty('description');
        expect(blog).toHaveProperty('tags');
        expect(blog).toHaveProperty('content');
        expect(blog).toHaveProperty('readTime');
        expect(blog).toHaveProperty('featured');
        
        // Check types
        expect(typeof blog.slug).toBe('string');
        expect(typeof blog.title).toBe('string');
        expect(typeof blog.description).toBe('string');
        expect(Array.isArray(blog.tags)).toBe(true);
        expect(typeof blog.readTime).toBe('string');
        expect(typeof blog.featured).toBe('boolean');
      });
    });

    it('should have unique slugs', () => {
      const slugs = allBlogs.map(blog => blog.slug);
      const uniqueSlugs = [...new Set(slugs)];
      expect(slugs.length).toBe(uniqueSlugs.length);
    });
  });

  describe('getFeaturedBlogs', () => {
    it('should return only featured blogs', () => {
      const featuredBlogs = getFeaturedBlogs();
      
      expect(Array.isArray(featuredBlogs)).toBe(true);
      featuredBlogs.forEach(blog => {
        expect(blog.featured).toBe(true);
      });
    });
  });

  describe('getRecentBlogs', () => {
    it('should return blogs sorted by date (newest first)', () => {
      const recentBlogs = getRecentBlogs();
      
      expect(Array.isArray(recentBlogs)).toBe(true);
      
      for (let i = 1; i < recentBlogs.length; i++) {
        const currentDate = new Date(recentBlogs[i - 1].formattedDate);
        const nextDate = new Date(recentBlogs[i].formattedDate);
        expect(currentDate.getTime()).toBeGreaterThanOrEqual(nextDate.getTime());
      }
    });

    it('should respect the limit parameter', () => {
      const limit = 2;
      const recentBlogs = getRecentBlogs(limit);
      
      expect(recentBlogs.length).toBeLessThanOrEqual(limit);
    });
  });

  describe('getBlogsByTag', () => {
    it('should return blogs with the specified tag', () => {
      // Get a tag from existing blogs
      const firstBlog = allBlogs[0];
      if (firstBlog.tags.length > 0) {
        const tag = firstBlog.tags[0];
        const blogsByTag = getBlogsByTag(tag);
        
        expect(Array.isArray(blogsByTag)).toBe(true);
        blogsByTag.forEach(blog => {
          expect(blog.tags).toContain(tag);
        });
      }
    });

    it('should return empty array for non-existent tag', () => {
      const blogsByTag = getBlogsByTag('non-existent-tag');
      expect(blogsByTag).toEqual([]);
    });
  });
});