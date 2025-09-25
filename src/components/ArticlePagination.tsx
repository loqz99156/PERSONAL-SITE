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
  initialPage = 1
}: ArticlePaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [displayedArticles, setDisplayedArticles] = useState<ArticleData[]>([]);

  // 计算总页数
  const totalPages = Math.ceil(articlesData.length / articlesPerPage);

  // 根据当前页计算显示的文章
  useEffect(() => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const pageArticles = articlesData.slice(startIndex, endIndex);
    setDisplayedArticles(pageArticles);
  }, [currentPage, articlesPerPage]);

  // 页面切换处理
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // 滚动到文章区域顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 上一页
  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  // 下一页
  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // 生成页码按钮
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // 如果总页数小于等于最大显示页数，显示所有页码
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // 总页数较多时，智能显示页码
      if (currentPage <= 3) {
        // 当前页在前3页时
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // 当前页在后3页时
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // 当前页在中间时
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
      {/* 文章列表 */}
      <div className="grid gap-8">
        {displayedArticles.map((article: ArticleData, index: number) => (
          <div
            key={article.id}
            className={`grid gap-6 items-center bg-background-light dark:bg-background-dark rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${
              index % 2 === 0 ? 'sm:grid-cols-1' : 'sm:grid-cols-1 sm:order-last'
            } md:grid-cols-2`}
          >
            {/* 文章图片 */}
            <div className="min-h-[280px] sm:min-h-0">
              <div
                className="h-48 w-full bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url("${article.imageUrl}")` }}
              />
            </div>

            {/* 文章内容 */}
            <div className="space-y-3">
              <div className="space-y-2">
                {/* 分类标签 */}
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {article.category}
                </p>

                {/* 文章标题 */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {article.title}
                </h3>

                {/* 文章描述 */}
                <p className="text-gray-600 dark:text-gray-400">
                  {article.description}
                </p>
              </div>

              {/* 发布日期和阅读更多 */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(article.publishedAt).toLocaleDateString('zh-CN')}
                </p>
                <a
                  href="#"
                  className="text-primary hover:underline font-semibold text-sm"
                >
                  阅读更多 →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 分页导航 */}
      <div className="mt-12 flex flex-col items-center space-y-4">
        {/* 页面信息 */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          第 {currentPage} 页，共 {totalPages} 页
        </p>

        {/* 分页按钮 */}
        <nav className="flex items-center space-x-2" aria-label="文章分页导航">
          {/* 上一页按钮 */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-gray-600 transition-colors hover:bg-primary/20 dark:bg-primary/20 dark:text-gray-400 dark:hover:bg-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            aria-label="上一页"
          >
            <span className="material-symbols-outlined text-lg">chevron_left</span>
          </button>

          {/* 页码按钮 */}
          {generatePageNumbers().map((page, index) => (
            <button
              key={index}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                page === currentPage
                  ? 'bg-primary text-white'
                  : page === '...'
                  ? 'text-gray-400 cursor-default'
                  : 'text-gray-600 hover:bg-primary/10 dark:text-gray-400 dark:hover:bg-primary/20'
              }`}
              onClick={() => typeof page === 'number' && handlePageChange(page)}
              disabled={page === '...'}
              aria-label={typeof page === 'number' ? `第 ${page} 页` : '更多页码'}
            >
              {page}
            </button>
          ))}

          {/* 下一页按钮 */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-gray-600 transition-colors hover:bg-primary/20 dark:bg-primary/20 dark:text-gray-400 dark:hover:bg-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label="下一页"
          >
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
        </nav>

        {/* 页面大小选择 */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span>每页显示：</span>
          <select
            value={articlesPerPage}
            onChange={(e) => {
              const newSize = parseInt(e.target.value);
              // 重置到第一页
              setCurrentPage(1);
              // 重新计算显示的文章
              const startIndex = 0;
              const endIndex = newSize;
              setDisplayedArticles(articlesData.slice(startIndex, endIndex));
            }}
            className="rounded border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark px-2 py-1 text-gray-900 dark:text-white"
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