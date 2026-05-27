import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GradientText } from '@/components/ui/GradientText';
import { SITE_CONFIG } from '@/lib/constants/site-config';

export function Solution() {
  const pillars = SITE_CONFIG.solution.pillars;

  return (
    <SectionWrapper id="solution" className="bg-[#0D1E36]">
      <ScrollReveal>
        <p className="text-[#00D4B8] text-sm font-inter font-semibold uppercase tracking-widest mb-3">
          The Solution
        </p>
        <h2 className="font-syne font-bold text-4xl sm:text-5xl text-white mb-12 max-w-2xl">
          <GradientText>One loop.</GradientText> Every life protected.
        </h2>
      </ScrollReveal>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Wide card */}
        <ScrollReveal className="md:col-span-2" delay={0}>
          <div className="card-glass rounded-2xl p-8 h-full flex flex-col gap-4 border border-[#00D4B8]/10 hover:border-[#00D4B8]/25 transition-colors duration-300">
            <span className="text-4xl">{pillars[0].icon}</span>
            <h3 className="font-syne font-bold text-white text-2xl">{pillars[0].title}</h3>
            <p className="text-white/60 font-inter text-base leading-relaxed flex-1">
              {pillars[0].description}
            </p>
            {/* Mock vital indicators */}
            <div className="flex gap-3 mt-2">
              {['HR', 'SpO₂', 'BP', 'Temp'].map((v) => (
                <div key={v} className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-lg bg-[#00D4B8]/15 border border-[#00D4B8]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#00D4B8]" />
                  </div>
                  <span className="text-white/40 text-xs font-inter">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="card-glass rounded-2xl p-8 h-full flex flex-col gap-4 hover:border-[#00D4B8]/20 border border-white/5 transition-colors duration-300">
            <span className="text-4xl">{pillars[1].icon}</span>
            <h3 className="font-syne font-bold text-white text-xl">{pillars[1].title}</h3>
            <p className="text-white/60 font-inter text-sm leading-relaxed flex-1">
              {pillars[1].description}
            </p>
            <div className="mt-auto">
              <span className="text-xs font-inter font-semibold text-[#00D4B8] bg-[#00D4B8]/10 border border-[#00D4B8]/20 rounded-full px-3 py-1">
                HL7 FHIR R4
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="card-glass rounded-2xl p-8 h-full flex flex-col gap-4 hover:border-[#FF4444]/20 border border-white/5 transition-colors duration-300">
            <span className="text-4xl">{pillars[2].icon}</span>
            <h3 className="font-syne font-bold text-white text-xl">{pillars[2].title}</h3>
            <p className="text-white/60 font-inter text-sm leading-relaxed flex-1">
              {pillars[2].description}
            </p>
            <div className="mt-auto flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4444] animate-pulse" />
              <span className="text-xs font-inter text-[#FF4444]/80">Real-time broadcast</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="md:col-span-2" delay={0.15}>
          <div className="card-glass rounded-2xl p-8 h-full flex flex-col gap-4 hover:border-[#00D4B8]/20 border border-white/5 transition-colors duration-300">
            <span className="text-4xl">{pillars[3].icon}</span>
            <h3 className="font-syne font-bold text-white text-2xl">{pillars[3].title}</h3>
            <p className="text-white/60 font-inter text-base leading-relaxed flex-1">
              {pillars[3].description}
            </p>
            <div className="mt-2 flex gap-4">
              {['All Residents', 'Active Alerts', 'Vitals History', 'Medications'].map((item) => (
                <div
                  key={item}
                  className="text-xs font-inter text-white/40 bg-white/5 rounded-lg px-3 py-1.5 border border-white/8"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
