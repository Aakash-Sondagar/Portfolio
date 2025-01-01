import createMDX from "@next/mdx";
import { baseUrl } from "./utils/content";

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    domains: [baseUrl],
  },
  pageExtensions: ["md", "mdx", "js", "jsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
