"use client";
import { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import { 
  allResources, 
  resourceCategories, 
  searchResources,
  getAllResourceTags
} from "@/content/resources";

const ResourcesComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", ...getAllResourceTags()];

  // Filter resources based on search and tag
  let filteredResources = allResources;

  if (searchQuery) {
    filteredResources = searchResources(searchQuery);
  }

  if (selectedTag !== "All") {
    filteredResources = filteredResources.filter(
      resource => resource.tags.includes(selectedTag)
    );
  }

  // Group resources by category
  const groupedResources = filteredResources.reduce((acc, resource) => {
    const category = resource.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(resource);
    return acc;
  }, {});

  return (
    <div className="space-y-12">
      {/* Search and Filters */}
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 focus:border-transparent text-sm"
          />
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 12).map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
                selectedTag === tag
                  ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Resources by Category */}
      <div className="space-y-12">
        {Object.entries(groupedResources)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([category, categoryResources]) => (
          <section key={category} className="space-y-4">
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 lowercase">
              {category.toLowerCase()}
            </h2>
            <ul className="list-disc pl-6 space-y-3 marker:text-gray-600 dark:marker:text-gray-400">
              {categoryResources.map((resource, index) => (
                <li key={index} className="transition-all duration-300 hover:translate-x-1">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block no-underline"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                        {resource.title}
                      </h3>
                      <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-indigo-500 transition-colors duration-200 flex-shrink-0" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                      {resource.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {resource.tags.length > 3 && (
                        <span className="px-2 py-0.5 text-xs text-gray-500 dark:text-gray-500">
                          +{resource.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {filteredResources.length === 0 && (
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