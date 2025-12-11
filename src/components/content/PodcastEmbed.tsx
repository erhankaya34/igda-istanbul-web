'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Headphones, ExternalLink } from 'lucide-react';
import { getSpotifyEmbedUrl } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface PodcastEmbedProps {
  episodeId: string;
  title: string;
  className?: string;
  theme?: 'dark' | 'light';
}

export default function PodcastEmbed({
  episodeId,
  title,
  className,
  theme = 'dark',
}: PodcastEmbedProps) {
  return (
    <div className={cn('rounded-2xl overflow-hidden', className)}>
      <iframe
        src={`${getSpotifyEmbedUrl(episodeId)}?utm_source=generator&theme=${theme === 'dark' ? '0' : '1'}`}
        title={title}
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-full"
      />
    </div>
  );
}

// Compact Spotify Player
interface PodcastPlayerProps {
  episodeId: string;
  title: string;
  className?: string;
}

export function PodcastPlayer({ episodeId, title, className }: PodcastPlayerProps) {
  return (
    <div className={cn('rounded-xl overflow-hidden', className)}>
      <iframe
        src={`${getSpotifyEmbedUrl(episodeId)}?utm_source=generator&theme=0`}
        title={title}
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-full"
      />
    </div>
  );
}

// Podcast Card for listing pages
interface PodcastCardProps {
  episodeId: string;
  title: string;
  description: string;
  coverImage: string;
  duration: string;
  category: string;
  publishedAt: Date;
  slug: string;
}

export function PodcastCard({
  episodeId,
  title,
  description,
  coverImage,
  duration,
  category,
  publishedAt,
  slug,
}: PodcastCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Cover */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />

        {/* Duration Badge */}
        <div className="absolute bottom-4 right-4 px-2 py-1 bg-dark/80 rounded text-white text-xs font-medium">
          {duration}
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.div
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
            className="w-16 h-16 bg-[#1DB954] rounded-full flex items-center justify-center"
          >
            <Headphones className="w-7 h-7 text-white" />
          </motion.div>
        </div>

        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#1DB954] text-white text-xs font-medium uppercase rounded-full flex items-center gap-1">
            <Headphones size={12} />
            Podcast
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
        <p className="text-dark/60 text-sm line-clamp-2 mb-4">
          {description}
        </p>

        {/* Spotify Link */}
        <a
          href={`https://open.spotify.com/episode/${episodeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#1DB954] text-sm font-medium hover:underline"
        >
          Spotify'da Dinle
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.article>
  );
}
