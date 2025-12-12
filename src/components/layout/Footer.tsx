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
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logos/main-logo.png"
                alt="IGDA Istanbul"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="p-3 rounded-lg bg-cream-200 hover:bg-igda hover:text-white text-ink-600 transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cream-400 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="font-mono text-ink-500 text-xs">
            © {currentYear} IGDA Istanbul
          </p>
          <p className="font-mono text-igda text-xs font-bold">
            Developed by Erhan Kaya. Bugs? On purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
