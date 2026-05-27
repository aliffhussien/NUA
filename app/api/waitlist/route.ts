import { NextRequest, NextResponse } from 'next/server';
import { WaitlistSchema } from '@/lib/types/api';
import { getServerClient } from '@/lib/supabase/server';
import type { WaitlistRow } from '@/lib/supabase/types';

export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = WaitlistSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const client = getServerClient();

  if (!client) {
    return NextResponse.json(
      { error: 'Waitlist service temporarily unavailable. Please try again later.' },
      { status: 503 }
    );
  }

  const row: Omit<WaitlistRow, 'id' | 'created_at'> = {
    email: parsed.data.email,
    name: parsed.data.name ?? null,
    role: parsed.data.role ?? null,
    source: 'website',
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (client.from('waitlist') as any).insert(row);

  if (error) {
    if ((error as { code?: string }).code === '23505') {
      return NextResponse.json(
        { error: 'This email is already on the waitlist.' },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: 'Failed to join waitlist.' }, { status: 500 });
  }

  return NextResponse.json({ message: "You're on the list!" }, { status: 200 });
}
