import { z } from 'zod';

export const RegisterBook = z.object({
  name: z.string().nonempty().max(50),
  basePrice: z.number().positive(),
  stock: z.number().positive().int(),
  authors: z.array(z.string()),
  categories: z.array(z.string()),
});
export type RegisterBook = z.infer<typeof RegisterBook>;
