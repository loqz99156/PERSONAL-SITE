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
      // Fallback if localStorage is not available
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('theme', theme);
        // Apply theme to body instead of documentElement to avoid hydration issues
        if (document.body) {
          document.body.setAttribute('data-theme', theme);
        }
      } catch (e) {
        // Ignore localStorage errors
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Always render the same structure on server and client
  // The theme is applied via useEffect to avoid SSR mismatches
  return (
    <div className="min-h-screen bg-background-light text-gray-900">
      {children}
      {mounted && <ThemeToggle theme={theme} toggleTheme={toggleTheme} />}
    </div>
  );
}

function ThemeToggle({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-primary/10 text-gray-600 hover:bg-primary/20 transition-colors"
      aria-label="切换主题"
    >
      {theme === 'dark' ? (
        <span className="material-symbols-outlined">light_mode</span>
      ) : (
        <span className="material-symbols-outlined">dark_mode</span>
      )}
    </button>
  );
}