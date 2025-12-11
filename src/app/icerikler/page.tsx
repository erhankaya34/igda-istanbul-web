'use client';

import Link from 'next/link';
import { Headphones, ExternalLink } from 'lucide-react';

// İçerik/Etkinlik verileri
const seriesContent = [
  {
    id: 1,
    series: 'Konudan Bağımsız',
    episodeNumber: 1,
    guest: 'Darren Korb',
    guestTitle: 'Composer & Audio Director at Supergiant Games',
    description: '"Konudan Bağımsız", her bölümde bambaşka dünyalara açılan; yaratıcılığı, üretim süreçlerini ve insanların tutkularını özgürce konuştuğu bir bağımsız oyun sohbetleri serisi. Serimizin ilk bölümüne konuk olan Darren Korb ile yaptığımız söyleşiye YouTube ve Spotify başta olmak üzere birçok platformdan ulaşabilirsiniz.',
    platforms: [
      {
        name: 'YouTube',
        icon: 'youtube',
        url: 'https://youtube.com/@igdaistanbul', // Placeholder - güncellenecek
        color: '#FF0000',
      },
      {
        name: 'Spotify',
        icon: 'spotify',
        url: 'https://open.spotify.com/show/igdaistanbul', // Placeholder - güncellenecek
        color: '#1DB954',
      },
    ],
    publishedAt: '2024-12-01',
    tags: ['Röportaj', 'Müzik', 'Hades', 'Bastion'],
  },
];


// Platform icon component
function PlatformIcon({ platform }: { platform: string }) {
  if (platform === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    );
  }
  if (platform === 'spotify') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    );
  }
  return null;
}

export default function IceriklerPage() {
  return (
    <div className="bg-cream-200 min-h-screen">
      {/* Content Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-igda/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-igda/3 rounded-full blur-2xl" />

        <div className="container-custom relative z-10">
          <div className="space-y-8">
            {seriesContent.map((content) => (
              <article
                key={content.id}
                className="group relative"
              >
                {/* Main Card */}
                <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-cream-400/50 hover:border-igda/30 transition-colors duration-300">
                  {/* Episode number as decorative background */}
                  <div className="absolute right-4 top-4 font-display text-[6rem] md:text-[8rem] font-black text-cream-300/40 leading-none select-none pointer-events-none">
                    #{content.episodeNumber}
                  </div>

                  <div className="relative p-8 md:p-12">
                    {/* Top row - Series & Tags */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-igda text-white font-mono text-sm font-medium rounded-full">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        {content.series}
                      </span>
                      {content.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-cream-300/50 text-ink-600 font-mono text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Guest Info */}
                    <div className="mb-8">
                      <h2 className="font-display text-ink-700 text-3xl md:text-4xl lg:text-5xl font-bold mb-3 group-hover:text-igda transition-colors">
                        {content.guest}
                      </h2>
                      <p className="font-mono text-ink-500 text-sm">
                        {content.guestTitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-mono text-ink-600 text-base leading-relaxed mb-10 max-w-3xl">
                      {content.description}
                    </p>

                    {/* Platform Links */}
                    <div className="flex flex-wrap gap-4">
                      {content.platforms.map((platform) => (
                        <Link
                          key={platform.name}
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center gap-3 px-6 py-3 rounded-xl font-mono text-sm font-medium transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: `${platform.color}15`,
                            color: platform.color,
                            border: `2px solid ${platform.color}30`,
                          }}
                        >
                          <PlatformIcon platform={platform.icon} />
                          <span>{platform.name}'da Dinle</span>
                          <ExternalLink size={14} className="opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>

                    {/* Date */}
                    <div className="absolute bottom-8 right-8 md:right-12 font-mono text-ink-400 text-xs">
                      {new Date(content.publishedAt).toLocaleDateString('tr-TR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="h-1 bg-gradient-to-r from-igda via-igda/50 to-transparent" />
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-cream-300/30 border-2 border-dashed border-cream-400">
              <div className="w-16 h-16 rounded-full bg-igda/10 flex items-center justify-center mb-4">
                <Headphones className="w-8 h-8 text-igda" />
              </div>
              <h3 className="font-display text-ink-700 text-xl mb-2">
                Daha Fazla İçerik Yolda
              </h3>
              <p className="font-mono text-ink-500 text-sm max-w-md">
                Yeni bölümler ve içerikler için bizi takip etmeye devam edin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
