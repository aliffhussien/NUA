import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GradientText } from '@/components/ui/GradientText';
import { TeamMemberCard } from '@/components/ui/TeamMemberCard';
import { fetchContentBlock } from '@/components/cms/ContentFetcher';
import { SITE_CONFIG } from '@/lib/constants/site-config';

export async function Team() {
  const [aliffBio, abangBio] = await Promise.all([
    fetchContentBlock('team.aliff.bio'),
    fetchContentBlock('team.abang.bio'),
  ]);

  const aliff = {
    name: SITE_CONFIG.team.aliff.name,
    role: SITE_CONFIG.team.aliff.role,
    bio:
      (aliffBio?.text as string) ??
      SITE_CONFIG.team.aliff.bio,
  };

  const abang = {
    name: SITE_CONFIG.team.abang.name,
    role: SITE_CONFIG.team.abang.role,
    bio:
      (abangBio?.text as string) ??
      SITE_CONFIG.team.abang.bio,
  };

  return (
    <SectionWrapper id="team" className="bg-[#0D1E36]">
      <ScrollReveal className="text-center mb-14">
        <p className="text-[#00D4B8] text-sm font-inter font-semibold uppercase tracking-widest mb-3">
          The Team
        </p>
        <h2 className="font-syne font-bold text-4xl sm:text-5xl text-white">
          Built by people who <GradientText>live it.</GradientText>
        </h2>
        <p className="text-white/50 font-inter text-lg mt-4 max-w-xl mx-auto">
          One founder who builds the technology. One who validates it clinically.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <ScrollReveal direction="left">
          <TeamMemberCard
            name={aliff.name}
            role={aliff.role}
            bio={aliff.bio}
            initials="AH"
          />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.1}>
          <TeamMemberCard
            name={abang.name}
            role={abang.role}
            bio={abang.bio}
            initials="AB"
          />
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
