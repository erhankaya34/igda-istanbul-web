'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Lightbulb, Users, Rocket } from 'lucide-react';
import AnimatedSection, { StaggerItem } from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { staggerContainer } from '@/lib/animations';

const features = [
  {
    icon: Target,
    title: 'Misyonumuz',
    description:
      'Türkiye\'deki oyun geliştiricilerini bir araya getirmek, bilgi paylaşımını teşvik etmek ve sektörün büyümesine katkı sağlamak.',
  },
  {
    icon: Lightbulb,
    title: 'Bilgi Paylaşımı',
    description:
      'Workshop\'lar, meetup\'lar ve online içeriklerle oyun geliştirme konusunda sürekli öğrenme fırsatları sunuyoruz.',
  },
  {
    icon: Users,
    title: 'Topluluk',
    description:
      'Yeni başlayanlardan deneyimli profesyonellere kadar herkesin bir arada olduğu, destekleyici bir topluluk oluşturduk.',
  },
  {
    icon: Rocket,
    title: 'Kariyer Fırsatları',
    description:
      'Sektördeki şirketlerle bağlantı kurma, mentorluk ve iş fırsatları konusunda üyelerimize destek oluyoruz.',
  },
];

export default function About() {
  return (
    <section className="section-padding bg-surface-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <AnimatedSection>
            <span className="inline-block text-primary-500 text-sm font-medium mb-4">
              Hakkımızda
            </span>
            <h2 className="text-neutral-50 mb-6">
              IGDA Istanbul
              <span className="block text-primary-500">Nedir?</span>
            </h2>
            <p className="text-neutral-300 text-lg mb-6">
              International Game Developers Association (IGDA), dünya genelinde
              oyun geliştiricilerini destekleyen, kar amacı gütmeyen bir kuruluştur.
            </p>
            <p className="text-neutral-400 mb-8">
              IGDA Istanbul olarak 2016'dan bu yana Türkiye'deki oyun geliştirici
              topluluğunu büyütmek, sektör profesyonellerini bir araya getirmek ve
              bilgi paylaşımını teşvik etmek için çalışıyoruz. Düzenlediğimiz
              etkinlikler, ürettiğimiz içerikler ve kurduğumuz işbirlikleriyle
              Türkiye oyun sektörünün gelişimine katkı sağlıyoruz.
            </p>
            <Link href="/hakkimizda">
              <Button rightIcon={<ArrowRight size={18} />}>
                Daha Fazla Bilgi
              </Button>
            </Link>
          </AnimatedSection>

          {/* Right - Features Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group p-6 rounded-card bg-surface-800/50 border border-surface-700/50 hover:border-primary-500/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/15 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <h3 className="text-base font-semibold text-neutral-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
