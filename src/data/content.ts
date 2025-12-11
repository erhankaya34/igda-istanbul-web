import { BlogPost, VideoContent, PodcastEpisode, Content } from '@/types';
import { teamMembers } from './team';

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'turkiye-oyun-sektoru-2024-raporu',
    title: 'Türkiye Oyun Sektörü 2024 Raporu: Nereye Gidiyoruz?',
    excerpt: 'Türkiye oyun sektörünün 2024 yılındaki durumunu, büyüme trendlerini ve geleceğe dair öngörüleri analiz ettik.',
    content: `Türkiye oyun sektörü son yıllarda büyük bir ivme kazandı. 2024 yılı itibarıyla sektör, hem yerel hem de global pazarda önemli başarılara imza atıyor...`,
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=630&fit=crop',
    author: teamMembers[0],
    category: 'Sektör',
    tags: ['sektör analizi', 'rapor', '2024', 'türkiye'],
    publishedAt: new Date('2024-03-15'),
    readingTime: 8,
  },
  {
    id: 'blog-2',
    slug: 'unity-vs-unreal-hangi-engine-secmeli',
    title: 'Unity vs Unreal: Hangi Engine\'i Seçmelisiniz?',
    excerpt: 'İki büyük oyun motorunu karşılaştırıyor, hangi projelerde hangisinin daha uygun olduğunu inceliyoruz.',
    content: `Oyun geliştirmeye başlarken en kritik kararlardan biri hangi oyun motorunu kullanacağınızdır. Bu yazıda Unity ve Unreal Engine'i detaylı olarak karşılaştırıyoruz...`,
    coverImage: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1200&h=630&fit=crop',
    author: teamMembers[1],
    category: 'Programlama',
    tags: ['unity', 'unreal', 'oyun motoru', 'karşılaştırma'],
    publishedAt: new Date('2024-03-10'),
    readingTime: 12,
  },
  {
    id: 'blog-3',
    slug: 'indie-oyun-gelistirme-rehberi',
    title: 'Indie Oyun Geliştirme: Başlangıç Rehberi',
    excerpt: 'Bağımsız oyun geliştirmeye nasıl başlanır? İlk projenizi planlamaktan yayınlamaya kadar tüm süreç.',
    content: `Indie oyun geliştirme, son yıllarda giderek popülerleşen bir alan. Küçük bir ekiple veya tek başınıza harika oyunlar üretebilirsiniz...`,
    coverImage: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0b?w=1200&h=630&fit=crop',
    author: teamMembers[2],
    category: 'Oyun Tasarımı',
    tags: ['indie', 'başlangıç', 'rehber', 'oyun geliştirme'],
    publishedAt: new Date('2024-03-05'),
    readingTime: 15,
  },
  {
    id: 'blog-4',
    slug: 'oyun-sanat-yonetmenligi',
    title: 'Oyunlarda Sanat Yönetmenliği: Görsel Kimlik Oluşturma',
    excerpt: 'Bir oyunun görsel kimliğini nasıl oluşturursunuz? Sanat yönetmenliğinin temel prensipleri.',
    content: `Bir oyunun başarısında görsel kimlik kritik bir rol oynar. Bu yazıda sanat yönetmenliğinin temel prensiplerini inceliyoruz...`,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=630&fit=crop',
    author: teamMembers[0],
    category: 'Sanat & Grafik',
    tags: ['sanat', 'görsel tasarım', 'art direction'],
    publishedAt: new Date('2024-02-28'),
    readingTime: 10,
  },
  {
    id: 'blog-5',
    slug: 'oyun-sektorunde-kariyer',
    title: 'Oyun Sektöründe Kariyer: Hangi Yolu Seçmelisiniz?',
    excerpt: 'Oyun sektöründe kariyer yapmak isteyenler için farklı iş rollerini ve kariyer yollarını inceliyoruz.',
    content: `Oyun sektörü, programcılardan sanatçılara, tasarımcılardan pazarlamacılara kadar birçok farklı disiplini bir araya getiriyor...`,
    coverImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=630&fit=crop',
    author: teamMembers[1],
    category: 'Kariyer',
    tags: ['kariyer', 'iş', 'sektör', 'başlangıç'],
    publishedAt: new Date('2024-02-20'),
    readingTime: 9,
  },
  {
    id: 'blog-6',
    slug: 'game-jam-deneyimi',
    title: 'İlk Game Jam Deneyiminiz İçin 10 İpucu',
    excerpt: 'Game jam\'e ilk kez katılacak olanlar için pratik öneriler ve deneyimlerimiz.',
    content: `Game jam\'ler, kısa sürede oyun geliştirmenin en heyecan verici yollarından biri. İşte ilk deneyiminiz için önerilerimiz...`,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=630&fit=crop',
    author: teamMembers[2],
    category: 'Oyun Tasarımı',
    tags: ['game jam', 'etkinlik', 'ipuçları'],
    publishedAt: new Date('2024-02-15'),
    readingTime: 7,
  },
];

// Video Content
export const videoContent: VideoContent[] = [
  {
    id: 'video-1',
    slug: 'unity-baslangic-egitimi',
    title: 'Unity ile Oyun Geliştirme - Başlangıç Eğitimi',
    description: 'Unity\'ye yeni başlayanlar için kapsamlı bir başlangıç eğitimi. Arayüzden ilk oyununuza kadar.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=1200&h=630&fit=crop',
    category: 'Programlama',
    publishedAt: new Date('2024-03-12'),
    duration: '45:30',
  },
  {
    id: 'video-2',
    slug: 'pixel-art-temelleri',
    title: 'Pixel Art Temelleri: Karakter Tasarımı',
    description: 'Pixel art ile karakter tasarımının temellerini öğrenin. Başlangıç seviyesi için uygun.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=630&fit=crop',
    category: 'Sanat & Grafik',
    publishedAt: new Date('2024-03-08'),
    duration: '32:15',
  },
  {
    id: 'video-3',
    slug: 'oyun-tasarim-dokumani',
    title: 'Etkili Oyun Tasarım Dokümanı Nasıl Yazılır?',
    description: 'Profesyonel bir GDD (Game Design Document) nasıl hazırlanır? Şablonlar ve örneklerle.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=630&fit=crop',
    category: 'Oyun Tasarımı',
    publishedAt: new Date('2024-03-01'),
    duration: '28:45',
  },
  {
    id: 'video-4',
    slug: 'stüdyo-turu-peak-games',
    title: 'Stüdyo Turu: Peak Games Ofisi',
    description: 'Türkiye\'nin en başarılı oyun stüdyolarından Peak Games\'i ziyaret ettik.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=630&fit=crop',
    category: 'Sektör',
    publishedAt: new Date('2024-02-25'),
    duration: '18:20',
  },
];

// Podcast Episodes
export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: 'podcast-1',
    slug: 'sektor-sohbetleri-baris-ozistek',
    title: 'Sektör Sohbetleri #15: Barış Özistek ile Türkiye\'de Oyun Girişimciliği',
    description: 'Mobidictum kurucusu Barış Özistek ile Türkiye oyun sektörünü, girişimciliği ve geleceği konuştuk.',
    spotifyId: '0VjIjW4GlUZAx2Zb9dKt5y',
    coverImage: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&h=630&fit=crop',
    category: 'Röportaj',
    publishedAt: new Date('2024-03-14'),
    duration: '58:30',
    showNotes: 'Bu bölümde Barış Özistek ile Türkiye oyun sektörünün geçmişini, bugününü ve geleceğini konuştuk...',
  },
  {
    id: 'podcast-2',
    slug: 'indie-oyun-gelistirme-hikayeleri',
    title: 'Indie Hikayeleri #8: Sıfırdan Steam Başarısına',
    description: 'Türk indie geliştiricilerin Steam\'de başarıya ulaşma hikayelerini dinliyoruz.',
    spotifyId: '0VjIjW4GlUZAx2Zb9dKt5y',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=630&fit=crop',
    category: 'Sektör',
    publishedAt: new Date('2024-03-07'),
    duration: '42:15',
  },
  {
    id: 'podcast-3',
    slug: 'oyun-muzigi-yapimi',
    title: 'Sanat & Teknik #5: Oyun Müziği Yapımının İncelikleri',
    description: 'Oyun müziği bestecisi Oğuz Yılmaz ile oyunlar için müzik yapımını konuştuk.',
    spotifyId: '0VjIjW4GlUZAx2Zb9dKt5y',
    coverImage: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1200&h=630&fit=crop',
    category: 'Sanat & Grafik',
    publishedAt: new Date('2024-02-28'),
    duration: '51:00',
  },
];

// Helper function to get all content
export function getAllContent(): Content[] {
  return [
    ...blogPosts.map((post) => ({ ...post, type: 'blog' as const })),
    ...videoContent.map((video) => ({ ...video, type: 'video' as const })),
    ...podcastEpisodes.map((podcast) => ({ ...podcast, type: 'podcast' as const })),
  ].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

// Get featured content (latest 3)
export function getFeaturedContent(): Content[] {
  return getAllContent().slice(0, 3);
}

// Get content by type
export function getContentByType(type: 'blog' | 'video' | 'podcast') {
  switch (type) {
    case 'blog':
      return blogPosts;
    case 'video':
      return videoContent;
    case 'podcast':
      return podcastEpisodes;
  }
}

// Get content by slug
export function getContentBySlug(slug: string) {
  const allContent = [...blogPosts, ...videoContent, ...podcastEpisodes];
  return allContent.find((content) => content.slug === slug);
}
