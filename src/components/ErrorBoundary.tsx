"use client";

import { useState, useEffect } from 'react';

export default function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleHydrationError = (event: ErrorEvent) => {
      const errorMessage = event.message;

      if (errorMessage.includes('hydration') && errorMessage.includes('data-atm-ext-installed')) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }

      console.error('Error caught by boundary:', event);
      setHasError(true);
      setError(errorMessage);
    };

    window.addEventListener('error', handleHydrationError);

    return () => {
      window.removeEventListener('error', handleHydrationError);
    };
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="mb-2 text-xl font-bold text-[var(--text-primary)]">
            出现错误
          </h2>
          <p className="mb-4 text-[var(--text-secondary)]">
            {error || '发生意外错误'}
          </p>
          <button
            onClick={() => {
              setHasError(false);
              setError(null);
              window.location.reload();
            }}
            className="rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/90"
          >
            重新加载页面
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
