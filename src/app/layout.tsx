import type { Metadata } from 'next';
import { Mr_Dafoe, Space_Mono, Poppins, Cinzel_Decorative, Crimson_Text } from 'next/font/google';
import dynamic from 'next/dynamic';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants';
import { ThemeProvider } from '@/contexts/ThemeContext';

// Dynamic import for GothicEffects to avoid SSR issues
const GothicEffects = dynamic(() => import('@/components/ui/GothicEffects'), {
  ssr: false,
});

// Mr Dafoe - Elegant script for "Merhaba biz"
const mrDafoe = Mr_Dafoe({
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
  weight: '400',
});

// Poppins - Modern, clean geometric sans for "IGDA Istanbul"
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// Space Mono - Monospace typewriter font
const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '700'],
});

// Cinzel Decorative - Gothic display font for dark theme
const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  variable: '--font-gothic-display',
  display: 'swap',
  weight: ['400', '700', '900'],
});

// Crimson Text - Gothic body font for dark theme
const crimsonText = Crimson_Text({
  subsets: ['latin'],
  variable: '--font-gothic-body',
  display: 'swap',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  icons: {
    icon: '/images/logos/header-logo.png',
    shortcut: '/images/logos/header-logo.png',
    apple: '/images/logos/header-logo.png',
  },
  keywords: [
    'IGDA',
    'Istanbul',
    'oyun geliştirme',
    'game development',
    'Türkiye',
    'topluluk',
    'community',
    'indie games',
    'oyun tasarımı',
  ],
  authors: [{ name: 'IGDA Istanbul' }],
  creator: 'IGDA Istanbul',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: SITE_CONFIG.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${mrDafoe.variable} ${poppins.variable} ${spaceMono.variable} ${cinzelDecorative.variable} ${crimsonText.variable}`}
    >
      <body className="font-mono antialiased bg-cream-200 text-ink-700 transition-colors duration-500">
        <ThemeProvider>
          <GothicEffects />
          <Navbar />
          <main className="min-h-screen relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
