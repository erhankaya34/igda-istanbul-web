'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, GraduationCap, Briefcase, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    id: 'student',
    name: 'Student Plan',
    icon: GraduationCap,
    description: 'Öğrenciler için özel fiyatlandırma',
    code: '2025SHETurkiye',
    originalPrice: 30,
    discountedPrice: 14,
    features: ['1 Yıllık Üyelik', 'Tüm SIG Gruplarına Erişim', 'IGDA Etkinliklerine Katılım', 'Global Network'],
    badge: 'En Popüler',
    accentColor: 'from-emerald-500 to-teal-600',
    glowColor: 'rgba(16, 185, 129, 0.3)',
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    icon: Briefcase,
    description: 'Profesyonel geliştiriciler için',
    code: '2025Turkiye',
    originalPrice: 60,
    discountedPrice: 28,
    features: ['1 Yıllık Üyelik', 'Tüm SIG Gruplarına Erişim', 'IGDA Etkinliklerine Katılım', 'Global Network', 'GDC İndirimleri', 'Kariyer Kaynakları'],
    badge: 'Tam Özellik',
    accentColor: 'from-igda to-red-700',
    glowColor: 'rgba(177, 41, 36, 0.3)',
  },
];

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md bg-cream-200/80 hover:bg-cream-300 hover:scale-110 active:scale-95 transition-all duration-200"
      title="Kodu kopyala"
    >
      {copied ? (
        <Check className="w-4 h-4 text-emerald-600" />
      ) : (
        <Copy className="w-4 h-4 text-ink-500" />
      )}
    </button>
  );
}

export default function BizeKatilPage() {
  return (
    <div className="bg-cream-200 min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 relative overflow-hidden">
        {/* Animated background dots */}
        <div className="absolute inset-0 bg-dots opacity-30" />

        {/* Floating decorative elements */}
        <div
          className="absolute top-40 left-10 w-20 h-20 border-2 border-igda/20 hidden sm:block"
          style={{ animation: 'float-rotate 6s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-20 right-20 w-12 h-12 bg-igda/10 hidden sm:block"
          style={{ animation: 'float-scale 5s ease-in-out infinite' }}
        />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="retro-badge mb-6">
              IGDA Istanbul İndirimi
            </div>

            <h1 className="font-display text-ink-700 mb-6 flex items-center justify-center gap-3 flex-wrap">
              <Image
                src="/images/logos/original.png"
                alt="IGDA"
                width={180}
                height={60}
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto inline-block"
              />
              <span className="text-igda relative">
                &apos;ya Katılın
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-igda/30" />
              </span>
            </h1>
            <p className="font-mono text-ink-600 text-lg leading-relaxed max-w-xl mx-auto">
              IGDA (International Game Developers Association) üyesi olarak
              global oyun geliştirici topluluğunun bir parçası olun.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-8 sm:py-10 md:py-12 pb-16 sm:pb-20 md:pb-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: plan.glowColor }}
                />

                {/* Card */}
                <div className="relative bg-white rounded-xl border-2 border-cream-400 transition-all duration-300 group-hover:border-igda/30 group-hover:shadow-xl h-full flex flex-col overflow-hidden">
                  {/* Badge */}
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r ${plan.accentColor} text-white text-xs font-mono font-bold shadow-md`}>
                    {plan.badge}
                  </div>

                  {/* Header */}
                  <div className="p-4 sm:p-5 md:p-6 pb-3 sm:pb-4 border-b border-cream-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${plan.accentColor} flex items-center justify-center shadow-md`}>
                        <plan.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-ink-700 text-xl">{plan.name}</h3>
                        <p className="font-mono text-ink-500 text-xs">{plan.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Price section */}
                  <div className="p-4 sm:p-5 md:p-6 bg-cream-100/50">
                    <div className="flex items-baseline justify-center gap-3 mb-4">
                      <span className="font-mono text-ink-400 text-lg sm:text-xl md:text-2xl line-through decoration-igda/60 decoration-2">
                        ${plan.originalPrice}
                      </span>
                      <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink-700">
                        ${plan.discountedPrice}
                      </span>
                      <span className="font-mono text-ink-500 text-sm">/yıl</span>
                    </div>

                    {/* Discount percentage badge */}
                    <div className="flex justify-center mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold text-white bg-gradient-to-r ${plan.accentColor}`}>
                        %{Math.round((1 - plan.discountedPrice / plan.originalPrice) * 100)} İNDİRİM
                      </span>
                    </div>

                    {/* Discount code box */}
                    <div className="relative">
                      <div className="bg-cream-200 border-2 border-dashed border-cream-500 rounded-lg p-4 text-center">
                        <p className="font-mono text-ink-500 text-xs mb-2 uppercase tracking-wider">İndirim Kodu</p>
                        <p className="font-mono text-ink-800 text-base sm:text-lg md:text-xl font-bold tracking-wide select-all">
                          {plan.code}
                        </p>
                      </div>
                      <CopyButton code={plan.code} />
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-4 sm:p-5 md:p-6 pt-3 sm:pt-4 flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 font-mono text-sm text-ink-600"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${plan.accentColor}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href="https://igda.org/membership/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <button
                        className={`w-full py-4 px-6 rounded-lg font-mono font-bold text-white bg-gradient-to-r ${plan.accentColor} shadow-lg hover:shadow-xl hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2`}
                      >
                        IGDA&apos;ya Katıl
                        <ArrowRight size={18} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info note */}
          <p className="text-center font-mono text-ink-500 text-sm mt-8 max-w-lg mx-auto">
            İndirim kodunu IGDA üyelik sayfasında ödeme sırasında kullanabilirsiniz.
            Kodlar 2025 yılı boyunca geçerlidir.
          </p>
        </div>
      </section>
    </div>
  );
}
