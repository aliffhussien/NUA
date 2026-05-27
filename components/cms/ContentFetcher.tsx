import { getServerClient } from '@/lib/supabase/server';
import type { ContentBlockKey } from '@/lib/types/cms';

export async function fetchContentBlock(key: ContentBlockKey): Promise<Record<string, unknown> | null> {
  const client = getServerClient();
  if (!client) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = await (client.from('content_block') as any)
    .select('value')
    .eq('key', key)
    .single() as { data: { value: Record<string, unknown> } | null };

  return data?.value ?? null;
}
