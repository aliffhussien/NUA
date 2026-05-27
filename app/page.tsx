import { NavBar } from '@/components/ui/NavBar';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { LivePreview } from '@/components/sections/LivePreview';
import { Pilot } from '@/components/sections/Pilot';
import { Team } from '@/components/sections/Team';
import { PitchDeck } from '@/components/sections/PitchDeck';
import { Waitlist } from '@/components/sections/Waitlist';
import { Footer } from '@/components/ui/Footer';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <LivePreview />
        <Pilot />
        <Team />
        <PitchDeck />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
