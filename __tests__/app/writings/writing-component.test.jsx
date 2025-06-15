import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WritingComponent from '@/app/writings/writing-component';

// Mock the blogs data
jest.mock('@/utils/blogs', () => ({
  allBlogs: [
    {
      slug: 'test-blog-1',
      title: 'Test Blog 1',
      date: 'January 20, 2025 (Today)',
      description: 'Test description 1',
      tags: ['React', 'Testing'],
    },
    {
      slug: 'test-blog-2',
      title: 'Test Blog 2',
      date: 'January 19, 2025 (1 d ago)',
      description: 'Test description 2',
      tags: ['JavaScript', 'Testing'],
    },
    {
      slug: 'test-blog-3',
      title: 'Test Blog 3',
      date: 'January 18, 2025 (2 d ago)',
      description: 'Test description 3',
      tags: ['React', 'Frontend'],
    },
  ],
}));

describe('WritingComponent', () => {
  it('renders the writings page correctly', () => {
    render(<WritingComponent />);
    
    expect(screen.getByText('Writings')).toBeInTheDocument();
    expect(screen.getByText(/A collection of thoughts, learnings/)).toBeInTheDocument();
  });

  it('displays all blog posts by default', () => {
    render(<WritingComponent />);
    
    expect(screen.getByText('Test Blog 1')).toBeInTheDocument();
    expect(screen.getByText('Test Blog 2')).toBeInTheDocument();
    expect(screen.getByText('Test Blog 3')).toBeInTheDocument();
  });

  it('displays filter tags', () => {
    render(<WritingComponent />);
    
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Testing')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
  });

  it('filters blogs by tag when tag is clicked', async () => {
    const user = userEvent.setup();
    render(<WritingComponent />);
    
    // Click on React tag
    await user.click(screen.getByText('React'));
    
    // Should show only React blogs
    expect(screen.getByText('Test Blog 1')).toBeInTheDocument();
    expect(screen.getByText('Test Blog 3')).toBeInTheDocument();
    expect(screen.queryByText('Test Blog 2')).not.toBeInTheDocument();
  });

  it('shows all blogs when "All" filter is selected', async () => {
    const user = userEvent.setup();
    render(<WritingComponent />);
    
    // First filter by React
    await user.click(screen.getByText('React'));
    
    // Then click All
    await user.click(screen.getByText('All'));
    
    // Should show all blogs again
    expect(screen.getByText('Test Blog 1')).toBeInTheDocument();
    expect(screen.getByText('Test Blog 2')).toBeInTheDocument();
    expect(screen.getByText('Test Blog 3')).toBeInTheDocument();
  });

  it('applies correct styling to active filter', async () => {
    const user = userEvent.setup();
    render(<WritingComponent />);
    
    const reactButton = screen.getByText('React');
    
    // Click React filter
    await user.click(reactButton);
    
    // Check if active styling is applied
    expect(reactButton).toHaveClass('bg-indigo-100', 'dark:bg-indigo-900/30');
  });

  it('has correct link structure for blog posts', () => {
    render(<WritingComponent />);
    
    const blogLinks = screen.getAllByRole('link');
    const blogPostLinks = blogLinks.filter(link => 
      link.getAttribute('href')?.startsWith('/writings/')
    );
    
    expect(blogPostLinks.length).toBeGreaterThan(0);
    
    blogPostLinks.forEach(link => {
      expect(link).toHaveAttribute('href');
      expect(link.getAttribute('href')).toMatch(/^\/writings\/[a-z0-9\-_]+$/);
    });
  });
});