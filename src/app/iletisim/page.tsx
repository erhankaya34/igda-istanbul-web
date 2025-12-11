'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import ContactForm from '@/components/shared/ContactForm';
import SocialLinks from '@/components/shared/SocialLinks';

const contactMethods = [
  {
    icon: Mail,
    title: 'E-posta',
    description: 'Sorularınız için bize e-posta gönderin',
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: MessageCircle,
    title: 'Discord',
    description: 'Toplulukla canlı iletişim kurun',
    value: 'Discord Sunucusu',
    href: 'https://discord.gg/igdaistanbul',
  },
  {
    icon: MapPin,
    title: 'Konum',
    description: 'Fiziksel etkinliklerimiz için',
    value: CONTACT_INFO.location,
    href: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function IletisimPage() {
  return (
    <div className="bg-cream-200 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-dots opacity-30" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <span className="retro-badge mb-4">İletişim</span>
            <h1 className="font-display text-ink-700 mb-6">
              Bizimle{' '}
              <span className="text-igda">İletişime Geçin</span>
            </h1>
            <p className="font-mono text-ink-600 text-lg max-w-xl leading-relaxed">
              Sorularınız, önerileriniz veya işbirliği teklifleriniz için bize
              ulaşın. Size en kısa sürede dönüş yapacağız.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-12">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-6"
          >
            {contactMethods.map((method) => (
              <motion.div key={method.title} variants={itemVariants}>
                {method.href ? (
                  <Link
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group block retro-card p-8 rounded-lg"
                  >
                    <div className="w-14 h-14 bg-igda/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-igda/20 transition-colors">
                      <method.icon className="w-7 h-7 text-igda" />
                    </div>
                    <h3 className="font-display text-ink-700 text-xl mb-2">
                      {method.title}
                    </h3>
                    <p className="font-mono text-ink-500 text-sm mb-4">
                      {method.description}
                    </p>
                    <p className="font-mono text-igda font-medium group-hover:underline">
                      {method.value}
                    </p>
                  </Link>
                ) : (
                  <div className="retro-card p-8 rounded-lg">
                    <div className="w-14 h-14 bg-igda/10 rounded-lg flex items-center justify-center mb-6">
                      <method.icon className="w-7 h-7 text-igda" />
                    </div>
                    <h3 className="font-display text-ink-700 text-xl mb-2">
                      {method.title}
                    </h3>
                    <p className="font-mono text-ink-500 text-sm mb-4">
                      {method.description}
                    </p>
                    <p className="font-mono text-ink-700 font-medium">
                      {method.value}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="retro-badge mb-4">Mesaj Gönderin</span>
              <h2 className="font-display text-ink-700 mb-6">İletişim Formu</h2>
              <p className="font-mono text-ink-600 mb-8 leading-relaxed">
                Aşağıdaki formu doldurarak bize mesaj gönderebilirsiniz.
                En kısa sürede size dönüş yapacağız.
              </p>
              <ContactForm />
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:pl-8"
            >
              {/* Quick Contact */}
              <div className="bg-ink-700 rounded-lg p-8 mb-8">
                <h3 className="font-display text-cream-200 text-xl mb-6">
                  Hızlı İletişim
                </h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-igda/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-igda" />
                    </div>
                    <div>
                      <p className="font-mono text-cream-200/50 text-sm">E-posta</p>
                      <p className="font-mono text-cream-200">{CONTACT_INFO.email}</p>
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/igdaistanbul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#5865F2]/20 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-[#5865F2]" />
                    </div>
                    <div>
                      <p className="font-mono text-cream-200/50 text-sm">Discord</p>
                      <p className="font-mono text-cream-200">Sunucuya Katıl</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="retro-card rounded-lg p-8 mb-8">
                <h3 className="font-display text-ink-700 text-xl mb-6">
                  Sosyal Medya
                </h3>
                <p className="font-mono text-ink-600 mb-6 text-sm leading-relaxed">
                  Bizi sosyal medyada takip edin, etkinliklerden ve içeriklerden
                  haberdar olun.
                </p>
                <SocialLinks size="md" />
              </div>

              {/* FAQ Teaser */}
              <div className="p-6 bg-igda/5 rounded-lg border-2 border-igda/20">
                <h4 className="font-display text-ink-700 mb-2">
                  Sıkça Sorulan Sorular
                </h4>
                <p className="font-mono text-ink-600 text-sm mb-4 leading-relaxed">
                  Etkinlikler, üyelik ve topluluk hakkında merak ettikleriniz
                  için Discord sunucumuzda #sss kanalını ziyaret edebilirsiniz.
                </p>
                <Link
                  href="https://discord.gg/igdaistanbul"
                  target="_blank"
                  className="font-mono text-igda text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  Discord'da SSS <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-cream-300/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-ink-700">Hangi Konuda Yardımcı Olabiliriz?</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: 'Etkinlik Bilgisi',
                description: "Yaklaşan etkinlikler, workshop'lar ve meetup'lar hakkında bilgi",
              },
              {
                title: 'Sponsorluk',
                description: 'Etkinliklerimize ve topluluğumuza sponsor olmak için',
              },
              {
                title: 'İşbirliği',
                description: 'Ortak etkinlik, içerik veya proje önerileri için',
              },
              {
                title: 'Konuşmacı Olmak',
                description: 'Etkinliklerimizde konuşmacı olarak yer almak için',
              },
            ].map((topic) => (
              <motion.div key={topic.title} variants={itemVariants}>
                <div className="retro-card p-6 rounded-lg h-full">
                  <h3 className="font-display text-ink-700 mb-2">{topic.title}</h3>
                  <p className="font-mono text-ink-600 text-sm">{topic.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ink-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-dots opacity-10" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-igda/20 mb-6">
              <Send className="w-8 h-8 text-igda" />
            </div>
            <h2 className="font-display text-cream-200 mb-6">
              Topluluğa{' '}
              <span className="text-igda">Hemen Katılın</span>
            </h2>
            <p className="font-mono text-cream-200/60 mb-8 leading-relaxed">
              Discord sunucumuzda binlerce oyun geliştiriciyle tanışın,
              sorularınıza anında cevap alın.
            </p>
            <Link href="https://discord.gg/igdaistanbul" target="_blank">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Discord'a Katıl
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
