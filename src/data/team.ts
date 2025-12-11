import { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  // Board Members
  {
    id: '1',
    name: 'Onur Şimşek',
    role: 'Başkan',
    bio: 'IGDA Istanbul Chapter başkanı. Türkiye oyun geliştirici topluluğunun büyümesi için çalışıyor.',
    image: '/images/team/onur.png',
    social: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/in/',
    },
    isBoard: true,
  },
  {
    id: '2',
    name: 'Erhan Kaya',
    role: 'Başkan Yardımcısı',
    bio: 'IGDA Istanbul Chapter başkan yardımcısı. Topluluk etkinlikleri ve içerik üretimi koordinasyonunda aktif rol alıyor.',
    image: '/images/team/erhan.png',
    social: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/in/',
    },
    isBoard: true,
  },
  {
    id: '3',
    name: 'İpek Taraklıoğlu',
    role: 'Yönetim Kurulu Üyesi',
    bio: 'IGDA Istanbul yönetim kurulu üyesi. Topluluk ilişkileri ve stratejik planlama alanlarında katkı sağlıyor.',
    image: '/images/team/ipek.png',
    social: {
      linkedin: 'https://linkedin.com/in/',
    },
    isBoard: true,
  },
];

export const boardMembers = teamMembers.filter((member) => member.isBoard);
export const volunteers = teamMembers.filter((member) => !member.isBoard);
