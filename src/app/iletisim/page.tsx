'use client';

import { motion } from 'framer-motion';
import { Mail, Send, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function IletisimPage() {
  return (
    <div className="bg-cream-200 min-h-screen relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-32 left-[10%] w-16 h-16 border-2 border-igda/20"
        animate={{ rotate: [12, 18, 12], y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ rotate: 12 }}
      />
      <motion.div
        className="absolute top-48 right-[15%] w-8 h-8 bg-igda/10"
        animate={{ rotate: [45, 55, 45], scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ rotate: 45 }}
      />
      <motion.div
        className="absolute bottom-40 left-[20%] w-4 h-4 bg-igda/20"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-60 right-[25%] w-12 h-12 border-2 border-cream-500/40 rounded-full"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      {/* Hero Section */}
      <section className="pt-32 pb-8 relative z-10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span
              className="retro-badge mb-6 inline-block"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              İletişim
            </motion.span>

            <h1 className="font-display text-ink-700 mb-6">
              Bizimle{' '}
              <span className="text-igda relative">
                İletişime Geçin
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-igda/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
            </h1>

            <p className="font-mono text-ink-600 text-lg max-w-xl mx-auto leading-relaxed">
              Sorularınız, önerileriniz veya işbirliği teklifleriniz için
              bize ulaşın. Size en kısa sürede dönüş yapacağız.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Email Card Section */}
      <section className="py-16 relative z-10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-lg mx-auto"
          >
            {/* Main Email Card - Polaroid Style */}
            <div className="group relative">
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-2 bg-igda/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
              />

              {/* Card */}
              <motion.a
                href={`mailto:${CONTACT_INFO.email}`}
                className="relative block bg-white p-8 md:p-10 rounded-xl border-2 border-cream-400 shadow-lg transition-all duration-300 group-hover:border-igda/40 group-hover:shadow-xl"
                whileHover={{ y: -4, rotate: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Envelope icon with animation */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-igda to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    {/* Floating send icon */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-8 h-8 bg-cream-200 rounded-full flex items-center justify-center border-2 border-cream-400 shadow-md"
                      animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Send className="w-4 h-4 text-igda" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Title */}
                <h2 className="font-display text-ink-700 text-2xl text-center mb-3">
                  E-posta Gönderin
                </h2>

                {/* Description */}
                <p className="font-mono text-ink-500 text-sm text-center mb-6 leading-relaxed">
                  Her türlü soru ve öneriniz için bize yazın.
                  <br />
                  En kısa sürede yanıtlayacağız.
                </p>

                {/* Email Address Box */}
                <div className="bg-cream-100 border-2 border-dashed border-cream-400 rounded-lg p-4 text-center mb-6">
                  <p className="font-mono text-xs text-ink-400 uppercase tracking-wider mb-2">
                    E-posta Adresimiz
                  </p>
                  <p className="font-mono text-igda text-xl font-bold tracking-wide">
                    {CONTACT_INFO.email}
                  </p>
                </div>

                {/* CTA Button */}
                <motion.div
                  className="flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-igda to-red-700 text-white rounded-lg font-mono font-bold shadow-md group-hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  E-posta Gönder
                  <ArrowRight size={18} />
                </motion.div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-cream-400 group-hover:border-igda/40 transition-colors" />
                <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-cream-400 group-hover:border-igda/40 transition-colors" />
                <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-cream-400 group-hover:border-igda/40 transition-colors" />
                <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-cream-400 group-hover:border-igda/40 transition-colors" />
              </motion.a>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-md mx-auto mt-12 text-center"
          >
            <div className="flex justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-igda rounded-full animate-scale-pulse" />
              <div className="w-2 h-2 bg-igda/60 rounded-full animate-scale-pulse animation-delay-200" />
              <div className="w-2 h-2 bg-igda/30 rounded-full animate-scale-pulse animation-delay-400" />
            </div>
            <p className="font-mono text-ink-500 text-sm">
              Genellikle <span className="text-igda font-semibold">24 saat</span> içinde yanıt veriyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-300/50 to-transparent pointer-events-none" />
    </div>
  );
}
