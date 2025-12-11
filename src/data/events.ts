import { Event } from '@/types';

export const events: Event[] = [
  // Upcoming Events
  {
    id: 'event-1',
    title: 'IGDA Istanbul Meetup #45: Oyun Yapay Zekası',
    description: 'Bu ayki buluşmamızda oyunlarda yapay zeka kullanımını konuşacağız. Konuşmacılarımız farklı oyun türlerinde AI implementasyonlarını anlatacak.',
    date: new Date('2024-04-20'),
    time: '19:00',
    location: 'Kolektif House Levent',
    isOnline: false,
    registrationUrl: 'https://kommunity.com/igda-istanbul',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
  },
  {
    id: 'event-2',
    title: 'Unity Workshop: 2D Platformer Yapımı',
    description: 'Sıfırdan bir 2D platformer oyunu yapmayı öğrenin. 4 saatlik uygulamalı workshop\'ta kendi oyununuzu yapacaksınız.',
    date: new Date('2024-04-27'),
    time: '14:00',
    location: 'Online (Zoom)',
    isOnline: true,
    registrationUrl: 'https://kommunity.com/igda-istanbul',
    image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&h=400&fit=crop',
  },
  {
    id: 'event-3',
    title: 'Game Dev Night: Networking Gecesi',
    description: 'Oyun geliştiricilerin bir araya geldiği, networking odaklı rahat bir gece. Yeni insanlarla tanışın, projelerinizi paylaşın.',
    date: new Date('2024-05-03'),
    time: '20:00',
    location: 'Bira Fabrikası Kadıköy',
    isOnline: false,
    registrationUrl: 'https://kommunity.com/igda-istanbul',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop',
  },
  {
    id: 'event-4',
    title: 'IGDA Istanbul Game Jam 2024',
    description: '48 saatlik oyun geliştirme maratonu! Ekip kur, oyun yap, ödüller kazan. Tüm seviyelere açık.',
    date: new Date('2024-05-17'),
    time: '18:00',
    location: 'Bahçeşehir Üniversitesi',
    isOnline: false,
    registrationUrl: 'https://kommunity.com/igda-istanbul',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop',
  },
  // Past Events
  {
    id: 'event-5',
    title: 'IGDA Istanbul Meetup #44: Mobil Oyun Pazarlama',
    description: 'Mobil oyun pazarlamasının inceliklerini konuştuk. User acquisition, ASO ve reklam stratejileri.',
    date: new Date('2024-03-16'),
    time: '19:00',
    location: 'Kolektif House Levent',
    isOnline: false,
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=400&fit=crop',
  },
  {
    id: 'event-6',
    title: 'Unreal Engine 5 Masterclass',
    description: 'UE5\'in yeni özelliklerini keşfettiğimiz, Nanite ve Lumen odaklı 6 saatlik masterclass.',
    date: new Date('2024-03-02'),
    time: '10:00',
    location: 'Online (Discord)',
    isOnline: true,
    image: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=800&h=400&fit=crop',
  },
  {
    id: 'event-7',
    title: 'Portfolio Review Night',
    description: 'Sektör profesyonelleri portfolyonuzu değerlendirdi. Kariyer tavsiyeleri ve geri bildirimler aldık.',
    date: new Date('2024-02-24'),
    time: '19:00',
    location: 'Peak Games Ofis',
    isOnline: false,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
  },
  {
    id: 'event-8',
    title: 'Kadın Oyun Geliştiriciler Paneli',
    description: 'Sektördeki kadın geliştiricilerin deneyimlerini paylaştığı ilham verici bir panel.',
    date: new Date('2024-02-10'),
    time: '18:00',
    location: 'Google Türkiye Ofis',
    isOnline: false,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=400&fit=crop',
  },
];

// Get upcoming events
export function getUpcomingEvents(): Event[] {
  const now = new Date();
  return events
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

// Get past events
export function getPastEvents(): Event[] {
  const now = new Date();
  return events
    .filter((event) => new Date(event.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get next event
export function getNextEvent(): Event | undefined {
  const upcoming = getUpcomingEvents();
  return upcoming[0];
}

// Get event by ID
export function getEventById(id: string): Event | undefined {
  return events.find((event) => event.id === id);
}
