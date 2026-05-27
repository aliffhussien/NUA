import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Lang = 'bm' | 'en';

interface LangStore {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}

export const useLangStore = create<LangStore>()(
  persist(
    (set, get) => ({
      lang: 'bm',
      setLang: (lang) => set({ lang }),
      toggle: () => set({ lang: get().lang === 'bm' ? 'en' : 'bm' }),
    }),
    { name: 'nua-lang' }
  )
);
