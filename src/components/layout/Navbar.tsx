'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';
import { useTheme } from '@/contexts/ThemeContext';
import GothicToggle from '@/components/ui/GothicToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Easter egg state - only available on home page
  const { easterEggUnlocked, unlockEasterEgg, isHomePage } = useTheme();
  const [clickCount, setClickCount] = useState(0);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const secretButtonRef = useRef<HTMLButtonElement | null>(null);

  // Native DOM event listener for Safari compatibility - using pointerdown for best cross-browser support
  useEffect(() => {
    const button = secretButtonRef.current;
    if (!button) return;

    const handlePointerDown = (e: PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();

      // Use functional update to get latest click count
      setClickCount(prev => {
        const newCount = prev + 1;
        console.log('Easter egg click:', newCount);

        if (newCount >= 3) {
          console.log('Easter egg UNLOCKED!');
          unlockEasterEgg();
          return 0;
        }

        // Reset timeout
        if (clickTimeoutRef.current) {
          clearTimeout(clickTimeoutRef.current);
        }
        clickTimeoutRef.current = setTimeout(() => {
          setClickCount(0);
        }, 1500);

        return newCount;
      });
    };

    // pointerdown works on both touch and mouse, Safari included
    button.addEventListener('pointerdown', handlePointerDown);

    return () => {
      button.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [unlockEasterEgg]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Secret Easter Egg Click Area - Only on home page */}
      {isHomePage && (
        <button
          ref={secretButtonRef}
          type="button"
          aria-label="Secret area"
          style={{
            position: 'fixed',
            top: '20px',
            left: '24px',
            width: '40px',
            height: '48px',
            background: 'rgba(255, 255, 255, 0.001)',
            border: 'none',
            cursor: 'default',
            zIndex: 9999,
            padding: 0,
            margin: 0,
            outline: 'none',
            WebkitTapHighlightColor: 'transparent',
            touchAction: 'manipulation',
          }}
        />
      )}

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-cream-200/95 backdrop-blur-md border-b border-cream-400/50 shadow-soft'
            : 'bg-transparent'
        )}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Easter Egg Area */}
            <div className="relative z-10 flex items-center">
              <Link href="/" className="flex items-center group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center"
                >
                  <Image
                    src="/images/logos/header-logo.png"
                    alt="IGDA Istanbul"
                    width={64}
                    height={64}
                    className="h-10 sm:h-12 w-auto"
                    priority
                  />
                </motion.div>
              </Link>

              {/* Easter Egg Toggle - appears when unlocked, only on home page */}
              <AnimatePresence>
                {easterEggUnlocked && isHomePage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.5, x: -10 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                    className="ml-3"
                  >
                    <GothicToggle />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2 font-mono text-sm transition-colors duration-200',
                    isActive(item.href)
                      ? 'text-igda'
                      : 'text-ink-600 hover:text-igda'
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-igda"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/bize-katil"
                className="btn-primary text-sm py-2 px-5"
              >
                Bize Katıl
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 p-2 text-ink-700 hover:text-igda transition-colors"
              aria-label={isMobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
