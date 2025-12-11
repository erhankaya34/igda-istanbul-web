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
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Left decorative element */}
            <div className="hidden md:flex md:col-span-1 justify-center">
              <div
                className={`stamp transition-all duration-500 ease-out ${
                  isVisible ? 'scale-100 rotate-[-3deg] opacity-100' : 'scale-90 rotate-[-10deg] opacity-80'
                }`}
              >
                Amaç
              </div>
            </div>

            {/* Content */}
            <div
              className={`md:col-span-4 transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-80'
              }`}
            >
              {/* Mobile stamp */}
              <div className="md:hidden mb-6 text-center">
                <span className="stamp inline-block">Amaç</span>
              </div>

              <p className="font-mono text-ink-700 text-base md:text-lg leading-relaxed mb-6">
                Amacımız, zaten ülkemizdeki birbirinden değerli oyun geliştirme
                topluluklarının ortaya koyduğu faaliyetlere bir yenisini eklemek değil.
              </p>

              <p className="font-mono text-ink-600 text-base md:text-lg leading-relaxed">
                Bizler, yerli bağımsız oyun geliştirme endüstrimizdeki{' '}
                <span className="text-igda relative inline-block">
                  üretken, nitelikli işler
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-igda/40" />
                </span>{' '}
                ortaya koyan oyun geliştiricilerin buluşabileceği ve{' '}
                <span className="text-igda relative inline-block">
                  dünyayla daha sıkı bağlar
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-igda/40" />
                </span>{' '}
                kurabileceği bir alan yaratmak istiyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
