'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { GradientText } from '@/components/ui/GradientText';
import { SITE_CONFIG } from '@/lib/constants/site-config';

export function Problem() {
  return (
    <SectionWrapper id="problem" className="bg-[#0A1628]">
      <ScrollReveal>
        <p className="text-[#00D4B8] text-sm font-inter font-semibold uppercase tracking-widest mb-3">
          The Problem
        </p>
        <h2 className="font-syne font-bold text-4xl sm:text-5xl text-white mb-16 max-w-2xl">
          {SITE_CONFIG.problem.headline.split('N.U.A')[0]}
          <GradientText>N.U.A</GradientText>
          {' changes that.'}
        </h2>
      </ScrollReveal>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {SITE_CONFIG.problem.stats.map((stat, i) => (
          <ScrollReveal key={stat.label} direction="up" delay={i * 0.1}>
            <div className="card-glass rounded-2xl p-8">
              <div className="font-syne font-bold text-4xl lg:text-5xl mb-3">
                <GradientText>
                  <AnimatedCounter
                    value={stat.value}
                    prefix={'prefix' in stat ? stat.prefix ?? '' : ''}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                </GradientText>
              </div>
              <p className="text-white/60 font-inter text-sm leading-relaxed">{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Reactive vs Proactive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal direction="left">
          <div className="rounded-2xl p-8 border border-[#FF4444]/20 bg-[#FF4444]/5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-[#FF4444]/20 flex items-center justify-center">
                <span className="text-[#FF4444] text-base">✕</span>
              </div>
              <h3 className="font-syne font-bold text-white text-lg">Reactive Healthcare</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Problems found hours or days too late',
                'Paper charts and manual checks',
                'Doctors notified after the crisis',
                'Data lives in silos — never connected',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-white/60 font-inter text-sm">
                  <span className="text-[#FF4444]/60 mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.1}>
          <div className="rounded-2xl p-8 border border-[#00D4B8]/20 bg-[#00D4B8]/5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-[#00D4B8]/20 flex items-center justify-center">
                <span className="text-[#00D4B8] text-base">✓</span>
              </div>
              <h3 className="font-syne font-bold text-white text-lg">N.U.A Proactive Loop</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Vitals monitored continuously, 24/7',
                'Instant alerts the moment readings deviate',
                'Doctor and caretaker notified in seconds',
                'All data FHIR-aligned and instantly shareable',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-white/80 font-inter text-sm">
                  <span className="text-[#00D4B8] mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
