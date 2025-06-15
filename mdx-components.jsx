import { Link } from "next-view-transitions";
import { highlight } from "sugar-high";

export const components = {
  hr: (props) => (
    <hr className="border-gray-300 dark:border-gray-600 my-8" {...props} />
  ),
  h1: (props) => (
    <h1
      className="text-display text-gray-900 dark:text-gray-100 mb-6"
      {...props}
    />
  ),
  h2: (props) => (
    <h2 className="text-headline text-gray-900 dark:text-gray-100 mt-12 mb-6" {...props} />
  ),
  h3: (props) => (
    <h3
      className="text-title text-gray-900 dark:text-gray-100 mt-8 mb-4"
      {...props}
    />
  ),
  h4: (props) => (
    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3" {...props} />
  ),
  h5: (props) => (
    <h5 className="text-base font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2" {...props} />
  ),
  h6: (props) => (
    <h6 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-3 mb-2" {...props} />
  ),
  p: (props) => (
    <p
      className="text-body text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-6 space-y-2 mb-6 marker:text-gray-600 dark:marker:text-gray-400"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-6 space-y-2 mb-6 marker:text-gray-600 dark:marker:text-gray-400"
      {...props}
    />
  ),
  li: (props) => (
    <li className="text-gray-700 dark:text-gray-300 leading-relaxed" {...props} />
  ),
  em: (props) => <em className="font-medium italic" {...props} />,
  strong: (props) => (
    <strong
      className="text-gray-900 dark:text-gray-100 font-semibold"
      {...props}
    />
  ),
  a: ({ href, children, ...props }) => {
    const className = "link-primary";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }) => {
    const codeHTML = highlight(children);
    return (
      <code 
        className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-1 rounded text-sm font-mono"
        dangerouslySetInnerHTML={{ __html: codeHTML }} 
        {...props} 
      />
    );
  },
  pre: (props) => (
    <pre 
      className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-xl overflow-x-auto text-sm font-mono my-8 border border-gray-200 dark:border-gray-700 shadow-sm"
      {...props} 
    />
  ),
  Table: ({ data }) => (
    <div className="overflow-x-auto my-8 rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800">
            {data.headers.map((header, index) => (
              <th 
                key={index} 
                className="border-b border-gray-200 dark:border-gray-700 px-6 py-3 text-left text-gray-900 dark:text-gray-100 font-semibold text-sm"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index} className="even:bg-gray-50 dark:even:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150">
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className="border-b border-gray-200 dark:border-gray-700 px-6 py-4 text-gray-700 dark:text-gray-300 text-sm"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-indigo-300 dark:border-indigo-500 pl-6 py-4 my-8 bg-indigo-50 dark:bg-indigo-900/20 text-gray-700 dark:text-gray-300 italic rounded-r-lg"
      {...props}
    />
  ),
};

export const useMDXComponents = () => {
  return components;
};