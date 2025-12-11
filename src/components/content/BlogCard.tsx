'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';
import Badge from '../ui/Badge';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  if (variant === 'featured') {
    return (
      <Link href={`/icerikler/${post.slug}`}>
        <motion.article
          whileHover={{ y: -8 }}
          className="group relative rounded-3xl overflow-hidden bg-dark aspect-[16/9] md:aspect-[21/9]"
        >
          {/* Background Image */}
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
            <div className="max-w-2xl">
              <Badge variant="primary" className="mb-4">
                {post.category}
              </Badge>
              <h2 className="text-2xl md:text-4xl font-display text-white mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-white/60 mb-6 line-clamp-2 hidden md:block">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-6 text-white/50 text-sm">
                <span>{formatDate(post.publishedAt)}</span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readingTime} dk okuma
                </span>
                <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                  Devamını Oku
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </motion.article>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link href={`/icerikler/${post.slug}`}>
        <motion.article
          whileHover={{ x: 4 }}
          className="group flex gap-4 p-4 rounded-xl hover:bg-light transition-colors"
        >
          {/* Thumbnail */}
          <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <span className="text-primary text-xs font-medium uppercase">
              {post.category}
            </span>
            <h3 className="text-sm font-medium text-dark line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <span className="text-dark/40 text-xs">
              {formatDate(post.publishedAt)}
            </span>
          </div>
        </motion.article>
      </Link>
    );
  }

  // Default variant
  return (
    <Link href={`/icerikler/${post.slug}`}>
      <motion.article
        whileHover={{ y: -8 }}
        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="primary">{post.category}</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-display text-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-dark/60 text-sm line-clamp-2 mb-4">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-sm text-dark/40">
            <div className="flex items-center gap-3">
              {/* Author Avatar */}
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span>{post.author.name}</span>
            </div>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readingTime} dk
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
