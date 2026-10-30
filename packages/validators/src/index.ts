import { z } from 'zod';

export const phoneSchema = z.string().regex(/^\+?[1-9]\d{7,14}$/, 'Enter a valid phone number');

export const signupSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  phone: phoneSchema,
  email: z.email().optional(),
});
