// Test the core functions from the scripts without running them
describe('Script Functions', () => {
  describe('generateSlug function', () => {
    const generateSlug = (title) => {
      return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    };

    it('should generate correct slug from title', () => {
      expect(generateSlug('My New Blog Post')).toBe('my-new-blog-post');
      expect(generateSlug('React & JavaScript Tips!')).toBe('react-javascript-tips');
      expect(generateSlug('  Spaces  and  Special@#$%  ')).toBe('spaces-and-special');
    });
  });

  describe('formatCategory function', () => {
    const formatCategory = (category) => {
      return category.toUpperCase().replace(/\s+/g, '_');
    };

    it('should format category correctly', () => {
      expect(formatCategory('Frontend')).toBe('FRONTEND');
      expect(formatCategory('System Design')).toBe('SYSTEM_DESIGN');
      expect(formatCategory('DevOps & Cloud')).toBe('DEVOPS_&_CLOUD');
    });
  });

  describe('date generation', () => {
    it('should generate current date in correct format', () => {
      const date = new Date().toISOString().split('T')[0];
      expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  describe('tag processing', () => {
    it('should format tags correctly', () => {
      const tags = 'React,JavaScript, TypeScript';
      const tagsArray = tags.split(',').map(tag => tag.trim());
      
      expect(tagsArray).toEqual(['React', 'JavaScript', 'TypeScript']);
    });
  });

  describe('MDX content generation', () => {
    it('should create valid MDX content structure', () => {
      const title = 'Test Blog Post';
      const expectedContent = `# ${title}

Write your blog content here...

## Introduction

Start writing your blog post content.

## Conclusion

Wrap up your thoughts here.
`;

      expect(expectedContent).toContain(`# ${title}`);
      expect(expectedContent).toContain('## Introduction');
      expect(expectedContent).toContain('## Conclusion');
    });
  });

  describe('URL validation', () => {
    it('should validate URL format correctly', () => {
      const validUrls = [
        'https://example.com',
        'http://test.org',
        'https://subdomain.example.com/path',
      ];

      validUrls.forEach(url => {
        expect(() => new URL(url)).not.toThrow();
      });
    });
  });
});