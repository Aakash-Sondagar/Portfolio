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
            <div className="space-y-3">
              {categoryResources.map((resource, index) => (
                <div key={index} className="group">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-0 hover:no-underline"
                  >
                    {/* Icon placeholder - you can customize these based on category */}
                    <div className="flex-shrink-0 mt-1">
                      {resource.category === resourceCategories.FRONTEND && (
                        <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                      )}
                      {resource.category === resourceCategories.TOOLS && (
                        <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                      )}
                      {resource.category === resourceCategories.LEARNING && (
                        <div className="w-4 h-4 bg-purple-500 rounded-sm"></div>
                      )}
                      {resource.category === resourceCategories.NEWSLETTERS && (
                        <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                      )}
                      {resource.category === resourceCategories.DSA && (
                        <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                      )}
                      {resource.category === resourceCategories.CAREER && (
                        <div className="w-4 h-4 bg-indigo-500 rounded-sm"></div>
                      )}
                      {resource.category === resourceCategories.SYSTEM_DESIGN && (
                        <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
                      )}
                      {!Object.values(resourceCategories).slice(0, 7).includes(resource.category) && (
                        <div className="w-4 h-4 bg-gray-500 rounded-sm"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {resource.title}
                        </h3>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-blue-500 transition-colors duration-200 flex-shrink-0" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-2">
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
                    </div>
                  </a>
                </div>
              ))}
            </div>
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