import { fetchContentBlock } from '@/components/cms/ContentFetcher';
import { PitchDeckDisplay } from '@/components/sections/PitchDeckDisplay';
import { SITE_CONFIG } from '@/lib/constants/site-config';
import type { PitchDeckValue } from '@/lib/types/cms';

export async function PitchDeck() {
  const cmsValue = await fetchContentBlock('pitchdeck.status');
  const pitchData = (cmsValue as PitchDeckValue | null) ?? null;

  const isLive = pitchData?.live ?? SITE_CONFIG.pitchDeck.status === 'live';
  const deckUrl = pitchData?.url ?? SITE_CONFIG.pitchDeck.url;

  return <PitchDeckDisplay isLive={isLive} deckUrl={deckUrl} />;
}
