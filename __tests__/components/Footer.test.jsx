import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer Component', () => {
  it('renders all footer links correctly', () => {
    render(<Footer />);
    
    expect(screen.getByText('@aakashsondagar')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('has correct external link attributes', () => {
    render(<Footer />);
    
    const links = screen.getAllByRole('link');
    
    // Check that all links have target="_blank" and rel="noopener noreferrer"
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders copyright information', () => {
    render(<Footer />);
    
    expect(screen.getByText(/Made with/)).toBeInTheDocument();
    expect(screen.getByText(/© 2025/)).toBeInTheDocument();
  });

  it('has correct link URLs', () => {
    render(<Footer />);
    
    expect(screen.getByText('@aakashsondagar').closest('a')).toHaveAttribute('href', 'https://x.com/AakashSondagar');
    expect(screen.getByText('Email').closest('a')).toHaveAttribute('href', 'mailto:aakashsondar@gmail.com');
    expect(screen.getByText('LinkedIn').closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/aakash-sondagar');
    expect(screen.getByText('GitHub').closest('a')).toHaveAttribute('href', 'https://github.com/Aakash-Sondagar');
  });

  it('has proper accessibility structure', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
});