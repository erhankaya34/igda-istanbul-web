import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin, Link2 } from 'lucide-react';
import { blogPosts, videoContent, podcastEpisodes, getContentBySlug } from '@/data/content';
import { formatDate } from '@/lib/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import VideoEmbed from '@/components/content/VideoEmbed';
import PodcastEmbed from '@/components/content/PodcastEmbed';
import BlogCard from '@/components/content/BlogCard';

// Generate static params for all content
export async function generateStaticParams() {
  const allContent = [
    ...blogPosts.map(p => ({ slug: p.slug })),
    ...videoContent.map(v => ({ slug: v.slug })),
    ...podcastEpisodes.map(p => ({ slug: p.slug })),
  ];
  return allContent;
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getContentBySlug(slug);

  if (!content) {
    return {
      title: 'İçerik Bulunamadı',
    };
  }

  const description = 'excerpt' in content ? content.excerpt : content.description;

  return {
    title: content.title,
    description,
    openGraph: {
      title: content.title,
      description,
      type: 'article',
      images: [
        {
          url: 'coverImage' in content ? content.coverImage : content.thumbnail,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getContentBySlug(slug);

  if (!content) {
    notFound();
  }

  // Determine content type
  const isBlog = 'excerpt' in content && 'content' in content;
  const isVideo = 'youtubeId' in content;
  const isPodcast = 'spotifyId' in content;

  // Get related content (same category, different content)
  const relatedContent = blogPosts
    .filter(p => p.category === content.category && p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-dark relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={'coverImage' in content ? content.coverImage : content.thumbnail}
            alt={content.title}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/60" />
        </div>

        <div className="container-custom relative z-10">
          {/* Back Link */}
          <AnimatedSection className="mb-8">
            <Link
              href="/icerikler"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft size={18} />
              Tüm İçerikler
            </Link>
          </AnimatedSection>

          <AnimatedSection className="max-w-4xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant={isBlog ? 'primary' : isVideo ? 'warning' : 'success'}>
                {isBlog ? 'Blog' : isVideo ? 'Video' : 'Podcast'}
              </Badge>
              <Badge variant="outline" className="border-white/20 text-white">
                {content.category}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-white mb-6">{content.title}</h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-white/50">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {formatDate(content.publishedAt)}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {isBlog
                  ? `${(content as any).readingTime} dk okuma`
                  : content.duration}
              </span>
              {isBlog && (content as any).author && (
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src={(content as any).author.image}
                      alt={(content as any).author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{(content as any).author.name}</span>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                {/* Video Embed */}
                {isVideo && (
                  <div className="mb-8">
                    <VideoEmbed
                      videoId={(content as any).youtubeId}
                      title={content.title}
                      thumbnail={content.thumbnail}
                    />
                  </div>
                )}

                {/* Podcast Embed */}
                {isPodcast && (
                  <div className="mb-8">
                    <PodcastEmbed
                      episodeId={(content as any).spotifyId}
                      title={content.title}
                    />
                  </div>
                )}

                {/* Blog Cover Image */}
                {isBlog && (
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
                    <Image
                      src={(content as any).coverImage}
                      alt={content.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}

                {/* Description / Content */}
                <div className="prose prose-lg max-w-none">
                  {isBlog ? (
                    <>
                      <p className="text-lg text-dark/70 mb-6">
                        {(content as any).excerpt}
                      </p>
                      <div className="text-dark/80 leading-relaxed">
                        {(content as any).content}
                      </div>
                    </>
                  ) : (
                    <p className="text-lg text-dark/70">
                      {content.description}
                    </p>
                  )}

                  {/* Show Notes for Podcast */}
                  {isPodcast && (content as any).showNotes && (
                    <div className="mt-8 p-6 bg-light rounded-xl">
                      <h3 className="text-lg font-display text-dark mb-4">
                        Bölüm Notları
                      </h3>
                      <p className="text-dark/70">
                        {(content as any).showNotes}
                      </p>
                    </div>
                  )}
                </div>

                {/* Tags */}
                {isBlog && (content as any).tags && (
                  <div className="mt-8 pt-8 border-t border-light-gray">
                    <h4 className="text-sm font-medium text-dark/50 uppercase tracking-wider mb-4">
                      Etiketler
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(content as any).tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-light rounded-full text-sm text-dark/60"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection animation="fadeRight">
                {/* Share */}
                <div className="bg-light rounded-2xl p-6 mb-8">
                  <h4 className="text-sm font-medium text-dark/50 uppercase tracking-wider mb-4">
                    Paylaş
                  </h4>
                  <div className="flex gap-3">
                    <button
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1DA1F2] text-white hover:opacity-80 transition-opacity"
                      aria-label="Twitter'da paylaş"
                    >
                      <Twitter size={18} />
                    </button>
                    <button
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A66C2] text-white hover:opacity-80 transition-opacity"
                      aria-label="LinkedIn'de paylaş"
                    >
                      <Linkedin size={18} />
                    </button>
                    <button
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-dark text-white hover:opacity-80 transition-opacity"
                      aria-label="Linki kopyala"
                    >
                      <Link2 size={18} />
                    </button>
                  </div>
                </div>

                {/* Author (for blog) */}
                {isBlog && (content as any).author && (
                  <div className="bg-light rounded-2xl p-6 mb-8">
                    <h4 className="text-sm font-medium text-dark/50 uppercase tracking-wider mb-4">
                      Yazar
                    </h4>
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={(content as any).author.image}
                          alt={(content as any).author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium text-dark">
                          {(content as any).author.name}
                        </h5>
                        <p className="text-sm text-dark/50">
                          {(content as any).author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Related Content */}
                {relatedContent.length > 0 && (
                  <div className="bg-light rounded-2xl p-6">
                    <h4 className="text-sm font-medium text-dark/50 uppercase tracking-wider mb-4">
                      İlgili İçerikler
                    </h4>
                    <div className="space-y-4">
                      {relatedContent.map((post) => (
                        <BlogCard key={post.id} post={post} variant="compact" />
                      ))}
                    </div>
                  </div>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
