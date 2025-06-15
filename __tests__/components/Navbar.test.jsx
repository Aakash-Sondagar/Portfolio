import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '@/components/Navbar';

// Mock next/link
jest.mock('next/link', () => {
  return function MockLink({ children, href, ...props }) {
    return <a href={href} {...props}>{children}</a>;
  };
});

describe('Navbar Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    
    // Reset document body classes
    document.body.className = '';
  });

  it('renders navigation items correctly', () => {
    render(<Navbar />);
    
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Writings')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
  });

  it('renders theme toggle button', () => {
    render(<Navbar />);
    
    const themeButton = screen.getByLabelText(/switch to (light|dark) mode/i);
    expect(themeButton).toBeInTheDocument();
  });

  it('toggles theme when theme button is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    
    const themeButton = screen.getByLabelText(/switch to dark mode/i);
    
    await user.click(themeButton);
    
    await waitFor(() => {
      expect(document.body).toHaveClass('dark');
      expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
    });
  });

  it('shows mobile menu button on mobile', () => {
    render(<Navbar />);
    
    const menuButton = screen.getByLabelText('Open menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('toggles mobile menu when menu button is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    
    const menuButton = screen.getByLabelText('Open menu');
    
    await user.click(menuButton);
    
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });

  it('has correct external link attributes for Resume', () => {
    render(<Navbar />);
    
    const resumeLink = screen.getByText('Resume').closest('a');
    expect(resumeLink).toHaveAttribute('target', '_blank');
    expect(resumeLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('applies saved theme preference on mount', () => {
    localStorage.setItem('theme', 'dark');
    
    render(<Navbar />);
    
    expect(document.body).toHaveClass('dark');
  });

  it('respects system preference when no saved theme', () => {
    // Mock matchMedia to return dark preference
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
    
    render(<Navbar />);
    
    expect(document.body).toHaveClass('dark');
  });
});