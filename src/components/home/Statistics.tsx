'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Calendar, Award, Building2 } from 'lucide-react';
import { STATISTICS } from '@/lib/constants';
import { Counter } from '../ui/AnimatedSection';
import { staggerContainer, staggerItem } from '@/lib/animations';

const icons = [Users, Calendar, Award, Building2];

export default function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-surface-900">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary-500/5 to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-500/5 to-transparent" />
      </div>

      <div className="relative container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {STATISTICS.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="relative group"
              >
                <div className="text-center p-6 rounded-card bg-surface-800/50 border border-surface-700/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary-500/30 group-hover:bg-surface-800/70">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/10 mb-4 transition-colors group-hover:bg-primary-500/15">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>

                  {/* Counter Value */}
                  <div className="text-3xl md:text-4xl font-display font-semibold text-neutral-50 mb-2">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>

                  {/* Label */}
                  <p className="text-neutral-500 text-sm">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
