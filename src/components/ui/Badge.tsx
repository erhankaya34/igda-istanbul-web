'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center
      font-medium
      rounded-badge
      transition-all duration-200
    `;

    const variants = {
      default: 'bg-surface-700/80 text-neutral-300 ring-1 ring-surface-600/50',
      primary: 'bg-primary-500/15 text-primary-400 ring-1 ring-primary-500/25',
      secondary: 'bg-surface-800 text-neutral-200 ring-1 ring-surface-700/50',
      success: 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/25',
      warning: 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/25',
      info: 'bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/25',
      outline: 'bg-transparent border border-surface-600 text-neutral-400',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-[10px] tracking-wide',
      md: 'px-2.5 py-1 text-xs',
      lg: 'px-3 py-1.5 text-sm',
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
