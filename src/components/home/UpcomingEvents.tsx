'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, Video, ExternalLink } from 'lucide-react';
import { getUpcomingEvents } from '@/data/events';
import AnimatedSection, { StaggerItem } from '../ui/AnimatedSection';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import GlowEffect from '../ui/GlowEffect';
import { staggerContainer } from '@/lib/animations';

export default function UpcomingEvents() {
  const upcomingEvents = getUpcomingEvents().slice(0, 3);

  if (upcomingEvents.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-surface-950 relative overflow-hidden">
      {/* Background Elements */}
      <GlowEffect color="primary" size="xl" intensity="low" className="top-0 right-0" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-block text-primary-500 text-sm font-medium mb-4">
              Takvim
            </span>
            <h2 className="text-neutral-50 mb-4">Yaklaşan Etkinlikler</h2>
            <p className="text-neutral-400 max-w-xl">
              Meetup'lar, workshop'lar ve networking etkinlikleriyle sektör
              profesyonelleriyle tanışın.
            </p>
          </div>
          <Link href="/etkinlikler" className="mt-6 md:mt-0">
            <Button variant="outline">
              Tüm Etkinlikler
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </AnimatedSection>

        {/* Events Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {upcomingEvents.map((event) => (
            <StaggerItem key={event.id}>
              <motion.article
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-card bg-surface-900/50 border border-surface-700/50 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-300"
              >
                {/* Date Badge */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center w-20 h-20 rounded-xl bg-primary-500/10 border border-primary-500/20">
                  <span className="text-2xl font-display font-semibold text-primary-500">
                    {new Date(event.date).getDate()}
                  </span>
                  <span className="text-xs text-primary-500/70">
                    {new Date(event.date).toLocaleDateString('tr-TR', { month: 'short' })}
                  </span>
                </div>

                {/* Event Image (if available) */}
                {event.image && (
                  <div className="relative w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950/40 to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      {/* Online/Offline Badge */}
                      <Badge
                        variant={event.isOnline ? 'success' : 'default'}
                        size="sm"
                        className="mb-2"
                      >
                        {event.isOnline ? (
                          <>
                            <Video size={12} className="mr-1" />
                            Online
                          </>
                        ) : (
                          <>
                            <MapPin size={12} className="mr-1" />
                            Fiziksel
                          </>
                        )}
                      </Badge>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-neutral-100 group-hover:text-primary-500 transition-colors">
                        {event.title}
                      </h3>
                    </div>

                    {/* Register Button */}
                    {event.registrationUrl && (
                      <Link
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:block"
                      >
                        <Button size="sm" rightIcon={<ExternalLink size={14} />}>
                          Kayıt Ol
                        </Button>
                      </Link>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 text-sm line-clamp-2 mb-4">
                    {event.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {event.location}
                    </span>
                  </div>

                  {/* Mobile Register Button */}
                  {event.registrationUrl && (
                    <Link
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 md:hidden inline-block"
                    >
                      <Button size="sm" rightIcon={<ExternalLink size={14} />}>
                        Kayıt Ol
                      </Button>
                    </Link>
                  )}
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
