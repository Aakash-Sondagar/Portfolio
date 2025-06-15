import { Link } from "next-view-transitions";
import { highlight } from "sugar-high";

export const components = {
  hr: (props) => (
    <hr className="border-gray-300 dark:border-gray-600 my-6" {...props} />
  ),
  h1: (props) => (
    <h1
      className="flex text-3xl text-gray-900 dark:text-gray-100 font-semibold mb-0"
      {...props}
    />
  ),
  h2: (props) => (
    <h2 className="text-gray-900 dark:text-gray-100 font-semibold text-2xl mt-8 mb-4" {...props} />
  ),
  h3: (props) => (
    <h3
      className="text-gray-900 dark:text-gray-100 font-semibold text-xl mt-6 mb-3"
      {...props}
    />
  ),
  h4: (props) => (
    <h4 className="text-gray-900 dark:text-gray-100 font-semibold text-lg mt-4 mb-2" {...props} />
  ),
  h5: (props) => (
    <h5 className="text-gray-900 dark:text-gray-100 font-semibold text-base mt-3 mb-2" {...props} />
  ),
  h6: (props) => (
    <h6 className="text-gray-900 dark:text-gray-100 font-semibold text-sm mt-2 mb-1" {...props} />
  ),
  p: (props) => (
    <p
      className="text-gray-700 dark:text-gray-300 font-normal mb-4 leading-relaxed"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-6 space-y-2 mb-4 marker:text-gray-600 dark:marker:text-gray-400"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-6 space-y-2 mb-4 marker:text-gray-600 dark:marker:text-gray-400"
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
    const className =
      "text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200 underline decoration-indigo-300 dark:decoration-indigo-500 underline-offset-2 hover:decoration-indigo-500 dark:hover:decoration-indigo-300";
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
        className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm font-mono"
        dangerouslySetInnerHTML={{ __html: codeHTML }} 
        {...props} 
      />
    );
  },
  pre: (props) => (
    <pre 
      className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono my-4 border border-gray-200 dark:border-gray-700"
      {...props} 
    />
  ),
  Table: ({ data }) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800">
            {data.headers.map((header, index) => (
              <th 
                key={index} 
                className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-gray-100 font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index} className="even:bg-gray-50 dark:even:bg-gray-800/50">
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300"
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
      className="ml-0 border-l-4 border-indigo-300 dark:border-indigo-500 pl-4 py-2 my-6 bg-indigo-50 dark:bg-indigo-900/20 text-gray-700 dark:text-gray-300 italic"
      {...props}
    />
  ),
};

export const useMDXComponents = () => {
  return components;
};