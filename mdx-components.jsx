import { Link } from "next-view-transitions";
import { highlight } from "sugar-high";

export const components = {
  hr: (props) => (
    <hr className="border-gray-200 dark:border-gray-800 my-8" {...props} />
  ),
  h1: (props) => (
    <h1
      className="flex text-3xl sm:text-4xl text-gray-900 dark:text-gray-100 font-bold mb-2 tracking-tight"
      {...props}
    />
  ),
  h2: (props) => (
    <h2 className="text-gray-900 dark:text-gray-100 font-semibold text-2xl sm:text-3xl mb-4 mt-12 tracking-tight" {...props} />
  ),
  h3: (props) => (
    <h3
      className="text-gray-900 dark:text-gray-100 font-semibold text-xl sm:text-2xl mt-10 mb-2 tracking-tight"
      {...props}
    />
  ),
  h4: (props) => (
    <h4 className="text-gray-900 dark:text-gray-100 font-semibold text-lg sm:text-xl mb-3 mt-8 tracking-tight" {...props} />
  ),
  h5: (props) => (
    <h5 className="text-gray-900 dark:text-gray-100 font-semibold text-base sm:text-lg mb-3 mt-6 tracking-tight" {...props} />
  ),
  h6: (props) => (
    <h6 className="text-gray-900 dark:text-gray-100 font-semibold text-base mb-2 mt-6 tracking-tight" {...props} />
  ),
  p: (props) => (
    <p
      className="text-gray-700 dark:text-gray-300 font-normal mb-4 leading-relaxed text-base"
      {...props}
    />
  ),
  div: (props) => (
    <div className="mb-2" {...props} />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-6 space-y-2 marker:text-gray-500 dark:marker:text-gray-400 mb-4"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-6 space-y-2 marker:text-gray-500 dark:marker:text-gray-400 mb-4"
      {...props}
    />
  ),
  li: (props) => (
    <li className="pl-1 text-gray-700 dark:text-gray-300 leading-relaxed" {...props} />
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
      "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200 underline decoration-blue-600/30 dark:decoration-blue-400/30 hover:decoration-blue-600 dark:hover:decoration-blue-400 underline-offset-2";
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
        className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-gray-900 dark:text-gray-100"
        dangerouslySetInnerHTML={{ __html: codeHTML }} 
        {...props} 
      />
    );
  },
  pre: (props) => (
    <pre
      className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-4"
      {...props}
    />
  ),
  Table: ({ data }) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border border-gray-200 dark:border-gray-800 rounded-lg">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>
            {data.headers.map((header, index) => (
              <th key={index} className="px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index} className="border-b border-gray-200 dark:border-gray-800 last:border-b-0">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2 text-gray-700 dark:text-gray-300">
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
      className="ml-0 border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 text-gray-700 dark:text-gray-300 italic bg-blue-50/50 dark:bg-blue-950/20 rounded-r-lg mb-4"
      {...props}
    />
  ),
};

export const useMDXComponents = () => {
  return components;
};