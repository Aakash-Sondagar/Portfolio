"use client";
import { useState } from "react";
import { Search, ExternalLink, Filter } from "lucide-react";
import { 
  bookmarks, 
  bookmarkCategories, 
  getBookmarksByCategory,
  searchBookmarks,
  getAllBookmarkTags,
  getBookmarksByTag
} from "@/content/bookmarks";

const BookmarksComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("All");

  const categories = ["All", ...Object.values(bookmarkCategories)];
  const tags = ["All", ...getAllBookmarkTags()];

  // Filter bookmarks based on search, category, and tag
  let filteredBookmarks = bookmarks;

  if (searchQuery) {
    filteredBookmarks = searchBookmarks(searchQuery);
  }

  if (selectedCategory !== "All") {
    filteredBookmarks = filteredBookmarks.filter(
      bookmark => bookmark.category === selectedCategory
    );
  }

  if (selectedTag !== "All") {
    filteredBookmarks = filteredBookmarks.filter(
      bookmark => bookmark.tags.includes(selectedTag)
    );
  }

  // Group bookmarks by category
  const groupedBookmarks = filteredBookmarks.reduce((acc, bookmark) => {
    const category = bookmark.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(bookmark);
    return acc;
  }, {});

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search bookmarks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <Filter className="w-4 h-4 text-gray-500 mt-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-600"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-500 mt-2">Tags:</span>
          {tags.slice(0, 10).map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-2 py-1 text-xs rounded-md transition-all duration-200 ${
                selectedTag === tag
                  ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {filteredBookmarks.length} bookmark{filteredBookmarks.length !== 1 ? 's' : ''} found
      </div>

      {/* Bookmarks Grid */}
      <div className="space-y-8">
        {Object.entries(groupedBookmarks).map(([category, categoryBookmarks]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
              {category}
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categoryBookmarks.map((bookmark, index) => (
                <a
                  key={index}
                  href={bookmark.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                      {bookmark.title}
                    </h4>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors duration-200 flex-shrink-0 ml-2" />
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    {bookmark.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {bookmark.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {bookmark.featured && (
                    <div className="mt-2">
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-md">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredBookmarks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No bookmarks found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default BookmarksComponent;