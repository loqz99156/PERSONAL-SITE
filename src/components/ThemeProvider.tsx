"use client";

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setTheme(savedTheme);
      } else {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setTheme(systemTheme);
      }
    } catch (e) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('theme', theme);
        if (document.body) {
          document.body.setAttribute('data-theme', theme);
        }
        document.documentElement.classList.toggle('dark', theme === 'dark');
      } catch (e) {
        // Ignore localStorage errors
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-300">
      {children}
      {mounted && <ThemeToggle theme={theme} toggleTheme={toggleTheme} />}
    </div>
  );
}

function ThemeToggle({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 inline-flex items-center rounded-full border border-[var(--surface-border)] bg-[var(--surface)] p-1 shadow-sm transition-all hover:scale-105 hover:shadow"
      aria-label="Toggle theme"
    >
      <span className="sr-only">切换主题</span>
      <span className="flex items-center gap-1">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${
            !isDark ? 'bg-gray-200 text-gray-900' : 'text-gray-500'
          }`}
        >
          <SunIcon className="h-4 w-4" />
        </span>
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${
            isDark ? 'bg-gray-200 text-gray-900' : 'text-gray-500'
          }`}
        >
          <MoonIcon className="h-4 w-4" />
        </span>
      </span>
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 0 1 12.21 3 7 7 0 1 0 21 12.79z" />
    </svg>
  );
}
