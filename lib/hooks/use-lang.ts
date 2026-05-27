'use client';

import { useLangStore } from '@/lib/stores/lang-store';
import { content } from '@/lib/i18n/content';

export function useLang() {
  const { lang, toggle, setLang } = useLangStore();
  return { t: content[lang], lang, toggle, setLang };
}
