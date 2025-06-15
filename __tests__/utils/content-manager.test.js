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
      const blog = createBlogPost(
        'test-slug',
        'Test Title',
        '2025-01-20',
        'Test description',
        ['tag1', 'tag2'],
        'content'
      );

      expect(blog).toEqual({
        slug: 'test-slug',
        title: 'Test Title',
        date: '2025-01-20',
        description: 'Test description',
        tags: ['tag1', 'tag2'],
        content: 'content',
        type: 'blog'
      });
    });
  });

  describe('createBookmark', () => {
    it('should create a bookmark object', () => {
      const bookmark = createBookmark(
        'Test Title',
        'https://example.com',
        'Test description',
        'category',
        ['tag1'],
        '2025-01-20'
      );

      expect(bookmark).toEqual({
        title: 'Test Title',
        url: 'https://example.com',
        description: 'Test description',
        category: 'category',
        tags: ['tag1'],
        date: '2025-01-20',
        type: 'bookmark'
      });
    });
  });

  describe('generateSlug', () => {
    it('should generate slug from title', () => {
      expect(generateSlug('My New Blog Post')).toBe('my-new-blog-post');
      expect(generateSlug('React & JavaScript Tips!')).toBe('react-javascript-tips');
      expect(generateSlug('  Spaces  and  Special@#$%  ')).toBe('spaces-and-special');
    });
  });

  describe('formatContentDate', () => {
    it('should format string dates', () => {
      expect(formatContentDate('2025-01-20')).toBe('2025-01-20');
    });

    it('should format Date objects', () => {
      const date = new Date('2025-01-20');
      expect(formatContentDate(date)).toBe('2025-01-20');
    });
  });

  describe('sortByDate', () => {
    it('should sort content by date (newest first)', () => {
      const content = [
        { date: '2025-01-18' },
        { date: '2025-01-20' },
        { date: '2025-01-19' }
      ];

      const sorted = sortByDate(content);
      expect(sorted[0].date).toBe('2025-01-20');
      expect(sorted[1].date).toBe('2025-01-19');
      expect(sorted[2].date).toBe('2025-01-18');
    });
  });

  describe('filterByTags', () => {
    const content = [
      { tags: ['react', 'javascript'] },
      { tags: ['vue', 'javascript'] },
      { tags: ['angular'] }
    ];

    it('should filter by tags', () => {
      const filtered = filterByTags(content, ['react']);
      expect(filtered).toHaveLength(1);
      expect(filtered[0].tags).toContain('react');
    });

    it('should return all content when no tags provided', () => {
      const filtered = filterByTags(content, []);
      expect(filtered).toHaveLength(3);
    });
  });

  describe('getUniqueTags', () => {
    it('should return unique tags', () => {
      const content = [
        { tags: ['react', 'javascript'] },
        { tags: ['vue', 'javascript'] },
        { tags: ['angular'] }
      ];

      const tags = getUniqueTags(content);
      expect(tags).toEqual(['angular', 'javascript', 'react', 'vue']);
    });
  });
});