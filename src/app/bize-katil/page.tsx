'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
    <motion.button
      onClick={handleCopy}
      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md bg-cream-200/80 hover:bg-cream-300 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title="Kodu kopyala"
    >
      {copied ? (
        <Check className="w-4 h-4 text-emerald-600" />
      ) : (
        <Copy className="w-4 h-4 text-ink-500" />
      )}
    </motion.button>
  );
}

export default function BizeKatilPage() {
  return (
    <div className="bg-cream-200 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        {/* Animated background dots */}
        <div className="absolute inset-0 bg-dots opacity-30" />

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-40 left-10 w-20 h-20 border-2 border-igda/20 rotate-12"
          animate={{ rotate: [12, 18, 12], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-12 h-12 bg-igda/10 rotate-45"
          animate={{ rotate: [45, 55, 45], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="retro-badge mb-6"
            >
              IGDA Istanbul İndirimi
            </motion.div>

            <h1 className="font-display text-ink-700 mb-6 flex items-center justify-center gap-3 flex-wrap">
              <Image
                src="/images/logos/original.png"
                alt="IGDA"
                width={180}
                height={60}
                className="h-14 md:h-16 w-auto inline-block"
              />
              <span className="text-igda relative">
                &apos;ya Katılın
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-igda/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
            </h1>
            <p className="font-mono text-ink-600 text-lg leading-relaxed max-w-xl mx-auto">
              IGDA (International Game Developers Association) üyesi olarak
              global oyun geliştirici topluluğunun bir parçası olun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-12 pb-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <motion.div
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
                  <div className="p-6 pb-4 border-b border-cream-300">
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
                  <div className="p-6 bg-cream-100/50">
                    <div className="flex items-baseline justify-center gap-3 mb-4">
                      <span className="font-mono text-ink-400 text-2xl line-through decoration-igda/60 decoration-2">
                        ${plan.originalPrice}
                      </span>
                      <motion.span
                        className="font-display text-5xl font-bold text-ink-700"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                      >
                        ${plan.discountedPrice}
                      </motion.span>
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
                        <p className="font-mono text-ink-800 text-xl font-bold tracking-wide select-all">
                          {plan.code}
                        </p>
                      </div>
                      <CopyButton code={plan.code} />
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6 pt-4 flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                          className="flex items-center gap-3 font-mono text-sm text-ink-600"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${plan.accentColor}`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href="https://igda.org/membership/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <motion.button
                        className={`w-full py-4 px-6 rounded-lg font-mono font-bold text-white bg-gradient-to-r ${plan.accentColor} shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        IGDA&apos;ya Katıl
                        <ArrowRight size={18} />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center font-mono text-ink-500 text-sm mt-8 max-w-lg mx-auto"
          >
            İndirim kodunu IGDA üyelik sayfasında ödeme sırasında kullanabilirsiniz.
            Kodlar 2025 yılı boyunca geçerlidir.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
