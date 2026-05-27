'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { GradientText } from '@/components/ui/GradientText';
import { useLang } from '@/lib/hooks/use-lang';

export function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A1628] bg-mesh pt-16"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,184,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4B8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-flex items-center gap-2 bg-[#00D4B8]/10 border border-[#00D4B8]/20 text-[#00D4B8] text-xs font-inter font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4B8] animate-pulse" />
            {h.badge}
          </span>
        </motion.div>

        <motion.h1
          className="font-syne font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {h.headline}
          <br />
          <GradientText>{h.headlineAccent}</GradientText>
        </motion.h1>

        <motion.p
          className="font-inter text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {h.tagline}
        </motion.p>

        {/* Alert preview card — human touch */}
        <motion.div
          className="max-w-sm mx-auto mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className="card-glass rounded-2xl p-4 border border-[#FF4444]/20 text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FF4444]/15 border border-[#FF4444]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <motion.span
                  className="text-[#FF4444] text-sm"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  ⚠
                </motion.span>
              </div>
              <div>
                <p className="text-white/90 font-inter text-sm font-medium">
                  Hamdan Ibrahim — SpO₂ turun ke 88%
                </p>
                <p className="text-white/45 font-inter text-xs mt-0.5">
                  Amaran dihantar kepada Dr. Abang · 2 saat lalu
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <Button
            as="a"
            href="#waitlist"
            size="lg"
            className="bg-[#00D4B8] text-[#0A1628] font-syne font-bold text-base px-8 h-12 glow-mint hover:bg-[#00B89E] transition-all duration-200"
          >
            {h.cta}
          </Button>
          <Button
            as="a"
            href="#preview"
            size="lg"
            variant="bordered"
            className="border-white/20 text-white/80 hover:text-white hover:border-white/40 font-inter text-base h-12 px-8 transition-all duration-200"
          >
            {h.ctaSecondary}
          </Button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1628] to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-white/50 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
