import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  optimizeFonts: true,
  swcMinify: true,
  images: {
    domains: ["https://aakashsondagar.vercel.app"],
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
