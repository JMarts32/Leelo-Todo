import { z } from 'zod';

export const Book = z.object({
  id: z.string(),
  name: z.string().nonempty(),
  basePrice: z.number().positive(),
  stock: z.number().positive().int(),
});
export type Book = z.infer<typeof Book>;
