'use client';

import { motion } from 'framer-motion';
import { Grid, FileText, PlayCircle, Headphones, LucideIcon } from 'lucide-react';
import { CONTENT_CATEGORIES, CONTENT_TYPES } from '@/lib/constants';
import { cn } from '@/lib/utils';

type ContentType = 'all' | 'blog' | 'video' | 'podcast';
type Category = string;

interface ContentFilterProps {
  selectedType: ContentType;
  selectedCategory: Category;
  onTypeChange: (type: ContentType) => void;
  onCategoryChange: (category: Category) => void;
  className?: string;
}

const typeIcons: Record<string, LucideIcon> = {
  all: Grid,
  blog: FileText,
  video: PlayCircle,
  podcast: Headphones,
};

export default function ContentFilter({
  selectedType,
  selectedCategory,
  onTypeChange,
  onCategoryChange,
  className,
}: ContentFilterProps) {
  return (
    <div className={cn('space-y-6', className)}>
      {/* Content Type Tabs */}
      <div className="flex flex-wrap gap-2">
        {CONTENT_TYPES.map((type) => {
          const Icon = typeIcons[type.id];
          const isActive = selectedType === type.id;

          return (
            <motion.button
              key={type.id}
              onClick={() => onTypeChange(type.id as ContentType)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'relative px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-white'
                  : 'bg-light text-dark/70 hover:bg-light-gray hover:text-dark'
              )}
            >
              {Icon && <Icon size={16} />}
              {type.name}
              {isActive && (
                <motion.div
                  layoutId="activeTypeIndicator"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {CONTENT_CATEGORIES.map((category) => {
          const isActive = selectedCategory === category.id;

          return (
            <motion.button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-colors',
                isActive
                  ? 'bg-dark text-white'
                  : 'bg-transparent border border-light-gray text-dark/60 hover:border-primary hover:text-primary'
              )}
            >
              {category.name}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// Simplified filter for sidebar
interface SidebarFilterProps {
  selectedType: ContentType;
  onTypeChange: (type: ContentType) => void;
  className?: string;
}

export function SidebarFilter({
  selectedType,
  onTypeChange,
  className,
}: SidebarFilterProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <h4 className="text-sm font-medium text-dark/50 uppercase tracking-wider mb-4">
        İçerik Türü
      </h4>
      {CONTENT_TYPES.map((type) => {
        const Icon = typeIcons[type.id];
        const isActive = selectedType === type.id;

        return (
          <button
            key={type.id}
            onClick={() => onTypeChange(type.id as ContentType)}
            className={cn(
              'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors',
              isActive
                ? 'bg-primary/10 text-primary'
                : 'hover:bg-light text-dark/70 hover:text-dark'
            )}
          >
            {Icon && <Icon size={18} />}
            <span className="font-medium">{type.name}</span>
          </button>
        );
      })}
    </div>
  );
}

// Category filter for sidebar
interface CategoryFilterProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
  className?: string;
}

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
  className,
}: CategoryFilterProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <h4 className="text-sm font-medium text-dark/50 uppercase tracking-wider mb-4">
        Kategori
      </h4>
      {CONTENT_CATEGORIES.map((category) => {
        const isActive = selectedCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              'w-full text-left px-4 py-2 rounded-lg text-sm transition-colors',
              isActive
                ? 'bg-dark text-white'
                : 'hover:bg-light text-dark/70 hover:text-dark'
            )}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
