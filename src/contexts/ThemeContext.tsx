'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

type Theme = 'normal' | 'gothic';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  easterEggUnlocked: boolean;
  unlockEasterEgg: () => void;
  isHomePage: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Theme always starts as normal, easter egg always starts as locked
  // Nothing is persisted - resets on every refresh
  const [theme, setTheme] = useState<Theme>('normal');
  const [easterEggUnlocked, setEasterEggUnlocked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply theme to document - only on home page
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    // Only apply gothic theme on home page
    if (theme === 'gothic' && isHomePage) {
      root.setAttribute('data-theme', 'gothic');
      root.classList.add('gothic-mode');
    } else {
      root.removeAttribute('data-theme');
      root.classList.remove('gothic-mode');
    }
  }, [theme, mounted, isHomePage]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'normal' ? 'gothic' : 'normal');
  };

  const unlockEasterEgg = () => {
    setEasterEggUnlocked(true);
  };

  // Always provide context, even before mount (with default values)
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, easterEggUnlocked, unlockEasterEgg, isHomePage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
