import { 
  allResources, 
  getResourcesByCategory, 
  getFeaturedResources, 
  getRecentResources, 
  searchResources, 
  getResourcesByTag, 
  getAllResourceTags,
  resourceCategories 
} from '@/content/resources';

describe('Resource Content Management', () => {
  describe('allResources', () => {
    it('should contain resources', () => {
      expect(allResources).toBeDefined();
      expect(Array.isArray(allResources)).toBe(true);
      expect(allResources.length).toBeGreaterThan(0);
    });

    it('should have required properties for each resource', () => {
      allResources.forEach(resource => {
        expect(resource).toHaveProperty('title');
        expect(resource).toHaveProperty('url');
        expect(resource).toHaveProperty('description');
        expect(resource).toHaveProperty('category');
        expect(resource).toHaveProperty('tags');
        expect(resource).toHaveProperty('date');
        
        // Check types
        expect(typeof resource.title).toBe('string');
        expect(typeof resource.url).toBe('string');
        expect(typeof resource.description).toBe('string');
        expect(typeof resource.category).toBe('string');
        expect(Array.isArray(resource.tags)).toBe(true);
        expect(typeof resource.date).toBe('string');
      });
    });

    it('should have valid URLs', () => {
      allResources.forEach(resource => {
        expect(() => new URL(resource.url)).not.toThrow();
      });
    });
  });

  describe('resourceCategories', () => {
    it('should contain category definitions', () => {
      expect(resourceCategories).toBeDefined();
      expect(typeof resourceCategories).toBe('object');
      expect(Object.keys(resourceCategories).length).toBeGreaterThan(0);
    });

    it('should have valid category values in resources', () => {
      const categoryValues = Object.values(resourceCategories);
      
      allResources.forEach(resource => {
        expect(categoryValues).toContain(resource.category);
      });
    });
  });

  describe('getResourcesByCategory', () => {
    it('should return resources for valid category', () => {
      const category = resourceCategories.FRONTEND;
      const resources = getResourcesByCategory(category);
      
      expect(Array.isArray(resources)).toBe(true);
      resources.forEach(resource => {
        expect(resource.category).toBe(category);
      });
    });

    it('should return empty array for non-existent category', () => {
      const resources = getResourcesByCategory('Non-existent Category');
      expect(resources).toEqual([]);
    });
  });

  describe('getFeaturedResources', () => {
    it('should return only featured resources', () => {
      const featuredResources = getFeaturedResources();
      
      expect(Array.isArray(featuredResources)).toBe(true);
      featuredResources.forEach(resource => {
        expect(resource.featured).toBe(true);
      });
    });
  });

  describe('getRecentResources', () => {
    it('should return resources sorted by date (newest first)', () => {
      const recentResources = getRecentResources();
      
      expect(Array.isArray(recentResources)).toBe(true);
      
      for (let i = 1; i < recentResources.length; i++) {
        const currentDate = new Date(recentResources[i - 1].date);
        const nextDate = new Date(recentResources[i].date);
        expect(currentDate.getTime()).toBeGreaterThanOrEqual(nextDate.getTime());
      }
    });

    it('should respect the limit parameter', () => {
      const limit = 3;
      const recentResources = getRecentResources(limit);
      
      expect(recentResources.length).toBeLessThanOrEqual(limit);
    });
  });

  describe('searchResources', () => {
    it('should find resources by title', () => {
      const firstResource = allResources[0];
      const searchTerm = firstResource.title.split(' ')[0].toLowerCase();
      const results = searchResources(searchTerm);
      
      expect(Array.isArray(results)).toBe(true);
      expect(results.length).toBeGreaterThan(0);
      
      const found = results.some(resource => 
        resource.title.toLowerCase().includes(searchTerm)
      );
      expect(found).toBe(true);
    });

    it('should find resources by description', () => {
      const firstResource = allResources[0];
      const searchTerm = firstResource.description.split(' ')[0].toLowerCase();
      const results = searchResources(searchTerm);
      
      expect(Array.isArray(results)).toBe(true);
    });

    it('should find resources by tags', () => {
      const resourceWithTags = allResources.find(r => r.tags.length > 0);
      if (resourceWithTags) {
        const searchTerm = resourceWithTags.tags[0].toLowerCase();
        const results = searchResources(searchTerm);
        
        expect(Array.isArray(results)).toBe(true);
        expect(results.length).toBeGreaterThan(0);
      }
    });

    it('should return empty array for non-matching search', () => {
      const results = searchResources('xyz123nonexistent');
      expect(results).toEqual([]);
    });
  });

  describe('getResourcesByTag', () => {
    it('should return resources with the specified tag', () => {
      const resourceWithTags = allResources.find(r => r.tags.length > 0);
      if (resourceWithTags) {
        const tag = resourceWithTags.tags[0];
        const resourcesByTag = getResourcesByTag(tag);
        
        expect(Array.isArray(resourcesByTag)).toBe(true);
        resourcesByTag.forEach(resource => {
          expect(resource.tags).toContain(tag);
        });
      }
    });
  });

  describe('getAllResourceTags', () => {
    it('should return all unique tags', () => {
      const allTags = getAllResourceTags();
      
      expect(Array.isArray(allTags)).toBe(true);
      
      // Check uniqueness
      const uniqueTags = [...new Set(allTags)];
      expect(allTags.length).toBe(uniqueTags.length);
      
      // Check sorting
      const sortedTags = [...allTags].sort();
      expect(allTags).toEqual(sortedTags);
    });
  });
});