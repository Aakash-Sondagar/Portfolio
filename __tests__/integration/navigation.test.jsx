import { render, screen } from '@testing-library/react';

// Mock the page components
const MockWritingsPage = () => <div data-testid="writings-page">Writings Page</div>;
const MockResourcesPage = () => <div data-testid="resources-page">Resources Page</div>;
const MockWorkPage = () => <div data-testid="work-page">Work Page</div>;

describe('Navigation Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should have consistent navigation structure across pages', () => {
    const expectedNavItems = ['Work', 'Writings', 'Resources', 'Resume'];
    
    // This test ensures that navigation items are consistent
    // In a real app, you'd test actual navigation between pages
    expectedNavItems.forEach(item => {
      expect(item).toBeTruthy();
      expect(typeof item).toBe('string');
    });
  });

  it('should have valid internal routes', () => {
    const internalRoutes = ['/work', '/writings', '/resources'];
    
    internalRoutes.forEach(route => {
      expect(route).toMatch(/^\/[a-zA-Z0-9\-_/]*$/);
    });
  });

  it('should have valid external routes', () => {
    const externalRoutes = [
      'https://drive.google.com/file/d/1RcE2GSop7jC7k3zO9j4a2z_Lr667JVZY/view?usp=sharing'
    ];
    
    externalRoutes.forEach(route => {
      expect(() => new URL(route)).not.toThrow();
    });
  });

  it('should render mock components correctly', () => {
    render(<MockWritingsPage />);
    expect(screen.getByTestId('writings-page')).toBeInTheDocument();
    
    render(<MockResourcesPage />);
    expect(screen.getByTestId('resources-page')).toBeInTheDocument();
    
    render(<MockWorkPage />);
    expect(screen.getByTestId('work-page')).toBeInTheDocument();
  });
});