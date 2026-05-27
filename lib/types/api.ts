import { z } from 'zod';

export const WaitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(1).optional(),
  role: z.enum(['caregiver', 'clinician', 'hospital_admin', 'investor', 'other']).optional(),
});

export type WaitlistPayload = z.infer<typeof WaitlistSchema>;

export interface ApiResponse<T = null> {
  message: string;
  data?: T;
  error?: string;
}
