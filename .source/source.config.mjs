// source.config.ts
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
var articles = defineDocs({
  dir: "content/docs"
});
var source_config_default = defineConfig({
  mdxOptions: {
    preset: "fumadocs"
  }
});
export {
  articles,
  source_config_default as default
};
