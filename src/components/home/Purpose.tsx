'use client';

import { useRef, useEffect, useState } from 'react';

export default function Purpose() {
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
      id="amacimiz"
      ref={ref}
      className="section-padding bg-cream-200 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto">
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-80'
            }`}
          >
            <p className="font-mono text-ink-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              Amacımız, zaten ülkemizdeki birbirinden değerli oyun geliştirme
              topluluklarının ortaya koyduğu faaliyetlere bir yenisini eklemek değil.
            </p>

            <p className="font-mono text-ink-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Bizler, yerli bağımsız oyun geliştirme endüstrimizdeki{' '}
              <span className="text-igda font-semibold">üretken, nitelikli işler</span>{' '}
              ortaya koyan oyun geliştiricilerin buluşabileceği ve{' '}
              <span className="text-igda font-semibold">dünyayla daha sıkı bağlar</span>{' '}
              kurabileceği bir alan yaratmak istiyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
