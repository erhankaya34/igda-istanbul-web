'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { isValidEmail } from '@/lib/utils';

interface NewsletterProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Newsletter({ className, variant = 'dark' }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus('error');
      setMessage('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }

    setStatus('loading');

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setMessage('Bültenimize başarıyla abone oldunuz!');
      setEmail('');

      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    } catch {
      setStatus('error');
      setMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  const variants = {
    light: {
      input: 'bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white',
      button: 'bg-white text-primary-500 hover:bg-white/90',
    },
    dark: {
      input: 'bg-surface-800 border-surface-700 text-neutral-100 placeholder:text-neutral-500 focus:border-primary-500',
      button: 'bg-primary-500 text-white hover:bg-primary-600',
    },
  };

  return (
    <div className={cn('w-full max-w-md', className)}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta adresiniz"
            className={cn(
              'flex-1 px-4 py-3 rounded-button border outline-none transition-colors duration-200',
              variants[variant].input,
              status === 'error' && 'border-red-500'
            )}
            disabled={status === 'loading' || status === 'success'}
          />
          <motion.button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              'px-6 py-3 rounded-button font-medium transition-all duration-200 flex items-center gap-2',
              variants[variant].button,
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
          >
            <AnimatePresence mode="wait">
              {status === 'loading' && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"
                />
              )}
              {status === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                >
                  <Check size={20} />
                </motion.div>
              )}
              {(status === 'idle' || status === 'error') && (
                <motion.div
                  key="send"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                >
                  <Send size={20} />
                </motion.div>
              )}
            </AnimatePresence>
            <span className="hidden sm:inline">
              {status === 'success' ? 'Tamam' : 'Abone Ol'}
            </span>
          </motion.button>
        </div>
      </form>

      {/* Status Message */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              'mt-3 flex items-center gap-2 text-sm',
              status === 'success' && 'text-emerald-400',
              status === 'error' && 'text-red-400'
            )}
          >
            {status === 'error' && <AlertCircle size={16} />}
            {status === 'success' && <Check size={16} />}
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
