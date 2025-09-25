import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const articles = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    preset: "fumadocs",
  },
});
