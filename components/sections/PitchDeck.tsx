import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GradientText } from '@/components/ui/GradientText';
import { fetchContentBlock } from '@/components/cms/ContentFetcher';
import { SITE_CONFIG } from '@/lib/constants/site-config';
import type { PitchDeckValue } from '@/lib/types/cms';

export async function PitchDeck() {
  const cmsValue = await fetchContentBlock('pitchdeck.status');
  const pitchData = (cmsValue as PitchDeckValue | null) ?? null;

  const isLive = pitchData?.live ?? SITE_CONFIG.pitchDeck.status === 'live';
  const deckUrl = pitchData?.url ?? SITE_CONFIG.pitchDeck.url;

  return (
    <SectionWrapper id="pitchdeck" className="bg-[#0A1628]">
      <ScrollReveal className="text-center">
        <p className="text-[#00D4B8] text-sm font-inter font-semibold uppercase tracking-widest mb-3">
          Investor Materials
        </p>
        <h2 className="font-syne font-bold text-4xl sm:text-5xl text-white mb-6">
          The <GradientText>Pitch Deck</GradientText>
        </h2>

        <div className="max-w-md mx-auto card-glass rounded-2xl p-10 flex flex-col items-center gap-6 border border-white/10">
          {isLive && deckUrl ? (
            <>
              <div className="w-16 h-16 rounded-2xl bg-[#00D4B8]/15 border border-[#00D4B8]/20 flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
              <div className="text-center">
                <h3 className="font-syne font-bold text-white text-xl mb-2">Pitch Deck Available</h3>
                <p className="text-white/55 font-inter text-sm">
                  Full deck with pilot data, market analysis, and roadmap.
                </p>
              </div>
              <a
                href={deckUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00D4B8] text-[#0A1628] font-syne font-bold px-6 py-3 rounded-xl hover:bg-[#00B89E] transition-colors"
              >
                View Deck →
              </a>
            </>
          ) : (
            <>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="text-3xl">🔒</span>
              </div>
              <div className="text-center">
                <h3 className="font-syne font-bold text-white text-xl mb-2">Coming Soon</h3>
                <p className="text-white/55 font-inter text-sm leading-relaxed">
                  The deck will be published after pilot data is collected. We build with proof,
                  not promises.
                </p>
              </div>
              <span className="text-xs font-inter font-semibold text-white/40 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 uppercase tracking-wider">
                Available after pilot
              </span>
            </>
          )}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
