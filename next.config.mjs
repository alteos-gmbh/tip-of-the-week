import nextra from "nextra";

const withNextra = nextra({
  // Nextra options
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  search: {
    codeblocks: false,
  },
});

export default withNextra({
  // Next.js options
  reactStrictMode: true,
  basePath: "",
  assetPrefix: "",
  // Below are the necessary configurations for github pages deployment
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: "/tip-of-the-week",
});
