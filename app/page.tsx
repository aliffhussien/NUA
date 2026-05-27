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
      <footer className="bg-[#0A1628] border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-syne font-bold text-white text-sm">
            N.U.A <span className="gradient-text">OS</span>
          </p>
          <p className="text-white/30 font-inter text-xs text-center">
            N.U.A OS — Built logically smart, from the core outward.
          </p>
          <p className="text-white/30 font-inter text-xs">
            © 2026 N.U.A OS. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
