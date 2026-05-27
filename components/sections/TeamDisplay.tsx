'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GradientText } from '@/components/ui/GradientText';
import { TeamMemberCard } from '@/components/ui/TeamMemberCard';
import { useLang } from '@/lib/hooks/use-lang';

interface TeamDisplayProps {
  cmsAliffBio: string | null;
  cmsAbangBio: string | null;
}

export function TeamDisplay({ cmsAliffBio, cmsAbangBio }: TeamDisplayProps) {
  const { t } = useLang();
  const team = t.team;

  const aliff = {
    name: team.aliff.name,
    role: team.aliff.role,
    bio: cmsAliffBio ?? team.aliff.bio,
  };

  const abang = {
    name: team.abang.name,
    role: team.abang.role,
    bio: cmsAbangBio ?? team.abang.bio,
  };

  return (
    <SectionWrapper id="team" className="bg-[#0D1E36]">
      <ScrollReveal className="text-center mb-14">
        <p className="text-[#00D4B8] text-sm font-inter font-semibold uppercase tracking-widest mb-3">
          {team.badge}
        </p>
        <h2 className="font-syne font-bold text-4xl sm:text-5xl text-white">
          {team.headline} <GradientText>{team.headlineAccent}</GradientText>
        </h2>
        <p className="text-white/50 font-inter text-lg mt-4 max-w-xl mx-auto">{team.sub}</p>
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
