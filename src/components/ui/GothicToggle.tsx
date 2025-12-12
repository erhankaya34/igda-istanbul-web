'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

// Premium SVG Skull Icon
function SkullIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 2.96 1.29 5.62 3.34 7.45.16.14.34.26.54.35.1.05.21.08.32.11.11.03.22.05.33.06.11.01.23.02.34.02h10.26c.11 0 .23-.01.34-.02.11-.01.22-.03.33-.06.11-.03.22-.06.32-.11.2-.09.38-.21.54-.35C20.71 17.62 22 14.96 22 12c0-5.52-4.48-10-10-10zM9 14c-.83 0-1.5-.67-1.5-1.5S8.17 11 9 11s1.5.67 1.5 1.5S9.83 14 9 14zm6 0c-.83 0-1.5-.67-1.5-1.5S14.17 11 15 11s1.5.67 1.5 1.5S15.83 14 15 14z"/>
      <path d="M8.5 17h2v4h-2zm5 0h2v4h-2z" opacity="0.8"/>
    </svg>
  );
}

// Sun Icon for normal mode
function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

// Blood drip particle
function BloodDrop({ delay }: { delay: number }) {
  return (
    <motion.span
      className="absolute w-1.5 h-3 rounded-full bg-[#7a1818]"
      initial={{ opacity: 0, scale: 0, y: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 0.8, 0],
        y: [0, 30, 50],
      }}
      transition={{
        duration: 1.2,
        delay,
        ease: 'easeIn',
      }}
      style={{
        left: '50%',
        top: '80%',
        boxShadow: '0 0 8px rgba(122, 24, 24, 0.8)',
      }}
    />
  );
}

export default function GothicToggle() {
  const { theme, toggleTheme } = useTheme();
  const [bloodDrops, setBloodDrops] = useState<number[]>([]);
  const [hovering, setHovering] = useState(false);
  const isGothic = theme === 'gothic';

  // Spawn blood drops on hover
  useEffect(() => {
    if (!hovering || !isGothic) return;

    const interval = setInterval(() => {
      setBloodDrops(prev => [...prev.slice(-5), Date.now()]);
    }, 300);

    return () => clearInterval(interval);
  }, [hovering, isGothic]);

  const handleClick = () => {
    // Spawn burst of blood on click when switching to gothic
    if (!isGothic) {
      const burst = Array.from({ length: 5 }, (_, i) => Date.now() + i);
      setBloodDrops(prev => [...prev, ...burst]);
    }
    toggleTheme();
  };

  return (
    <motion.button
      onClick={handleClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative flex items-center justify-center w-12 h-12 rounded-lg overflow-visible transition-all duration-300"
      style={{
        background: isGothic
          ? 'linear-gradient(135deg, rgba(122, 24, 24, 0.5), rgba(74, 0, 0, 0.4), rgba(26, 42, 58, 0.3))'
          : 'rgba(0, 0, 0, 0.05)',
        border: isGothic
          ? '1px solid rgba(201, 162, 39, 0.3)'
          : '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: isGothic
          ? '0 0 20px rgba(122, 24, 24, 0.4), 0 0 40px rgba(201, 162, 39, 0.1), inset 0 0 15px rgba(122, 24, 24, 0.2)'
          : 'none',
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: isGothic
          ? '0 0 35px rgba(122, 24, 24, 0.6), 0 0 60px rgba(201, 162, 39, 0.2), inset 0 0 20px rgba(122, 24, 24, 0.3)'
          : '0 0 15px rgba(0, 0, 0, 0.1)',
      }}
      whileTap={{ scale: 0.9 }}
      aria-label={isGothic ? 'Normal temaya geç' : 'Gotik temaya geç'}
    >
      {/* Blood drops */}
      <AnimatePresence>
        {bloodDrops.map((id, index) => (
          <BloodDrop key={id} delay={index * 0.1} />
        ))}
      </AnimatePresence>

      {/* Skull border decoration (gothic mode) */}
      {isGothic && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Corner skulls */}
          <span className="absolute -top-1 -left-1 text-xs opacity-40">💀</span>
          <span className="absolute -top-1 -right-1 text-xs opacity-40">💀</span>
          <span className="absolute -bottom-1 -left-1 text-xs opacity-40">💀</span>
          <span className="absolute -bottom-1 -right-1 text-xs opacity-40">💀</span>
        </motion.div>
      )}

      {/* Main icon */}
      <AnimatePresence mode="wait">
        {isGothic ? (
          <motion.div
            key="skull"
            initial={{ rotate: -180, opacity: 0, scale: 0 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 180, opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, type: 'spring' }}
            className="relative z-10"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(122, 24, 24, 0.8)) drop-shadow(0 0 20px rgba(201, 162, 39, 0.3))',
            }}
          >
            <SkullIcon className="w-6 h-6 text-[#e8dcc8]" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 180, opacity: 0, scale: 0 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -180, opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, type: 'spring' }}
            className="relative z-10"
          >
            <SunIcon className="w-6 h-6 text-amber-500" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing blood glow on gothic mode */}
      {isGothic && (
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          animate={{
            boxShadow: [
              '0 0 15px rgba(122, 24, 24, 0.3), 0 0 30px rgba(201, 162, 39, 0.1), inset 0 0 10px rgba(122, 24, 24, 0.1)',
              '0 0 25px rgba(122, 24, 24, 0.5), 0 0 50px rgba(201, 162, 39, 0.2), inset 0 0 15px rgba(122, 24, 24, 0.2)',
              '0 0 15px rgba(122, 24, 24, 0.3), 0 0 30px rgba(201, 162, 39, 0.1), inset 0 0 10px rgba(122, 24, 24, 0.1)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
    </motion.button>
  );
}
