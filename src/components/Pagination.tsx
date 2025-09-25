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
      {/* Previous Button */}
      <button
        className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-gray-600 transition-colors hover:bg-primary/20 dark:bg-primary/20 dark:text-gray-400 dark:hover:bg-primary/30 disabled:opacity-50"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <span className="material-symbols-outlined text-base">chevron_left</span>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
            currentPage === page
              ? 'bg-primary text-white'
              : 'text-gray-600 hover:bg-primary/10 dark:text-gray-400 dark:hover:bg-primary/20'
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-gray-600 transition-colors hover:bg-primary/20 dark:bg-primary/20 dark:text-gray-400 dark:hover:bg-primary/30 disabled:opacity-50"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <span className="material-symbols-outlined text-base">chevron_right</span>
      </button>
    </nav>
  );
}