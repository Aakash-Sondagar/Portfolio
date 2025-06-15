module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    // Mock MDX files
    '\\.mdx$': '<rootDir>/__mocks__/mdx.js',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['@swc/jest', {
      jsc: {
        parser: {
          syntax: 'ecmascript',
          jsx: true,
        },
        transform: {
          react: {
            runtime: 'automatic',
          },
        },
      },
    }],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(next-view-transitions)/)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
  collectCoverageFrom: [
    'components/**/*.{js,jsx}',
    'app/**/*.{js,jsx}',
    'utils/**/*.{js,jsx}',
    'content/**/*.{js,jsx}',
    'scripts/**/*.{js,jsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!jest.config.js',
    '!jest.setup.js',
    '!app/layout.js',
    '!app/sitemap.js',
    '!next.config.mjs',
    '!tailwind.config.js',
    '!postcss.config.mjs',
    '!app/manifest.json',
    '!app/robots.txt',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  coverageReporters: ['text', 'lcov', 'html'],
};