'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

// Normal Istanbul landmark polaroids
const normalPolaroids = [
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

// Gothic dark fantasy polaroids
const gothicPolaroids = [
  {
    src: '/images/gothic/gothic-1.jpg',
    alt: 'Dark Castle',
    rotation: -10,
    x: '0%',
    y: '8%',
    objectPosition: 'center',
    scale: 1,
  },
  {
    src: '/images/gothic/gothic-2.jpg',
    alt: 'Gothic Ruins',
    rotation: 6,
    x: '52%',
    y: '0%',
    objectPosition: 'center',
    scale: 1,
  },
  {
    src: '/images/gothic/gothic-3.jpg',
    alt: 'Dark Forest',
    rotation: -4,
    x: '22%',
    y: '48%',
    objectPosition: 'center 30%',
    scale: 1.3,
  },
];

// Lightning overlay component for polaroids - MORE FREQUENT
function LightningOverlay({ isGothic }: { isGothic: boolean }) {
  const [flash, setFlash] = useState(false);
  const [lightningPath, setLightningPath] = useState('');

  useEffect(() => {
    if (!isGothic) return;

    const generateLightning = () => {
      // Generate random lightning bolt path
      const startX = 30 + Math.random() * 40;
      let path = `M${startX} 0`;
      let y = 0;
      let x = startX;

      while (y < 100) {
        y += 10 + Math.random() * 15;
        x += (Math.random() - 0.5) * 30;
        x = Math.max(10, Math.min(90, x));
        path += ` L${x} ${y}`;
      }

      return path;
    };

    const triggerFlash = () => {
      // More frequent - 60% chance instead of 30%
      if (Math.random() > 0.4) {
        setLightningPath(generateLightning());
        setFlash(true);
        setTimeout(() => setFlash(false), 80);

        // More frequent double/triple flash
        if (Math.random() > 0.3) {
          setTimeout(() => {
            setLightningPath(generateLightning());
            setFlash(true);
            setTimeout(() => setFlash(false), 50);
          }, 120);
        }
        if (Math.random() > 0.6) {
          setTimeout(() => {
            setLightningPath(generateLightning());
            setFlash(true);
            setTimeout(() => setFlash(false), 40);
          }, 200);
        }
      }
    };

    // Much more frequent interval: 2-5 seconds instead of 5-13 seconds
    const interval = setInterval(triggerFlash, 2000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, [isGothic]);

  if (!isGothic) return null;

  return (
    <AnimatePresence>
      {flash && (
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.05 }}
        >
          {/* Lightning bolt SVG */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d={lightningPath}
              fill="none"
              stroke="white"
              strokeWidth="2"
              filter="url(#glow)"
              opacity="0.95"
            />
            <path
              d={lightningPath}
              fill="none"
              stroke="rgba(200, 220, 255, 0.8)"
              strokeWidth="4"
              filter="url(#glow)"
              opacity="0.6"
            />
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
          {/* White flash overlay */}
          <div className="absolute inset-0 bg-white/30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isGothic = theme === 'gothic';

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

  // Theme-based polaroids and background
  const polaroids = isGothic ? gothicPolaroids : normalPolaroids;
  const backgroundImage = isGothic ? '/images/gothic/gothic-bg.jpg' : '/images/istanbul/background.jpg';

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
          <div className={`relative w-[120vw] h-[120vh] ${isGothic ? 'opacity-[0.25]' : 'opacity-[0.15]'}`}>
            <Image
              src={backgroundImage}
              alt=""
              fill
              className={`object-cover ${isGothic ? 'grayscale-0' : 'grayscale'}`}
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
                <span
                  className={`block text-[clamp(1.8rem,5vw,3rem)] text-ink-700 mb-0 transition-all duration-500 ${
                    isGothic ? '' : 'font-script'
                  }`}
                  style={isGothic ? { fontFamily: 'HelpMe, cursive' } : undefined}
                >
                  Merhaba biz,
                </span>
                <span
                  className={`inline text-[clamp(2.5rem,8vw,4.5rem)] text-igda relative tracking-tight transition-all duration-500 ${
                    isGothic ? '' : 'font-display font-extrabold'
                  }`}
                  style={isGothic ? { fontFamily: 'Gorewild, fantasy', fontWeight: 'normal' } : undefined}
                >
                  IGDA Istanbul
                  <span className="absolute -bottom-1 left-0 h-1 bg-igda/40 rounded-full w-full animate-expand-width" />
                </span>
              </h1>

              <p className="font-mono text-ink-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mt-8 mb-10 leading-relaxed">
                Bizler, yerli bağımsız oyun geliştirme endüstrimizdeki üretken, nitelikli işler ortaya koyan oyun geliştiricilerin buluşabileceği ve dünyayla daha sıkı bağlar kurabileceği bir alan yaratmak için buradayız.
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
                    key={polaroid.src}
                    initial={{ rotate: polaroid.rotation }}
                    whileHover={{
                      scale: 1.08,
                      rotate: polaroid.rotation + 3,
                      zIndex: 30,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`absolute polaroid cursor-pointer will-change-transform ${isGothic ? 'gothic-invertible' : ''}`}
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
                        className="object-cover transition-all duration-500"
                        style={{
                          objectPosition: polaroid.objectPosition,
                          transform: `scale(${polaroid.scale})`,
                        }}
                        sizes="220px"
                        priority
                      />
                      {/* Lightning effect overlay for each polaroid */}
                      <LightningOverlay isGothic={isGothic} />
                    </div>
                  </motion.div>
                ))}

                {/* Background glow - different for gothic */}
                <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl ${isGothic ? 'bg-[#7a1818]/10' : 'bg-igda/5'}`} />
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
