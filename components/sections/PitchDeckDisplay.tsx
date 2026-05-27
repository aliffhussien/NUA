'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GradientText } from '@/components/ui/GradientText';
import { useLang } from '@/lib/hooks/use-lang';

interface PitchDeckDisplayProps {
  isLive: boolean;
  deckUrl: string;
}

export function PitchDeckDisplay({ isLive, deckUrl }: PitchDeckDisplayProps) {
  const { t } = useLang();
  const pd = t.pitchDeck;

  return (
    <SectionWrapper id="pitchdeck" className="bg-[#0A1628]">
      <ScrollReveal className="text-center">
        <p className="text-[#00D4B8] text-sm font-inter font-semibold uppercase tracking-widest mb-3">
          {pd.badge}
        </p>
        <h2 className="font-syne font-bold text-4xl sm:text-5xl text-white mb-6">
          {pd.headline} <GradientText>{pd.headlineAccent}</GradientText>
        </h2>

        <div className="max-w-md mx-auto card-glass rounded-2xl p-10 flex flex-col items-center gap-6 border border-white/10">
          {isLive && deckUrl ? (
            <>
              <div className="w-16 h-16 rounded-2xl bg-[#00D4B8]/15 border border-[#00D4B8]/20 flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
              <div className="text-center">
                <h3 className="font-syne font-bold text-white text-xl mb-2">{pd.liveTitle}</h3>
                <p className="text-white/55 font-inter text-sm">{pd.liveDesc}</p>
              </div>
              <a
                href={deckUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00D4B8] text-[#0A1628] font-syne font-bold px-6 py-3 rounded-xl hover:bg-[#00B89E] transition-colors"
              >
                {pd.liveBtn}
              </a>
            </>
          ) : (
            <>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="text-3xl">🔒</span>
              </div>
              <div className="text-center">
                <h3 className="font-syne font-bold text-white text-xl mb-2">{pd.comingSoonTitle}</h3>
                <p className="text-white/55 font-inter text-sm leading-relaxed">{pd.comingSoonDesc}</p>
              </div>
              <span className="text-xs font-inter font-semibold text-white/40 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 uppercase tracking-wider">
                {pd.comingSoonBadge}
              </span>
            </>
          )}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
