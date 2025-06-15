import '@testing-library/jest-dom';

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
  Link: ({ children, href, ...props }) => {
    const React = require('react');
    return React.createElement('a', { href, ...props }, children);
  },
  ViewTransitions: ({ children }) => children,
}));

// Mock next/link
jest.mock('next/link', () => {
  return function MockLink({ children, href, ...props }) {
    const React = require('react');
    return React.createElement('a', { href, ...props }, children);
  };
});

// Mock Vercel Analytics
jest.mock('@vercel/analytics/next', () => ({
  Analytics: () => null,
}));

// Mock Vercel Speed Insights
jest.mock('@vercel/speed-insights/next', () => ({
  SpeedInsights: () => null,
}));

// Mock specific MDX files
jest.mock('@/app/blog/blogs/SystemDesign.mdx', () => {
  const React = require('react');
  return function MockSystemDesign() {
    return React.createElement('div', { 'data-testid': 'system-design-content' }, 'System Design Content');
  };
});

jest.mock('@/app/blog/blogs/IntroductionSystemDesign.mdx', () => {
  const React = require('react');
  return function MockIntroductionSystemDesign() {
    return React.createElement('div', { 'data-testid': 'intro-system-design-content' }, 'Introduction to System Design Content');
  };
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
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

// Mock console methods to avoid noise in tests
global.console = {
  ...console,
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};