import { render, screen } from '@testing-library/react';
import BlogPage, { generateMetadata, generateStaticParams } from '@/app/writings/[slug]/page';

// Mock the content
jest.mock('@/utils/blogs', () => ({
  allBlogs: [
    {
      slug: 'test-blog',
      title: 'Test Blog',
      date: 'January 20, 2025',
      description: 'Test description',
      tags: ['React'],
      content: <div data-testid="blog-content">Blog content</div>
    }
  ]
}));

jest.mock('@/content/resources', () => ({
  allResources: [
    {
      slug: 'test-resource',
      title: 'Test Resource',
      date: '2025-01-20',
      description: 'Test resource description',
      tags: ['Tools'],
      content: <div data-testid="resource-content">Resource content</div>
    }
  ]
}));

describe('BlogPage', () => {
  it('renders blog post correctly', () => {
    const params = { slug: 'test-blog' };
    render(<BlogPage params={params} />);
    
    expect(screen.getByText('Test Blog')).toBeInTheDocument();
    expect(screen.getByTestId('blog-content')).toBeInTheDocument();
  });

  it('renders resource post correctly', () => {
    const params = { slug: 'test-resource' };
    render(<BlogPage params={params} />);
    
    expect(screen.getByText('Test Resource')).toBeInTheDocument();
    expect(screen.getByTestId('resource-content')).toBeInTheDocument();
  });

  it('renders 404 for non-existent post', () => {
    const params = { slug: 'non-existent' };
    render(<BlogPage params={params} />);
    
    expect(screen.getByText('404 - Blog not found')).toBeInTheDocument();
  });

  it('generates metadata correctly for blog', () => {
    const params = { slug: 'test-blog' };
    const metadata = generateMetadata({ params });
    
    expect(metadata.title).toBe('Test Blog');
    expect(metadata.alternates.canonical).toBe('/writings/test-blog');
  });

  it('generates metadata for non-existent blog', () => {
    const params = { slug: 'non-existent' };
    const metadata = generateMetadata({ params });
    
    expect(metadata.title).toBe('Blog not found');
  });

  it('generates static params correctly', async () => {
    const params = await generateStaticParams();
    
    expect(Array.isArray(params)).toBe(true);
    expect(params).toContainEqual({ slug: 'test-blog' });
    expect(params).toContainEqual({ slug: 'test-resource' });
  });
});