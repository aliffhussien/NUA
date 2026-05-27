import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GradientText } from '@/components/ui/GradientText';
import { SITE_CONFIG } from '@/lib/constants/site-config';

export function Pilot() {
  const { pilot } = SITE_CONFIG;

  return (
    <SectionWrapper id="pilot" className="bg-[#0A1628]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <p className="text-[#00D4B8] text-sm font-inter font-semibold uppercase tracking-widest mb-3">
            The Pilot
          </p>
          <h2 className="font-syne font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight">
            Proving it first. <br />
            <GradientText>Scaling from there.</GradientText>
          </h2>
          <p className="text-white/60 font-inter text-lg leading-relaxed mb-8">
            {pilot.description}
          </p>

          <div className="flex flex-wrap gap-4">
            {pilot.stats.map((stat) => (
              <div
                key={stat.label}
                className="card-glass rounded-xl px-5 py-4 text-center"
              >
                <p className="font-syne font-bold text-3xl text-white mb-1">{stat.value}</p>
                <p className="text-white/50 font-inter text-xs uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.1}>
          <div className="card-glass rounded-2xl p-8 border border-[#00D4B8]/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#00D4B8]/15 border border-[#00D4B8]/20 flex items-center justify-center">
                <span className="text-[#00D4B8] text-xl">🏥</span>
              </div>
              <div>
                <h3 className="font-syne font-semibold text-white">Live Pilot Facility</h3>
                <p className="text-[#00D4B8] text-sm font-inter">{pilot.facility}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-[#00D4B8]/5 rounded-xl border border-[#00D4B8]/10">
                <span className="text-[#00D4B8] mt-0.5">✓</span>
                <p className="text-white/70 font-inter text-sm">
                  Real vitals captured daily across 100+ residents
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#00D4B8]/5 rounded-xl border border-[#00D4B8]/10">
                <span className="text-[#00D4B8] mt-0.5">✓</span>
                <p className="text-white/70 font-inter text-sm">
                  Medical validation by Head of Klinik Kesihatan Tampoi
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#00D4B8]/5 rounded-xl border border-[#00D4B8]/10">
                <span className="text-[#00D4B8] mt-0.5">✓</span>
                <p className="text-white/70 font-inter text-sm">
                  Data collected → testimonials → product iteration cycle
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#00D4B8]/5 rounded-xl border border-[#00D4B8]/10">
                <span className="text-[#00D4B8] mt-0.5">✓</span>
                <p className="text-white/70 font-inter text-sm">
                  Building the evidence base for national scale
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
