"use client";

import { useState } from 'react';
import { paginationData } from '@/lib/data';
import type { PaginationData } from '@/lib/types';

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(paginationData.currentPage);
  const { totalPages } = paginationData;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav className="flex items-center space-x-2">
      <button
        className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-[var(--text-secondary)] transition-colors hover:bg-primary/20 disabled:opacity-50"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="上一页"
      >
        <span className="material-symbols-outlined text-base">chevron_left</span>
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
            currentPage === page
              ? 'bg-primary text-white'
              : 'text-[var(--text-secondary)] hover:bg-primary/10'
          }`}
          onClick={() => handlePageChange(page)}
          aria-label={`跳转到第 ${page} 页`}
        >
          {page}
        </button>
      ))}

      <button
        className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-[var(--text-secondary)] transition-colors hover:bg-primary/20 disabled:opacity-50"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="下一页"
      >
        <span className="material-symbols-outlined text-base">chevron_right</span>
      </button>
    </nav>
  );
}
