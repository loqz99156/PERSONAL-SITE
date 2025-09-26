"use client";

import { useState, useEffect } from 'react';
import { articlesData } from '@/lib/data';
import type { ArticleData } from '@/lib/types';

interface ArticlePaginationProps {
  articlesPerPage?: number;
  initialPage?: number;
}

export default function ArticlePagination({
  articlesPerPage = 2,
  initialPage = 1,
}: ArticlePaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [displayedArticles, setDisplayedArticles] = useState<ArticleData[]>([]);

  const totalPages = Math.ceil(articlesData.length / articlesPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const pageArticles = articlesData.slice(startIndex, endIndex);
    setDisplayedArticles(pageArticles);
  }, [currentPage, articlesPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="w-full">
      <div className="grid gap-8">
        {displayedArticles.map((article: ArticleData, index: number) => (
          <div
            key={article.id}
            className={`grid items-center gap-6 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-6 text-[var(--text-surface)] shadow-sm transition-shadow hover:shadow-md ${
              index % 2 === 0 ? 'sm:grid-cols-1' : 'sm:grid-cols-1 sm:order-last'
            } md:grid-cols-2`}
          >
            <div className="min-h-[280px] sm:min-h-0">
              <div
                className="h-48 w-full rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url("${article.imageUrl}")` }}
              />
            </div>

            <div className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {article.category}
                </p>
                <h3 className="text-xl font-bold text-[var(--text-surface)]">
                  {article.title}
                </h3>
                <p className="text-[var(--text-surface-secondary)]">
                  {article.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-[var(--text-surface-secondary)]">
                <p>
                  {new Date(article.publishedAt).toLocaleDateString('zh-CN')}
                </p>
                <a href="#" className="font-semibold text-primary hover:underline">
                  阅读更多 →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center space-y-4">
        <p className="text-sm text-[var(--text-secondary)]">
          第 {currentPage} 页，共 {totalPages} 页
        </p>

        <nav className="flex items-center space-x-2" aria-label="文章分页导航">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-[var(--text-secondary)] transition-colors hover:bg-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            aria-label="上一页"
          >
            <span className="material-symbols-outlined text-lg">chevron_left</span>
          </button>

          {generatePageNumbers().map((page, index) => (
            <button
              key={index}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                page === currentPage
                  ? 'bg-primary text-white'
                  : page === '...'
                  ? 'cursor-default text-[var(--text-secondary)]'
                  : 'text-[var(--text-secondary)] hover:bg-primary/10'
              }`}
              onClick={() => typeof page === 'number' && handlePageChange(page)}
              disabled={page === '...'}
              aria-label={typeof page === 'number' ? `跳转到第 ${page} 页` : '更多页码'}
            >
              {page}
            </button>
          ))}

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-[var(--text-secondary)] transition-colors hover:bg-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label="下一页"
          >
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
        </nav>

        <div className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
          <span>每页显示</span>
          <select
            value={articlesPerPage}
            onChange={(e) => {
              const newSize = parseInt(e.target.value, 10);
              setCurrentPage(1);
              const startIndex = 0;
              const endIndex = newSize;
              setDisplayedArticles(articlesData.slice(startIndex, endIndex));
            }}
            className="rounded border border-[var(--surface-border)] bg-[var(--surface)] px-2 py-1 text-[var(--text-surface)]"
          >
            <option value={1}>1 篇</option>
            <option value={2}>2 篇</option>
            <option value={3}>3 篇</option>
            <option value={6}>6 篇</option>
          </select>
        </div>
      </div>
    </div>
  );
}
