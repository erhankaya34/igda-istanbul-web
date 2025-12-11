'use client';

import { useRef, useEffect, useState } from 'react';

export default function Story() {
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
      id="hikayemiz"
      ref={ref}
      className="section-padding bg-cream-300 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 right-10 w-16 h-16 border-2 border-cream-500 opacity-20 animate-float"
          style={{ '--rotate': '12deg' } as React.CSSProperties}
        />
        <div
          className="absolute bottom-20 left-10 w-8 h-8 bg-igda/5 animate-float animation-delay-400"
          style={{ '--rotate': '45deg' } as React.CSSProperties}
        />
      </div>

      <div className="container-custom relative">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-80'
          }`}
        >
          {/* Section label */}
          <span className="font-script text-script-md text-igda">
            Hikayemiz
          </span>

          {/* Decorative line */}
          <div
            className={`decorative-line mx-auto my-6 transition-transform duration-700 ease-out origin-left ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          />

          {/* Main text */}
          <p className="font-mono text-ink-700 text-base md:text-lg leading-relaxed mb-6">
            IGDA Istanbul kurucu liderleri olarak uzun zamandır bu sektörün içerisindeyiz,
            farklı kulüp ve topluluklar aracılığıyla ülkemizdeki bağımsız oyun geliştirme
            endüstrisini bir araya getirecek ve birbirimizin gelişimini destekleyecek
            birçok faaliyette yer aldık, birçok geliştiriciyle yollarımız kesişti.
          </p>

          <p className="font-mono text-ink-600 text-base md:text-lg leading-relaxed">
            Şimdi ise bu tecrübeleri bir araya getirip,{' '}
            <span className="text-igda relative inline-block">
              daha güçlü bir topluluk
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-igda/40" />
            </span>{' '}
            oluşturmak için buradayız.
          </p>

          {/* Decorative pixel elements */}
          <div className="flex justify-center gap-2 mt-10">
            <div className="w-2 h-2 bg-igda animate-scale-pulse" />
            <div className="w-2 h-2 bg-igda/60 animate-scale-pulse animation-delay-200" />
            <div className="w-2 h-2 bg-igda/30 animate-scale-pulse animation-delay-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
