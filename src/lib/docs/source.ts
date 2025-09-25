import { loader } from "fumadocs-core/source";
import { articles } from "../../../.source";

const source = articles.toFumadocsSource();

export const articleLoader = loader({
  baseUrl: "/articles",
  source,
});

export const getArticlePage = (slugs?: string[], language?: string) =>
  articleLoader.getPage(slugs, language);

export const getArticlePages = (language?: string) =>
  articleLoader.getPages(language);

export const getArticleTree = (language?: string) =>
  articleLoader.getPageTree(language);

export const generateArticleParams = (slugParam?: string, langParam?: string) =>
  articleLoader.generateParams(slugParam, langParam);
