import { allBlogs, getFeaturedBlogs, getRecentBlogs, getBlogsByTag } from '@/utils/blogs';

describe('Utils Blogs', () => {
  it('should export all blog functions', () => {
    expect(allBlogs).toBeDefined();
    expect(getFeaturedBlogs).toBeDefined();
    expect(getRecentBlogs).toBeDefined();
    expect(getBlogsByTag).toBeDefined();
  });

  it('should have blogs data', () => {
    expect(Array.isArray(allBlogs)).toBe(true);
    expect(allBlogs.length).toBeGreaterThan(0);
  });
});