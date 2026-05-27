import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GradientText } from '@/components/ui/GradientText';
import { PrototypeDashboard } from '@/components/prototype/PrototypeDashboard';

export function LivePreview() {
  return (
    <SectionWrapper id="preview" className="bg-[#0D1E36]" innerClassName="">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-[#00D4B8] text-sm font-inter font-semibold uppercase tracking-widest mb-3">
            Live Preview
          </p>
          <h2 className="font-syne font-bold text-4xl sm:text-5xl text-white mb-4">
            Feel the product. <GradientText>Right now.</GradientText>
          </h2>
          <p className="text-white/55 font-inter text-lg mb-8 max-w-xl">
            This is what caretakers see — every resident, every vital, every alert. In real time.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {/* Demo label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-inter font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Interactive Preview — Sample Data
            </span>
            <span className="text-white/30 text-xs font-inter">
              Click a resident to see their vitals
            </span>
          </div>

          <PrototypeDashboard />
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
