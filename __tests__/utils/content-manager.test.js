import {
  createBlogPost,
  createBookmark,
  generateSlug,
  formatContentDate,
  sortByDate,
  filterByTags,
  getUniqueTags
} from '@/utils/content-manager';

describe('Content Manager Utilities', () => {
  describe('createBlogPost', () => {
    it('should create a blog post object', () => {
      const blogPost = createBlogPost(
        'test-slug',
        'Test Title',
        '2025-01-20',
        'Test description',
        ['React', 'Testing'],
        '<div>Test content</div>'
      );

      expect(blogPost).toEqual({
        slug: 'test-slug',
        title: 'Test Title',
        date: '2025-01-20',
        description: 'Test description',
        tags: ['React', 'Testing'],
        content: '<div>Test content</div>',
        type: 'blog'
      });
    });
  });

  describe('createBookmark', () => {
    it('should create a bookmark object', () => {
      const bookmark = createBookmark(
        'Test Resource',
        'https://example.com',
        'Test description',
        'Frontend',
        ['React', 'Tools'],
        '2025-01-20'
      );

      expect(bookmark).toEqual({
        title: 'Test Resource',
        url: 'https://example.com',
        description: 'Test description',
        category: 'Frontend',
        tags: ['React', 'Tools'],
        date: '2025-01-20',
        type: 'bookmark'
      });
    });
  });

  describe('generateSlug', () => {
    it('should generate URL-friendly slugs', () => {
      expect(generateSlug('My New Blog Post')).toBe('my-new-blog-post');
      expect(generateSlug('React & JavaScript Tips!')).toBe('react-javascript-tips');
      expect(generateSlug('  Spaces  and  Special@#$%  ')).toBe('spaces-and-special');
    });
  });

  describe('formatContentDate', () => {
    it('should format dates consistently', () => {
      expect(formatContentDate('2025-01-20')).toBe('2025-01-20');
      expect(formatContentDate(new Date('2025-01-20'))).toBe('2025-01-20');
    });
  });

  describe('sortByDate', () => {
    it('should sort content by date (newest first)', () => {
      const content = [
        { date: '2025-01-18', title: 'Old' },
        { date: '2025-01-20', title: 'New' },
        { date: '2025-01-19', title: 'Middle' }
      ];

      const sorted = sortByDate(content);
      expect(sorted[0].title).toBe('New');
      expect(sorted[1].title).toBe('Middle');
      expect(sorted[2].title).toBe('Old');
    });
  });

  describe('filterByTags', () => {
    it('should filter content by tags', () => {
      const content = [
        { tags: ['React', 'JavaScript'], title: 'React Post' },
        { tags: ['Vue', 'JavaScript'], title: 'Vue Post' },
        { tags: ['Angular'], title: 'Angular Post' }
      ];

      const filtered = filterByTags(content, ['React']);
      expect(filtered).toHaveLength(1);
      expect(filtered[0].title).toBe('React Post');
    });

    it('should return all content when no tags provided', () => {
      const content = [
        { tags: ['React'], title: 'React Post' },
        { tags: ['Vue'], title: 'Vue Post' }
      ];

      expect(filterByTags(content, [])).toEqual(content);
      expect(filterByTags(content, null)).toEqual(content);
    });
  });

  describe('getUniqueTags', () => {
    it('should return unique tags sorted', () => {
      const content = [
        { tags: ['React', 'JavaScript'] },
        { tags: ['Vue', 'JavaScript'] },
        { tags: ['React', 'TypeScript'] }
      ];

      const uniqueTags = getUniqueTags(content);
      expect(uniqueTags).toEqual(['JavaScript', 'React', 'TypeScript', 'Vue']);
    });
  });
});