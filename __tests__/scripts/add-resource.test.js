import fs from 'fs';
import path from 'path';

// Mock fs module
jest.mock('fs');

describe('Add Resource Script', () => {
  const mockFs = fs;
  
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Mock file system operations
    mockFs.writeFileSync = jest.fn();
    mockFs.readFileSync = jest.fn();
    
    // Mock console.log to avoid output during tests
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should validate URL format', () => {
    const validUrls = [
      'https://example.com',
      'http://test.org',
      'https://subdomain.example.com/path',
    ];

    const invalidUrls = [
      'not-a-url',
      'ftp://example.com',
    ];

    validUrls.forEach(url => {
      expect(() => new URL(url)).not.toThrow();
    });

    invalidUrls.forEach(url => {
      expect(() => new URL(url)).toThrow();
    });
  });

  it('should format tags correctly', () => {
    const tags = 'React,JavaScript, TypeScript';
    const tagsArray = tags.split(',').map(tag => tag.trim());
    
    expect(tagsArray).toEqual(['React', 'JavaScript', 'TypeScript']);
  });

  it('should generate current date in correct format', () => {
    const date = new Date().toISOString().split('T')[0];
    
    expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('should format category correctly', () => {
    const formatCategory = (category) => {
      return category.toUpperCase().replace(/\s+/g, '_');
    };

    expect(formatCategory('Frontend')).toBe('FRONTEND');
    expect(formatCategory('System Design')).toBe('SYSTEM_DESIGN');
    expect(formatCategory('DevOps & Cloud')).toBe('DEVOPS_&_CLOUD');
  });
});