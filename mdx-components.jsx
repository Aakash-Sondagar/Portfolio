import { Link } from "next-view-transitions";
import { highlight } from "sugar-high";

export const components = {
  hr: (props) => (
    <hr className="border-stone-800 dark:border-stone-200" {...props} />
  ),
  h1: (props) => (
    <h1
      className="flex text-3xl text-stone-800 dark:text-stone-200 font-medium mb-0"
      {...props}
    />
  ),
  h2: (props) => (
    <h2 className="text-stone-800 dark:text-stone-200 font-medium" {...props} />
  ),
  h3: (props) => (
    <h3
      className="text-stone-800 dark:text-stone-200 font-medium mt-8 mb-2"
      {...props}
    />
  ),
  h4: (props) => (
    <h4 className="text-stone-800 dark:text-stone-200 font-medium" {...props} />
  ),
  h5: (props) => (
    <h5 className="text-stone-800 dark:text-stone-200 font-medium" {...props} />
  ),
  h6: (props) => (
    <h6 className="text-stone-800 dark:text-stone-200 font-medium" {...props} />
  ),
  p: (props) => (
    <p
      className="text-gray-700 dark:text-gray-300 font-normal mb-3 leading-snug"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-5 space-y-1 marker:text-gray-700 dark:marker:text-gray-300"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-5 space-y-1 marker:text-gray-700 dark:marker:text-gray-300"
      {...props}
    />
  ),
  li: (props) => (
    <li className="pl-1 text-gray-700 dark:text-gray-300" {...props} />
  ),
  em: (props) => <em className="font-medium" {...props} />,
  strong: (props) => (
    <strong
      className="text-gray-700 dark:text-gray-300 font-semibold"
      {...props}
    />
  ),
  a: ({ href, children, ...props }) => {
    const className =
      "text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:dark:text-indigo-300";
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
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700"
      {...props}
    />
  ),
};

export const useMDXComponents = () => {
  return components;
};
