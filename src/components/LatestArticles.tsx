import Link from 'next/link';
import { articlesData } from '@/lib/data';
import type { ArticleData } from '@/lib/types';

const articleSlugMap: Record<string, string> = {
  'article-1': 'ai-in-software-development',
  'article-2': 'personal-portfolio-playbook',
  'article-3': 'next-vs-react19',
};

export default function LatestArticles() {
  return (
    <section className="w-full bg-[var(--module-background)] py-12 md:py-24">
      <div className="container mx-auto max-w-[52rem] px-4 md:px-6">
        <h2 className="mb-9 text-center text-3xl font-bold tracking-tighter text-[var(--text-primary)] sm:text-4xl">
          最新文章
        </h2>

        <div className="grid gap-6">
          {articlesData.map((article: ArticleData) => {
            const slug = articleSlugMap[article.id];
            const href = slug ? `/articles/${slug}` : '/articles';

            return (
              <Link
                key={article.id}
                href={href}
                className="group flex items-start gap-4 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-4 text-[var(--text-surface)] transition-transform hover:scale-[1.01] shadow-sm md:p-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="h-[75px] w-[75px] flex-shrink-0 rounded bg-cover bg-center"
                  style={{ backgroundImage: `url("${article.imageUrl}")` }}
                />

                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-primary">{article.category}</p>
                  <h3 className="text-lg font-bold text-[var(--text-surface)]">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[var(--text-surface-secondary)]">
                    {article.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/articles"
            className="inline-flex h-[52px] items-center justify-center rounded-md bg-primary px-6 py-2 font-semibold text-black transition-transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            查看全部文章
          </Link>
        </div>
      </div>
    </section>
  );
}
