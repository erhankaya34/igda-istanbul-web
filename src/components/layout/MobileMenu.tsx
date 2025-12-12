'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavigation } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  closed: {
    x: '100%',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + i * 0.05,
      duration: 0.3,
    },
  }),
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const currentYear = new Date().getFullYear();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-ink-900/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-cream-200 border-l-2 border-cream-400 z-50 lg:hidden overflow-y-auto"
          >
            {/* Paper texture overlay */}
            <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

            <div className="relative flex flex-col min-h-full pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-6">
              {/* Navigation Links */}
              <nav className="flex-1">
                <ul className="space-y-1">
                  {mainNavigation.map((item, index) => (
                    <motion.li
                      key={item.href}
                      variants={itemVariants}
                      custom={index}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          'block py-3 sm:py-4 font-mono text-sm sm:text-base transition-colors border-b border-cream-400',
                          isActive(item.href)
                            ? 'text-igda font-bold'
                            : 'text-ink-700 hover:text-igda'
                        )}
                      >
                        <span className="flex items-center justify-between">
                          {item.label}
                          {isActive(item.href) && (
                            <motion.span
                              layoutId="mobile-nav-indicator"
                              className="w-2 h-2 bg-igda"
                            />
                          )}
                        </span>
                      </Link>

                      {/* Sub-navigation */}
                      {item.children && (
                        <ul className="pl-4 mt-2 space-y-2 mb-4">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className="block py-2 font-mono text-sm text-ink-500 hover:text-igda transition-colors"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                custom={mainNavigation.length}
                initial="closed"
                animate="open"
                className="mt-8"
              >
                <Link
                  href="https://discord.gg/igdaistanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="btn-primary w-full text-center"
                >
                  Bize Katıl
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                custom={mainNavigation.length + 1}
                initial="closed"
                animate="open"
                className="mt-8 pt-8 border-t border-cream-400"
              >
                <p className="font-mono text-ink-500 text-xs mb-4">
                  Bizi Takip Edin
                </p>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href="https://discord.gg/igdaistanbul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-ink-300 text-ink-600 hover:bg-igda hover:border-igda hover:text-white transition-all"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/igda_istanbul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-ink-300 text-ink-600 hover:bg-igda hover:border-igda hover:text-white transition-all"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/igdaistanbul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-ink-300 text-ink-600 hover:bg-igda hover:border-igda hover:text-white transition-all"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Copyright */}
              <motion.p
                variants={itemVariants}
                custom={mainNavigation.length + 2}
                initial="closed"
                animate="open"
                className="mt-8 font-mono text-ink-400 text-xs"
              >
                © {currentYear} IGDA Istanbul
              </motion.p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
