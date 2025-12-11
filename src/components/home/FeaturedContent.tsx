'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, FileText, PlayCircle, Headphones } from 'lucide-react';
import { getFeaturedContent } from '@/data/content';
import { formatDate } from '@/lib/utils';
import AnimatedSection, { StaggerItem } from '../ui/AnimatedSection';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { staggerContainer } from '@/lib/animations';

const contentTypeConfig = {
  blog: {
    icon: FileText,
    label: 'Blog',
    color: 'primary',
  },
  video: {
    icon: PlayCircle,
    label: 'Video',
    color: 'warning',
  },
  podcast: {
    icon: Headphones,
    label: 'Podcast',
    color: 'info',
  },
};

export default function FeaturedContent() {
  const featuredContent = getFeaturedContent();

  return (
    <section className="section-padding bg-surface-950">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-primary-500 text-sm font-medium mb-4">
            Son İçerikler
          </span>
          <h2 className="text-neutral-50 mb-4">Öne Çıkan İçerikler</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Blog yazıları, videolar ve podcast bölümleriyle oyun geliştirme
            dünyasından haberler ve bilgiler.
          </p>
        </AnimatedSection>

        {/* Content Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {featuredContent.map((content) => {
            const type = 'youtubeId' in content ? 'video' : 'spotifyId' in content ? 'podcast' : 'blog';
            const config = contentTypeConfig[type];
            const Icon = config.icon;

            return (
              <StaggerItem key={content.id}>
                <Link href={`/icerikler/${content.slug}`}>
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="group bg-surface-900 rounded-card overflow-hidden border border-surface-700/50 hover:border-surface-600/50 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={'coverImage' in content ? content.coverImage : content.thumbnail}
                        alt={content.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 to-transparent" />

                      {/* Type Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge variant={config.color as 'primary' | 'warning' | 'info'}>
                          <Icon size={12} className="mr-1" />
                          {config.label}
                        </Badge>
                      </div>

                      {/* Play button for video/podcast */}
                      {type !== 'blog' && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-14 h-14 rounded-full bg-primary-500/90 flex items-center justify-center">
                            <PlayCircle className="w-7 h-7 text-white" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category */}
                      <span className="text-primary-500 text-xs font-medium">
                        {content.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-neutral-100 mt-2 mb-3 line-clamp-2 group-hover:text-primary-500 transition-colors">
                        {content.title}
                      </h3>

                      {/* Description */}
                      <p className="text-neutral-400 text-sm line-clamp-2 mb-4">
                        {'excerpt' in content ? content.excerpt : content.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-neutral-500">
                        <span>{formatDate(content.publishedAt)}</span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {'readingTime' in content
                            ? `${content.readingTime} dk okuma`
                            : content.duration}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </StaggerItem>
            );
          })}
        </motion.div>

        {/* View All Button */}
        <AnimatedSection className="text-center">
          <Link href="/icerikler">
            <Button variant="outline" rightIcon={<ArrowRight size={18} />}>
              Tüm İçerikleri Gör
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
