// Site metadata
export const SITE_CONFIG = {
  name: 'IGDA Istanbul',
  description: 'International Game Developers Association Istanbul Chapter - Türkiye\'nin en büyük oyun geliştirici topluluğu',
  url: 'https://igdaistanbul.org',
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@IGDAIstanbul',
};

// Navigation items
export const NAV_ITEMS = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Ekibimiz', href: '/ekibimiz' },
  { label: 'İçerikler', href: '/icerikler' },
  { label: 'Etkinlikler', href: '/etkinlikler' },
  { label: 'İletişim', href: '/iletisim' },
];

// Social media links
export const SOCIAL_LINKS = [
  {
    platform: 'Discord',
    url: 'https://discord.gg/igdaistanbul',
    icon: 'discord',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/IGDAIstanbul',
    icon: 'twitter',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/igda-istanbul',
    icon: 'linkedin',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/igdaistanbul',
    icon: 'instagram',
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com/@igdaistanbul',
    icon: 'youtube',
  },
  {
    platform: 'Spotify',
    url: 'https://open.spotify.com/show/igdaistanbul',
    icon: 'spotify',
  },
];

// Content categories
export const CONTENT_CATEGORIES = [
  { id: 'all', name: 'Tümü', slug: 'all' },
  { id: 'game-design', name: 'Oyun Tasarımı', slug: 'oyun-tasarimi' },
  { id: 'programming', name: 'Programlama', slug: 'programlama' },
  { id: 'art', name: 'Sanat & Grafik', slug: 'sanat-grafik' },
  { id: 'career', name: 'Kariyer', slug: 'kariyer' },
  { id: 'industry', name: 'Sektör', slug: 'sektor' },
  { id: 'interview', name: 'Röportaj', slug: 'roportaj' },
];

// Content types
export const CONTENT_TYPES = [
  { id: 'all', name: 'Tümü', icon: 'grid' },
  { id: 'blog', name: 'Blog', icon: 'file-text' },
  { id: 'video', name: 'Video', icon: 'play-circle' },
  { id: 'podcast', name: 'Podcast', icon: 'headphones' },
];

// Statistics
export const STATISTICS = [
  { label: 'Topluluk Üyesi', value: 2500, suffix: '+' },
  { label: 'Etkinlik', value: 150, suffix: '+' },
  { label: 'Yıllık Deneyim', value: 8, suffix: '' },
  { label: 'Partner', value: 25, suffix: '+' },
];

// Footer links
export const FOOTER_LINKS = {
  hizliErisim: [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Ekibimiz', href: '/ekibimiz' },
    { label: 'Etkinlikler', href: '/etkinlikler' },
  ],
  icerikler: [
    { label: 'Blog Yazıları', href: '/icerikler?type=blog' },
    { label: 'Videolar', href: '/icerikler?type=video' },
    { label: 'Podcast', href: '/icerikler?type=podcast' },
  ],
  topluluk: [
    { label: 'Discord Sunucusu', href: 'https://discord.gg/igdaistanbul' },
    { label: 'Bize Katıl', href: '/iletisim' },
    { label: 'Sponsorluk', href: '/iletisim' },
  ],
};

// Animation durations (in seconds)
export const ANIMATION_DURATION = {
  fast: 0.2,
  base: 0.3,
  slow: 0.5,
  slower: 0.8,
};

// Breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Content per page
export const ITEMS_PER_PAGE = 9;

// Contact info
export const CONTACT_INFO = {
  email: 'merhaba@igdaistanbul.org',
  location: 'İstanbul, Türkiye',
};
