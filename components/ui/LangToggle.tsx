'use client';

import { useLang } from '@/lib/hooks/use-lang';

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-0.5 bg-white/8 border border-white/15 rounded-full p-0.5 text-xs font-inter font-semibold">
      <button
        onClick={() => setLang('bm')}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
          lang === 'bm'
            ? 'bg-[#00D4B8] text-[#0A1628]'
            : 'text-white/50 hover:text-white/80'
        }`}
        aria-label="Bahasa Malaysia"
      >
        BM
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
          lang === 'en'
            ? 'bg-[#00D4B8] text-[#0A1628]'
            : 'text-white/50 hover:text-white/80'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
