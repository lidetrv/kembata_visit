// import React from "react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// export default function MarkdownRenderer({ content }: { content: string }) {
//   return (
//     <div className="prose prose-lg max-w-none text-dark-100">
//       <ReactMarkdown
//         remarkPlugins={[remarkGfm]}
//         components={{
//           blockquote: ({ children }) => (
//             <blockquote className="border-l-4 border-success-500 bg-success-50 pl-4 pr-4 py-2 rounded-md italic text-gray-700">
//               {children}
//             </blockquote>
//           ),
//         }}
//       >
//         {content}
//       </ReactMarkdown>
//     </div>
//   );
// }

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { boolean } from "zod";

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose prose-lg max-w-none text-dark-100">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Quotes (keep your green style)
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-success-500 bg-success-50 pl-4 pr-4 py-2 rounded-md italic text-gray-700 my-4">
              {children}
            </blockquote>
          ),

          // Paragraphs
          p: ({ children }) => (
            <p className="mb-4 leading-relaxed text-gray-900">{children}</p>
          ),

          // Headings
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mt-5 mb-2">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-medium mt-4 mb-2">{children}</h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-lg font-medium mt-3 mb-1">{children}</h5>
          ),
          h6: ({ children }) => (
            <h6 className="text-base font-medium mt-2 mb-1">{children}</h6>
          ),

          // Images
          // Images - FIXED VERSION
          img: ({ src, alt }) => (
            <img
              src={src || ""}
              alt={alt || ""}
              className="my-4 rounded-xl border border-gray-200 shadow-sm max-w-full h-auto max-h-96 object-contain transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
              loading="lazy"
            />
          ),

          // Unordered lists
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
              {children}
            </ul>
          ),

          // Ordered lists
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 ml-4 space-y-1">
              {children}
            </ol>
          ),

          // List items
          li: (props: any) => {
            const { children, checked } = props as {
              children: React.ReactNode;
              checked?: boolean | null;
            };

            if (checked !== null && checked !== undefined) {
              return (
                <li className="flex items-center ml-2 space-x-2">
                  <input
                    type="checkbox"
                    checked={checked}
                    readOnly
                    className="w-4 h-4 accent-success-500"
                  />
                  <span>{children}</span>
                </li>
              );
            }

            return <li className="ml-2">{children}</li>;
          },

          // Links
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),

          // Inline code
          code: ({ children }) => (
            <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-pink-600">
              {children}
            </code>
          ),

          // Code blocks
          pre: ({ children }) => (
            <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto my-4 shadow-sm transition-shadow duration-200 hover:shadow-md">
              {children}
            </pre>
          ),

          // Tables
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="table-auto border border-gray-300 rounded-lg w-full text-left bg-white shadow-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gray-200 text-gray-900 font-semibold">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-gray-200">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2 border-b border-gray-300">{children}</th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2 border-b border-gray-300">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
