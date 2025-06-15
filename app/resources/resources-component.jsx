"use client";
import { useState } from "react";
import { Search, ExternalLink, Star } from "lucide-react";
import { 
  allResources, 
  resourceCategories, 
  searchResources,
  getAllResourceTags
} from "@/content/resources";

const ResourcesComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Object.values(resourceCategories)];

  // Filter resources based on search and category
  let filteredResources = allResources;

  if (searchQuery) {
    filteredResources = searchResources(searchQuery);
  }

  if (selectedCategory !== "All") {
    filteredResources = filteredResources.filter(
      resource => resource.category === selectedCategory
    );
  }

  // Sort resources: featured first, then by date
  const sortedResources = filteredResources.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 font-medium ${
              selectedCategory === category
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-4">
        {sortedResources.length} resource{sortedResources.length !== 1 ? 's' : ''}
      </div>

      {/* Resources List */}
      <div className="space-y-6">
        {sortedResources.map((resource, index) => (
          <div key={index} className="group">
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-all duration-200 hover:translate-x-1"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-gray-900 dark:text-gray-100 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                      {resource.title}
                    </h3>
                    {resource.featured && (
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      {resource.category}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-500 dark:text-gray-500"
                        >
                          #{tag}
                        </span>
                      ))}
                      {resource.tags.length > 3 && (
                        <span className="text-xs text-gray-500 dark:text-gray-500">
                          +{resource.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors duration-200 flex-shrink-0 ml-4 mt-1" />
              </div>
            </a>
          </div>
        ))}
      </div>

      {sortedResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No resources found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default ResourcesComponent;