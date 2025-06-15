import { allBlogs } from '@/content/blogs';
import { allResources } from '@/content/resources';

describe('Content Flow Integration', () => {
  describe('Blog to Resource Cross-References', () => {
    it('should have consistent tag usage across blogs and resources', () => {
      const blogTags = new Set();
      const resourceTags = new Set();
      
      allBlogs.forEach(blog => {
        blog.tags.forEach(tag => blogTags.add(tag));
      });
      
      allResources.forEach(resource => {
        resource.tags.forEach(tag => resourceTags.add(tag));
      });
      
      // Check for common tags (there should be some overlap)
      const commonTags = [...blogTags].filter(tag => resourceTags.has(tag));
      
      // This ensures content is properly cross-referenced
      expect(commonTags.length).toBeGreaterThan(0);
    });
  });

  describe('Content Consistency', () => {
    it('should have consistent date formats', () => {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      
      allResources.forEach(resource => {
        // Resources should have ISO date format
        expect(resource.date).toMatch(dateRegex);
      });
    });

    it('should have non-empty descriptions', () => {
      [...allBlogs, ...allResources].forEach(item => {
        expect(item.description).toBeTruthy();
        expect(item.description.length).toBeGreaterThan(5);
      });
    });

    it('should have valid tags', () => {
      [...allBlogs, ...allResources].forEach(item => {
        expect(Array.isArray(item.tags)).toBe(true);
        expect(item.tags.length).toBeGreaterThan(0);
        
        item.tags.forEach(tag => {
          expect(typeof tag).toBe('string');
          expect(tag.length).toBeGreaterThan(0);
        });
      });
    });
  });

  describe('SEO and Metadata', () => {
    it('should have SEO-friendly titles', () => {
      [...allBlogs, ...allResources].forEach(item => {
        expect(item.title.length).toBeGreaterThan(3);
        expect(item.title.length).toBeLessThan(100);
      });
    });

    it('should have appropriate description lengths', () => {
      [...allBlogs, ...allResources].forEach(item => {
        expect(item.description.length).toBeGreaterThan(10);
        expect(item.description.length).toBeLessThan(200);
      });
    });
  });
});