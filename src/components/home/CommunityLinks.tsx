'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    description: 'Profesyonel bağlantılar',
    url: 'https://linkedin.com/company/igda-istanbul',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    description: 'Etkinlik fotoğrafları',
    url: 'https://instagram.com/igda.istanbul',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
];

export default function CommunityLinks() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="topluluk"
      ref={ref}
      className="section-padding bg-cream-200 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-40" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-8 left-8 sm:top-12 sm:left-12 md:top-16 md:left-16 w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 border-2 border-cream-500/40 animate-float"
          style={{ '--rotate': '12deg' } as React.CSSProperties}
        />
        <div
          className="absolute bottom-12 right-12 sm:bottom-18 sm:right-18 md:bottom-24 md:right-24 w-5 sm:w-5.5 md:w-6 h-5 sm:h-5.5 md:h-6 bg-igda/8 animate-float animation-delay-400"
          style={{ '--rotate': '45deg' } as React.CSSProperties}
        />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div
            className={`text-center mb-12 transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-80'
            }`}
          >
            <span className="font-script text-script-md text-igda">
              Topluluk
            </span>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink-900 mt-4 mb-4">
              Bizi Takip Edin
            </h2>

            <p className="font-mono text-ink-600 max-w-lg mx-auto">
              Farklı platformlarda bağlantıda kalın, etkinliklerden ve içeriklerden haberdar olun.
            </p>
          </div>

          {/* Social links grid */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {socialLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group retro-card block p-4 sm:p-5 md:p-6 transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-80'
                }`}
                style={{ transitionDelay: `${200 + index * 80}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-ink-900 text-ink-900 group-hover:bg-igda group-hover:border-igda group-hover:text-white transition-all duration-300">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-ink-900 group-hover:text-igda transition-colors">
                        {link.name}
                      </h3>
                      <p className="font-mono text-sm text-ink-500">
                        {link.description}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-ink-400 group-hover:text-igda group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
