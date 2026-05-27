export type ContentBlockKey =
  | 'hero.headline'
  | 'hero.tagline'
  | 'hero.cta'
  | 'problem.headline'
  | 'solution.headline'
  | 'pilot.headline'
  | 'pilot.description'
  | 'team.aliff.name'
  | 'team.aliff.role'
  | 'team.aliff.bio'
  | 'team.abang.name'
  | 'team.abang.role'
  | 'team.abang.bio'
  | 'pitchdeck.status'
  | 'footer.tagline';

export interface ContentBlock {
  key: ContentBlockKey;
  value: Record<string, unknown>;
}

export interface PitchDeckValue {
  text: string;
  live: boolean;
  url: string;
}
