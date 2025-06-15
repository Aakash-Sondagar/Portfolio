import { render } from '@testing-library/react';
import ThemeProvider from '@/components/ThemeProvider';

describe('ThemeProvider Component', () => {
  it('renders without crashing', () => {
    render(<ThemeProvider />);
  });

  it('renders dappled light effects', () => {
    const { container } = render(<ThemeProvider />);
    
    expect(container.querySelector('#dappled-light')).toBeInTheDocument();
    expect(container.querySelector('#glow')).toBeInTheDocument();
    expect(container.querySelector('#glow-bounce')).toBeInTheDocument();
  });

  it('renders perspective elements', () => {
    const { container } = render(<ThemeProvider />);
    
    expect(container.querySelector('.perspective')).toBeInTheDocument();
    expect(container.querySelector('#leaves')).toBeInTheDocument();
    expect(container.querySelector('#blinds')).toBeInTheDocument();
  });

  it('renders shutters', () => {
    const { container } = render(<ThemeProvider />);
    
    const shutters = container.querySelectorAll('.shutter');
    expect(shutters).toHaveLength(10);
  });

  it('renders progressive blur elements', () => {
    const { container } = render(<ThemeProvider />);
    
    expect(container.querySelector('#progressive-blur')).toBeInTheDocument();
    const blurDivs = container.querySelectorAll('#progressive-blur > div');
    expect(blurDivs).toHaveLength(4);
  });

  it('renders vertical bars', () => {
    const { container } = render(<ThemeProvider />);
    
    const bars = container.querySelectorAll('.vertical .bar');
    expect(bars).toHaveLength(2);
  });
});