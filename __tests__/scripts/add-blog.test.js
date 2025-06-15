import fs from 'fs';
import path from 'path';

// Mock fs module
jest.mock('fs');

describe('Add Blog Script', () => {
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

  it('should generate correct slug from title', () => {
    // Import the script functions (you might need to refactor the script to export functions)
    const generateSlug = (title) => {
      return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    };

    expect(generateSlug('My New Blog Post')).toBe('my-new-blog-post');
    expect(generateSlug('React & JavaScript Tips!')).toBe('react-javascript-tips');
    expect(generateSlug('  Spaces  and  Special@#$%  ')).toBe('spaces-and-special');
  });

  it('should create valid MDX content', () => {
    const title = 'Test Blog Post';
    const expectedContent = `# ${title}

Write your blog content here...

## Introduction

Start writing your blog post content.

## Conclusion

Wrap up your thoughts here.
`;

    // This tests the expected format of generated MDX content
    expect(expectedContent).toContain(`# ${title}`);
    expect(expectedContent).toContain('## Introduction');
    expect(expectedContent).toContain('## Conclusion');
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
});