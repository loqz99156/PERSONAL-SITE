"use client";

import { useState, useEffect } from 'react';

export default function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleHydrationError = (event: ErrorEvent) => {
      const errorMessage = event.message;

      // Check if it's a hydration error from browser extension
      if (errorMessage.includes('hydration') && errorMessage.includes('data-atm-ext-installed')) {
        // Silently ignore browser extension hydration errors
        event.preventDefault();
        event.stopPropagation();
        return false;
      }

      // Handle other errors
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
      <div className="min-h-screen bg-background-light flex items-center justify-center p-4" style={{ backgroundColor: 'var(--background)' }}>
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            出现错误
          </h2>
          <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
            {error || '发生意外错误'}
          </p>
          <button
            onClick={() => {
              setHasError(false);
              setError(null);
              window.location.reload();
            }}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            重新加载页面
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}