'use client';

import { useLang } from '@/lib/hooks/use-lang';

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#0A1628] border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-syne font-bold text-white text-sm">
          N.U.A <span className="gradient-text">OS</span>
        </p>
        <p className="text-white/30 font-inter text-xs text-center">{t.footer.tagline}</p>
        <p className="text-white/30 font-inter text-xs">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
