import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ResourcesComponent from '@/app/resources/resources-component';

// Mock the resources data
jest.mock('@/content/resources', () => ({
  allResources: [
    {
      title: 'Test Resource 1',
      url: 'https://example1.com',
      description: 'Test description 1',
      tags: ['React', 'Tools'],
      date: 'January 20, 2025',
    },
    {
      title: 'Test Resource 2',
      url: 'https://example2.com',
      description: 'Test description 2',
      tags: ['JavaScript', 'Learning'],
      date: 'January 19, 2025',
    },
    {
      title: 'Test Resource 3',
      url: 'https://example3.com',
      description: 'Test description 3',
      tags: ['React', 'Frontend'],
      date: 'January 18, 2025',
    },
  ],
  getAllResourceTags: () => ['React', 'Tools', 'JavaScript', 'Learning', 'Frontend'],
}));

describe('ResourcesComponent', () => {
  it('renders the resources page correctly', () => {
    render(<ResourcesComponent />);
    
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText(/A curated collection of digital artifacts/)).toBeInTheDocument();
  });

  it('displays all resources by default', () => {
    render(<ResourcesComponent />);
    
    expect(screen.getByText('Test Resource 1')).toBeInTheDocument();
    expect(screen.getByText('Test Resource 2')).toBeInTheDocument();
    expect(screen.getByText('Test Resource 3')).toBeInTheDocument();
  });

  it('displays filter tags', () => {
    render(<ResourcesComponent />);
    
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Tools')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('Learning')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
  });

  it('filters resources by tag when tag is clicked', async () => {
    const user = userEvent.setup();
    render(<ResourcesComponent />);
    
    // Click on React tag
    await user.click(screen.getByText('React'));
    
    // Should show only React resources
    expect(screen.getByText('Test Resource 1')).toBeInTheDocument();
    expect(screen.getByText('Test Resource 3')).toBeInTheDocument();
    expect(screen.queryByText('Test Resource 2')).not.toBeInTheDocument();
  });

  it('shows all resources when "All" filter is selected', async () => {
    const user = userEvent.setup();
    render(<ResourcesComponent />);
    
    // First filter by React
    await user.click(screen.getByText('React'));
    
    // Then click All
    await user.click(screen.getByText('All'));
    
    // Should show all resources again
    expect(screen.getByText('Test Resource 1')).toBeInTheDocument();
    expect(screen.getByText('Test Resource 2')).toBeInTheDocument();
    expect(screen.getByText('Test Resource 3')).toBeInTheDocument();
  });

  it('has correct external link attributes', () => {
    render(<ResourcesComponent />);
    
    const resourceLinks = screen.getAllByRole('link');
    const externalLinks = resourceLinks.filter(link => 
      link.getAttribute('href')?.startsWith('http')
    );
    
    externalLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('applies correct styling to active filter', async () => {
    const user = userEvent.setup();
    render(<ResourcesComponent />);
    
    const reactButton = screen.getByText('React');
    
    // Click React filter
    await user.click(reactButton);
    
    // Check if active styling is applied
    expect(reactButton).toHaveClass('bg-indigo-100', 'dark:bg-indigo-900/30');
  });
});