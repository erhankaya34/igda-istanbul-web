'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const footerLinks = {
  hizliErisim: [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Etkinlikler', href: '/etkinlikler' },
  ],
  topluluk: [
    { label: 'Discord', href: 'https://discord.gg/igdaistanbul' },
    { label: 'Twitter / X', href: 'https://twitter.com/igda_istanbul' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/igda-istanbul' },
    { label: 'Instagram', href: 'https://instagram.com/igdaistanbul' },
  ],
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="bg-cream-300 border-t-2 border-cream-400 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="container-custom relative py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logos/main-logo.png"
                alt="IGDA Istanbul"
                width={160}
                height={54}
                className="h-12 w-auto"
              />
            </Link>
            <p className="font-mono text-ink-600 text-sm mb-6 max-w-sm leading-relaxed">
              International Game Developers Association Istanbul Chapter -
              Türkiye oyun geliştirici topluluğu.
            </p>

            {/* Signature style */}
            <p className="font-script text-lg text-ink-700">
              Sevgilerle...
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-lg text-ink-800 mb-4">
              Sayfalar
            </h4>
            <ul className="space-y-3">
              {footerLinks.hizliErisim.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-sm text-ink-500 hover:text-igda transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-lg text-ink-800 mb-4">
              Topluluk
            </h4>
            <ul className="space-y-3">
              {footerLinks.topluluk.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-ink-500 hover:text-igda transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="decorative-line my-8"
        />

        {/* Bottom Section - Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-mono text-ink-500 text-xs">
            © {currentYear} IGDA Istanbul. Tüm hakları saklıdır.
          </p>

          {/* Pixel decoration */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-igda" />
            <div className="w-2 h-2 bg-igda/60" />
            <div className="w-2 h-2 bg-igda/30" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
