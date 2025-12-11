'use client';

import { motion } from 'framer-motion';
import { TeamMember } from '@/types';
import TeamMemberCard from './TeamMemberCard';
import { staggerContainer } from '@/lib/animations';
import { StaggerItem } from '../ui/AnimatedSection';

interface TeamGridProps {
  members: TeamMember[];
  variant?: 'default' | 'featured' | 'compact';
  columns?: 2 | 3 | 4;
}

export default function TeamGrid({
  members,
  variant = 'default',
  columns = 3,
}: TeamGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  if (variant === 'compact') {
    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-2"
      >
        {members.map((member) => (
          <StaggerItem key={member.id}>
            <TeamMemberCard member={member} variant="compact" />
          </StaggerItem>
        ))}
      </motion.div>
    );
  }

  if (variant === 'featured') {
    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`grid ${gridCols[columns]} gap-8`}
      >
        {members.map((member) => (
          <StaggerItem key={member.id}>
            <TeamMemberCard member={member} variant="featured" />
          </StaggerItem>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`grid ${gridCols[columns]} gap-6`}
    >
      {members.map((member) => (
        <StaggerItem key={member.id}>
          <TeamMemberCard member={member} />
        </StaggerItem>
      ))}
    </motion.div>
  );
}
