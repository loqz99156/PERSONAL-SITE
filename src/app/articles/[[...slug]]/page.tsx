import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import {
  generateArticleParams,
  getArticlePage,
  getArticlePages,
} from "@/lib/docs/source";

type ArticlePageParams = {
  slug?: string[];
};

export function generateStaticParams() {
  return generateArticleParams().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<ArticlePageParams> }): Promise<Metadata> {
  const resolved = await params;
  const slugs = resolved.slug ?? getArticlePages()[0]?.slugs;
  if (!slugs) {
    return {
      title: "文章内容",
    };
  }

  const page = getArticlePage(slugs);
  if (!page) {
    return {
      title: "文章内容",
    };
  }

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export default async function ArticlePage({ params }: { params: Promise<ArticlePageParams> }) {
  const resolved = await params;
  const slugs = resolved.slug;

  if (!slugs) {
    const first = getArticlePages()[0];
    if (!first) {
      notFound();
    }
    redirect(first.url);
  }

  const page = getArticlePage(slugs);

  if (!page) {
    notFound();
  }

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} lastUpdate={page.data.lastModified}>
      <DocsTitle>{page.data.title}</DocsTitle>
      {page.data.description ? (
        <DocsDescription>{page.data.description}</DocsDescription>
      ) : null}
      <DocsBody>
        <MDXContent />
      </DocsBody>
    </DocsPage>
  );
}
