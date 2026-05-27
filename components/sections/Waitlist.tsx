'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Select, SelectItem } from '@heroui/react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GradientText } from '@/components/ui/GradientText';
import { WaitlistSchema, type WaitlistPayload } from '@/lib/types/api';

const ROLE_OPTIONS = [
  { value: 'caregiver', label: 'Caregiver / Nurse' },
  { value: 'clinician', label: 'Doctor / Clinician' },
  { value: 'hospital_admin', label: 'Hospital / Facility Admin' },
  { value: 'investor', label: 'Investor' },
  { value: 'other', label: 'Other' },
] as const;

export function Waitlist() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<WaitlistPayload>({
    resolver: zodResolver(WaitlistSchema),
  });

  async function onSubmit(data: WaitlistPayload) {
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error ?? 'Something went wrong');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Please try again.');
    }
  }

  return (
    <SectionWrapper id="waitlist" className="bg-[#0D1E36]">
      <div className="max-w-xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <p className="text-[#00D4B8] text-sm font-inter font-semibold uppercase tracking-widest mb-3">
            Join Us
          </p>
          <h2 className="font-syne font-bold text-4xl sm:text-5xl text-white mb-4">
            Be part of <GradientText>healthcare</GradientText> that works.
          </h2>
          <p className="text-white/55 font-inter text-lg">
            Get early access. Shape the product. Help us prove that proactive healthcare saves lives.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {status === 'success' ? (
            <div className="card-glass rounded-2xl p-10 text-center border border-[#00D4B8]/20">
              <div className="w-16 h-16 rounded-full bg-[#00D4B8]/15 flex items-center justify-center mx-auto mb-5">
                <span className="text-[#00D4B8] text-3xl">✓</span>
              </div>
              <h3 className="font-syne font-bold text-white text-xl mb-2">
                {"You're on the list."}
              </h3>
              <p className="text-white/60 font-inter text-sm">
                {"We'll reach out as we onboard the next wave. Thank you for believing in this."}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-glass rounded-2xl p-8 flex flex-col gap-5 border border-white/10"
            >
              <div>
                <Input
                  {...register('email')}
                  type="email"
                  label="Email address"
                  placeholder="you@example.com"
                  isRequired
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                  classNames={{
                    input: 'font-inter text-white bg-transparent',
                    inputWrapper: 'bg-white/5 border border-white/10 hover:border-white/20 focus-within:border-[#00D4B8]/50',
                    label: 'text-white/60 font-inter',
                    errorMessage: 'text-red-400 font-inter text-xs',
                  }}
                />
              </div>

              <div>
                <Input
                  {...register('name')}
                  type="text"
                  label="Your name (optional)"
                  placeholder="Ahmad Aliff"
                  classNames={{
                    input: 'font-inter text-white bg-transparent',
                    inputWrapper: 'bg-white/5 border border-white/10 hover:border-white/20 focus-within:border-[#00D4B8]/50',
                    label: 'text-white/60 font-inter',
                  }}
                />
              </div>

              <div>
                <Select
                  label="I am a..."
                  placeholder="Select your role"
                  onChange={(e) => {
                    const val = e.target.value as WaitlistPayload['role'];
                    if (val) setValue('role', val);
                  }}
                  classNames={{
                    trigger: 'bg-white/5 border border-white/10 hover:border-white/20 data-[focus=true]:border-[#00D4B8]/50',
                    label: 'text-white/60 font-inter',
                    value: 'font-inter text-white',
                    popoverContent: 'bg-[#0D1E36] border border-white/10',
                  }}
                >
                  {ROLE_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} className="font-inter text-white/80 hover:text-white">
                      {opt.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              {status === 'error' && (
                <p className="text-red-400 font-inter text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                  {errorMsg}
                </p>
              )}

              <Button
                type="submit"
                isLoading={status === 'loading'}
                className="bg-[#00D4B8] text-[#0A1628] font-syne font-bold text-base h-12 w-full glow-mint hover:bg-[#00B89E] transition-all duration-200"
              >
                {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
              </Button>

              <p className="text-white/30 font-inter text-xs text-center">
                No spam. No fluff. Just updates when it matters.
              </p>
            </form>
          )}
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
