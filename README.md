# Personal Portfolio & Content Management

A modern portfolio website built with Next.js, featuring an easy-to-use content management system for blogs and resources, with comprehensive testing coverage.

## ✨ Features

- 📱 **Responsive Design** - Works perfectly on all devices
- ✍️ **Easy Blog Management** - Add blogs with simple commands
- 📚 **Resource Collection** - Organize and categorize useful links and tools
- 🎨 **Beautiful UI** - Clean, modern design with dark mode
- ⚡ **Fast Performance** - Optimized for speed and SEO
- 🔍 **Search & Filter** - Find content quickly
- 🧪 **Comprehensive Testing** - Jest test suite with coverage reporting
- 🚀 **CI/CD Ready** - Automated testing and deployment

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 🧪 Testing

The project includes a comprehensive test suite covering:

- **Component Testing** - All React components
- **Content Management** - Blog and resource systems
- **Integration Testing** - Navigation and content flow
- **Utility Functions** - Helper functions and utilities

### Test Commands

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run tests for CI/CD
npm run test:ci
```

### Coverage Thresholds

- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

## 📝 Adding Content

### Adding a New Blog Post

```bash
# Using the script (recommended)
npm run add-blog "Your Blog Title" "Blog description" "tag1,tag2,tag3"

# Or manually add to content/blogs/index.js
```

This will:
1. Create a new MDX file in `app/blog/blogs/`
2. Add the blog entry to `content/blogs/index.js`
3. Generate a URL-friendly slug

### Adding a New Resource

```bash
# Using the script (recommended)
npm run add-resource "Resource Title" "https://example.com" "Description" "Category" "tag1,tag2"

# For featured resources
npm run add-resource "Resource Title" "https://example.com" "Description" "Category" "tag1,tag2" true
```

Available categories:
- `Frontend` - Frontend Development
- `Backend` - Backend Development  
- `DevOps` - DevOps & Cloud
- `Design` - Design & UI/UX
- `Tools` - Development Tools
- `Learning` - Learning Resources
- `Career` - Career & Interview
- `Inspiration` - Inspiration
- `Productivity` - Productivity
- `Newsletters` - Articles & Newsletters
- `DSA` - Data Structures & Algorithms
- `System_Design` - System Design
- `Books` - Technical Books

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── blog/blogs/        # MDX blog files
│   ├── resources/         # Resources page
│   ├── writings/          # Blog listing and individual posts
│   └── work/              # Work experience page
├── content/               # Content management
│   ├── blogs/            # Blog configuration
│   └── resources/        # Resource configuration
├── components/           # Reusable components
├── scripts/             # Helper scripts for content
├── utils/               # Utility functions
├── __tests__/           # Test files
│   ├── components/      # Component tests
│   ├── content/         # Content management tests
│   ├── utils/           # Utility tests
│   ├── app/             # Page component tests
│   ├── scripts/         # Script tests
│   └── integration/     # Integration tests
└── jest.setup.js        # Jest configuration
```

## 🛠️ Content Management

### Blog Management (`content/blogs/index.js`)
- Central configuration for all blog posts
- Easy to add new posts
- Automatic date formatting and sorting
- Tag-based filtering
- Featured post support

### Resource Management (`content/resources/index.js`)
- Organized by categories
- Tag-based filtering and search
- Featured resource support
- Easy bulk import

### Manual Content Addition

#### Adding a Blog Post Manually:

1. Create MDX file in `app/blog/blogs/your-post.mdx`
2. Add entry to `content/blogs/index.js`:

```javascript
{
  slug: "your-post-slug",
  title: "Your Post Title",
  date: "2025-01-20",
  description: "Post description",
  tags: ["Tag1", "Tag2"],
  content: <YourPostComponent />,
  readTime: "5 min read",
  featured: false
}
```

#### Adding a Resource Manually:

Add to `content/resources/index.js`:

```javascript
{
  title: "Resource Title",
  url: "https://example.com",
  description: "Resource description",
  category: resourceCategories.FRONTEND,
  tags: ["React", "Tools"],
  date: "2025-01-20",
  featured: false
}
```

## 🎯 Best Practices

### For Blogs:
- Use descriptive titles and slugs
- Add relevant tags for discoverability
- Include estimated read time
- Mark important posts as featured
- Write engaging descriptions

### For Resources:
- Use clear, descriptive titles
- Write helpful descriptions
- Categorize appropriately
- Add relevant tags
- Mark exceptional resources as featured

### For Testing:
- Write tests for new components
- Maintain coverage thresholds
- Test both happy and error paths
- Use descriptive test names
- Mock external dependencies

## 🔧 Customization

### Adding New Resource Categories:
Update `resourceCategories` in `content/resources/index.js`:

```javascript
export const resourceCategories = {
  // ... existing categories
  NEW_CATEGORY: "New Category Name"
};
```

### Styling:
- Modify `app/globals.css` for global styles
- Update Tailwind config in `tailwind.config.js`
- Customize components in `components/`

### Testing Configuration:
- Update Jest config in `package.json`
- Modify test setup in `jest.setup.js`
- Add new test utilities as needed

## 📊 SEO & Performance

- Automatic sitemap generation
- Optimized meta tags
- Fast loading with Next.js optimization
- Responsive images
- Clean URLs
- Structured data (JSON-LD)

## 🚀 Deployment

Deploy to Vercel (recommended):

```bash
# Push to GitHub and connect to Vercel
# Or use Vercel CLI
vercel --prod
```

### CI/CD Pipeline

The project includes test scripts for CI/CD:

```bash
# In your CI/CD pipeline
npm ci
npm run test:ci
npm run build
```

## 📈 Analytics

Includes Vercel Analytics and Speed Insights for performance monitoring.

## 🔄 Recent Updates

### v2.0.0 - Testing & Content Management Overhaul
- ✅ Added comprehensive Jest testing suite
- ✅ Implemented coverage reporting with thresholds
- ✅ Restructured content management system
- ✅ Added resource management system
- ✅ Improved component architecture
- ✅ Enhanced SEO and performance
- ✅ Unified heading design across all pages
- ✅ Removed bookmarks feature (consolidated into resources)

### Key Improvements:
- **Testing Coverage**: 70%+ coverage across all modules
- **Content Management**: Simplified blog and resource addition
- **Performance**: Optimized loading and rendering
- **Accessibility**: Improved ARIA labels and keyboard navigation
- **SEO**: Enhanced meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Write tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js, MDX, Tailwind CSS, and Jest