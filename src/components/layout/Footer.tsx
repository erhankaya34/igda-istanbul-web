'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/igda.istanbul',
    icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/igda-istanbul',
    icon: Linkedin,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-300 border-t border-cream-400 relative">
      <div className="container-custom py-6">
        {/* Compact single row layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logos/main-logo.png"
              alt="IGDA Istanbul"
              width={200}
              height={70}
              className="h-14 w-auto"
            />
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-cream-200 hover:bg-igda hover:text-white text-ink-600 transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright - compact */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 mt-4 pt-4 border-t border-cream-400">
          <p className="font-mono text-ink-500 text-xs">
            © {currentYear} IGDA Istanbul
          </p>
          <span className="hidden sm:inline text-ink-400">•</span>
          <p className="font-mono text-igda text-xs font-bold">
            Developed by Erhan Kaya
          </p>
        </div>
      </div>
    </footer>
  );
}
