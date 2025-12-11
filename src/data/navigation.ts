import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    label: 'Ana Sayfa',
    href: '/',
  },
  {
    label: 'İçerikler',
    href: '/icerikler',
  },
  {
    label: 'İletişim',
    href: '/iletisim',
  },
];

export const footerNavigation = {
  hizliErisim: [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'İçerikler', href: '/icerikler' },
    { label: 'İletişim', href: '/iletisim' },
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
