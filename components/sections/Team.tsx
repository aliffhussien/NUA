import { fetchContentBlock } from '@/components/cms/ContentFetcher';
import { TeamDisplay } from '@/components/sections/TeamDisplay';

export async function Team() {
  const [aliffBio, abangBio] = await Promise.all([
    fetchContentBlock('team.aliff.bio'),
    fetchContentBlock('team.abang.bio'),
  ]);

  return (
    <TeamDisplay
      cmsAliffBio={(aliffBio?.text as string) ?? null}
      cmsAbangBio={(abangBio?.text as string) ?? null}
    />
  );
}
