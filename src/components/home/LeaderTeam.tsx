'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

// Normal team leaders
const normalLeaders = [
  {
    name: 'İpek Taraklıoğlu',
    role: 'Kurucu Lider',
    image: '/images/team/ipek.png',
    rotation: -3,
  },
  {
    name: 'Onur Şimşek',
    role: 'Kurucu Lider',
    image: '/images/team/onur.png',
    rotation: 2,
  },
  {
    name: 'Erhan Kaya',
    role: 'Kurucu Lider',
    image: '/images/team/erhan.png',
    rotation: -2,
  },
];

// Gothic team leaders with dark fantasy avatars
const gothicLeaders = [
  {
    name: 'İpek Taraklıoğlu',
    role: 'Kurucu Lider',
    image: '/images/gothic/gothic-profile-1.jpg',
    rotation: -3,
  },
  {
    name: 'Onur Şimşek',
    role: 'Kurucu Lider',
    image: '/images/gothic/gothic-profile-2.jpg',
    rotation: 2,
  },
  {
    name: 'Erhan Kaya',
    role: 'Kurucu Lider',
    image: '/images/gothic/gothic-profile-3.jpg',
    rotation: -2,
  },
];

export default function LeaderTeam() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isGothic = theme === 'gothic';

  // Theme-based leaders array
  const leaders = isGothic ? gothicLeaders : normalLeaders;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ekibimiz"
      ref={ref}
      className="section-padding bg-cream-300 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-10 sm:top-16 sm:left-16 md:top-20 md:left-20 w-4 h-4 bg-igda/10 animate-float"
          style={{ '--rotate': '12deg' } as React.CSSProperties}
        />
        <div
          className="absolute bottom-10 right-10 sm:bottom-16 sm:right-16 md:bottom-20 md:right-20 w-6 h-6 border-2 border-cream-500 opacity-30 animate-float animation-delay-600"
          style={{ '--rotate': '45deg' } as React.CSSProperties}
        />
      </div>

      <div className="container-custom relative">
        {/* Vision text */}
        <div
          className={`max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-80'
          }`}
        >
          <span className="font-script text-script-md text-igda">
            Vizyonumuz
          </span>

          <div
            className={`decorative-line mx-auto my-6 transition-transform duration-700 ease-out origin-left ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          />

          <p className="font-mono text-ink-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            IGDA Istanbul'un,{' '}
            <span className="text-igda font-semibold">global bağlantıları</span>{' '}
            öne çıkaran, paylaşım ve işbirliği için{' '}
            <span className="text-igda font-semibold">sıcak bir ortam</span>{' '}
            olmasını istiyoruz.
          </p>

          <p className="font-mono text-ink-600 text-sm sm:text-base leading-relaxed">
            Daha yolun başındayız ama birlikte çok güzel şeyler yapacağımıza inanıyoruz.
          </p>

          {/* Signature style closing */}
          <div className="mt-8">
            <p className="font-script text-script-lg text-ink-700">
              Sevgiler...
            </p>
            <p className="font-mono text-sm text-ink-500 mt-2">
              IGDA Istanbul Lider Ekibi
            </p>
          </div>
        </div>

        {/* Leader cards */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ rotate: leader.rotation }}
              whileHover={{
                scale: 1.08,
                rotate: leader.rotation + (index % 2 === 0 ? 3 : -3),
                zIndex: 10,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`polaroid cursor-pointer will-change-transform transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-80'
              }`}
              style={{
                transitionDelay: `${400 + index * 100}ms`,
              }}
            >
              <div className="w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] relative overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover transition-all duration-500 leader-photo"
                  sizes="180px"
                />
              </div>
              <div className="text-center mt-3 pb-2">
                <p className="font-display text-sm sm:text-base font-semibold text-ink-800">
                  {leader.name}
                </p>
                <p className="font-mono text-xs text-ink-500 mt-1">
                  {leader.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
