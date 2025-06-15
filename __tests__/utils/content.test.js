import { baseUrl, navItems, footerLinks } from '@/utils/content';

describe('Content Configuration', () => {
  describe('baseUrl', () => {
    it('should be a valid URL', () => {
      expect(typeof baseUrl).toBe('string');
      expect(() => new URL(baseUrl)).not.toThrow();
    });

    it('should use HTTPS', () => {
      expect(baseUrl).toMatch(/^https:/);
    });
  });

  describe('navItems', () => {
    it('should contain navigation items', () => {
      expect(navItems).toBeDefined();
      expect(typeof navItems).toBe('object');
      expect(Object.keys(navItems).length).toBeGreaterThan(0);
    });

    it('should have valid structure for each nav item', () => {
      Object.entries(navItems).forEach(([path, config]) => {
        expect(typeof path).toBe('string');
        expect(config).toHaveProperty('name');
        expect(typeof config.name).toBe('string');
        
        // Check if path is internal or external
        if (path.startsWith('http')) {
          expect(() => new URL(path)).not.toThrow();
        } else {
          expect(path).toMatch(/^\/[a-zA-Z0-9\-_/]*$/);
        }
      });
    });

    it('should contain expected navigation items', () => {
      const expectedItems = ['Work', 'Writings', 'Resources', 'Resume'];
      const navNames = Object.values(navItems).map(item => item.name);
      
      expectedItems.forEach(expectedItem => {
        expect(navNames).toContain(expectedItem);
      });
    });
  });

  describe('footerLinks', () => {
    it('should contain footer links', () => {
      expect(footerLinks).toBeDefined();
      expect(Array.isArray(footerLinks)).toBe(true);
      expect(footerLinks.length).toBeGreaterThan(0);
    });

    it('should have valid structure for each footer link', () => {
      footerLinks.forEach(link => {
        expect(link).toHaveProperty('name');
        expect(link).toHaveProperty('url');
        expect(typeof link.name).toBe('string');
        expect(typeof link.url).toBe('string');
        
        // Check if URL is valid
        expect(() => new URL(link.url)).not.toThrow();
      });
    });

    it('should contain expected social links', () => {
      const expectedLinks = ['Email', 'LinkedIn', 'GitHub'];
      const linkNames = footerLinks.map(link => link.name);
      
      expectedLinks.forEach(expectedLink => {
        expect(linkNames).toContain(expectedLink);
      });
    });
  });
});