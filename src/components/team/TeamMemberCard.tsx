'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Twitter, Linkedin, Github, Globe, ChevronDown } from 'lucide-react';
import { TeamMember } from '@/types';
import { cn } from '@/lib/utils';
import { getInitials } from '@/lib/utils';

interface TeamMemberCardProps {
  member: TeamMember;
  variant?: 'default' | 'featured' | 'compact';
}

const socialIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  website: Globe,
};

export default function TeamMemberCard({ member, variant = 'default' }: TeamMemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (variant === 'featured') {
    return (
      <motion.article
        whileHover={{ y: -8 }}
        className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        {/* Image Section */}
        <div className="relative aspect-[4/5] overflow-hidden">
          {!imageError ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
              <span className="text-6xl font-display text-white">
                {getInitials(member.name)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-60" />

          {/* Social Links Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              {Object.entries(member.social).map(([platform, url]) => {
                if (!url) return null;
                const Icon = socialIcons[platform as keyof typeof socialIcons];
                if (!Icon) return null;

                return (
                  <Link
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-6">
          <h3 className="text-2xl font-display text-dark mb-1">{member.name}</h3>
          <p className="text-primary font-medium mb-4">{member.role}</p>
          <p className="text-dark/60 text-sm line-clamp-3">{member.bio}</p>
        </div>
      </motion.article>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.article
        whileHover={{ x: 4 }}
        className="group flex items-center gap-4 p-4 rounded-xl hover:bg-light transition-colors"
      >
        {/* Avatar */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          {!imageError ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-primary flex items-center justify-center">
              <span className="text-lg font-display text-white">
                {getInitials(member.name)}
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-dark truncate">{member.name}</h4>
          <p className="text-sm text-dark/50 truncate">{member.role}</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {Object.entries(member.social).map(([platform, url]) => {
            if (!url) return null;
            const Icon = socialIcons[platform as keyof typeof socialIcons];
            if (!Icon) return null;

            return (
              <Link
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark/40 hover:text-primary transition-colors"
              >
                <Icon size={16} />
              </Link>
            );
          })}
        </div>
      </motion.article>
    );
  }

  // Default variant
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        {!imageError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
            <span className="text-5xl font-display text-white">
              {getInitials(member.name)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Social Links Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          {Object.entries(member.social).map(([platform, url]) => {
            if (!url) return null;
            const Icon = socialIcons[platform as keyof typeof socialIcons];
            if (!Icon) return null;

            return (
              <Link
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all"
              >
                <Icon size={16} />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-lg font-display text-dark mb-0.5">{member.name}</h3>
        <p className="text-primary text-sm font-medium mb-3">{member.role}</p>

        {/* Expandable Bio */}
        <div className="relative">
          <p
            className={cn(
              'text-dark/60 text-sm transition-all duration-300',
              !isExpanded && 'line-clamp-2'
            )}
          >
            {member.bio}
          </p>
          {member.bio.length > 80 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary text-xs font-medium mt-2 flex items-center gap-1 hover:underline"
            >
              {isExpanded ? 'Daha az' : 'Devamını oku'}
              <ChevronDown
                size={14}
                className={cn(
                  'transition-transform',
                  isExpanded && 'rotate-180'
                )}
              />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
