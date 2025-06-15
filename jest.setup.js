import '@testing-library/jest-dom';
import React from 'react';

// Make React available globally for JSX
global.React = React;

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
  usePathname() {
    return '/';
  },
}));

// Mock next-view-transitions
jest.mock('next-view-transitions', () => ({
  Link: function MockLink({ children, href, ...props }) {
    return React.createElement('a', { href, ...props }, children);
  },
  ViewTransitions: function MockViewTransitions({ children }) {
    return children;
  },
}));

// Mock Vercel Analytics
jest.mock('@vercel/analytics/next', () => ({
  Analytics: function MockAnalytics() {
    return null;
  },
}));

// Mock Vercel Speed Insights
jest.mock('@vercel/speed-insights/next', () => ({
  SpeedInsights: function MockSpeedInsights() {
    return null;
  },
}));

// Mock all MDX files with a generic component
jest.mock('@/app/blog/blogs/SystemDesign.mdx', () => {
  return function MockSystemDesign() {
    return React.createElement('div', { 'data-testid': 'system-design-content' }, 'System Design Content');
  };
}, { virtual: true });

jest.mock('@/app/blog/blogs/IntroductionSystemDesign.mdx', () => {
  return function MockIntroductionSystemDesign() {
    return React.createElement('div', { 'data-testid': 'intro-system-design-content' }, 'Introduction to System Design Content');
  };
}, { virtual: true });

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};