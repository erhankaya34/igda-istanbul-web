'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const leaders = [
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

export default function LeaderTeam() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
          className="absolute top-20 left-20 w-4 h-4 bg-igda/10 animate-float"
          style={{ '--rotate': '12deg' } as React.CSSProperties}
        />
        <div
          className="absolute bottom-20 right-20 w-6 h-6 border-2 border-cream-500 opacity-30 animate-float animation-delay-600"
          style={{ '--rotate': '45deg' } as React.CSSProperties}
        />
      </div>

      <div className="container-custom relative">
        {/* Vision text */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ease-out ${
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

          <p className="font-mono text-ink-700 text-base md:text-lg leading-relaxed mb-6">
            IGDA Istanbul'un,{' '}
            <span className="text-igda relative inline-block">
              global bağlantıları
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-igda/40" />
            </span>{' '}
            öne çıkaran, paylaşım ve işbirliği için{' '}
            <span className="text-igda relative inline-block">
              sıcak bir ortam
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-igda/40" />
            </span>{' '}
            olmasını istiyoruz.
          </p>

          <p className="font-mono text-ink-600 text-base leading-relaxed">
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
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
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
              <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] relative overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
              <div className="text-center mt-3 pb-2">
                <p className="font-script text-lg text-ink-800">
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
