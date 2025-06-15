# Personal Portfolio & Content Management

A modern portfolio website built with Next.js, featuring an easy-to-use content management system for blogs and bookmarks.

## ✨ Features

- 📱 **Responsive Design** - Works perfectly on all devices
- ✍️ **Easy Blog Management** - Add blogs with simple commands
- 🔖 **Bookmark Collection** - Organize and categorize useful links
- 🎨 **Beautiful UI** - Clean, modern design with dark mode
- ⚡ **Fast Performance** - Optimized for speed and SEO
- 🔍 **Search & Filter** - Find content quickly

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

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

### Adding a New Bookmark

```bash
# Using the script (recommended)
npm run add-bookmark "Site Title" "https://example.com" "Description" "Frontend" "react,tools"

# For featured bookmarks
npm run add-bookmark "Site Title" "https://example.com" "Description" "Frontend" "react,tools" true
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

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── blog/blogs/        # MDX blog files
│   ├── bookmarks/         # Bookmarks page
│   ├── writings/          # Blog listing and individual posts
│   └── ...
├── content/               # Content management
│   ├── blogs/            # Blog configuration
│   └── bookmarks/        # Bookmark configuration
├── components/           # Reusable components
├── scripts/             # Helper scripts for content
└── utils/               # Utility functions
```

## 🛠️ Content Management

### Blog Management (`content/blogs/index.js`)
- Central configuration for all blog posts
- Easy to add new posts
- Automatic date formatting and sorting
- Tag-based filtering
- Featured post support

### Bookmark Management (`content/bookmarks/index.js`)
- Organized by categories
- Tag-based filtering and search
- Featured bookmark support
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

#### Adding a Bookmark Manually:

Add to `content/bookmarks/index.js`:

```javascript
{
  title: "Bookmark Title",
  url: "https://example.com",
  description: "Bookmark description",
  category: bookmarkCategories.FRONTEND,
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

### For Bookmarks:
- Use clear, descriptive titles
- Write helpful descriptions
- Categorize appropriately
- Add relevant tags
- Mark exceptional resources as featured

## 🔧 Customization

### Adding New Bookmark Categories:
Update `bookmarkCategories` in `content/bookmarks/index.js`:

```javascript
export const bookmarkCategories = {
  // ... existing categories
  NEW_CATEGORY: "New Category Name"
};
```

### Styling:
- Modify `app/globals.css` for global styles
- Update Tailwind config in `tailwind.config.js`
- Customize components in `components/`

## 📊 SEO & Performance

- Automatic sitemap generation
- Optimized meta tags
- Fast loading with Next.js optimization
- Responsive images
- Clean URLs

## 🚀 Deployment

Deploy to Vercel (recommended):

```bash
# Push to GitHub and connect to Vercel
# Or use Vercel CLI
vercel --prod
```

## 📈 Analytics

Includes Vercel Analytics and Speed Insights for performance monitoring.

---

Built with ❤️ using Next.js, MDX, and Tailwind CSS