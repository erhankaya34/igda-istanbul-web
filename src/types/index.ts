// Blog Post
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: TeamMember;
  category: string;
  tags: string[];
  publishedAt: Date;
  readingTime: number;
}

// Video Content
export interface VideoContent {
  id: string;
  slug: string;
  title: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
  category: string;
  publishedAt: Date;
  duration: string;
}

// Podcast Episode
export interface PodcastEpisode {
  id: string;
  slug: string;
  title: string;
  description: string;
  spotifyId: string;
  coverImage: string;
  category: string;
  publishedAt: Date;
  duration: string;
  showNotes?: string;
}

// Team Member
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
    youtube?: string;
  };
  isBoard: boolean;
}

// Event
export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  isOnline: boolean;
  registrationUrl?: string;
  image?: string;
}

// Content Union Type
export type Content = BlogPost | VideoContent | PodcastEpisode;

// Content Type Enum
export type ContentType = 'blog' | 'video' | 'podcast' | 'all';

// Navigation Item
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Social Link
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Statistic
export interface Statistic {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

// Partner/Sponsor
export interface Partner {
  id: string;
  name: string;
  logo: string;
  url: string;
}

// Contact Form Data
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Newsletter Form Data
export interface NewsletterFormData {
  email: string;
}

// Category
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}
