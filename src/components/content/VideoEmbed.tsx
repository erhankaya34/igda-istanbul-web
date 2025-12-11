'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { getYouTubeThumbnail, getYouTubeEmbedUrl } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface VideoEmbedProps {
  videoId: string;
  title: string;
  thumbnail?: string;
  className?: string;
  autoplay?: boolean;
}

export default function VideoEmbed({
  videoId,
  title,
  thumbnail,
  className,
  autoplay = false,
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);

  const thumbnailUrl = thumbnail || getYouTubeThumbnail(videoId, 'maxres');

  return (
    <div className={cn('relative aspect-video rounded-2xl overflow-hidden bg-dark', className)}>
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.div
            key="thumbnail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            {/* Thumbnail */}
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-dark/30" />

            {/* Play Button */}
            <motion.button
              onClick={() => setIsPlaying(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Videoyu oynat"
            >
              <div className="relative">
                {/* Pulse Ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-primary rounded-full"
                />
                {/* Play Icon */}
                <div className="relative w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 group-hover:bg-primary-dark transition-colors">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </motion.button>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark/80 to-transparent">
              <h3 className="text-white font-display text-lg">{title}</h3>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <iframe
              src={`${getYouTubeEmbedUrl(videoId)}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Video Card variant for listing pages
interface VideoCardProps {
  videoId: string;
  title: string;
  description: string;
  thumbnail?: string;
  duration: string;
  category: string;
  publishedAt: Date;
  slug: string;
}

export function VideoCard({
  videoId,
  title,
  description,
  thumbnail,
  duration,
  category,
  publishedAt,
  slug,
}: VideoCardProps) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -8 }}
      onHoverStart={() => setShowPreview(true)}
      onHoverEnd={() => setShowPreview(false)}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnail || getYouTubeThumbnail(videoId)}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors" />

        {/* Duration Badge */}
        <div className="absolute bottom-4 right-4 px-2 py-1 bg-dark/80 rounded text-white text-xs font-medium">
          {duration}
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.div
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
            className="w-16 h-16 bg-primary rounded-full flex items-center justify-center"
          >
            <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
          </motion.div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-accent text-white text-xs font-medium uppercase rounded-full">
            Video
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-primary text-xs font-medium uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-xl font-display text-dark mt-2 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-dark/60 text-sm line-clamp-2">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
