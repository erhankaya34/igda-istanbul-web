'use client';

import { cn } from '@/lib/utils';

interface GlowEffectProps {
  className?: string;
  color?: 'primary' | 'accent' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  intensity?: 'low' | 'medium' | 'high';
  animate?: boolean;
}

export default function GlowEffect({
  className,
  color = 'primary',
  size = 'md',
  intensity = 'low',
  animate = false,
}: GlowEffectProps) {
  const colors = {
    primary: 'bg-primary-500',
    accent: 'bg-accent-500',
    white: 'bg-white',
  };

  // Reduced sizes for better performance
  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-72 h-72',
    xl: 'w-96 h-96',
  };

  // Reduced opacity for subtlety
  const intensities = {
    low: 'opacity-[0.08]',
    medium: 'opacity-[0.12]',
    high: 'opacity-[0.18]',
  };

  return (
    <div
      className={cn(
        'absolute rounded-full blur-3xl pointer-events-none',
        colors[color],
        sizes[size],
        intensities[intensity],
        animate && 'animate-glow-pulse',
        className
      )}
      aria-hidden="true"
    />
  );
}

// Gradient Orb - Simplified with new colors
interface GradientOrbProps {
  className?: string;
}

export function GradientOrb({ className }: GradientOrbProps) {
  return (
    <div
      className={cn(
        'absolute rounded-full blur-3xl pointer-events-none',
        'bg-gradient-radial from-primary-500/15 via-primary-500/5 to-transparent',
        className
      )}
      aria-hidden="true"
    />
  );
}

// Noise Overlay - Subtle texture
interface NoiseOverlayProps {
  className?: string;
  opacity?: number;
}

export function NoiseOverlay({ className, opacity = 0.015 }: NoiseOverlayProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none z-10',
        className
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        opacity,
      }}
      aria-hidden="true"
    />
  );
}
