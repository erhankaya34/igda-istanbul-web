'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Istanbul landmark polaroids
const polaroids = [
  {
    src: '/images/istanbul/tower-with-blue-sky.jpg',
    alt: 'Galata Kulesi',
    rotation: -10,
    x: '0%',
    y: '8%',
    objectPosition: 'center',
    scale: 1,
  },
  {
    src: '/images/istanbul/landscape.jpg',
    alt: 'Kız Kulesi',
    rotation: 6,
    x: '52%',
    y: '0%',
    objectPosition: 'center',
    scale: 1,
  },
  {
    src: '/images/istanbul/vertical-shot-turkey-flag-floating-air.jpg',
    alt: 'Türk Bayrağı',
    rotation: -4,
    x: '22%',
    y: '48%',
    objectPosition: 'center 30%',
    scale: 1.3,
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '25%']);
  const backgroundScale = useTransform(smoothProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream-200"
    >
      {/* Background Image with Parallax + Zoom */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[120vw] h-[120vh] opacity-[0.15]">
            <Image
              src="/images/istanbul/background.jpg"
              alt=""
              fill
              className="object-cover grayscale"
              priority
              sizes="120vw"
            />
          </div>
        </div>
      </motion.div>

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      {/* Main Content */}
      <div className="relative z-10 container-custom px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in">
              <h1 className="leading-none">
                <span className="block font-script text-[clamp(1.8rem,5vw,3rem)] text-ink-700 mb-0">
                  Merhaba biz,
                </span>
                <span className="inline font-display text-[clamp(2.5rem,8vw,4.5rem)] text-igda relative font-extrabold tracking-tight">
                  IGDA Istanbul
                  <span className="absolute -bottom-1 left-0 h-1 bg-igda/40 rounded-full w-full animate-expand-width" />
                </span>
              </h1>

              <p className="font-mono text-ink-600 text-base md:text-lg max-w-lg mx-auto lg:mx-0 mt-8 mb-10 leading-relaxed">
                Türkiye'deki bağımsız oyun geliştiricileri bir araya getiriyor,
                birbirimizin gelişimini destekliyoruz.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <Link href="https://discord.gg/igdaistanbul" target="_blank">
                  <button className="btn-primary group">
                    Topluluğa Katıl
                    <ArrowRight size={18} />
                  </button>
                </Link>
                <Link href="#hikayemiz">
                  <button className="btn-outline">
                    Hikayemizi Oku
                  </button>
                </Link>
              </div>
            </div>

            {/* Right - Polaroid Photos */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-[420px] h-[520px] md:w-[520px] md:h-[620px]">
                {polaroids.map((polaroid, index) => (
                  <motion.div
                    key={polaroid.alt}
                    initial={{ rotate: polaroid.rotation }}
                    whileHover={{
                      scale: 1.08,
                      rotate: polaroid.rotation + 3,
                      zIndex: 30,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="absolute polaroid cursor-pointer will-change-transform"
                    style={{
                      left: polaroid.x,
                      top: polaroid.y,
                      zIndex: 10 + index,
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    <div className="w-[190px] h-[190px] md:w-[220px] md:h-[220px] relative overflow-hidden bg-cream-300">
                      <Image
                        src={polaroid.src}
                        alt={polaroid.alt}
                        fill
                        className="object-cover"
                        style={{
                          objectPosition: polaroid.objectPosition,
                          transform: `scale(${polaroid.scale})`,
                        }}
                        sizes="220px"
                        priority
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Background glow */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-igda/5 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-mono text-ink-400 text-xs tracking-wider uppercase">
            keşfet
          </span>
          <div className="w-6 h-10 border-2 border-ink-300 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-igda rounded-full" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
