import React from 'react';
import { render, screen } from '@testing-library/react';
import { Name, AnimatedName, Small, getMetaData, formatDate } from '@/components/common';

describe('Common Components', () => {
  describe('Name Component', () => {
    it('renders name and title correctly', () => {
      render(<Name />);
      
      expect(screen.getByText('Aakash Sondagar')).toBeInTheDocument();
      expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    });

    it('has correct styling classes', () => {
      render(<Name />);
      
      const nameElement = screen.getByText('Aakash Sondagar');
      const titleElement = screen.getByText('Software Engineer');
      
      expect(nameElement).toHaveClass('text-3xl', 'text-gray-900', 'dark:text-gray-100', 'font-semibold');
      expect(titleElement).toHaveClass('text-gray-600', 'dark:text-gray-400', 'font-light');
    });
  });

  describe('AnimatedName Component', () => {
    it('renders with default href', () => {
      render(<AnimatedName />);
      
      const linkElement = screen.getByRole('link');
      expect(linkElement).toHaveAttribute('href', '/');
      expect(screen.getByText('Aakash Sondagar')).toBeInTheDocument();
    });

    it('renders with custom href', () => {
      render(<AnimatedName href="/custom" />);
      
      const linkElement = screen.getByRole('link');
      expect(linkElement).toHaveAttribute('href', '/custom');
    });

    it('has correct styling and icon', () => {
      render(<AnimatedName />);
      
      const linkElement = screen.getByRole('link');
      expect(linkElement).toHaveClass('flex', 'items-center', 'mb-4', 'font-light');
      
      // Check for ChevronLeft icon (it should be present)
      const svgElement = linkElement.querySelector('svg');
      expect(svgElement).toBeInTheDocument();
    });
  });

  describe('Small Component', () => {
    it('renders children correctly', () => {
      render(<Small>Test content</Small>);
      
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('has correct styling classes', () => {
      render(<Small>Test content</Small>);
      
      const element = screen.getByText('Test content');
      expect(element).toHaveClass('text-sm', 'text-gray-600', 'dark:text-gray-400', 'font-normal');
    });
  });

  describe('getMetaData function', () => {
    it('returns correct metadata object', () => {
      const result = getMetaData('Test Title', '/test-path');
      
      expect(result).toEqual({
        title: 'Test Title',
        alternates: {
          canonical: '/test-path',
        },
      });
    });
  });

  describe('formatDate function', () => {
    beforeEach(() => {
      // Mock current date to ensure consistent test results
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2025-01-20'));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('formats recent dates correctly', () => {
      const result = formatDate('2025-01-19');
      expect(result).toContain('1 d ago');
      expect(result).toContain('January 19, 2025');
    });

    it('formats dates without relative time', () => {
      const result = formatDate('2025-01-19', false);
      expect(result).toBe('January 19, 2025');
      expect(result).not.toContain('ago');
    });

    it('handles today correctly', () => {
      const result = formatDate('2025-01-20');
      expect(result).toContain('Today');
    });

    it('handles months correctly', () => {
      const result = formatDate('2024-12-20');
      expect(result).toContain('1 m ago');
    });

    it('handles years correctly', () => {
      const result = formatDate('2023-01-20');
      expect(result).toContain('2 y ago');
    });
  });
});