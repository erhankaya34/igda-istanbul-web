'use client';

import { motion } from 'framer-motion';
import { Gamepad2, Code2, Palette, Music, Sparkles, Zap, Target, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingElementsProps {
  className?: string;
  count?: number;
}

const icons = [Gamepad2, Code2, Palette, Music, Sparkles, Zap, Target, Trophy];

export default function FloatingElements({ className, count = 8 }: FloatingElementsProps) {
  const elements = Array.from({ length: count }, (_, i) => {
    const Icon = icons[i % icons.length];
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    const randomDelay = Math.random() * 2;
    const randomDuration = 4 + Math.random() * 4;
    const randomSize = 16 + Math.random() * 16;

    return {
      id: i,
      Icon,
      x: randomX,
      y: randomY,
      delay: randomDelay,
      duration: randomDuration,
      size: randomSize,
    };
  });

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute text-primary/20"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: 'easeInOut',
          }}
        >
          <element.Icon size={element.size} />
        </motion.div>
      ))}
    </div>
  );
}

// Pixel Grid Background
export function PixelGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn('absolute inset-0 pointer-events-none opacity-30', className)}
      style={{
        backgroundImage: `
          linear-gradient(rgba(177, 41, 36, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(177, 41, 36, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
      }}
      aria-hidden="true"
    />
  );
}

// Geometric Shapes
export function GeometricShapes({ className }: { className?: string }) {
  const shapes = [
    { type: 'circle', x: 10, y: 20, size: 60, delay: 0 },
    { type: 'square', x: 85, y: 15, size: 40, delay: 0.5 },
    { type: 'triangle', x: 75, y: 70, size: 50, delay: 1 },
    { type: 'circle', x: 20, y: 80, size: 30, delay: 1.5 },
    { type: 'square', x: 90, y: 60, size: 25, delay: 2 },
  ];

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute border-2 border-primary/10"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'square' ? '4px' : '0',
            transform: shape.type === 'triangle' ? 'rotate(45deg)' : 'none',
          }}
          animate={{
            rotate: shape.type === 'square' ? [0, 90, 180, 270, 360] : 0,
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

// Istanbul Silhouette SVG
export function IstanbulSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 300"
      className={cn('absolute bottom-0 left-0 w-full h-auto opacity-10', className)}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Simplified Istanbul skyline */}
      <path d="M0,300 L0,250 L50,250 L50,200 L60,180 L70,200 L70,250 L100,250 L100,220 L110,200 L115,150 L120,200 L130,220 L130,250 L180,250 L180,200 L200,180 L220,200 L220,250 L260,250 L260,230 L280,210 L300,230 L300,250 L340,250 L340,180 L350,160 L355,100 L360,160 L370,180 L370,250 L420,250 L420,200 L440,180 L460,200 L460,250 L500,250 L500,220 L510,200 L515,120 L518,80 L520,50 L522,80 L525,120 L530,200 L540,220 L540,250 L600,250 L600,230 L620,210 L640,230 L640,250 L680,250 L680,200 L700,180 L720,200 L720,250 L760,250 L760,180 L780,150 L785,100 L790,150 L800,180 L800,250 L850,250 L850,220 L870,200 L890,220 L890,250 L940,250 L940,200 L960,180 L980,200 L980,250 L1020,250 L1020,230 L1040,210 L1060,230 L1060,250 L1100,250 L1100,200 L1120,180 L1140,200 L1140,250 L1200,250 L1200,300 Z" />
      {/* Galata Tower */}
      <ellipse cx="520" cy="45" rx="8" ry="5" />
      {/* Maiden's Tower (Kız Kulesi) */}
      <rect x="780" y="95" width="10" height="10" />
      <polygon points="785,85 780,95 790,95" />
    </svg>
  );
}
