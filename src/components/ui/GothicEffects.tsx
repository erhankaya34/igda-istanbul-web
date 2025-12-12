'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

// Premium SVG Bat for more refined look
function BatSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 3c-1.1 0-2 .9-2 2 0 .17.02.34.06.5C5.78 6.14 2 10.14 2 15c0 1.1.9 2 2 2 1.1 0 2-.9 2-2 0-2.5 1.5-4.64 3.64-5.64.24.36.63.64 1.11.64h2.5c.48 0 .87-.28 1.11-.64C16.5 10.36 18 12.5 18 15c0 1.1.9 2 2 2 1.1 0 2-.9 2-2 0-4.86-3.78-8.86-8.06-9.5.04-.16.06-.33.06-.5 0-1.1-.9-2-2-2z"/>
    </svg>
  );
}

// Flying bat component with premium styling
function FlyingBat({ delay, startX, startY }: { delay: number; startX: number; startY: number }) {
  const [position, setPosition] = useState({ x: startX, y: startY });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => ({
        x: prev.x + (Math.random() - 0.5) * 120,
        y: prev.y + (Math.random() - 0.5) * 60,
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[30]"
      initial={{ x: startX, y: startY, opacity: 0 }}
      animate={{
        x: position.x,
        y: position.y,
        opacity: [0, 0.6, 0.6, 0],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.9))' }}
    >
      <motion.div
        animate={{ scaleX: [1, 0.4, 1], rotateY: [0, 180, 0] }}
        transition={{ duration: 0.4, repeat: Infinity }}
        className="text-[#1a0e10]"
      >
        <BatSVG className="w-10 h-10" />
      </motion.div>
    </motion.div>
  );
}

// Premium SVG Skull for floating effect
function SkullSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 2.96 1.29 5.62 3.34 7.45.16.14.34.26.54.35.1.05.21.08.32.11.11.03.22.05.33.06.11.01.23.02.34.02h10.26c.11 0 .23-.01.34-.02.11-.01.22-.03.33-.06.11-.03.22-.06.32-.11.2-.09.38-.21.54-.35C20.71 17.62 22 14.96 22 12c0-5.52-4.48-10-10-10zM9 14c-.83 0-1.5-.67-1.5-1.5S8.17 11 9 11s1.5.67 1.5 1.5S9.83 14 9 14zm6 0c-.83 0-1.5-.67-1.5-1.5S14.17 11 15 11s1.5.67 1.5 1.5S15.83 14 15 14z"/>
      <path d="M8.5 17h2v4h-2zm5 0h2v4h-2z" opacity="0.6"/>
    </svg>
  );
}

// Floating skull with premium styling
function FloatingSkull({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="fixed pointer-events-none z-[25]"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{
        opacity: [0, 0.12, 0.12, 0],
        scale: [0.5, 1, 1, 0.5],
        rotate: [-10, 10, -10],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 18,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div
        className="text-[#3a2020]"
        style={{
          filter: 'drop-shadow(0 0 15px rgba(122, 24, 24, 0.3))',
        }}
      >
        <SkullSVG className="w-16 h-16" />
      </div>
    </motion.div>
  );
}

// Blood drip with premium styling
function BloodDrip({ x, delay }: { x: string; delay: number }) {
  return (
    <motion.div
      className="fixed top-0 pointer-events-none z-[20]"
      style={{ left: x }}
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: [0, 80, 120, 80, 0],
        opacity: [0, 0.6, 0.6, 0.4, 0],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div
        className="w-0.5 rounded-full"
        style={{
          height: '100%',
          background: 'linear-gradient(to bottom, #7a1818, #4a0000, transparent)',
          boxShadow: '0 0 8px rgba(122, 24, 24, 0.5)',
        }}
      />
    </motion.div>
  );
}

// Cobweb corner
function Cobweb({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const positionStyles = {
    'top-left': { top: 0, left: 0, transform: 'rotate(0deg)' },
    'top-right': { top: 0, right: 0, transform: 'rotate(90deg)' },
    'bottom-left': { bottom: 0, left: 0, transform: 'rotate(-90deg)' },
    'bottom-right': { bottom: 0, right: 0, transform: 'rotate(180deg)' },
  };

  return (
    <motion.div
      className="fixed pointer-events-none z-[15] w-32 h-32 opacity-20"
      style={positionStyles[position]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 2 }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="cobwebGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#888" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#444" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Web lines */}
        {[0, 15, 30, 45, 60, 75, 90].map(angle => (
          <line
            key={angle}
            x1="0"
            y1="0"
            x2={Math.cos(angle * Math.PI / 180) * 100}
            y2={Math.sin(angle * Math.PI / 180) * 100}
            stroke="url(#cobwebGrad)"
            strokeWidth="0.5"
          />
        ))}
        {/* Circular web lines */}
        {[20, 40, 60, 80].map(radius => (
          <path
            key={radius}
            d={`M 0 ${radius} Q ${radius * 0.5} ${radius * 0.8} ${radius} 0`}
            fill="none"
            stroke="url(#cobwebGrad)"
            strokeWidth="0.3"
          />
        ))}
      </svg>
    </motion.div>
  );
}

// Fog/mist layer
function FogLayer() {
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[10]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      {/* Bottom fog */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: 'linear-gradient(to top, rgba(10,8,8,0.9) 0%, rgba(10,8,8,0.5) 50%, transparent 100%)',
        }}
      />
      {/* Animated fog wisps */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-48 opacity-30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 0%'],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.01' numOctaves='3'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='50'/%3E%3C/filter%3E%3Ccircle cx='100' cy='100' r='80' fill='%23222' filter='url(%23f)'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px',
        }}
      />
    </motion.div>
  );
}

// Floating particles (dust/embers) with gold accents
function FloatingParticles() {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    duration: Math.random() * 12 + 12,
    delay: Math.random() * 6,
    isGold: Math.random() > 0.7, // 30% gold particles
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[5]">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.isGold
              ? 'radial-gradient(circle, rgba(201,162,39,0.7) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(122,24,24,0.5) 0%, transparent 70%)',
            boxShadow: particle.isGold
              ? '0 0 6px rgba(201,162,39,0.6)'
              : '0 0 4px rgba(122,24,24,0.4)',
          }}
          animate={{
            y: [0, -180],
            x: [0, (Math.random() - 0.5) * 80],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}

// Lightning flash - MORE FREQUENT with color inversion
function LightningFlash() {
  const [flash, setFlash] = useState(false);
  const [invert, setInvert] = useState(false);

  useEffect(() => {
    const triggerFlash = () => {
      // 70% chance to flash (more frequent)
      if (Math.random() > 0.3) {
        setFlash(true);
        // 50% chance to also invert colors
        const shouldInvert = Math.random() > 0.5;
        if (shouldInvert) setInvert(true);

        setTimeout(() => {
          setFlash(false);
          setInvert(false);
        }, 80);

        // Double flash more often
        if (Math.random() > 0.4) {
          setTimeout(() => {
            setFlash(true);
            if (Math.random() > 0.5) setInvert(true);
            setTimeout(() => {
              setFlash(false);
              setInvert(false);
            }, 50);
          }, 120);
        }

        // Triple flash sometimes
        if (Math.random() > 0.7) {
          setTimeout(() => {
            setFlash(true);
            setTimeout(() => setFlash(false), 40);
          }, 200);
        }
      }
    };

    // Much more frequent: 3-6 seconds instead of 8-18 seconds
    const interval = setInterval(triggerFlash, 3000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {flash && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-[35]"
          initial={{ opacity: 0 }}
          animate={{ opacity: invert ? 0.5 : 0.35 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.03 }}
          style={{
            background: 'white',
            mixBlendMode: invert ? 'difference' : 'normal',
          }}
        />
      )}
    </AnimatePresence>
  );
}

// Initial lightning burst when gothic mode activates
function InitialLightningBurst() {
  const [burst, setBurst] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Intense multi-phase lightning burst on mount
    const phases = [
      { delay: 0, duration: 120, intensity: 1 },
      { delay: 150, duration: 80, intensity: 0.8 },
      { delay: 280, duration: 60, intensity: 0.6 },
      { delay: 400, duration: 100, intensity: 0.9 },
      { delay: 550, duration: 50, intensity: 0.5 },
    ];

    phases.forEach((p, i) => {
      setTimeout(() => {
        setPhase(i + 1);
        setTimeout(() => setPhase(0), p.duration);
      }, p.delay);
    });

    // End burst sequence after all phases
    setTimeout(() => setBurst(false), 700);
  }, []);

  if (!burst) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[100]"
      initial={{ opacity: 0 }}
      animate={{
        opacity: phase > 0 ? [0, 0.8, 0] : 0,
      }}
      transition={{ duration: 0.1 }}
      style={{
        background: phase % 2 === 0 ? 'white' : 'rgba(255, 255, 255, 0.9)',
        mixBlendMode: phase === 4 ? 'difference' : 'normal',
      }}
    />
  );
}

// Main Gothic Effects Component
export default function GothicEffects() {
  const { theme, isHomePage } = useTheme();
  const [windowWidth, setWindowWidth] = useState(1200);
  const [showInitialBurst, setShowInitialBurst] = useState(false);
  const isGothic = theme === 'gothic' && isHomePage;
  const prevThemeRef = useRef(theme);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger initial burst when switching TO gothic mode (only on home page)
  useEffect(() => {
    if (theme === 'gothic' && isHomePage && prevThemeRef.current !== 'gothic') {
      setShowInitialBurst(true);
      // Reset after animation completes
      setTimeout(() => setShowInitialBurst(false), 1000);
    }
    prevThemeRef.current = theme;
  }, [theme, isHomePage]);

  if (!isGothic) return null;

  return (
    <>
      {/* Flying bats */}
      <FlyingBat delay={0} startX={-100} startY={100} />
      <FlyingBat delay={3} startX={windowWidth + 100} startY={200} />
      <FlyingBat delay={6} startX={-100} startY={300} />
      <FlyingBat delay={9} startX={windowWidth + 100} startY={150} />
      <FlyingBat delay={12} startX={-100} startY={400} />

      {/* Floating skulls */}
      <FloatingSkull delay={0} x="10%" y="20%" />
      <FloatingSkull delay={5} x="85%" y="60%" />
      <FloatingSkull delay={10} x="50%" y="80%" />

      {/* Blood drips */}
      <BloodDrip x="15%" delay={0} />
      <BloodDrip x="45%" delay={3} />
      <BloodDrip x="75%" delay={6} />
      <BloodDrip x="90%" delay={9} />

      {/* Cobwebs in corners */}
      <Cobweb position="top-left" />
      <Cobweb position="top-right" />

      {/* Fog layer */}
      <FogLayer />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Lightning flash */}
      <LightningFlash />

      {/* Initial lightning burst when gothic mode activates */}
      {showInitialBurst && <InitialLightningBurst />}

      {/* Dark vignette overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%)',
        }}
      />
    </>
  );
}
