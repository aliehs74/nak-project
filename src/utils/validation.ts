import { z } from 'zod';

export const signInSchema = z.object({
  userName: z.string().min(1, 'نام کاربری الزامی است'),
  password: z.string().min(1, 'رمز عبور الزامی است'),
});

export type SignInFormData = z.infer<typeof signInSchema>;