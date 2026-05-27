import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GradientText } from '@/components/ui/GradientText';
import { SITE_CONFIG } from '@/lib/constants/site-config';

export function HowItWorks() {
  const steps = SITE_CONFIG.howItWorks.steps;

  return (
    <SectionWrapper id="how-it-works" className="bg-[#0A1628]">
      <ScrollReveal>
        <p className="text-[#00D4B8] text-sm font-inter font-semibold uppercase tracking-widest mb-3">
          How It Works
        </p>
        <h2 className="font-syne font-bold text-4xl sm:text-5xl text-white mb-16 max-w-2xl">
          Four steps. <GradientText>One loop.</GradientText> Every life covered.
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#00D4B8]/30 to-transparent" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} direction="up" delay={i * 0.1}>
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <div className="w-16 h-16 rounded-2xl bg-[#00D4B8]/10 border border-[#00D4B8]/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-syne font-bold text-[#00D4B8] text-xl">{step.number}</span>
                  </div>
                  <div className="lg:hidden">
                    <h3 className="font-syne font-bold text-white text-lg">{step.title}</h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden lg:block font-syne font-bold text-white text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/55 font-inter text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-7 top-16 w-px h-8 bg-gradient-to-b from-[#00D4B8]/30 to-transparent" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Loop call-out */}
      <ScrollReveal delay={0.3}>
        <div className="mt-16 card-glass rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-[#00D4B8]/15 flex items-center justify-center flex-shrink-0">
            <span className="text-[#00D4B8] text-xl">↺</span>
          </div>
          <div>
            <p className="font-syne font-semibold text-white">
              This loop never stops — it runs 24/7 for every resident.
            </p>
            <p className="text-white/50 font-inter text-sm mt-1">
              From a single resident to 100+, the architecture scales without change.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
