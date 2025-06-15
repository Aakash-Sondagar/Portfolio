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
    return <a href={href} {...props}>{children}</a>;
  },
  ViewTransitions: ({ children }) => children,
}));

// Mock Vercel Analytics
jest.mock('@vercel/analytics/next', () => ({
  Analytics: () => null,
}));

// Mock Vercel Speed Insights
jest.mock('@vercel/speed-insights/next', () => ({
  SpeedInsights: () => null,
}));

// Mock MDX components
jest.mock('@/app/blog/blogs/SystemDesign.mdx', () => {
  return function MockSystemDesign() {
    return <div data-testid="system-design-content">System Design Content</div>;
  };
});

jest.mock('@/app/blog/blogs/IntroductionSystemDesign.mdx', () => {
  return function MockIntroductionSystemDesign() {
    return <div data-testid="intro-system-design-content">Introduction to System Design Content</div>;
  };
});

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